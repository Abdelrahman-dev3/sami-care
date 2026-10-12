<?php
namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use App\Services\CustomerMessages;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class CustomerMessagesController extends Controller
{
    public function index(CustomerMessages $messages)
    {
        $campaigns = DB::table('customer_message_campaigns')->orderByDesc('id')->paginate(20);
        $stats = DB::table('customer_message_deliveries')->whereIn('campaign_id', $campaigns->pluck('id'))
            ->selectRaw('campaign_id, status, COUNT(*) as total')->groupBy('campaign_id', 'status')->get()->groupBy('campaign_id');
        return view('backend.customer-messages.index', [
            'customers' => $messages->customers()->orderBy('first_name')->get(['id', 'first_name', 'last_name', 'mobile']),
            'campaigns' => $campaigns, 'stats' => $stats,
        ]);
    }

    public function store(Request $request, CustomerMessages $messages)
    {
        $data = $request->validate([
            'occasion' => 'required|string|max:255', 'message' => 'required|string|max:4000',
            'audience' => 'required|in:all,selected', 'send_at' => 'nullable|date|after_or_equal:now',
            'customer_ids' => 'required_if:audience,selected|array',
            'customer_ids.*' => ['integer', 'distinct', Rule::exists('users', 'id')],
        ]);
        $customers = $messages->customers();
        if ($data['audience'] === 'selected') {
            $customers->whereIn('users.id', $data['customer_ids']);
            if ($customers->count() !== count($data['customer_ids'])) {
                return back()->withErrors(['customer_ids' => 'يجب اختيار عملاء نشطين فقط.'])->withInput();
            }
        }
        $messages->create($data['occasion'], $data['message'], $data['send_at'] ?? now(), $customers);
        return back()->with('success', 'تمت جدولة الرسائل؛ سيتم الإرسال عند تشغيل المجدول.');
    }

    public function birthdaySettings(Request $request)
    {
        $data = $request->validate(['birthday_message' => 'required|string|max:4000', 'enabled' => 'nullable|boolean']);
        Setting::set('birthday_messages_enabled', $request->boolean('enabled') ? '1' : '0');
        Setting::set('birthday_message', $data['birthday_message']);
        return back()->with('success', 'تم حفظ إعدادات رسائل عيد الميلاد.');
    }
}
