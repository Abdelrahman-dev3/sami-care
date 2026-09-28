<?php
namespace App\Services;
use App\Models\User;
use App\Models\Setting;
use App\Models\LoyaltyPoint;
use App\Models\LoyaltyPointTransaction;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
class ReferralService
{
    public function normalize(?string $code): string { return strtoupper(trim($code ?? '')); }
    public function owner(?string $code): ?User {
        $code = $this->normalize($code);
        if ($code === '') return null;
        $owner = User::active()->where('referral_code', $code)->first();
        if (!$owner) throw ValidationException::withMessages(['referral_code'=>__('referral.invalid')]);
        return $owner;
    }
    public function award(User $member, ?string $code): void {
        if ($this->normalize($code) === '') return;
        DB::transaction(function () use ($member, $code) {
            $newUser = User::whereKey($member->id)->lockForUpdate()->firstOrFail();
            if ($newUser->referral_rewarded_at) return;
            $owner = $this->owner($code);
            if ($owner->id === $newUser->id) throw ValidationException::withMessages(['referral_code'=>__('referral.invalid')]);
            // Serialize awards to one inviter, including creation of their first balance row.
            User::whereKey($owner->id)->lockForUpdate()->firstOrFail();
            $points = max(0, min(1000000, (int) Setting::get('referral_points', 0)));
            if ($points > 0) {
                $balance = LoyaltyPoint::where('user_id', $owner->id)->lockForUpdate()->first();
                if (!$balance) $balance = LoyaltyPoint::create(['user_id'=>$owner->id, 'points'=>0]);
                $balance->increment('points', $points);
                $balance->refresh();
                LoyaltyPointTransaction::create([
                    'user_id'=>$owner->id, 'action'=>'add', 'points'=>$points,
                    'balance_after'=>$balance->points, 'source'=>'referral', 'source_id'=>$newUser->id,
                    'meta'=>['referred_user_id'=>$newUser->id],
                ]);
            }
            $newUser->forceFill(['referred_by_user_id'=>$owner->id, 'referral_rewarded_at'=>now()])->save();
        });
    }
}
