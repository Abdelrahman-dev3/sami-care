<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ language_direction() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ __('cafe.order_from_table', ['table' => $table->name]) }} | {{ app_name() }}</title>
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
            --latte: #dcc8af;
            --coffee: #604937;
            --coffee-deep: #402f22;
            --ink: #241d18;
            --muted: #77695b;
            --panel: rgba(255, 250, 244, 0.82);
            --white-panel: rgba(255, 255, 255, 0.78);
            --line: rgba(96, 73, 55, 0.12);
            --success-bg: #edf6ef;
            --success-text: #44624f;
            --shadow: 0 24px 60px rgba(64, 47, 34, 0.08);
            --radius-xl: 32px;
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
                radial-gradient(circle at top left, rgba(220, 200, 175, 0.34), transparent 24%),
                linear-gradient(180deg, #fcfaf6 0%, #f6f0e7 100%);
        }

        body::before {
            content: "";
            position: fixed;
            inset: 0;
            background:
                linear-gradient(90deg, rgba(255, 255, 255, 0.18), transparent 24%, transparent 76%, rgba(255, 255, 255, 0.1)),
                repeating-linear-gradient(0deg, rgba(96, 73, 55, 0.018) 0, rgba(96, 73, 55, 0.018) 1px, transparent 1px, transparent 30px);
            pointer-events: none;
            z-index: 0;
        }

        button,
        input,
        textarea {
            font: inherit;
        }

        .page-shell {
            position: relative;
            z-index: 1;
        }

        .wrap {
            width: min(1220px, calc(100% - 26px));
            margin: 0 auto;
        }

        .page-grid {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 370px;
            gap: 22px;
            padding: 24px 0 40px;
            align-items: start;
        }

        .menu-column {
            display: grid;
            gap: 22px;
        }

        .hero-card,
        .menu-section,
        .cart-pane {
            border: 1px solid rgba(96, 73, 55, 0.1);
            border-radius: var(--radius-xl);
            background: var(--panel);
            box-shadow: var(--shadow);
            backdrop-filter: blur(12px);
        }

        .hero-card {
            display: grid;
            grid-template-columns: minmax(0, 1.08fr) minmax(300px, 0.92fr);
            gap: 18px;
            padding: 18px;
        }

        .hero-copy {
            padding: 26px 28px 30px;
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
            background: rgba(220, 200, 175, 0.28);
            color: var(--coffee);
            font-size: 13px;
            font-weight: 700;
        }

        .eyebrow::before {
            content: "";
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: var(--coffee);
        }

        .hero-title {
            margin: 22px 0 12px;
            font-family: "Cormorant Garamond", serif;
            font-size: clamp(3rem, 7vw, 5.6rem);
            line-height: 0.95;
            font-weight: 700;
            letter-spacing: -0.04em;
        }

        .hero-title span {
            display: block;
            margin-top: 14px;
            color: var(--muted);
            font-family: Almarai, sans-serif;
            font-size: clamp(1rem, 1.8vw, 1.18rem);
            line-height: 1.8;
            font-weight: 400;
        }

        .table-pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            width: fit-content;
            padding: 12px 16px;
            border-radius: 999px;
            background: var(--coffee-deep);
            color: #fffaf4;
            font-weight: 800;
            margin-top: 22px;
        }

        .hero-visual {
            position: relative;
            min-height: 420px;
            border-radius: 28px;
            overflow: hidden;
            background:
                linear-gradient(180deg, rgba(36, 29, 24, 0.16), rgba(36, 29, 24, 0.34)),
                url('{{ asset('images/pages/coupon-bg.jpg') }}') center/cover no-repeat;
        }

        .hero-visual::before {
            content: "";
            position: absolute;
            inset: 18px;
            border: 1px solid rgba(255, 250, 244, 0.34);
            border-radius: 20px;
        }

        .hero-note {
            position: absolute;
            inset-inline-end: 18px;
            inset-block-end: 18px;
            max-width: 240px;
            padding: 16px 18px;
            border-radius: 20px;
            background: rgba(255, 250, 244, 0.8);
            box-shadow: 0 14px 28px rgba(64, 47, 34, 0.08);
            backdrop-filter: blur(10px);
        }

        .hero-note small {
            display: block;
            color: var(--muted);
            font-size: 12px;
            margin-bottom: 6px;
        }

        .hero-note strong {
            display: block;
            line-height: 1.8;
        }

        .menu-section {
            padding: 24px;
        }

        .section-head {
            display: flex;
            align-items: end;
            justify-content: space-between;
            gap: 18px;
            margin-bottom: 16px;
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
            margin-bottom: 18px;
        }

        .category-chip {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 10px 14px;
            border-radius: 999px;
            border: 1px solid rgba(96, 73, 55, 0.12);
            background: rgba(255, 255, 255, 0.62);
            text-decoration: none;
            font-weight: 700;
        }

        .category-block + .category-block {
            margin-top: 28px;
        }

        .category-title {
            margin: 0 0 16px;
            font-size: 1.45rem;
            font-weight: 800;
        }

        .drink-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(235px, 1fr));
            gap: 16px;
        }

        .drink-card {
            overflow: hidden;
            border-radius: 22px;
            border: 1px solid rgba(96, 73, 55, 0.1);
            background: var(--white-panel);
            transition: transform .22s ease, box-shadow .22s ease;
        }

        .drink-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 18px 28px rgba(64, 47, 34, 0.08);
        }

        .drink-card img {
            width: 100%;
            aspect-ratio: 4 / 3;
            object-fit: cover;
            display: block;
        }

        .drink-body {
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            min-height: 100%;
        }

        .drink-body h3 {
            margin: 0;
            font-size: 1.05rem;
            font-weight: 800;
        }

        .drink-body p {
            margin: 0;
            color: var(--muted);
            line-height: 1.75;
            min-height: 48px;
        }

        .drink-foot {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-top: auto;
        }

        .price {
            font-weight: 800;
            color: var(--coffee-deep);
        }

        .add-btn,
        .submit-btn {
            border: 0;
            border-radius: 999px;
            padding: 11px 16px;
            background: linear-gradient(135deg, #a88965, #bc9e7c);
            color: #fffdf9;
            font-weight: 800;
            box-shadow: 0 12px 22px rgba(96, 73, 55, 0.14);
            transition: transform .2s ease, opacity .2s ease;
        }

        .add-btn:hover,
        .submit-btn:hover {
            transform: translateY(-2px);
        }

        .submit-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }

        .cart-pane {
            position: sticky;
            top: 16px;
            padding: 24px;
        }

        .cart-pane h2 {
            margin: 0 0 10px;
            font-size: 1.5rem;
            font-weight: 800;
        }

        .cart-pane > p {
            margin: 0 0 18px;
            color: var(--muted);
            line-height: 1.8;
        }

        .success-box {
            padding: 14px 16px;
            border-radius: 18px;
            background: var(--success-bg);
            color: var(--success-text);
            border: 1px solid rgba(68, 98, 79, 0.16);
            margin-bottom: 16px;
        }

        .cart-lines {
            display: grid;
            gap: 12px;
            margin-bottom: 16px;
        }

        .cart-line,
        .empty-cart {
            padding: 16px;
            border-radius: 18px;
            border: 1px solid rgba(96, 73, 55, 0.1);
            background: rgba(255, 255, 255, 0.7);
        }

        .cart-line strong {
            display: block;
            margin-bottom: 10px;
        }

        .qty-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .qty-controls {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .qty-controls button {
            width: 34px;
            height: 34px;
            border: 1px solid rgba(96, 73, 55, 0.14);
            border-radius: 12px;
            background: #fff;
            color: var(--ink);
            font-weight: 800;
        }

        .cart-total {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 0;
            font-size: 1.18rem;
            font-weight: 800;
        }

        .order-form-grid {
            display: grid;
            gap: 10px;
        }

        .form-control {
            border-color: rgba(96, 73, 55, 0.14);
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.78);
            min-height: 48px;
            padding: 12px 14px;
        }

        .cafe-ambience {
            position: fixed;
            inset-inline-end: 16px;
            inset-block-end: 16px;
            z-index: 35;
        }

        .cafe-ambience__button {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 12px 16px;
            border: 1px solid rgba(96, 73, 55, 0.12);
            border-radius: 999px;
            background: rgba(255, 250, 244, 0.94);
            color: var(--ink);
            box-shadow: 0 16px 26px rgba(64, 47, 34, 0.08);
            backdrop-filter: blur(12px);
            font-weight: 800;
        }

        .cafe-ambience__icon {
            display: inline-grid;
            place-items: center;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: rgba(168, 137, 101, 0.18);
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

        @media (max-width: 1080px) {
            .page-grid,
            .hero-card {
                grid-template-columns: 1fr;
            }

            .cart-pane {
                position: static;
            }
        }

        @media (max-width: 720px) {
            .wrap {
                width: min(100% - 16px, 100%);
            }

            .hero-card,
            .menu-section,
            .cart-pane {
                border-radius: 24px;
            }

            .hero-card {
                padding: 12px;
            }

            .hero-copy {
                padding: 20px;
            }

            .hero-visual {
                min-height: 300px;
                border-radius: 20px;
            }

            .hero-note {
                position: static;
                margin: 16px;
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
        <div class="wrap page-grid">
            <div class="menu-column">
                <section class="hero-card">
                    <div class="hero-copy reveal is-visible">
                        <div class="eyebrow">{{ __('cafe.menu') }}</div>
                        <h1 class="hero-title">
                            Table {{ $table->name }}
                            <span>{{ __('cafe.scan_order_intro') }}</span>
                        </h1>
                        <span class="table-pill">{{ __('cafe.table') }} {{ $table->name }}</span>
                    </div>

                    <div class="hero-visual reveal delay-1 is-visible">
                        <div class="hero-note">
                            <small>Quick Order</small>
                            <strong>اختر أصنافك بهدوء، ثم أرسل الطلب مباشرة من الطاولة بخطوات بسيطة وواضحة.</strong>
                        </div>
                    </div>
                </section>

                <section class="menu-section reveal">
                    <div class="section-head">
                        <div>
                            <h2>Choose Your Order</h2>
                        </div>
                        <p>القائمة مرتبة بشكل أوضح حتى يتمكن العميل من استعراض الأصناف وإضافة الطلبات بسرعة وراحة.</p>
                    </div>

                    @if ($categories->isNotEmpty())
                        <nav class="category-nav" aria-label="Cafe categories">
                            @foreach ($categories as $category)
                                <a class="category-chip" href="#category-{{ $category->id }}">{{ $category->name }}</a>
                            @endforeach
                        </nav>
                    @endif

                    @forelse ($categories as $category)
                        <section class="category-block" id="category-{{ $category->id }}">
                            <h3 class="category-title">{{ $category->name }}</h3>
                            <div class="drink-grid">
                                @foreach ($category->availableItems as $item)
                                    <article class="drink-card">
                                        <img src="{{ $item->image_url }}" alt="{{ $item->name }}">
                                        <div class="drink-body">
                                            <h3>{{ $item->name }}</h3>
                                            <p>{{ $item->description }}</p>
                                            <div class="drink-foot">
                                                <span class="price">{{ number_format($item->price, 2) }}</span>
                                                <button class="add-btn" type="button" data-id="{{ $item->id }}" data-name="{{ $item->name }}" data-price="{{ $item->price }}">
                                                    {{ __('cafe.add') }}
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                @endforeach
                            </div>
                        </section>
                    @empty
                        <div class="empty-cart">{{ __('cafe.no_menu_items') }}</div>
                    @endforelse
                </section>
            </div>

            <aside class="cart-pane reveal delay-1">
                <h2>{{ __('cafe.your_order') }}</h2>
                <p>راجع الطلب قبل الإرسال ثم أضف الاسم أو الملاحظات إذا احتجت.</p>

                @if (session('success'))
                    <div class="success-box">{{ session('success') }}</div>
                @endif

                <form method="POST" action="{{ route('cafe.orders.store', $table->code) }}" id="order-form">
                    @csrf
                    <div id="cart-lines" class="cart-lines"></div>

                    <div class="cart-total">
                        <span>{{ __('cafe.total') }}</span>
                        <span id="cart-total">0.00</span>
                    </div>

                    <div id="hidden-items"></div>

                    <div class="order-form-grid">
                        <input class="form-control" name="customer_name" placeholder="{{ __('cafe.customer_name_optional') }}" value="{{ old('customer_name') }}">
                        <input class="form-control" name="customer_phone" placeholder="{{ __('cafe.customer_phone_optional') }}" value="{{ old('customer_phone') }}">
                        <textarea class="form-control" name="notes" rows="3" placeholder="{{ __('cafe.order_notes_optional') }}">{{ old('notes') }}</textarea>
                    </div>

                    <button class="submit-btn w-100 mt-3" type="submit" id="submit-order" disabled>{{ __('cafe.send_order') }}</button>
                </form>
            </aside>
        </div>
    </div>

    @include('frontend.cafe.partials.ambience')

    <script>
        const cart = new Map();
        const money = new Intl.NumberFormat('{{ app()->getLocale() }}', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        const cartLines = document.getElementById('cart-lines');
        const hiddenItems = document.getElementById('hidden-items');
        const totalEl = document.getElementById('cart-total');
        const submitBtn = document.getElementById('submit-order');

        document.querySelectorAll('.add-btn').forEach((button) => {
            button.addEventListener('click', () => {
                const id = button.dataset.id;
                const current = cart.get(id) || {
                    id,
                    name: button.dataset.name,
                    price: Number(button.dataset.price),
                    quantity: 0
                };

                current.quantity += 1;
                cart.set(id, current);
                renderCart();
            });
        });

        function changeQty(id, delta) {
            const current = cart.get(id);

            if (!current) {
                return;
            }

            current.quantity += delta;

            if (current.quantity <= 0) {
                cart.delete(id);
            } else {
                cart.set(id, current);
            }

            renderCart();
        }

        function renderCart() {
            const lines = Array.from(cart.values());
            cartLines.innerHTML = lines.length ? '' : `<div class="empty-cart">{{ __('cafe.empty_order') }}</div>`;
            hiddenItems.innerHTML = '';

            let total = 0;

            lines.forEach((line, index) => {
                total += line.price * line.quantity;

                const div = document.createElement('div');
                div.className = 'cart-line';
                div.innerHTML = `
                    <strong>${line.name}</strong>
                    <div class="qty-row">
                        <span>${money.format(line.price * line.quantity)}</span>
                        <span class="qty-controls">
                            <button type="button" onclick="changeQty('${line.id}', -1)">-</button>
                            <span>${line.quantity}</span>
                            <button type="button" onclick="changeQty('${line.id}', 1)">+</button>
                        </span>
                    </div>
                `;
                cartLines.appendChild(div);

                hiddenItems.insertAdjacentHTML('beforeend', `
                    <input type="hidden" name="items[${index}][id]" value="${line.id}">
                    <input type="hidden" name="items[${index}][quantity]" value="${line.quantity}">
                `);
            });

            totalEl.textContent = money.format(total);
            submitBtn.disabled = lines.length === 0;
        }

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

        renderCart();
    </script>
</body>
</html>
