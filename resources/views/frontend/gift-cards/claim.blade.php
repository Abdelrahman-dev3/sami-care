@php
    $locale = app()->getLocale();
    $senderName = trim(($giftCard->user?->first_name ?? '') . ' ' . ($giftCard->user?->last_name ?? ''));

    $displayValue = function ($value) use ($locale) {
        if (is_array($value)) {
            return $value[$locale] ?? $value['ar'] ?? $value['en'] ?? reset($value) ?: '-';
        }

        return filled($value) ? $value : '-';
    };

    $branch = $giftCard->branch;
    $branchName = $branch ? $displayValue($branch->name ?? null) : null;
    $branchDescription = $branch ? $displayValue($branch->description ?? null) : null;

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
            background: #f6f1e8;
            color: #151515;
        }

        .gift-claim {
            min-height: 70vh;
            padding: 34px 0 64px;
        }

        .gift-shell {
            max-width: 1120px;
            margin: 0 auto;
            display: grid;
            gap: 24px;
            grid-template-columns: minmax(280px, .82fr) minmax(0, 1.18fr);
            align-items: start;
        }

        .gift-intro {
            display: grid;
            gap: 16px;
        }

        .gift-ticket,
        .gift-details,
        .gift-people-card {
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
            min-height: 260px;
            padding: 34px 28px 28px;
            display: grid;
            align-content: space-between;
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
            margin: 0;
            max-width: 260px;
            font-size: clamp(28px, 4vw, 38px);
            font-weight: 800;
            line-height: 1.2;
            z-index: 1;
        }

        .gift-ref {
            display: inline-flex;
            width: fit-content;
            margin-top: 18px;
            padding: 8px 12px;
            border: 1px solid rgba(232, 191, 106, .38);
            border-radius: 6px;
            color: #fff5d7;
            direction: ltr;
            position: relative;
            z-index: 1;
        }

        .gift-people-card {
            padding: 18px;
            display: grid;
            gap: 12px;
        }

        .gift-person {
            display: grid;
            grid-template-columns: 48px minmax(0, 1fr);
            gap: 12px;
            align-items: center;
            padding: 14px;
            border: 1px solid #efe2c9;
            border-radius: 8px;
            background: #fffaf1;
        }

        .gift-person__icon {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            background: #151515;
            color: #f2d487;
            font-weight: 900;
            font-size: 18px;
        }

        .gift-person small,
        .gift-branch-card small {
            display: block;
            margin-bottom: 3px;
            color: #805d24;
            font-weight: 800;
            font-size: 12px;
        }

        .gift-person strong {
            display: block;
            color: #171717;
            font-size: 19px;
            line-height: 1.35;
            overflow-wrap: anywhere;
        }

        .gift-details {
            padding: 26px;
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

        .gift-branch-card {
            display: grid;
            gap: 4px;
            margin-bottom: 18px;
            padding: 16px 18px;
            border: 1px solid #e7d5b5;
            border-radius: 8px;
            background: linear-gradient(135deg, #fffaf1, #f2eadb);
        }

        .gift-branch-card strong {
            font-size: 20px;
            line-height: 1.35;
            color: #151515;
        }

        .gift-branch-card span {
            color: #655a4a;
            line-height: 1.7;
        }

        .service-list {
            display: grid;
            gap: 14px;
            margin: 20px 0;
        }

        .service-row {
            display: grid;
            gap: 18px;
            padding: 16px;
            border: 1px solid #eee4d3;
            border-radius: 8px;
            background: #fffaf2;
        }

        .service-row__head {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
        }

        .service-row strong {
            font-size: 16px;
            line-height: 1.5;
        }

        .service-row span {
            color: #6e6e6e;
            white-space: nowrap;
        }

        .schedule-grid {
            display: grid;
            gap: 14px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .schedule-field {
            display: grid;
            gap: 6px;
        }

        .schedule-field--employees {
            grid-column: 1 / -1;
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

        .employee-select {
            display: none;
        }

        .employee-options {
            display: grid;
            gap: 10px;
            grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
        }

        .employee-card-option {
            position: relative;
            border: 1px solid #e5d5b5;
            border-radius: 8px;
            background: #fff;
            color: #1b1b1b;
            padding: 12px;
            text-align: inherit;
            display: grid;
            grid-template-columns: 42px minmax(0, 1fr);
            gap: 10px;
            align-items: center;
            cursor: pointer;
            transition: border-color .2s ease, box-shadow .2s ease, transform .2s ease;
        }

        .employee-card-option:hover,
        .employee-card-option.is-selected {
            border-color: #22a35a;
            box-shadow: 0 10px 24px rgba(34, 163, 90, .16);
            transform: translateY(-1px);
        }

        .employee-card-option__check {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: #22a35a;
            color: #fff !important;
            font-size: 15px;
            font-weight: 800;
            line-height: 1;
            opacity: 0;
            transform: scale(.75);
            transition: opacity .2s ease, transform .2s ease;
        }

        .employee-card-option.is-selected .employee-card-option__check {
            opacity: 1;
            transform: scale(1);
        }

        .employee-card-option__avatar {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            background: #f2eadb;
            color: #684716;
            font-weight: 900;
        }

        .employee-card-option strong {
            display: block;
            font-size: 15px;
            line-height: 1.35;
            overflow-wrap: anywhere;
        }

        .employee-card-option span {
            display: block;
            margin-top: 2px;
            color: #7a705f;
            font-size: 12px;
            white-space: normal;
        }

        .employee-empty {
            padding: 12px 14px;
            border-radius: 8px;
            background: #fff1df;
            color: #774a0f;
            font-weight: 700;
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
            transition: opacity .2s ease, transform .2s ease;
        }

        .gift-accept-btn:not(:disabled):hover {
            transform: translateY(-1px);
        }

        .gift-accept-btn:disabled {
            opacity: .7;
        }

        .gift-accepted {
            margin-top: 18px;
            padding: 13px 16px;
            border-radius: 8px;
            background: #eaf7ee;
            color: #236235;
            font-weight: 700;
        }

        @media (max-width: 960px) {
            .gift-shell {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 640px) {
            .gift-claim {
                padding: 18px 0 46px;
            }

            .gift-details,
            .gift-people-card,
            .gift-ticket {
                padding: 18px;
            }

            .gift-ticket {
                min-height: 190px;
            }

            .schedule-grid {
                grid-template-columns: 1fr;
            }

            .service-row__head,
            .gift-total {
                display: grid;
                gap: 6px;
            }

            .service-row span {
                white-space: normal;
            }

            .employee-options {
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
            <div class="gift-intro">
                <section class="gift-ticket">
                    <h1>{{ __('messages.gift_card_title') }}</h1>
                    <span class="gift-ref">#{{ $giftCard->id }}</span>
                </section>

                <section class="gift-people-card" aria-label="Gift sender and recipient">
                    <div class="gift-person">
                        <div class="gift-person__icon">{{ mb_substr($giftCard->recipient_name ?? '-', 0, 1) }}</div>
                        <div>
                            <small>{{ __('messages.gift_to') }}</small>
                            <strong>{{ $giftCard->recipient_name ?? '-' }}</strong>
                        </div>
                    </div>

                    @if($senderName !== '')
                        <div class="gift-person">
                            <div class="gift-person__icon">{{ mb_substr($senderName, 0, 1) }}</div>
                            <div>
                                <small>{{ __('messages.gift_from') }}</small>
                                <strong>{{ $senderName }}</strong>
                            </div>
                        </div>
                    @endif
                </section>
            </div>

            <section class="gift-details">
                <h2>{{ __('messages.gift_service_title') }}</h2>

                <div class="gift-state">
                    {{ $isReady ? __('messages.gift_card_active') : __('messages.gift_card_inactive') }}
                </div>

                <div class="gift-branch-card">
                    <small>{{ app()->getLocale() === 'ar' ? 'الفرع المختار' : 'Selected branch' }}</small>
                    <strong>{{ $branchName ?: (app()->getLocale() === 'ar' ? 'لم يتم تحديد الفرع' : 'Branch not selected') }}</strong>
                    @if($branchDescription && $branchDescription !== '-')
                        <span>{{ $branchDescription }}</span>
                    @endif
                    @if($branch?->contact_number)
                        <span>{{ $branch->contact_number }}</span>
                    @endif
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
                                <div class="service-row__head">
                                    <strong>{{ $serviceName($service) }}</strong>
                                    <span>{{ number_format((float) ($service->default_price ?? 0), 2) }} {{ __('messages.currency') }}</span>
                                </div>

                                @if(!$giftCard->redeemed_at)
                                    <div class="schedule-grid">
                                        <div class="schedule-field schedule-field--employees">
                                            <label>{{ app()->getLocale() === 'ar' ? 'اختيار الموظف' : 'Choose staff' }}</label>
                                            <select class="employee-select" required>
                                                <option value="">{{ app()->getLocale() === 'ar' ? 'اختر الموظف' : 'Choose staff' }}</option>
                                            </select>
                                            <div class="employee-options"></div>
                                        </div>
                                        <div class="schedule-field">
                                            <label>{{ app()->getLocale() === 'ar' ? 'التاريخ' : 'Date' }}</label>
                                            <input class="date-input" type="date" min="{{ now('Asia/Riyadh')->toDateString() }}" required>
                                        </div>
                                        <div class="schedule-field">
                                            <label>{{ app()->getLocale() === 'ar' ? 'الوقت' : 'Time' }}</label>
                                            <select class="time-select" required>
                                                <option value="">{{ app()->getLocale() === 'ar' ? 'اختر الوقت' : 'Choose time' }}</option>
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
                            <div class="gift-accepted">{{ app()->getLocale() === 'ar' ? 'تم جدولة خدمات الهدية بنجاح.' : 'Gift services have been scheduled successfully.' }}</div>
                        @else
                            <div class="schedule-notice" id="scheduleNotice"></div>
                            <button type="button" class="gift-accept-btn" id="scheduleGiftBtn">{{ app()->getLocale() === 'ar' ? 'تأكيد موعد الهدية' : 'Confirm gift appointment' }}</button>
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
    const currentLang = @json(app()->getLocale());
    const labels = {
        loading: currentLang === 'ar' ? 'جاري التحميل...' : 'Loading...',
        chooseStaff: currentLang === 'ar' ? 'اختر الموظف' : 'Choose staff',
        chooseTime: currentLang === 'ar' ? 'اختر الوقت' : 'Choose time',
        chooseBranchFirst: currentLang === 'ar' ? 'اختر الفرع أولا' : 'Choose branch first',
        noEmployees: currentLang === 'ar' ? 'لا يوجد موظفون متاحون لهذه الخدمة في الفرع المختار.' : 'No staff are available for this service at the selected branch.',
        unavailable: currentLang === 'ar' ? 'غير محدد' : 'Not specified',
        rating: currentLang === 'ar' ? 'التقييم' : 'Rating',
        reviews: currentLang === 'ar' ? 'تقييم' : 'reviews',
        loadingTimesFailed: currentLang === 'ar' ? 'تعذر تحميل الأوقات.' : 'Unable to load times.',
        loadingEmployeesFailed: currentLang === 'ar' ? 'تعذر تحميل الموظفين.' : 'Unable to load staff.',
        noBranch: currentLang === 'ar' ? 'لا يوجد فرع محفوظ لهذه الهدية. يرجى التواصل مع الإدارة.' : 'No branch is saved for this gift. Please contact support.',
        fillAll: currentLang === 'ar' ? 'اختر الموظف والتاريخ والوقت لكل خدمة.' : 'Choose staff, date, and time for each service.',
        confirming: currentLang === 'ar' ? 'جاري تأكيد الموعد...' : 'Confirming appointment...',
        confirm: currentLang === 'ar' ? 'تأكيد موعد الهدية' : 'Confirm gift appointment',
        confirmFailed: currentLang === 'ar' ? 'تعذر تأكيد الموعد.' : 'Unable to confirm appointment.',
        confirmSuccess: currentLang === 'ar' ? 'تم تأكيد موعد الهدية بنجاح.' : 'Gift appointment confirmed successfully.',
        confirmError: currentLang === 'ar' ? 'حدث خطأ أثناء تأكيد الموعد.' : 'An error occurred while confirming the appointment.',
    };

    function showNotice(message, isError = true) {
        notice.style.display = 'block';
        notice.style.background = isError ? '#fff1df' : '#eaf7ee';
        notice.style.color = isError ? '#774a0f' : '#236235';
        notice.textContent = message;
    }

    function employeeName(employee) {
        return employee.full_name || [employee.first_name, employee.last_name].filter(Boolean).join(' ') || employee.name || `#${employee.id}`;
    }

    function escapeHtml(value) {
        const element = document.createElement('div');
        element.textContent = value ?? '';
        return element.innerHTML;
    }

    function employeeInitials(employee) {
        const name = employeeName(employee).trim();
        return name ? name.slice(0, 1) : '#';
    }

    function employeeMeta(employee) {
        const parts = [];

        if (Number(employee.avg_rating) > 0) {
            parts.push(`${labels.rating}: ${employee.avg_rating}`);
        }

        if (Number(employee.total_reviews) > 0) {
            parts.push(`${employee.total_reviews} ${labels.reviews}`);
        }

        if (employee.availability_start && employee.availability_end) {
            parts.push(`${employee.availability_start} - ${employee.availability_end}`);
        }

        return parts.join(' · ') || labels.unavailable;
    }

    function renderEmployeeOptions(row, employees) {
        const employeeSelect = row.querySelector('.employee-select');
        const optionsContainer = row.querySelector('.employee-options');
        optionsContainer.innerHTML = '';

        if (!employees.length) {
            optionsContainer.innerHTML = `<div class="employee-empty">${labels.noEmployees}</div>`;
            return;
        }

        employees.forEach(employee => {
            const optionButton = document.createElement('button');
            optionButton.type = 'button';
            optionButton.className = 'employee-card-option';
            optionButton.dataset.employeeId = employee.id;
            optionButton.innerHTML = `
                <span class="employee-card-option__check" aria-hidden="true">&#10003;</span>
                <span class="employee-card-option__avatar">${escapeHtml(employeeInitials(employee))}</span>
                <span>
                    <strong>${escapeHtml(employeeName(employee))}</strong>
                    <span>${escapeHtml(employeeMeta(employee))}</span>
                </span>
            `;

            optionButton.addEventListener('click', () => {
                employeeSelect.value = String(employee.id);
                optionsContainer.querySelectorAll('.employee-card-option').forEach(card => card.classList.remove('is-selected'));
                optionButton.classList.add('is-selected');
                loadTimes(row).catch(() => showNotice(labels.loadingTimesFailed));
            });

            optionsContainer.appendChild(optionButton);
        });
    }

    async function loadEmployees(row) {
        const serviceId = row.dataset.serviceId;
        const employeeSelect = row.querySelector('.employee-select');
        const timeSelect = row.querySelector('.time-select');
        const optionsContainer = row.querySelector('.employee-options');

        employeeSelect.innerHTML = `<option value="">${labels.loading}</option>`;
        timeSelect.innerHTML = `<option value="">${labels.chooseTime}</option>`;
        optionsContainer.innerHTML = `<div class="employee-empty">${labels.loading}</div>`;

        if (!branchId) {
            employeeSelect.innerHTML = `<option value="">${labels.chooseBranchFirst}</option>`;
            optionsContainer.innerHTML = `<div class="employee-empty">${labels.chooseBranchFirst}</div>`;
            return;
        }

        const response = await fetch(`/staff?branch_id=${encodeURIComponent(branchId)}&service_id=${encodeURIComponent(serviceId)}`);
        const employeesResponse = await response.json();
        const employees = Array.isArray(employeesResponse) ? employeesResponse : [];

        employeeSelect.innerHTML = `<option value="">${labels.chooseStaff}</option>`;
        employees.forEach(employee => {
            const option = document.createElement('option');
            option.value = employee.id;
            option.textContent = employeeName(employee);
            employeeSelect.appendChild(option);
        });
        renderEmployeeOptions(row, employees);
    }

    async function loadTimes(row) {
        const employeeId = row.querySelector('.employee-select').value;
        const date = row.querySelector('.date-input').value;
        const duration = row.dataset.duration || 30;
        const timeSelect = row.querySelector('.time-select');

        timeSelect.innerHTML = `<option value="">${labels.chooseTime}</option>`;

        if (!employeeId || !date) {
            return;
        }

        timeSelect.innerHTML = `<option value="">${labels.loading}</option>`;
        const response = await fetch(`/available/${encodeURIComponent(date)}/${encodeURIComponent(employeeId)}?Increasing=${encodeURIComponent(duration)}`);
        const times = await response.json();

        timeSelect.innerHTML = `<option value="">${labels.chooseTime}</option>`;
        times.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
        });
    }

    rows.forEach(row => {
        row.querySelector('.employee-select').addEventListener('change', () => loadTimes(row).catch(() => showNotice(labels.loadingTimesFailed)));
        row.querySelector('.date-input').addEventListener('change', () => loadTimes(row).catch(() => showNotice(labels.loadingTimesFailed)));
    });

    scheduleButton.addEventListener('click', async () => {
        if (!branchId) {
            showNotice(labels.noBranch);
            return;
        }

        const appointments = rows.map(row => ({
            service_id: Number(row.dataset.serviceId),
            employee_id: Number(row.querySelector('.employee-select').value),
            date: row.querySelector('.date-input').value,
            time: row.querySelector('.time-select').value,
        }));

        if (appointments.some(item => !item.employee_id || !item.date || !item.time)) {
            showNotice(labels.fillAll);
            return;
        }

        scheduleButton.disabled = true;
        scheduleButton.textContent = labels.confirming;

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
                showNotice(data.message || labels.confirmFailed);
                scheduleButton.disabled = false;
                scheduleButton.textContent = labels.confirm;
                return;
            }

            showNotice(labels.confirmSuccess, false);
            setTimeout(() => window.location.reload(), 900);
        } catch (error) {
            showNotice(labels.confirmError);
            scheduleButton.disabled = false;
            scheduleButton.textContent = labels.confirm;
        }
    });

    if (branchId) {
        rows.forEach(row => loadEmployees(row).catch(() => showNotice(labels.loadingEmployeesFailed)));
    } else {
        showNotice(labels.noBranch);
    }
</script>
@endif
</body>
</html>
