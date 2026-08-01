@php
    $quickActions = array_values(array_filter([
        $centerInfo->whatsapp_url ? [
            'label' => __('center_info.whatsapp'),
            'href' => $centerInfo->whatsapp_url,
            'variant' => 'primary',
            'target' => '_blank',
        ] : null,
        $centerInfo->support_phone ? [
            'label' => __('center_info.call_support'),
            'href' => 'tel:'.$centerInfo->support_phone,
            'variant' => 'muted',
        ] : null,
        $centerInfo->map_url ? [
            'label' => __('center_info.open_location'),
            'href' => $centerInfo->map_url,
            'variant' => 'muted',
            'target' => '_blank',
        ] : null,
    ]));

    $socialLinks = array_values(array_filter([
        $centerInfo->instagram_url ? ['label' => 'Instagram', 'href' => $centerInfo->instagram_url] : null,
        $centerInfo->facebook_url ? ['label' => 'Facebook', 'href' => $centerInfo->facebook_url] : null,
        $centerInfo->x_url ? ['label' => 'X', 'href' => $centerInfo->x_url] : null,
        $centerInfo->tiktok_url ? ['label' => 'TikTok', 'href' => $centerInfo->tiktok_url] : null,
    ]));

    $contactCards = array_values(array_filter([
        $centerInfo->support_phone ? [
            'eyebrow' => __('center_info.support_phone'),
            'value' => $centerInfo->support_phone,
            'href' => 'tel:'.$centerInfo->support_phone,
        ] : null,
        $centerInfo->customer_service_phone ? [
            'eyebrow' => __('center_info.customer_service_phone'),
            'value' => $centerInfo->customer_service_phone,
            'href' => 'tel:'.$centerInfo->customer_service_phone,
        ] : null,
        $centerInfo->address ? [
            'eyebrow' => __('center_info.address'),
            'value' => $centerInfo->address,
            'href' => $centerInfo->map_url ?: '#location',
        ] : null,
    ]));

    $serviceText = $centerInfo->services_info ?: __('center_info.default_services_info');
    $aboutText = $centerInfo->about ?: $serviceText;
