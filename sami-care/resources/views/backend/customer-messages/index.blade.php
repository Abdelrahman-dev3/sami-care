@extends('backend.layouts.app')
@section('title', 'رسائل العملاء والمناسبات')
@section('content')
<div dir="rtl">
    <h4>رسائل العملاء والمناسبات</h4>
    @if(session('success'))<div class="alert alert-success">{{ session('success') }}</div>@endif
    @if($errors->any())<div class="alert alert-danger">@foreach($errors->all() as $error)<p>{{ $error }}</p>@endforeach</div>@endif
    <form class="card card-body mb-4" method="POST" action="{{ route('backend.customer-messages.birthdays') }}">
        @csrf @method('PUT')
        <h5>تهنئة عيد الميلاد تلقائياً</h5>
        <label><input type="checkbox" name="enabled" value="1" @checked(\App\Models\Setting::get('birthday_messages_enabled', '1'))> تفعيل الإرسال يومياً الساعة ٨ صباحاً بتوقيت النظام</label>
        <label for="birthday-message">نص التهنئة</label>
        <textarea id="birthday-message" class="form-control mb-2" name="birthday_message" required maxlength="4000" rows="3">{{ old('birthday_message', \App\Models\Setting::get('birthday_message', \App\Services\CustomerMessages::BIRTHDAY_MESSAGE)) }}</textarea>
        <small>يمكن استخدام {name} لاسم العميل.</small>
        <button class="btn btn-primary mt-2">حفظ إعدادات عيد الميلاد</button>
    </form>
    <form class="card card-body mb-4" method="POST" action="{{ route('backend.customer-messages.store') }}">
        @csrf
        <h5>رسالة مناسبة جديدة</h5>
        <label for="occasion">اسم المناسبة</label>
        <input id="occasion" class="form-control mb-2" name="occasion" value="{{ old('occasion') }}" required maxlength="255">
        <label for="message">نص الرسالة</label>
        <textarea id="message" class="form-control mb-2" name="message" required maxlength="4000" rows="4">{{ old('message') }}</textarea>
        <small>يمكن استخدام {name} لاسم العميل و{occasion} لاسم المناسبة.</small>
        <label for="send-at">موعد الإرسال (اتركه فارغاً للإرسال عند أقرب تشغيل للمجدول)</label>
        <input id="send-at" class="form-control mb-2" type="datetime-local" name="send_at" value="{{ old('send_at') }}">
        <small>التوقيت: {{ config('app.timezone') }}. تُرسل الرسالة مرة واحدة لكل عميل.</small>
        <label for="audience">المستلمون</label>
        <select id="audience" class="form-select mb-2" name="audience">
            <option value="all" @selected(old('audience') === 'all')>كل العملاء النشطين</option>
            <option value="selected" @selected(old('audience') === 'selected')>العملاء المحددون فقط</option>
        </select>
        <label for="customers">حدد العملاء عند اختيار «العملاء المحددون فقط»</label>
        <select id="customers" class="form-select" name="customer_ids[]" multiple size="8">
            @foreach($customers as $customer)
            <option value="{{ $customer->id }}" @selected(in_array($customer->id, old('customer_ids', [])))>{{ $customer->full_name }} — {{ $customer->mobile ?: 'بدون جوال' }}</option>
            @endforeach
        </select>
        <button class="btn btn-primary mt-3">جدولة رسالة المناسبة</button>
    </form>
    <h5>سجل الإرسال</h5>
    <p>الإرسال عبر بوابة الواتساب الحالية مع التحويل إلى SMS عند فشل الواتساب وفق آلية النظام.</p>
    <div class="table-responsive"><table class="table">
        <thead><tr><th>المناسبة</th><th>الموعد</th><th>حالة الرسائل</th></tr></thead>
        <tbody>@foreach($campaigns as $campaign)<tr>
            <td>{{ $campaign->occasion }}</td><td>{{ $campaign->send_at }}</td>
            <td>@foreach($stats->get($campaign->id, collect()) as $stat)
                <span class="badge bg-secondary">{{ ['pending'=>'بانتظار الإرسال','processing'=>'قيد الإرسال','sent'=>'تم الإرسال','failed'=>'فشل الإرسال','simulated'=>'محاكاة محلية'][$stat->status] ?? $stat->status }}: {{ $stat->total }}</span>
            @endforeach</td>
        </tr>@endforeach</tbody>
    </table></div>
    {{ $campaigns->links() }}
</div>
@endsection
