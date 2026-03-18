@extends('frontend::layouts.qr')

@section('title', 'باركود عناية سامي')

@push('after-styles')
<style>
    .sami-card-body {
        font-family: "Cairo", sans-serif;
        background: linear-gradient(135deg, #fffaf3 0%, #f2e6d6 55%, #efe5d4 100%);
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 32px 16px;
    }

    .sami-qr-wrap {
        background: #fff;
        border-radius: 28px;
        padding: 32px;
        text-align: center;
        border: 1px solid rgba(191, 148, 86, 0.2);
        box-shadow: 0 30px 60px rgba(18, 14, 10, 0.18);
        max-width: 520px;
    }

    .sami-qr-wrap h1 {
        font-size: 1.6rem;
        margin-bottom: 12px;
        color: #1c1a17;
    }

    .sami-qr-wrap p {
        color: rgba(42, 36, 32, 0.7);
        margin-bottom: 18px;
    }

    .sami-qr-wrap img {
        width: min(360px, 75vw);
        border-radius: 16px;
        border: 1px solid rgba(191, 148, 86, 0.25);
        box-shadow: 0 18px 30px rgba(28, 26, 23, 0.15);
    }
</style>
@endpush

@section('content')
<section class="sami-qr-wrap">
    <h1>باركود بطاقة عناية سامي</h1>
    <p>استخدمه للطباعة أو المشاركة. عند المسح يتم فتح صفحة البطاقة مباشرة.</p>
    <img src="https://chart.googleapis.com/chart?cht=qr&chs=520x520&chld=M|0&chl={{ urlencode(route('frontend.sami-care-card')) }}" alt="باركود عناية سامي">
</section>
@endsection
