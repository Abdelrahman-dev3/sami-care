@extends('frontend::layouts.qr')

@section('title', 'بطاقة عناية سامي')

@push('after-styles')
<style>
    :root {
        --sami-gold: #bf9456;
        --sami-amber: #d4af37;
        --sami-dark: #1c1a17;
        --sami-ink: #2a2420;
        --sami-cream: #f7f2ea;
        --sami-soft: #fff8ef;
        --sami-shadow: 0 35px 70px rgba(18, 14, 10, 0.22);
        --sami-glow: 0 0 40px rgba(212, 175, 55, 0.35);
    }

    .sami-card-body {
        font-family: "Cairo", sans-serif;
        background:
            radial-gradient(circle at 12% 20%, rgba(191, 148, 86, 0.35), transparent 45%),
            radial-gradient(circle at 88% 18%, rgba(212, 175, 55, 0.28), transparent 50%),
            radial-gradient(circle at 50% 90%, rgba(255, 248, 239, 0.7), transparent 60%),
            linear-gradient(135deg, #fffaf3 0%, #f2e6d6 45%, #efe5d4 100%);
        color: var(--sami-ink);
        min-height: 100vh;
        padding: 32px 16px 60px;
        position: relative;
        overflow-x: hidden;
    }

    .sami-card-body::before,
    .sami-card-body::after {
        content: "";
        position: absolute;
        width: 380px;
        height: 380px;
        border-radius: 50%;
        filter: blur(0px);
        opacity: 0.35;
        z-index: 0;
        animation: floatGlow 12s ease-in-out infinite;
    }

    .sami-card-body::before {
        top: -140px;
        right: -120px;
        background: radial-gradient(circle, rgba(191, 148, 86, 0.75), transparent 65%);
    }

    .sami-card-body::after {
        bottom: -180px;
        left: -140px;
        background: radial-gradient(circle, rgba(212, 175, 55, 0.75), transparent 65%);
        animation-delay: -4s;
    }

    .sami-card-page {
        max-width: 1180px;
        margin: 0 auto;
        position: relative;
        z-index: 1;
    }

    .sami-hero {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 32px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 248, 239, 0.85));
        border-radius: 28px;
        box-shadow: var(--sami-shadow);
        border: 1px solid rgba(191, 148, 86, 0.25);
        position: relative;
        overflow: hidden;
        animation: fadeUp 0.9s ease both;
    }

    .sami-hero::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(120deg, rgba(212, 175, 55, 0.15), transparent 55%);
        opacity: 0.8;
        pointer-events: none;
    }

    .sami-brand {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 20px;
        position: relative;
        z-index: 1;
    }

    .sami-logo {
        width: 88px;
        height: 88px;
        border-radius: 22px;
        padding: 14px;
        background: #fff;
        box-shadow: var(--sami-glow);
        border: 1px solid rgba(191, 148, 86, 0.2);
    }

    .sami-title {
        font-family: "Playfair Display", serif;
        font-size: clamp(2rem, 4vw, 3rem);
        font-weight: 700;
        color: var(--sami-dark);
        margin: 0;
    }

    .sami-subtitle {
        margin: 6px 0 0;
        color: rgba(42, 36, 32, 0.8);
        font-size: 1rem;
        line-height: 1.7;
        max-width: 520px;
    }

    .sami-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        position: relative;
        z-index: 1;
    }

    .sami-action {
        padding: 12px 20px;
        border-radius: 999px;
        border: 1px solid rgba(191, 148, 86, 0.25);
        background: #fff;
        color: var(--sami-ink);
        font-weight: 600;
        text-decoration: none;
        box-shadow: 0 10px 18px rgba(28, 26, 23, 0.08);
        transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }

    .sami-action.primary {
        background: linear-gradient(135deg, var(--sami-gold), var(--sami-amber));
        color: #1b1510;
        border-color: transparent;
        box-shadow: var(--sami-glow);
    }

    .sami-action:hover {
        transform: translateY(-2px);
        box-shadow: 0 18px 30px rgba(28, 26, 23, 0.18);
        background: #fff9ef;
    }

    .sami-grid {
        margin-top: 28px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 24px;
    }

    .sami-panel {
        background: rgba(255, 255, 255, 0.92);
        border-radius: 24px;
        padding: 24px;
        box-shadow: 0 20px 40px rgba(28, 26, 23, 0.12);
        border: 1px solid rgba(191, 148, 86, 0.18);
        position: relative;
        overflow: hidden;
        animation: fadeUp 0.9s ease both;
    }

    .sami-panel h2 {
        font-size: 1.2rem;
        font-weight: 700;
        margin: 0 0 16px;
        color: var(--sami-dark);
    }

    .sami-social-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
        gap: 16px;
    }

    .sami-social-card {
        padding: 16px;
        background: linear-gradient(150deg, #fff, #fff7eb);
        border-radius: 18px;
        border: 1px solid rgba(191, 148, 86, 0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: grid;
        gap: 8px;
    }

    .sami-social-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 14px 24px rgba(28, 26, 23, 0.12);
    }

    .sami-social-title {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 700;
        color: var(--sami-ink);
    }

    .sami-social-title svg {
        width: 22px;
        height: 22px;
        color: var(--sami-gold);
    }

    .sami-social-handle {
        font-size: 0.95rem;
        color: rgba(42, 36, 32, 0.75);
        word-break: break-word;
    }

    .sami-social-link {
        text-decoration: none;
        color: var(--sami-gold);
        font-weight: 600;
        font-size: 0.9rem;
    }

    .sami-info-list {
        display: grid;
        gap: 14px;
    }

    .sami-info-item {
        background: var(--sami-soft);
        border-radius: 16px;
        padding: 14px 16px;
        border: 1px solid rgba(191, 148, 86, 0.18);
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .sami-info-label {
        font-size: 0.85rem;
        color: rgba(42, 36, 32, 0.65);
    }

    .sami-info-value {
        font-weight: 700;
        color: var(--sami-ink);
        text-decoration: none;
        direction: ltr;
        text-align: right;
    }

    .sami-branches {
        margin-top: 28px;
    }

    .sami-branch-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 16px;
    }

    .sami-branch-card {
        background: #fff;
        padding: 18px;
        border-radius: 18px;
        border: 1px solid rgba(191, 148, 86, 0.18);
        box-shadow: 0 12px 20px rgba(28, 26, 23, 0.08);
        display: grid;
        gap: 6px;
    }

    .sami-branch-title {
        font-weight: 700;
        color: var(--sami-dark);
    }

    .sami-branch-desc {
        font-size: 0.9rem;
        color: rgba(42, 36, 32, 0.7);
    }

    .sami-qr {
        margin-top: 28px;
        text-align: center;
        padding: 28px;
        background: linear-gradient(145deg, rgba(255, 255, 255, 0.96), rgba(255, 248, 239, 0.9));
    }

    .sami-qr img {
        width: min(220px, 60vw);
        height: auto;
        border-radius: 16px;
        border: 1px solid rgba(191, 148, 86, 0.25);
        box-shadow: 0 16px 30px rgba(28, 26, 23, 0.15);
    }

    .sami-qr p {
        margin-top: 14px;
        color: rgba(42, 36, 32, 0.7);
        font-size: 0.95rem;
    }

    @keyframes floatGlow {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(16px); }
    }

    @keyframes fadeUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 768px) {
        .sami-hero { padding: 24px; }
        .sami-actions { justify-content: center; }
    }

    @media (prefers-reduced-motion: reduce) {
        .sami-card-body::before,
        .sami-card-body::after,
        .sami-hero,
        .sami-panel {
            animation: none !important;
        }
    }