@endphp
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ language_direction() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $centerInfo->title }} | {{ app_name() }}</title>
    <link rel="stylesheet" href="{{ mix('css/libs.min.css') }}">
    <link rel="stylesheet" href="{{ mix('css/backend.css') }}">
    @if (language_direction() == 'rtl')
        <link rel="stylesheet" href="{{ asset('css/rtl.css') }}">
    @endif
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --sand: #f6f1e8;
            --sand-deep: #e8dece;
            --stone: #cdbfa9;
            --coffee: #7b6854;
            --ink: #2b241d;
            --muted: #74695d;
            --panel: rgba(255, 252, 247, 0.82);
            --line: rgba(123, 104, 84, 0.16);
            --accent: #ae9270;
            --accent-deep: #8f7657;
            --shadow: 0 26px 50px rgba(76, 56, 34, 0.08);
            --radius-xl: 34px;
            --radius-lg: 26px;
            --radius-md: 20px;
        }

        * {
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            margin: 0;
            min-height: 100vh;
            font-family: Almarai, sans-serif;
            color: var(--ink);
            background:
                radial-gradient(circle at top left, rgba(205, 191, 169, 0.22), transparent 26%),
                linear-gradient(180deg, #fbf8f3 0%, #f4eee5 44%, #f8f3ec 100%);
        }

        body::before {
            content: "";
            position: fixed;
            inset: 0;
            background:
                linear-gradient(90deg, rgba(255, 255, 255, 0.22), transparent 26%, transparent 74%, rgba(255, 255, 255, 0.16)),
                repeating-linear-gradient(0deg, rgba(123, 104, 84, 0.018) 0, rgba(123, 104, 84, 0.018) 1px, transparent 1px, transparent 28px);
            pointer-events: none;
            z-index: 0;
        }

        a {
            color: inherit;
        }

        .page-shell {
            position: relative;
            z-index: 1;
        }

        .wrap {
            width: min(1160px, calc(100% - 28px));
            margin: 0 auto;
        }

        .section-space {
            padding: 26px 0;
        }

        .hero {
            padding: 28px 0 34px;
        }

        .hero-card {
            display: grid;
            grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
            gap: 22px;
            align-items: stretch;
            padding: 18px;
            border: 1px solid rgba(123, 104, 84, 0.11);
            border-radius: 42px;
            background: rgba(255, 249, 241, 0.84);
            box-shadow: var(--shadow);
            backdrop-filter: blur(16px);
        }

        .hero-copy {
            padding: 28px 30px 34px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            width: fit-content;
            padding: 9px 14px;
            border-radius: 999px;
            background: rgba(174, 146, 112, 0.1);
            color: var(--accent-deep);
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.03em;
        }

        .eyebrow::before {
            content: "";
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: var(--accent);
        }

        .hero-title {
            margin: 22px 0 14px;
            font-family: "Cormorant Garamond", serif;
            font-size: clamp(3.3rem, 8vw, 6.4rem);
            line-height: 0.95;
            font-weight: 700;
            letter-spacing: -0.04em;
            text-wrap: balance;
        }

        .hero-title span {
            display: block;
            color: var(--accent-deep);
            font-size: clamp(1.1rem, 2vw, 1.45rem);
            line-height: 1.5;
            letter-spacing: 0;
            margin-top: 14px;
            font-family: Almarai, sans-serif;
            font-weight: 400;
        }

        .lead {
            max-width: 620px;
            margin: 0;
            color: var(--muted);
            font-size: clamp(1rem, 2vw, 1.12rem);
            line-height: 2;
        }

        .hero-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 28px;
        }

        .hero-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 160px;
            padding: 14px 20px;
            border-radius: 999px;
            border: 1px solid transparent;
            text-decoration: none;
            font-weight: 800;
            transition: transform .22s ease, box-shadow .22s ease, background .22s ease, border-color .22s ease;
        }

        .hero-link.primary {
            background: linear-gradient(135deg, #ad9271, #c3ab8a);
            color: #fffdf9;
            box-shadow: 0 14px 24px rgba(143, 118, 87, 0.18);
        }

        .hero-link.muted {
            background: rgba(255, 255, 255, 0.62);
            border-color: rgba(123, 104, 84, 0.12);
            color: var(--ink);
        }

        .hero-link:hover {
            transform: translateY(-2px);
        }

        .hero-visual {
            position: relative;
            min-height: 540px;
            border-radius: 32px;
            overflow: hidden;
            background:
                linear-gradient(180deg, rgba(43, 36, 29, 0.16), rgba(43, 36, 29, 0.32)),
                url('{{ $centerInfo->cover_image_url }}') center/cover no-repeat;
        }

        .hero-visual::before {
            content: "";
            position: absolute;
            inset: 18px;
            border: 1px solid rgba(255, 248, 240, 0.34);
            border-radius: 24px;
        }

        .brand-badge {
            position: absolute;
            inset-block-start: 22px;
            inset-inline-start: 22px;
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 14px 16px;
            border-radius: 22px;
            background: rgba(255, 251, 245, 0.78);
            backdrop-filter: blur(12px);
            box-shadow: 0 12px 28px rgba(48, 33, 17, 0.08);
        }

        .brand-mark {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            background: #fff;
            display: grid;
            place-items: center;
            overflow: hidden;
            box-shadow: 0 10px 20px rgba(58, 43, 28, 0.08);
            border: 3px solid rgba(255, 255, 255, 0.88);
        }

        .brand-mark img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .brand-badge small {
            display: block;
            color: var(--muted);
            font-size: 12px;
            margin-bottom: 4px;
        }

        .brand-badge strong {
            display: block;
            font-size: 1rem;
        }

        .hero-note {
            position: absolute;
            inset-inline-end: 22px;
            inset-block-end: 22px;
            max-width: 260px;
            padding: 18px 20px;
            border-radius: 24px;
            background: rgba(255, 249, 241, 0.78);
            color: var(--ink);
            box-shadow: 0 18px 32px rgba(48, 33, 17, 0.08);
            backdrop-filter: blur(12px);
        }

        .hero-note small {
            display: block;
            color: var(--accent-deep);
            font-size: 12px;
            margin-bottom: 8px;
        }

        .hero-note strong {
            display: block;
            font-size: 1rem;
            line-height: 1.8;
        }

        .overview-grid {
            display: grid;
            grid-template-columns: 1.15fr .85fr;
            gap: 22px;
            margin-top: 22px;
        }

        .panel {
            border: 1px solid rgba(123, 104, 84, 0.12);
            border-radius: var(--radius-xl);
            background: var(--panel);
            box-shadow: var(--shadow);
            backdrop-filter: blur(12px);
        }

        .panel-body {
            padding: 30px;
        }

        .section-title {
            margin: 0 0 12px;
            font-family: "Cormorant Garamond", serif;
            font-size: clamp(2rem, 4vw, 3.15rem);
            line-height: 1;
            letter-spacing: -0.03em;
        }

        .section-text {
            margin: 0;
            color: var(--muted);
            line-height: 2;
            font-size: 1rem;
            white-space: pre-line;
        }

        .quote-panel {
            position: relative;
            overflow: hidden;
        }

        .quote-panel::after {
            content: "";
            position: absolute;
            inset-inline-end: -28px;
            inset-block-start: -18px;
            width: 130px;
            height: 130px;
            border-radius: 50%;
            background: rgba(205, 191, 169, 0.18);
            filter: blur(2px);
        }

        .quote-mark {
            font-family: "Cormorant Garamond", serif;
            font-size: 5rem;
            line-height: 0.7;
            color: rgba(174, 146, 112, 0.58);
            margin-bottom: 10px;
        }

        .quote-text {
            margin: 0;
            color: var(--ink);
            line-height: 1.95;
            font-size: 1.02rem;
            position: relative;
            z-index: 1;
        }

        .actions-strip {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
            margin-top: 22px;
        }

        .action-tile {
            padding: 20px 18px;
            border-radius: var(--radius-lg);
            border: 1px solid rgba(123, 104, 84, 0.1);
            background: rgba(255, 255, 255, 0.55);
            text-decoration: none;
            transition: transform .22s ease, box-shadow .22s ease;
        }

        .action-tile:hover {
            transform: translateY(-2px);
            box-shadow: 0 14px 24px rgba(76, 56, 34, 0.06);
        }

        .action-tile small {
            display: block;
            color: var(--accent-deep);
            margin-bottom: 8px;
            font-size: 12px;
        }

        .action-tile strong {
            display: block;
            font-size: 1rem;
            line-height: 1.6;
        }

        .content-grid {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 340px;
            gap: 22px;
            margin-top: 22px;
        }

        .feature-list {
            display: grid;
            gap: 16px;
        }

        .feature-card {
            display: grid;
            grid-template-columns: 58px minmax(0, 1fr);
            gap: 16px;
            padding: 22px;
            border-radius: var(--radius-lg);
            border: 1px solid rgba(123, 104, 84, 0.12);
            background: rgba(255, 255, 255, 0.56);
        }

        .feature-index {
            width: 58px;
            height: 58px;
            border-radius: 18px;
            display: grid;
            place-items: center;
            background: rgba(174, 146, 112, 0.12);
            color: var(--accent-deep);
            font-weight: 800;
        }

        .feature-card h3,
        .stack-card h3 {
            margin: 0 0 8px;
            font-size: 1.1rem;
            font-weight: 800;
        }

        .feature-card p,
        .stack-card p {
            margin: 0;
            color: var(--muted);
            line-height: 1.9;
            white-space: pre-line;
        }

        .stack {
            display: grid;
            gap: 18px;
        }

        .stack-card {
            padding: 24px;
            border-radius: var(--radius-lg);
            border: 1px solid rgba(123, 104, 84, 0.12);
            background: rgba(255, 255, 255, 0.58);
        }

        .contact-list {
            display: grid;
            gap: 12px;
            margin-top: 16px;
        }

        .contact-item {
            display: block;
            padding: 16px 18px;
            border-radius: 18px;
            text-decoration: none;
            background: rgba(247, 241, 232, 0.9);
            border: 1px solid rgba(123, 104, 84, 0.1);
            transition: transform .22s ease, background .22s ease;
        }

        .contact-item:hover {
            transform: translateY(-2px);
            background: #fffdfa;
        }

        .contact-item small {
            display: block;
            color: var(--accent-deep);
            font-size: 12px;
            margin-bottom: 6px;
        }

        .contact-item strong {
            display: block;
            line-height: 1.8;
        }

        .social-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 16px;
        }

        .social-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 11px 15px;
            border-radius: 999px;
            border: 1px solid rgba(123, 104, 84, 0.12);
            background: rgba(255, 255, 255, 0.66);
            text-decoration: none;
            font-weight: 700;
            transition: transform .22s ease;
        }

        .social-link:hover {
            transform: translateY(-2px);
        }

        .location-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-top: 18px;
            padding: 13px 20px;
            border-radius: 999px;
            background: var(--accent-deep);
            color: #fffaf4;
            text-decoration: none;
            font-weight: 800;
            box-shadow: 0 12px 24px rgba(143, 118, 87, 0.14);
        }

        .reveal {
            opacity: 0;
            transform: translateY(16px);
            transition: opacity .6s ease, transform .6s ease;
        }

        .reveal.is-visible {
            opacity: 1;
            transform: translateY(0);
        }

        .delay-1 { transition-delay: .08s; }
        .delay-2 { transition-delay: .16s; }
        .delay-3 { transition-delay: .24s; }

        @media (max-width: 1024px) {
            .hero-card,
            .overview-grid,
            .content-grid {
                grid-template-columns: 1fr;
            }

            .hero-visual {
                min-height: 420px;
            }
        }

        @media (max-width: 720px) {
            .wrap {
                width: min(100% - 18px, 100%);
            }

            .hero-card {
                padding: 12px;
                border-radius: 28px;
            }

            .hero-copy,
            .panel-body {
                padding: 22px;
            }

            .hero-visual {
                min-height: 340px;
                border-radius: 24px;
            }

            .brand-badge,
            .hero-note {
                position: static;
                margin: 16px;
            }

            .actions-strip {
                grid-template-columns: 1fr;
            }

            .hero-actions,
            .social-list {
                flex-direction: column;
            }

            .hero-link,
            .social-link,
            .location-link {
                width: 100%;
            }

            .feature-card {
                grid-template-columns: 1fr;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            html {
                scroll-behavior: auto;
            }

            *,
            *::before,
            *::after {
                transition: none !important;
                animation: none !important;
            }

            .reveal {
                opacity: 1;
                transform: none;
            }
        }
    </style>
</head>
<body>
    <div class="page-shell">
        <header class="hero">
            <div class="wrap">
                <section class="hero-card">
                    <div class="hero-copy reveal is-visible">
                        <div class="eyebrow">{{ __('center_info.menu_title') }}</div>
                        <h1 class="hero-title">
                            {{ $centerInfo->title }}
                        </h1>
                        <p class="lead">{{ $aboutText }}</p>

                        @if (count($quickActions))
                            <div class="hero-actions">
                                @foreach ($quickActions as $action)
                                    <a
                                        class="hero-link {{ $action['variant'] }}"
                                        href="{{ $action['href'] }}"
                                        @if (!empty($action['target'])) target="{{ $action['target'] }}" rel="noopener" @endif
                                    >
                                        {{ $action['label'] }}
                                    </a>
                                @endforeach
                            </div>
                        @endif
                    </div>

                    <div class="hero-visual reveal delay-1 is-visible">
                        <div class="brand-badge">
                            <div class="brand-mark">
                                <img src="{{ $centerInfo->profile_image_url }}" alt="{{ $centerInfo->title }}">
                            </div>
                            <div>
                                <small>{{ app_name() }}</small>
                                <strong>{{ $centerInfo->title }}</strong>
                            </div>
                        </div>

                        <div class="hero-note">
                            <small>{{ __('center_info.services_info') }}</small>
                            <strong>{{ \Illuminate\Support\Str::limit($serviceText, 110) }}</strong>
                        </div>
                    </div>
                </section>

                <section class="overview-grid">
                    <article class="panel reveal">
                        <div class="panel-body">
                            <div class="eyebrow">{{ __('center_info.about') }}</div>
                            <p class="section-text">{{ $aboutText }}</p>

                            @if (count($contactCards))
                                <div class="actions-strip">
                                    @foreach ($contactCards as $contact)
                                        <a
                                            class="action-tile"
                                            href="{{ $contact['href'] ?: '#location' }}"
                                            @if (\Illuminate\Support\Str::startsWith($contact['href'] ?? '', ['http://', 'https://'])) target="_blank" rel="noopener" @endif
                                        >
                                            <small>{{ $contact['eyebrow'] }}</small>
                                            <strong>{{ $contact['value'] }}</strong>
                                        </a>
                                    @endforeach
                                </div>
                            @endif
                        </div>
                    </article>

                    <aside class="panel quote-panel reveal delay-1">
                        <div class="panel-body">
                            <div class="quote-mark">"</div>
                            <p class="quote-text">{{ $serviceText }}</p>
                        </div>
                    </aside>
                </section>
            </div>
        </header>

        <main class="section-space">
            <div class="wrap">
                <section class="content-grid">
                    <div class="panel reveal">
                        <div class="panel-body">
                            <div class="eyebrow">{{ __('center_info.services_info') }}</div>
                            <h2 class="section-title">تفاصيل الخدمة</h2>

                            <div class="feature-list">
                                <article class="feature-card">
                                    <div class="feature-index">01</div>
                                    <div>
                                        <h3>{{ __('center_info.services_info') }}</h3>
                                        <p>{{ $serviceText }}</p>
                                    </div>
                                </article>

                                <article class="feature-card">
                                    <div class="feature-index">02</div>
                                    <div>
                                        <h3>{{ __('center_info.extra_info') }}</h3>
                                        <p>{{ $centerInfo->extra_info ?: $aboutText }}</p>
                                    </div>
                                </article>

                                <article class="feature-card" id="location">
                                    <div class="feature-index">03</div>
                                    <div>
                                        <h3>{{ __('center_info.location') }}</h3>
                                        <p>{{ $centerInfo->address ?: __('center_info.open_location') }}</p>
                                        @if ($centerInfo->map_url)
                                            <a class="location-link" href="{{ $centerInfo->map_url }}" target="_blank" rel="noopener">
                                                {{ __('center_info.open_location') }}
                                            </a>
                                        @endif
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>

                    <div class="stack">
                        <aside class="panel reveal delay-1">
                            <div class="panel-body">
                                <div class="eyebrow">{{ __('center_info.contact_info') }}</div>
                                <h3>{{ __('center_info.contact_info') }}</h3>

                                @if (count($contactCards))
                                    <div class="contact-list">
                                        @foreach ($contactCards as $contact)
                                            <a
                                                class="contact-item"
                                                href="{{ $contact['href'] ?: '#location' }}"
                                                @if (\Illuminate\Support\Str::startsWith($contact['href'] ?? '', ['http://', 'https://'])) target="_blank" rel="noopener" @endif
                                            >
                                                <small>{{ $contact['eyebrow'] }}</small>
                                                <strong>{{ $contact['value'] }}</strong>
                                            </a>
                                        @endforeach
                                    </div>
                                @endif
                            </div>
                        </aside>

                        @if (count($socialLinks))
                            <aside class="panel reveal delay-2">
                                <div class="panel-body">
                                    <div class="eyebrow">المنصات</div>
                                    <h3>تابع سامي كير</h3>

                                    <div class="social-list">
                                        @foreach ($socialLinks as $social)
                                            <a class="social-link" href="{{ $social['href'] }}" target="_blank" rel="noopener">
                                                {{ $social['label'] }}
                                            </a>
                                        @endforeach
                                    </div>
                                </div>
                            </aside>
                        @endif
                    </div>
                </section>
            </div>
        </main>
    </div>

    <script>
        (function () {
            const revealItems = document.querySelectorAll('.reveal:not(.is-visible)');

            if (!revealItems.length || !('IntersectionObserver' in window)) {
                revealItems.forEach(function (item) {
                    item.classList.add('is-visible');
                });
                return;
            }

            const observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.16,
                rootMargin: '0px 0px -8% 0px'
            });

            revealItems.forEach(function (item) {
                observer.observe(item);
            });
        }());
    </script>
</body>
</html>
