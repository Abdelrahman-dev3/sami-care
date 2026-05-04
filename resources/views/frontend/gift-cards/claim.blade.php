@php
    $locale = app()->getLocale();
    $senderName = trim(($giftCard->user?->first_name ?? '') . ' ' . ($giftCard->user?->last_name ?? ''));

    $serviceName = function ($service) use ($locale) {
        $name = $service->name ?? '';

        if (is_array($name)) {
            return $name[$locale] ?? $name['ar'] ?? $name['en'] ?? reset($name) ?: '-';
        }

        return filled($name) ? $name : '-';
    };
@endphp

<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ language_direction() }}" class="theme-fs-sm">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ __('messages.gift_card_title') }} | {{ app_name() }}</title>

    <link rel="stylesheet" href="{{ mix('css/libs.min.css') }}">
    <link rel="stylesheet" href="{{ mix('css/backend.css') }}">
    <link rel="stylesheet" href="{{ asset('custom-css/frontend.css') }}">
    @if (language_direction() == 'rtl')
        <link rel="stylesheet" href="{{ asset('css/rtl.css') }}">
    @endif

    <style>
        body {
            background: #f7f3ea;
            color: #151515;
        }

        .gift-claim {
            min-height: 70vh;
            padding: 42px 0 64px;
        }

        .gift-shell {
            max-width: 980px;
            margin: 0 auto;
            display: grid;
            gap: 22px;
            grid-template-columns: minmax(0, .95fr) minmax(300px, 1.05fr);
            align-items: stretch;
        }

        .gift-ticket,
        .gift-details {
            background: #fff;
            border: 1px solid rgba(191, 148, 86, .22);
            border-radius: 8px;
            box-shadow: 0 18px 42px rgba(24, 20, 16, .08);
        }

        .gift-ticket {
            position: relative;
            overflow: hidden;
            background: #101010;
            color: #e8bf6a;
            padding: 34px 28px;
        }

        .gift-ticket::before,
        .gift-ticket::after {
            content: "";
            position: absolute;
            background: linear-gradient(90deg, #a77930, #f2d487, #a77930);
        }

        .gift-ticket::before {
            top: 88px;
            left: 0;
            width: 100%;
            height: 5px;
        }

        .gift-ticket::after {
            top: 0;
            right: 78px;
            width: 5px;
            height: 100%;
            background: linear-gradient(180deg, #a77930, #f2d487, #a77930);
        }

        .gift-ticket h1 {
            position: relative;
            margin: 0 0 74px;
            font-size: 34px;
            font-weight: 800;
            line-height: 1.2;
            z-index: 1;
        }

        .gift-ticket p {
            position: relative;
            z-index: 1;
            margin: 0 0 14px;
            font-size: 17px;
            line-height: 1.8;
        }

        .gift-ref {
            display: inline-flex;
            margin-top: 18px;
            padding: 8px 12px;
            border: 1px solid rgba(232, 191, 106, .38);
            border-radius: 6px;
            color: #fff5d7;
            direction: ltr;
        }

        .gift-details {
            padding: 28px;
        }

        .gift-details h2 {
            margin: 0 0 16px;
            font-size: 24px;
            font-weight: 800;
        }

        .gift-state {
            display: inline-flex;
            align-items: center;
            margin-bottom: 20px;
            padding: 7px 12px;
            border-radius: 6px;
            background: #f2eadb;
            color: #684716;
            font-weight: 700;
        }

        .service-list {
            display: grid;
            gap: 12px;
            margin: 20px 0;
        }

        .service-row {
            display: grid;
            gap: 16px;
            padding: 14px 16px;
            border: 1px solid #eee4d3;
            border-radius: 8px;
            background: #fffaf2;
        }

        .service-row strong {
            font-size: 16px;
        }

        .service-row span {
            color: #6e6e6e;
            white-space: nowrap;
        }

        .schedule-grid {
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            margin-top: 12px;
        }

        .schedule-field {
            display: grid;
            gap: 6px;
        }

        .schedule-field label {
            font-size: 13px;
            font-weight: 700;
            color: #5f503a;
        }

        .schedule-field select,
        .schedule-field input {
            width: 100%;
            min-height: 42px;
            border: 1px solid #decfae;
            border-radius: 8px;
            padding: 8px 10px;
            background: #fff;
        }

        .schedule-notice {
            display: none;
            margin-top: 14px;
            padding: 12px 14px;
            border-radius: 8px;
            background: #fff1df;
            color: #774a0f;
            font-weight: 700;
        }

        .gift-message {
            margin-top: 18px;
            padding: 16px;
            border-inline-start: 4px solid #bf9456;
            background: #fbf7ef;
            line-height: 1.9;
        }

        .gift-total {
            display: flex;
            justify-content: space-between;
            margin-top: 22px;
            padding-top: 18px;
            border-top: 1px solid #eee4d3;
            font-weight: 800;
            font-size: 18px;
        }

        .gift-actions {
            margin-top: 22px;
        }

        .gift-accept-btn {
            width: 100%;
            border: 0;
            border-radius: 8px;
            padding: 13px 18px;
            background: #151515;
            color: #f2d487;
            font-weight: 800;
        }

        .gift-accepted {
            margin-top: 18px;
            padding: 13px 16px;
            border-radius: 8px;
            background: #eaf7ee;
            color: #236235;
            font-weight: 700;
        }

        @media (max-width: 900px) {
            .gift-shell {
                grid-template-columns: 1fr;
            }

            .schedule-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
@include('components.frontend.progress-bar')

<div class="position-relative" style="height: 17vh;">
    @include('components.frontend.second-navbar')
</div>

<main class="gift-claim">
    <div class="container">
        <div class="gift-shell">
            <section class="gift-ticket">
                <h1>{{ __('messages.gift_card_title') }}</h1>
                <p>{{ __('messages.gift_to') }}: {{ $giftCard->recipient_name ?? '-' }}</p>
                @if($senderName !== '')
                    <p>{{ __('messages.gift_from') }}: {{ $senderName }}</p>
                @endif
                <span class="gift-ref">#{{ $giftCard->id }}</span>
            </section>

            <section class="gift-details">
                <h2>{{ __('messages.gift_service_title') }}</h2>

                <div class="gift-state">
                    {{ $isReady ? __('messages.gift_card_active') : __('messages.gift_card_inactive') }}
                </div>

                @if($isReady)
                    @if(session('success'))
                        <div class="gift-accepted">{{ session('success') }}</div>
                    @endif

                    <div class="service-list">
                        @forelse($services as $service)
                            <div
                                class="service-row gift-service-row"
                                data-service-id="{{ $service->id }}"
                                data-duration="{{ (int) ($service->duration_min ?? 30) }}"
                            >
                                <div>
                                    <strong>{{ $serviceName($service) }}</strong>
                                    <span>{{ number_format((float) ($service->default_price ?? 0), 2) }} {{ __('messages.currency') }}</span>
                                </div>

                                @if(!$giftCard->redeemed_at)
                                    <div class="schedule-grid">
                                        <div class="schedule-field">
                                            <label>الموظف</label>
                                            <select class="employee-select" required>
                                                <option value="">اختر الموظف</option>
                                            </select>
                                        </div>
                                        <div class="schedule-field">
                                            <label>التاريخ</label>
                                            <input class="date-input" type="date" min="{{ now('Asia/Riyadh')->toDateString() }}" required>
                                        </div>
                                        <div class="schedule-field">
                                            <label>الوقت</label>
                                            <select class="time-select" required>
                                                <option value="">اختر الوقت</option>
                                            </select>
                                        </div>
                                    </div>
                                @endif
                            </div>
                        @empty
                            <div class="service-row">
                                <strong>{{ __('messages.no_data_found') }}</strong>
                            </div>
                        @endforelse
                    </div>

                    @if(filled($giftCard->message))
                        <div class="gift-message">{{ $giftCard->message }}</div>
                    @endif

                    <div class="gift-total">
                        <span>{{ __('messages.total') }}</span>
                        <span>{{ number_format((float) ($giftCard->subtotal ?? 0), 2) }} {{ __('messages.currency') }}</span>
                    </div>

                    <div class="gift-actions">
                        @if($giftCard->redeemed_at)
                            <div class="gift-accepted">تم جدولة خدمات الهدية بنجاح.</div>
                        @else
                            <div class="schedule-notice" id="scheduleNotice"></div>
                            <button type="button" class="gift-accept-btn" id="scheduleGiftBtn">تأكيد موعد الهدية</button>
                        @endif
                    </div>
                @else
                    <p>{{ __('messages.payment_failed') }}</p>
                @endif
            </section>
        </div>
    </div>
</main>

@include('components.frontend.footer')
@if($isReady && !$giftCard->redeemed_at)
<script>
    const branchId = @json((int) ($giftCard->branch_id ?? 0));
    const scheduleButton = document.getElementById('scheduleGiftBtn');
    const notice = document.getElementById('scheduleNotice');
    const rows = Array.from(document.querySelectorAll('.gift-service-row'));
    const scheduleUrl = @json(route('gift.claim.schedule', ['token' => $giftCard->claim_token]));
    const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

    function showNotice(message, isError = true) {
        notice.style.display = 'block';
        notice.style.background = isError ? '#fff1df' : '#eaf7ee';
        notice.style.color = isError ? '#774a0f' : '#236235';
        notice.textContent = message;
    }

    function employeeName(employee) {
        return employee.full_name || [employee.first_name, employee.last_name].filter(Boolean).join(' ') || employee.name || `#${employee.id}`;
    }

    async function loadEmployees(row) {
        const serviceId = row.dataset.serviceId;
        const employeeSelect = row.querySelector('.employee-select');
        const timeSelect = row.querySelector('.time-select');

        employeeSelect.innerHTML = '<option value="">جاري التحميل...</option>';
        timeSelect.innerHTML = '<option value="">اختر الوقت</option>';

        if (!branchId) {
            employeeSelect.innerHTML = '<option value="">اختر الفرع أولا</option>';
            return;
        }

        const response = await fetch(`/staff?branch_id=${encodeURIComponent(branchId)}&service_id=${encodeURIComponent(serviceId)}`);
        const employees = await response.json();

        employeeSelect.innerHTML = '<option value="">اختر الموظف</option>';
        employees.forEach(employee => {
            const option = document.createElement('option');
            option.value = employee.id;
            option.textContent = employeeName(employee);
            employeeSelect.appendChild(option);
        });
    }

    async function loadTimes(row) {
        const employeeId = row.querySelector('.employee-select').value;
        const date = row.querySelector('.date-input').value;
        const duration = row.dataset.duration || 30;
        const timeSelect = row.querySelector('.time-select');

        timeSelect.innerHTML = '<option value="">اختر الوقت</option>';

        if (!employeeId || !date) {
            return;
        }

        timeSelect.innerHTML = '<option value="">جاري التحميل...</option>';
        const response = await fetch(`/available/${encodeURIComponent(date)}/${encodeURIComponent(employeeId)}?Increasing=${encodeURIComponent(duration)}`);
        const times = await response.json();

        timeSelect.innerHTML = '<option value="">اختر الوقت</option>';
        times.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
        });
    }

    rows.forEach(row => {
        row.querySelector('.employee-select').addEventListener('change', () => loadTimes(row).catch(() => showNotice('تعذر تحميل الأوقات.')));
        row.querySelector('.date-input').addEventListener('change', () => loadTimes(row).catch(() => showNotice('تعذر تحميل الأوقات.')));
    });

    scheduleButton.addEventListener('click', async () => {
        if (!branchId) {
            showNotice('لا يوجد فرع محفوظ لهذه الهدية. يرجى التواصل مع الإدارة.');
            return;
        }

        const appointments = rows.map(row => ({
            service_id: Number(row.dataset.serviceId),
            employee_id: Number(row.querySelector('.employee-select').value),
            date: row.querySelector('.date-input').value,
            time: row.querySelector('.time-select').value,
        }));

        if (appointments.some(item => !item.employee_id || !item.date || !item.time)) {
            showNotice('اختر الموظف والتاريخ والوقت لكل خدمة.');
            return;
        }

        scheduleButton.disabled = true;
        scheduleButton.textContent = 'جاري تأكيد الموعد...';

        try {
            const response = await fetch(scheduleUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': csrfToken,
                },
                body: JSON.stringify({
                    appointments,
                }),
            });

            const data = await response.json();

            if (!response.ok || data.status !== true) {
                showNotice(data.message || 'تعذر تأكيد الموعد.');
                scheduleButton.disabled = false;
                scheduleButton.textContent = 'تأكيد موعد الهدية';
                return;
            }

            showNotice('تم تأكيد موعد الهدية بنجاح.', false);
            setTimeout(() => window.location.reload(), 900);
        } catch (error) {
            showNotice('حدث خطأ أثناء تأكيد الموعد.');
            scheduleButton.disabled = false;
            scheduleButton.textContent = 'تأكيد موعد الهدية';
        }
    });

    if (branchId) {
        rows.forEach(row => loadEmployees(row).catch(() => showNotice('تعذر تحميل الموظفين.')));
    } else {
        showNotice('لا يوجد فرع محفوظ لهذه الهدية. يرجى التواصل مع الإدارة.');
    }
</script>
@endif
</body>
</html>
