<?php
// Isolated logic tests: database/model doubles; not a concurrency or Laravel integration test.
namespace Illuminate\Validation { class ValidationException extends \RuntimeException { public static function withMessages($messages) { return new self(json_encode($messages)); } } }
namespace Illuminate\Support\Facades { class DB { public static function transaction($callback) { $snapshot=serialize([\App\Models\User::$rows,\App\Models\LoyaltyPoint::$rows,\App\Models\LoyaltyPointTransaction::$rows]);try { return $callback(); } catch (\Throwable $e) { [\App\Models\User::$rows,\App\Models\LoyaltyPoint::$rows,\App\Models\LoyaltyPointTransaction::$rows]=unserialize($snapshot);throw $e; } } } }
namespace App\Models {
class Query {
    private $class; private $filters=[];
    public function __construct($class) { $this->class=$class; }
    public function where($key,$value) { $this->filters[$key]=$value;return $this; }
    public function lockForUpdate() { return $this; }
    public function first() { foreach ($this->class::$rows as $row) { $ok=true;foreach($this->filters as $key=>$value)if(($row->$key??null)!=$value)$ok=false;if($ok)return $row; }return null; }
    public function firstOrFail() { return $this->first()??throw new \RuntimeException('Not found'); }
}
class User { public static $rows=[];public $id,$referral_code,$status=1,$is_banned=0,$referral_rewarded_at=null,$referred_by_user_id=null;
    public function __construct($id,$code) {$this->id=$id;$this->referral_code=$code;self::$rows[$id]=$this;}
    public static function whereKey($id) { return (new Query(self::class))->where('id',$id); }
    public static function active() { return (new Query(self::class))->where('status',1)->where('is_banned',0); }
    public function forceFill($values) {foreach($values as $key=>$value)$this->$key=$value;return $this;}
    public function save() { self::$rows[$this->id]=$this; }
}
class Setting {public static $points=25;public static function get($key,$default=null){return self::$points;}}
class LoyaltyPoint { public static $rows=[];public $user_id,$points;
    public static function where($key,$value){return (new Query(self::class))->where($key,$value);}
    public static function create($values){$row=new self;foreach($values as $key=>$value)$row->$key=$value;self::$rows[$row->user_id]=$row;return $row;}
    public function increment($key,$n){$this->$key+=$n;}
    public function refresh(){}
}
class LoyaltyPointTransaction {public static $rows=[],$fail=false;public static function create($data){if(self::$fail)throw new \RuntimeException('Ledger failure');self::$rows[]=$data;}}
}
namespace {
function __($key){return $key;}function now(){return '2026-09-28 12:00:00';}
require __DIR__.'/../../app/Services/ReferralService.php';
function check($ok,$label){if(!$ok)throw new \RuntimeException($label);echo "PASS: $label\n";}
function invalid($callback){try{$callback();}catch(\Illuminate\Validation\ValidationException $e){return true;}return false;}
$s=new \App\Services\ReferralService;$owner=new \App\Models\User(1,'SCOWNER');$member=new \App\Models\User(2,'SCMEMBER');
$s->award($member,' scowner ');check(\App\Models\LoyaltyPoint::$rows[1]->points===25,'Only inviter receives configured reward');check(!isset(\App\Models\LoyaltyPoint::$rows[2]),'New member is not rewarded');check(count(\App\Models\LoyaltyPointTransaction::$rows)===1,'Ledger entry created');
$s->award($member,'SCOWNER');check(\App\Models\LoyaltyPoint::$rows[1]->points===25,'Repeated award is idempotent');
check(invalid(fn()=>$s->owner('MISSING')),'Unknown code rejected');check(invalid(fn()=>$s->award($owner,'SCOWNER')),'Self referral rejected');
$other=new \App\Models\User(3,'SCOTHER');$s->award($other,'');check($other->referral_rewarded_at===null,'Optional blank code awards nothing');
\App\Models\Setting::$points=0;$s->award($other,'SCOWNER');\App\Models\Setting::$points=50;$s->award($other,'SCOWNER');check(\App\Models\LoyaltyPoint::$rows[1]->points===25,'Zero reward cannot be replayed after settings change');
$next=new \App\Models\User(4,'SCNEXT');$s->award($next,'SCOWNER');check(\App\Models\LoyaltyPoint::$rows[1]->points===75,'New registration uses updated setting');
$failed=new \App\Models\User(5,'SCFAILED');\App\Models\LoyaltyPointTransaction::$fail=true;try{$s->award($failed,'SCOWNER');}catch(\RuntimeException $e){}check(\App\Models\LoyaltyPoint::$rows[1]->points===75 && \App\Models\User::$rows[5]->referral_rewarded_at===null,'Ledger failure rolls back balance and referral');
\App\Models\User::$rows[1]->is_banned=1;check(invalid(fn()=>$s->owner('SCOWNER')),'Banned inviter rejected');
}
