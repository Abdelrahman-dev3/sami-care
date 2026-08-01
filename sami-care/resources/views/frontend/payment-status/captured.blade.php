<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ app()->getLocale() === 'ar' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ __('messagess.success_status') }}</title>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --success: #1d9d5c;
            --success-soft: #e8fff1;
            --gold: #bf9456;
            --ink: #181818;
            --muted: #6f6f6f;
            --line: rgba(191, 148, 86, 0.18);
        }

        * { box-sizing: border-box; }

        body {
            margin: 0;
            min-height: 100vh;
            font-family: 'Tajawal', sans-serif;
            color: var(--ink);
            background:
                radial-gradient(circle at top left, rgba(191, 148, 86, 0.15), transparent 28%),
                radial-gradient(circle at bottom right, rgba(29, 157, 92, 0.14), transparent 24%),
                linear-gradient(135deg, #faf7f1 0%, #fff 55%, #f7faf8 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 28px 18px;
        }

        .status-shell {
            width: min(760px, 100%);
            background: rgba(255, 255, 255, 0.92);
            border: 1px solid rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(14px);
            border-radius: 32px;
            overflow: hidden;
            box-shadow: 0 28px 60px rgba(33, 24, 14, 0.12);
        }

        .status-top {
            position: relative;
            padding: 34px 34px 24px;
            background:
                linear-gradient(135deg, rgba(24, 24, 24, 0.96), rgba(64, 51, 35, 0.94)),
                linear-gradient(135deg, #1c1c1c 0%, #70502d 100%);
            color: #fff;
        }

        .status-top::after {
            content: "";
            position: absolute;
            inset: auto -40px -70px auto;
            width: 210px;
            height: 210px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255,255,255,0.22), transparent 65%);
        }

        .status-chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.12);
            color: #fff;
            padding: 8px 14px;
            font-size: 13px;
            font-weight: 700;
            margin-bottom: 18px;
        }

        .status-title {
            margin: 0 0 10px;
            font-size: clamp(28px, 4vw, 38px);
            font-weight: 800;
        }

        .status-copy {
            margin: 0;
            max-width: 560px;
            color: rgba(255, 255, 255, 0.82);
            line-height: 1.8;
            font-size: 16px;
        }

        .status-body {
            padding: 28px 34px 34px;
        }

        .status-main {
            display: grid;
            gap: 22px;
            grid-template-columns: 112px minmax(0, 1fr);
            align-items: start;
        }

        .status-icon {
            width: 112px;
            height: 112px;
            border-radius: 28px;
            display: grid;
            place-items: center;
            background: linear-gradient(180deg, var(--success-soft), #fff);
            border: 1px solid rgba(29, 157, 92, 0.16);
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.9);
        }

        .status-icon svg {
            width: 62px;
            height: 62px;
        }

        .status-details {
            display: grid;
            gap: 16px;
        }

        .status-note {
            border-radius: 20px;
            border: 1px solid var(--line);
            background: linear-gradient(180deg, #fff, #fcfaf6);
            padding: 18px 20px;
        }

        .status-note strong {
            display: block;
            margin-bottom: 8px;
            font-size: 17px;
        }

        .status-note p {
            margin: 0;
            color: var(--muted);
            line-height: 1.8;
        }

        .status-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .status-pill {
            padding: 10px 14px;
            border-radius: 14px;
            background: #fff;
            border: 1px solid rgba(191, 148, 86, 0.18);
            color: #5e4a2a;
            font-weight: 700;
            font-size: 14px;
        }

        .status-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 6px;
        }

        .status-btn {
            text-decoration: none;
            border-radius: 16px;
            padding: 14px 20px;
            font-weight: 800;
            transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease;
        }

        .status-btn:hover {
            transform: translateY(-2px);
        }

        .status-btn--primary {
            background: linear-gradient(135deg, var(--gold), #8f6937);
            color: #fff;
            box-shadow: 0 14px 28px rgba(191, 148, 86, 0.24);
        }

        .status-btn--ghost {
            background: #fff;
            color: var(--ink);
            border: 1px solid rgba(24, 24, 24, 0.08);
        }

        @media (max-width: 640px) {
            .status-top,
            .status-body {
                padding: 24px 20px;
            }

            .status-main {
                grid-template-columns: 1fr;
            }

            .status-icon {
                width: 92px;
                height: 92px;
            }
        }
    </style>
</head>
<body>
    <div class="status-shell">
        <div class="status-top">
            <div class="status-chip">{{ __('messagess.success_status') }}</div>
            <h1 class="status-title">{{ __('messagess.success_status') }}</h1>
            <p class="status-copy">
                {{ app()->getLocale() === 'ar'
                    ? 'اكتملت عملية الدفع بنجاح، وتم تثبيت تفاصيل الطلب أو الحجز في حسابك. إذا كانت الرسائل النصية مفعلة فسيصل إشعار بالتفاصيل إلى الرقم المسجل.'
                    : 'Your payment has been completed successfully and your booking or order details were recorded in your account. If SMS notifications are enabled, the details will be sent to your registered phone number.' }}
            </p>
        </div>

        <div class="status-body">
            <div class="status-main">
                <div class="status-icon" aria-hidden="true">
                    <svg viewBox="0 0 64 64" fill="none">
                        <circle cx="32" cy="32" r="29" fill="#ffffff" stroke="#1d9d5c" stroke-width="3"/>
                        <path d="M19 33.5L27.5 42L45 24.5" stroke="#1d9d5c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                <div class="status-details">
                    <div class="status-note">
                        <strong>{{ app()->getLocale() === 'ar' ? 'تم حفظ العملية بنجاح' : 'Payment saved successfully' }}</strong>
                        <p>
                            {{ app()->getLocale() === 'ar'
                                ? 'يمكنك الآن العودة للرئيسية أو متابعة طلباتك من الحساب الشخصي. تم تجهيز العملية لتظهر ضمن الحجوزات أو الطلبات المكتملة بحسب نوعها.'
                                : 'You can return home or review your requests from your account. The transaction is now available in the relevant completed bookings or orders section.' }}
                        </p>
                    </div>

                    <div class="status-meta">
                        @if(!empty($invoiceId))
                            <div class="status-pill">{{ app()->getLocale() === 'ar' ? 'رقم الفاتورة:' : 'Invoice:' }} {{ (setting('inv_prefix') ?? 'INV-') . $invoiceId }}</div>
                        @endif
                        <div class="status-pill">{{ app()->getLocale() === 'ar' ? 'الحالة: مدفوع' : 'Status: Paid' }}</div>
                    </div>

                    <div class="status-actions">
                        <a class="status-btn status-btn--primary" href="/">{{ __('messagess.back_to_home') }}</a>
                        @auth
                            <a class="status-btn status-btn--ghost" href="{{ route('profile') }}">{{ app()->getLocale() === 'ar' ? 'الذهاب إلى الحساب' : 'Go to account' }}</a>
                        @endauth
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
