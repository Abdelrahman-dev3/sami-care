@extends('backend.layouts.app')
@section('title', 'بيانات الحجز وتأكيد الوصول')
@section('content')
<div class="card card-body" dir="rtl">
<h4>الحجز #{{ $booking->id }}</h4>
@if(session('success'))<div class="alert alert-success">{{ session('success') }}</div>@endif
@if($errors->any())<div class="alert alert-danger">{{ $errors->first() }}</div>@endif
<p>العميل: {{ $booking->user?->full_name }} — {{ $booking->user?->mobile }}</p>
<p>الفرع: {{ $booking->branch?->name }} — الموعد: {{ $booking->start_date_time }}</p>
<p>حالة الحجز: {{ $booking->status }}</p>
<ul>@foreach($booking->booking_service as $service)<li>{{ $service->service?->name }} — {{ $service->service_price }}</li>@endforeach</ul>
<p>الوصول: {{ $booking->arrived_at ? 'تم تأكيد وصول العميل في '.$booking->arrived_at : 'لم يتم تأكيد الوصول بعد' }}</p>
@if($booking->arrived_at)<p>أكد الوصول: {{ $booking->arrivalConfirmedBy?->full_name }} — الطريقة: {{ $booking->arrival_source === 'qr' ? 'مسح QR' : 'تأكيد يدوي' }}</p>@endif
@if(in_array($booking->status, ['pending','confirmed','check_in']))
<form method="POST" action="{{ $fromScan ? $qrUrl : route('backend.booking-arrival.update', $booking) }}">
@csrf
<input type="hidden" name="source" value="{{ $fromScan ? 'qr' : 'manual' }}">
<input type="hidden" name="arrived" value="{{ $booking->arrived_at ? '0' : '1' }}">
<button class="btn {{ $booking->arrived_at ? 'btn-outline-secondary' : 'btn-success' }}">{{ $booking->arrived_at ? 'إلغاء تأكيد الوصول' : 'تأكيد وصول العميل' }}</button>
</form>
@endif
<div id="arrival-qr" data-url="{{ $qrUrl }}" style="width:280px;background:white;padding:20px;margin:20px 0"></div>
<small>اعرض الرمز عند الاستقبال. تأكيد الوصول متاح فقط لمن لديه صلاحية تعديل الحجوزات.</small>
<a class="mt-3" href="{{ route('backend.booking-arrival.index') }}">العودة إلى قائمة الوصول</a>
</div>
@endsection
@push('after-scripts')
<script src="{{ asset('js/qrcode.min.js') }}"></script>
<script>
const arrivalQr = document.getElementById('arrival-qr');
new QRCode(arrivalQr, {text: arrivalQr.dataset.url, width: 240, height: 240, correctLevel: QRCode.CorrectLevel.M});
</script>
@endpush