</style>
@endpush

@php
    use App\Models\Branch;

    $branches = Branch::where('status', 1)->whereNull('deleted_by')->get();
    $appName = setting('app_name') ?: 'SAMI Care';
    $description = setting('site_description') ?: 'خبرة فاخرة في العناية والجمال بروح عصرية.';
    $helpline = setting('helpline_number') ?: '';
    $email = setting('inquriy_email') ?: '';

    $socialLinks = [
        [
            'label' => 'LinkedIn',
            'name' => 'لينكدإن',
            'url' => setting('linkedin_url'),
            'icon' => '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45H17.1v-5.4c0-1.28-.03-2.94-1.79-2.94-1.79 0-2.06 1.4-2.06 2.85v5.5H9.9V9h3.21v1.56h.05c.45-.85 1.55-1.74 3.2-1.74 3.43 0 4.06 2.26 4.06 5.2v6.43zM5.34 7.5a1.95 1.95 0 1 1 0-3.9 1.95 1.95 0 0 1 0 3.9zM6.98 20.45H3.7V9h3.28v11.45zM22.2 0H1.8C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.8 24h20.4c1 0 1.8-.77 1.8-1.72V1.72C24 .77 23.2 0 22.2 0z"/></svg>',
        ],
        [
            'label' => 'X',
            'name' => 'تويتر',
            'url' => setting('twitter_url') ?: 'https://x.com/samicare_sa',
            'icon' => '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.24 2h3.26l-7.12 8.14L22.5 22h-6.4l-5.01-6.8L5.1 22H1.82l7.6-8.68L1.5 2h6.58l4.53 6.1L18.24 2zM17.1 19.6h1.8L7.02 4.24H5.1L17.1 19.6z"/></svg>',
        ],
        [
            'label' => 'Instagram',
            'name' => 'انستجرام',
            'url' => setting('instagram_url') ?: 'https://www.instagram.com/samicare.sa/',
            'icon' => '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3zm0 7.8A3.1 3.1 0 1 1 12 8.9a3.1 3.1 0 0 1 0 6.2zm6-7.95a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1zM20.2 7a6.7 6.7 0 0 0-3.8-3.8C15 2.6 12 2.6 12 2.6s-3 0-4.4.6A6.7 6.7 0 0 0 3.8 7C3.2 8.4 3.2 11.4 3.2 11.4s0 3 .6 4.4a6.7 6.7 0 0 0 3.8 3.8c1.4.6 4.4.6 4.4.6s3 0 4.4-.6a6.7 6.7 0 0 0 3.8-3.8c.6-1.4.6-4.4.6-4.4s0-3-.6-4.4zM12 18.2s-2.6 0-4-.5a4.9 4.9 0 0 1-2.8-2.8c-.5-1.4-.5-4-.5-4s0-2.6.5-4A4.9 4.9 0 0 1 8 4.1c1.4-.5 4-.5 4-.5s2.6 0 4 .5a4.9 4.9 0 0 1 2.8 2.8c.5 1.4.5 4 .5 4s0 2.6-.5 4a4.9 4.9 0 0 1-2.8 2.8c-1.4.5-4 .5-4 .5z"/></svg>',
        ],
        [
            'label' => 'Facebook',
            'name' => 'فيسبوك',
            'url' => setting('facebook_url') ?: 'https://www.facebook.com/samicare.sa',
            'icon' => '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.1V12h2.1V9.8c0-2.1 1.2-3.2 3-3.2.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 2.9h-1.9v7A10 10 0 0 0 22 12z"/></svg>',
        ],
    ];
