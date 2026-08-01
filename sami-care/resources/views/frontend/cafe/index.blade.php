<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ language_direction() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ __('cafe.menu') }} | {{ app_name() }}</title>
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
            --cream: #f8f3eb;
            --cream-deep: #efe4d5;
            --latte: #d7c2a7;
            --coffee: #5d4938;
            --coffee-deep: #3f3125;
            --ink: #241d18;
            --muted: #756758;
            --panel: rgba(255, 250, 244, 0.82);
            --line: rgba(93, 73, 56, 0.14);
            --shadow: 0 26px 60px rgba(63, 49, 37, 0.08);
            --radius-xl: 34px;
            --radius-lg: 24px;
            --radius-md: 18px;
        }

        * {
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            margin: 0;
            font-family: Almarai, sans-serif;
            color: var(--ink);
            background:
                radial-gradient(circle at top left, rgba(239, 228, 213, 0.9), transparent 24%),
                linear-gradient(180deg, #fcfaf6 0%, #f6f0e6 100%);
        }

        body::before {
            content: "";
            position: fixed;
            inset: 0;
            background:
                linear-gradient(90deg, rgba(255, 255, 255, 0.18), transparent 26%, transparent 74%, rgba(255, 255, 255, 0.12)),
                repeating-linear-gradient(0deg, rgba(93, 73, 56, 0.018) 0, rgba(93, 73, 56, 0.018) 1px, transparent 1px, transparent 30px);
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
            width: min(1180px, calc(100% - 28px));
            margin: 0 auto;
        }

        .hero {
            padding: 26px 0 24px;
        }

        .hero-card {
            display: grid;
            grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
            gap: 20px;
            padding: 18px;
            border-radius: 40px;
            background: var(--panel);
            border: 1px solid rgba(93, 73, 56, 0.1);
            box-shadow: var(--shadow);
            backdrop-filter: blur(12px);
        }

        .hero-copy {
            padding: 30px 32px 34px;
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
            background: rgba(215, 194, 167, 0.32);
            color: var(--coffee);
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.03em;
        }

        .eyebrow::before {
            content: "";
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: var(--coffee);
        }

        .hero-title {
            margin: 24px 0 14px;
            font-family: "Cormorant Garamond", serif;
            font-size: clamp(3.5rem, 8vw, 6.6rem);
            line-height: 0.94;
            font-weight: 700;
            letter-spacing: -0.04em;
        }

        .hero-title span {
            display: block;
            margin-top: 16px;
            font-family: Almarai, sans-serif;
            font-size: clamp(1rem, 2vw, 1.24rem);
            line-height: 1.8;
            font-weight: 400;
            color: var(--muted);
            letter-spacing: 0;
        }

        .hero-text {
            max-width: 640px;
            margin: 0;
            color: var(--muted);
            line-height: 2;
            font-size: 1rem;
        }

        .hero-meta {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
            margin-top: 26px;
        }

        .meta-card {
            padding: 16px;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.64);
            border: 1px solid rgba(93, 73, 56, 0.1);
        }

        .meta-card small {
            display: block;
            color: var(--muted);
            font-size: 12px;
            margin-bottom: 6px;
        }

        .meta-card strong {
            display: block;
            font-size: 1rem;
        }

        .hero-visual {
            position: relative;
            min-height: 540px;
            border-radius: 30px;
            overflow: hidden;
            background:
                linear-gradient(180deg, rgba(36, 29, 24, 0.15), rgba(36, 29, 24, 0.34)),
                url('{{ asset('images/pages/coupon-bg.jpg') }}') center/cover no-repeat;
        }

        .hero-visual::before {
            content: "";
            position: absolute;
            inset: 18px;
            border: 1px solid rgba(255, 250, 244, 0.34);
            border-radius: 22px;
        }

        .brand-badge,
        .hero-note {
            position: absolute;
            border-radius: 22px;
            background: rgba(255, 250, 244, 0.78);
            box-shadow: 0 14px 28px rgba(63, 49, 37, 0.08);
            backdrop-filter: blur(12px);
        }

        .brand-badge {
            inset-block-start: 22px;
            inset-inline-start: 22px;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
        }

        .brand-mark {
            width: 52px;
            height: 52px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            background: #fff;
            box-shadow: 0 10px 20px rgba(63, 49, 37, 0.08);
        }

        .brand-mark img {
            width: 34px;
            height: 34px;
            object-fit: contain;
        }

        .brand-badge small,
        .hero-note small {
            display: block;
            font-size: 12px;
            color: var(--muted);
            margin-bottom: 4px;
        }

        .brand-badge strong,
        .hero-note strong {
            display: block;
            font-size: 1rem;
        }

        .hero-note {
            inset-inline-end: 22px;
            inset-block-end: 22px;
            max-width: 250px;
            padding: 18px;
        }

        .hero-note strong {
            line-height: 1.8;
        }

        .section-head {
            display: flex;
            align-items: end;
            justify-content: space-between;
            gap: 20px;
            margin: 28px 0 18px;
        }

        .section-head h2 {
            margin: 0;
            font-family: "Cormorant Garamond", serif;
            font-size: clamp(2rem, 4vw, 3rem);
            line-height: 1;
            letter-spacing: -0.03em;
        }

        .section-head p {
            margin: 0;
            max-width: 520px;
            color: var(--muted);
            line-height: 1.9;
        }

        .category-nav {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 20px;
        }

        .category-chip {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 11px 16px;
            border-radius: 999px;
            border: 1px solid rgba(93, 73, 56, 0.12);
            background: rgba(255, 255, 255, 0.66);
            text-decoration: none;
            font-weight: 700;
            transition: transform .2s ease, background .2s ease;
        }

        .category-chip:hover {
            transform: translateY(-2px);
            background: #fff;
        }

        .menu-layout {
            display: grid;
            gap: 22px;
            padding-bottom: 56px;
        }

        .category-section {
            border: 1px solid rgba(93, 73, 56, 0.1);
            border-radius: 30px;
            padding: 24px;
            background: rgba(255, 250, 244, 0.78);
            box-shadow: var(--shadow);
            backdrop-filter: blur(12px);
        }

        .category-title {
            margin: 0 0 18px;
            font-size: 1.5rem;
            font-weight: 800;
        }

        .drink-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 16px;
        }

        .drink-card {
            overflow: hidden;
            border-radius: 22px;
            border: 1px solid rgba(93, 73, 56, 0.1);
            background: rgba(255, 255, 255, 0.72);
            transition: transform .22s ease, box-shadow .22s ease;
        }

        .drink-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 18px 30px rgba(63, 49, 37, 0.08);
        }

        .drink-card img {
            width: 100%;
            aspect-ratio: 4 / 3;
            object-fit: cover;
            display: block;
        }

        .drink-body {
            padding: 18px;
        }

        .drink-body h3 {
            margin: 0 0 8px;
            font-size: 1.08rem;
            font-weight: 800;
        }

        .drink-body p {
            margin: 0 0 14px;
            min-height: 48px;
            color: var(--muted);
            line-height: 1.8;
        }

        .drink-foot {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .price {
            font-size: 1rem;
            font-weight: 800;
            color: var(--coffee-deep);
        }

        .taste-note {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 9px 12px;
            border-radius: 999px;
            background: rgba(215, 194, 167, 0.28);
            color: var(--coffee);
            font-size: 12px;
            font-weight: 700;
        }

        .empty-menu {
            padding: 36px;
            border-radius: 30px;
            border: 1px dashed rgba(93, 73, 56, 0.22);
            background: rgba(255, 255, 255, 0.62);
            text-align: center;
            color: var(--muted);
        }

        .cafe-ambience {
            position: fixed;
            inset-inline-end: 16px;
            inset-block-end: 16px;
            z-index: 30;
        }

        .cafe-ambience__button {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 12px 16px;
            border: 1px solid rgba(93, 73, 56, 0.12);
            border-radius: 999px;
            background: rgba(255, 250, 244, 0.92);
            color: var(--ink);
            box-shadow: 0 16px 26px rgba(63, 49, 37, 0.08);
            backdrop-filter: blur(12px);
            font-weight: 800;
        }

        .cafe-ambience__icon {
            display: inline-grid;
            place-items: center;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: rgba(174, 146, 112, 0.18);
            color: var(--coffee);
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

        @media (max-width: 1024px) {
            .hero-card {
                grid-template-columns: 1fr;
            }

            .hero-visual {
                min-height: 400px;
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

            .hero-copy {
                padding: 22px;
            }

            .hero-visual {
                min-height: 320px;
                border-radius: 24px;
            }

            .brand-badge,
            .hero-note {
                position: static;
                margin: 16px;
            }

            .hero-meta {
                grid-template-columns: 1fr;
            }

            .section-head {
                flex-direction: column;
                align-items: start;
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
                        <div class="eyebrow">{{ __('cafe.menu') }}</div>
                        <h1 class="hero-title">
                            Cafe Experience
                            <span>{{ __('cafe.public_menu_intro') }}</span>
                        </h1>
                        <p class="hero-text">قائمة دافئة بتصميم أكثر أناقة وهدوءاً، تمنح المستخدم شعور المقهي الراقي من أول لحظة مع أجواء صوتية خفيفة أثناء التصفح.</p>

                        <div class="hero-meta">
                            <div class="meta-card">
                                <small>الأقسام</small>
                                <strong>{{ $categories->count() }}</strong>
                            </div>
                            <div class="meta-card">
                                <small>الأصناف</small>
                                <strong>{{ $categories->sum(fn($category) => $category->availableItems->count()) }}</strong>
                            </div>
                            <div class="meta-card">
                                <small>الأجواء</small>
                                <strong>Calm Ambient</strong>
                            </div>
                        </div>
                    </div>

                    <div class="hero-visual reveal delay-1 is-visible">
                        <div class="brand-badge">
                            <div class="brand-mark">
                                <img src="{{ asset('images/samilogo.png') }}" alt="{{ app_name() }}">
                            </div>
                            <div>
                                <small>{{ app_name() }}</small>
                                <strong>{{ __('cafe.menu') }}</strong>
                            </div>
                        </div>

                        <div class="hero-note">
                            <small>تجربة المقهي</small>
                            <strong>واجهة أهدأ، بطاقات أجمل، وتصفح أسهل للأصناف مع لمسة فاخرة مريحة.</strong>
                        </div>
                    </div>
                </section>

                <div class="section-head reveal">
                    <div>
                        <h2>Discover The Menu</h2>
                    </div>
                    <p>اختر القسم الذي يناسب مزاجك ثم استعرض الأصناف بشكل مرتب وواضح، مع تركيز أكبر على الصورة والسعر والوصف.</p>
                </div>

                @if ($categories->isNotEmpty())
                    <nav class="category-nav reveal delay-1" aria-label="Cafe categories">
                        @foreach ($categories as $category)
                            <a class="category-chip" href="#category-{{ $category->id }}">{{ $category->name }}</a>
                        @endforeach
                    </nav>
                @endif
            </div>
        </header>

        <main class="wrap menu-layout">
            @forelse ($categories as $category)
                <section class="category-section reveal" id="category-{{ $category->id }}">
                    <h2 class="category-title">{{ $category->name }}</h2>
                    <div class="drink-grid">
                        @foreach ($category->availableItems as $item)
                            <article class="drink-card">
                                <img src="{{ $item->image_url }}" alt="{{ $item->name }}">
                                <div class="drink-body">
                                    <h3>{{ $item->name }}</h3>
                                    <p>{{ $item->description }}</p>
                                    <div class="drink-foot">
                                        <span class="price">{{ number_format($item->price, 2) }}</span>
                                        <span class="taste-note">Fresh Pick</span>
                                    </div>
                                </div>
                            </article>
                        @endforeach
                    </div>
                </section>
            @empty
                <div class="empty-menu reveal">{{ __('cafe.no_menu_items') }}</div>
            @endforelse
        </main>
    </div>

    @include('frontend.cafe.partials.ambience')

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
                threshold: 0.14,
                rootMargin: '0px 0px -8% 0px'
            });

            revealItems.forEach(function (item) {
                observer.observe(item);
            });
        }());
    </script>
</body>
</html>
