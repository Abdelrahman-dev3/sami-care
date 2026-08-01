<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ app()->getLocale() === 'ar' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ __('messagess.payment_status') }}</title>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --danger: #d74f45;
            --danger-soft: #fff1ef;
            --gold: #bf9456;
            --ink: #181818;
            --muted: #6f6f6f;
            --line: rgba(215, 79, 69, 0.16);
        }

        * { box-sizing: border-box; }

        body {
            margin: 0;
            min-height: 100vh;
            font-family: 'Tajawal', sans-serif;
            color: var(--ink);
            background:
                radial-gradient(circle at top left, rgba(191, 148, 86, 0.14), transparent 24%),
                radial-gradient(circle at bottom right, rgba(215, 79, 69, 0.16), transparent 28%),
                linear-gradient(135deg, #fbf7f2 0%, #fff 58%, #fff7f6 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 28px 18px;
        }

        .status-shell {
            width: min(760px, 100%);
            background: rgba(255, 255, 255, 0.94);
            border-radius: 32px;
            overflow: hidden;
            box-shadow: 0 28px 60px rgba(33, 24, 14, 0.12);
            border: 1px solid rgba(255,255,255,0.65);
            backdrop-filter: blur(14px);
        }

        .status-top {
            padding: 34px 34px 24px;
            background:
                radial-gradient(circle at top right, rgba(255,255,255,0.14), transparent 28%),
                linear-gradient(135deg, #201b1a 0%, #5f332d 48%, #ab5443 100%);
            color: #fff;
        }

        .status-chip {
            display: inline-flex;
            border-radius: 999px;
            padding: 8px 14px;
            font-size: 13px;
            font-weight: 800;
            background: rgba(255, 255, 255, 0.12);
            margin-bottom: 18px;
        }

        .status-title {
            margin: 0 0 10px;
            font-size: clamp(28px, 4vw, 38px);
            font-weight: 800;
        }

        .status-copy {
            margin: 0;
            line-height: 1.8;
            max-width: 560px;
            color: rgba(255, 255, 255, 0.82);
        }

        .status-body {
            padding: 28px 34px 34px;
        }

        .status-layout {
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
            background: linear-gradient(180deg, var(--danger-soft), #fff);
            border: 1px solid rgba(215, 79, 69, 0.16);
        }

        .status-icon svg {
            width: 60px;
            height: 60px;
        }

        .status-card {
            border-radius: 20px;
            border: 1px solid var(--line);
            background: linear-gradient(180deg, #fff 0%, #fff8f7 100%);
            padding: 18px 20px;
            margin-bottom: 16px;
        }

        .status-card strong {
            display: block;
            margin-bottom: 8px;
            font-size: 17px;
        }

        .status-card p {
            margin: 0;
            color: var(--muted);
            line-height: 1.8;
        }

        .status-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .status-btn {
            text-decoration: none;
            border-radius: 16px;
            padding: 14px 20px;
            font-weight: 800;
            transition: transform .2s ease, box-shadow .2s ease;
        }

        .status-btn:hover {
            transform: translateY(-2px);
        }

        .status-btn--primary {
            background: linear-gradient(135deg, var(--gold), #8f6937);
            color: #fff;
            box-shadow: 0 14px 28px rgba(191, 148, 86, 0.22);
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

            .status-layout {
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
            <div class="status-chip">{{ __('messagess.error_status') }}</div>
            <h1 class="status-title">{{ $message }}</h1>
            <p class="status-copy">
                {{ app()->getLocale() === 'ar'
                    ? 'لم تكتمل عملية الدفع هذه المرة. يمكنك مراجعة سبب المشكلة ثم المحاولة مرة أخرى بنفس الطلب بدون الحاجة لإعادة بناء السلة من البداية.'
                    : 'The payment could not be completed this time. Review the reason and try again without rebuilding your cart from scratch.' }}
            </p>
        </div>

        <div class="status-body">
            <div class="status-layout">
                <div class="status-icon" aria-hidden="true">
                    <svg viewBox="0 0 64 64" fill="none">
                        <circle cx="32" cy="32" r="29" fill="#ffffff" stroke="#d74f45" stroke-width="3"/>
                        <path d="M22 22L42 42" stroke="#d74f45" stroke-width="4" stroke-linecap="round"/>
                        <path d="M42 22L22 42" stroke="#d74f45" stroke-width="4" stroke-linecap="round"/>
                    </svg>
                </div>

                <div>
                    <div class="status-card">
                        <strong>{{ app()->getLocale() === 'ar' ? 'لم يتم تأكيد العملية' : 'Transaction was not confirmed' }}</strong>
                        <p>{{ $sub ?: (app()->getLocale() === 'ar' ? 'يرجى التأكد من وسيلة الدفع أو المحاولة بعد قليل. إذا تم خصم أي مبلغ من بطاقتك فتواصل مع الدعم بعد التحقق من البنك.' : 'Please check your payment method or try again shortly. If any amount was deducted, contact support after confirming with your bank.') }}</p>
                    </div>

                    <div class="status-actions">
                        <a class="status-btn status-btn--primary" href="{{ $redirect ?? '/' }}">{{ $redirect ? (app()->getLocale() === 'ar' ? 'العودة للدفع' : 'Back to payment') : __('messagess.back_to_home') }}</a>
                        <a class="status-btn status-btn--ghost" href="/">{{ __('messagess.back_to_home') }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