@endphp

@section('content')
<section class="sami-card-page" aria-label="بطاقة عناية سامي">
    <div class="sami-hero">
        <div class="sami-brand">
            <img src="{{ asset('images/samilogo.png') }}" alt="SAMI Care" class="sami-logo">
            <div>
                <h1 class="sami-title">{{ $appName }}</h1>
                <p class="sami-subtitle">{{ $description }}</p>
            </div>
        </div>
        <div class="sami-actions">
            @if($helpline)
                <a class="sami-action primary" href="tel:{{ $helpline }}">اتصل الآن</a>
            @endif
            @if($email)
                <a class="sami-action" href="mailto:{{ $email }}">راسلنا</a>
            @endif
            <a class="sami-action" href="{{ route('frontend.contact') }}">مركز الدعم</a>
            <a class="sami-action" href="{{ route('frontend.sami-care-card.qr') }}">الباركود</a>
        </div>
    </div>

    <div class="sami-grid">
        <div class="sami-panel">
            <h2>روابطنا الرسمية</h2>
            <div class="sami-social-grid">
                @foreach($socialLinks as $link)
                    @php
                        $url = $link['url'];
                        $handle = $url ? ltrim((parse_url($url, PHP_URL_PATH) ?? ''), '/') : null;
                    @endphp
                    <div class="sami-social-card">
                        <div class="sami-social-title">
                            {!! $link['icon'] !!}
                            <span>{{ $link['name'] }}</span>
                        </div>
                        <div class="sami-social-handle">
                            {{ $handle ? '@' . $handle : 'غير متوفر حالياً' }}
                        </div>
                        @if($url)
                            <a class="sami-social-link" href="{{ $url }}" target="_blank" rel="noreferrer">
                                عرض الرابط الرسمي
                            </a>
                        @endif
                    </div>
                @endforeach
            </div>
        </div>

        <div class="sami-panel">
            <h2>خدمة العملاء</h2>
            <div class="sami-info-list">
                <div class="sami-info-item">
                    <span class="sami-info-label">الخط الساخن</span>
                    <a class="sami-info-value" href="{{ $helpline ? 'tel:' . $helpline : '#' }}">
                        {{ $helpline ?: 'يرجى تحديث رقم خدمة العملاء' }}
                    </a>
                </div>
                <div class="sami-info-item">
                    <span class="sami-info-label">البريد الإلكتروني</span>
                    <a class="sami-info-value" href="{{ $email ? 'mailto:' . $email : '#' }}">
                        {{ $email ?: 'يرجى تحديث البريد الإلكتروني' }}
                    </a>
                </div>
                <div class="sami-info-item">
                    <span class="sami-info-label">أوقات الدعم</span>
                    <span class="sami-info-value" style="direction: rtl; text-align: right;">حسب المواعيد الرسمية للفروع</span>
                </div>
            </div>
        </div>
    </div>

    <div class="sami-panel sami-branches">
        <h2>بيانات الفروع</h2>
        <div class="sami-branch-grid">
            @forelse($branches as $branch)
                <div class="sami-branch-card">
                    <div class="sami-branch-title">{{ $branch->name }}</div>
                    <div class="sami-branch-desc">{{ $branch->description ?? '—' }}</div>
                    <a class="sami-info-value" href="tel:{{ $branch->contact_number }}">{{ $branch->contact_number }}</a>
                </div>
            @empty
                <div class="sami-branch-card">
                    <div class="sami-branch-title">لا توجد فروع مضافة</div>
                    <div class="sami-branch-desc">يرجى إضافة بيانات الفروع لعرضها هنا.</div>
                </div>
            @endforelse
        </div>
    </div>

    <div class="sami-panel sami-qr">
        <h2>الباركود للدخول للصفحة</h2>
        <img src="https://chart.googleapis.com/chart?cht=qr&chs=420x420&chld=M|0&chl={{ urlencode(route('frontend.sami-care-card')) }}" alt="باركود عناية سامي">
        <p>امسح الباركود لفتح بطاقة عناية سامي مباشرة.</p>
    </div>
</section>
@endsection
