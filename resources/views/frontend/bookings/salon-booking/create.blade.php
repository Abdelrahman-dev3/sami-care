<!DOCTYPE html>
<html dir="{{ app()->getLocale() == 'ar' ? 'rtl' : 'ltr' }}" class="{{ app()->getLocale() }}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{ __('messagess.booking_system') }}</title>
        <link rel="stylesheet" href="{{ mix('css/backend.css') }}">
        @if (language_direction() == 'rtl')
            <link rel="stylesheet" href="{{ asset('css/rtl.css') }}">
        @endif
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Lemonada:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <!-- Icons -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="{{ asset('pages-css/book-page-classic.css') }}">
    </head>

<body dir="{{ app()->getLocale() == 'ar' ? 'rtl' : 'ltr' }}" class="{{ app()->getLocale() }} booking-page-classic">

    @include('components.frontend.second-navbar')
    @include('components.frontend.notifications')
    <!-- Main Container -->
    <div class="container">
        <div id="wifi-loader" class="sami-wifi-loader" style="display:none;">
            <img src="{{ asset('images/samilogo.png') }}" alt="loading" class="sami-wifi-loader__logo">
        </div>

        <!-- Content -->
        <div class="content">
            <!-- Progress Bar -->
            <div class="progress-bar">
                <div class="progress-step active" data-progress-step="1">
                    <span class="iconify" data-icon="mdi-light:home" style="font-size: 29px;"></span>
                </div>
                <div class="line"></div>
                <div class="progress-step" data-progress-step="2">
                    <i class="bi bi-list-ul"></i>
                </div>
                <div class="line"></div>
                <div class="progress-step" data-progress-step="3">
                    <i class="bi bi-person"></i>
                </div>
                <div class="line"></div>
                <div class="progress-step" data-progress-step="4">
                    <i class="bi bi-calendar"></i>
                </div>
                <div class="line"></div>
                <div class="progress-step" data-progress-step="5">
                    <i class="bi bi-credit-card"></i>
                </div>
            </div>
            <!-- Step 1: Location -->
            <div id="step1" class="step-content">
                <div class="location-form">
                    <div class="form-group">
                        <label class="top-label">
                            {{ __('messagess.select_branch') }}
                        </label>
                        <br>
                        <select class="w-100-mob" name="State">
                            @foreach($States as $State)
                            <option value="{{$State->id}}">{{$State->name}}</option>
                            @endforeach
                        </select>
                        <div class="branch-cards">

                        </div>
                    </div>
                </div>
            </div>
            <!-- Step 2: Service & massage -->
            <div id="step2" class="step-content hidden">
                <label class="top-label booking-step-title">
                    {{ __('messagess.select_service_to_book') }}
                </label>
                <br>
                <div class="service-grid">

                </div>
                <div id="selectedServicesSection" class="booking-selected-services">
                    <div class="massage-cards">

                    </div>
                </div>
                <button type="button" id="cartIcon" class="booking-cart-trigger" aria-label="{{ __('messagess.add_to_cart') }}">
                    <span class="booking-cart-trigger__badge" id="cartCountBadge">0</span>
                    <i class="fa-solid fa-bag-shopping"></i>
                </button>
                <div id="cartBackdrop" class="booking-cart-backdrop"></div>
                <aside id="sideCart" class="booking-side-cart" aria-hidden="true"></aside>
            </div>
            <!-- Step 3: Staff Selection -->
            <div id="step3" class="step-content hidden">
                <label class="top-label booking-step-title">
                    {{ __('messagess.select_service_provider') }}
                </label>
                <br>
                <div class="staff-mode-toggle" id="staffModeToggle">
                    <button type="button" class="staff-mode-toggle__button is-active" data-staff-mode="any">
                        {{ app()->getLocale() === 'ar' ? 'أي موظف' : 'Any Staff' }}
                    </button>
                    <button type="button" class="staff-mode-toggle__button" data-staff-mode="specific">
                        {{ app()->getLocale() === 'ar' ? 'اختيار الموظف' : 'Choose Staff' }}
                    </button>
                </div>
                <div class="sammary-steps"></div>
                <div id="staffGrid" class="staff-grid staff-grid--hidden">

                </div>
            </div>
            <!-- Step 4: Date & Time Selection -->
            <div id="step4" class="step-content hidden">
                <label class="top-label" style="width: 58%;margin: auto;">
                    {{ __('messagess.select_time_and_date_for_services') }}
                </label>
                <div class="sammary-steps" style="margin: 40px 0;"></div>
                <div class="Date-Time-Mob" style="display: flex;justify-content: space-between;">
                    <div class="calen">
                        <label class="sub-label"> {{ __('messagess.select_preferred_day') }} </label>
                        <div class="calendar">
                            <div class="calendar-header">
                                <button class="calendar-nav" id="prevMonth">‹</button>
                                <div class="calendar-title" id="calendarTitle">{{ __('messagess.month_title') }}</div>
                                <button class="calendar-nav" id="nextMonth">›</button>
                            </div>
                            <div style="overflow: auto;">
                                <div class="calendar-days" id="calendarDays">
                                    <!-- Calendar days will be generated by JavaScript -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="times">
                        <label class="sub-label"> {{ __('messagess.select_preferred_time') }} </label>
                        <div class="time-slots">
                            <div class="time-period">
                                <div class="time-toggle">
                                  <button id="morningBtn" class="active">{{ __('messagess.morning') }}</button>
                                  <button id="eveningBtn">{{ __('messagess.afternoon') }}</button>
                                </div>
                                {{-- قبل الظهر --}}
                                <div class="time-section" id="morning-section">
                                    <div class="time-grid" id="morning-grid"></div>
                                </div>

                                {{-- بعد الظهر --}}
                                <div class="time-section mt-4" id="afternoon-section">
                                    <div class="time-grid" id="afternoon-grid"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Step 5:  Payment Selection -->
            <div id="step5" class="step-content hidden">
                <div class="booking-payment">

                </div>
            </div>

            <div class="step-content hidden2" id="summaryCard" style="height: 800px;">

            </div>
            <!-- Navigation -->
            <div class="navigation">
                <button class="btn btn-secondary" id="prevBtn" disabled>{{ __('messagess.previous') }}</button>
                <button class="btn btn-primary" id="nextBtn">{{ __('messagess.next') }}</button>
            </div>
        </div>
    </div>
    <div class="position-relative" style="height: 17vh;"></div>
    <script>
        const translations = { next: "{{ __('messagess.next') }}", complete: "{{ __('messagess.complete') }}"};

        // Application State
        let currentStep = 1;
        let maxSteps = 5;

        let selectedData = {
            branch: null,
            branchName: null,
            services: []
        };

        let fanaltotal = 0;

        const summaryCard = document.getElementById('summaryCard');

        // DOM Elements
        const steps = document.querySelectorAll('.step');
        const stepContents = document.querySelectorAll('.step-content');
        const progressSteps = document.querySelectorAll('.progress-step');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const currentLang = "{{ app()->getLocale() }}";
        const notAvailableMessage = @json(__('messagess.not_available_now'));
        let activeSubId = null;
        let activeStaffId = null;

        // Initialize Calendar
        let currentDate = new Date();

        const prevBn = document.getElementById('prevMonth');
        const nextBn = document.getElementById('nextMonth');

        prevBn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            generateCalendar(activeSubId, activeStaffId);
        });

        nextBn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            generateCalendar(activeSubId, activeStaffId);
        });


        let selectedDate = null;
        const cartIcon = document.getElementById('cartIcon');
        const sideCart = document.getElementById('sideCart');
        const cartBackdrop = document.getElementById('cartBackdrop');
        const cartCountBadge = document.getElementById('cartCountBadge');
        const staffModeButtons = document.querySelectorAll('[data-staff-mode]');
        let cartAutoCloseTimer = null;
        let lastAddedSubServiceKey = null;
        let staffSelectionMode = 'any';
        const staffOptionsCache = new Map();

        const cartTranslations = {
            title: currentLang === 'ar' ? 'سلة الحجز' : 'Booking Cart',
            subtitle: currentLang === 'ar' ? 'الخدمات المختارة' : 'Selected Services',
            emptyTitle: currentLang === 'ar' ? 'السلة ما زالت فارغة' : 'Your cart is still empty',
            emptyText: currentLang === 'ar' ? 'اختر خدمة فرعية من البطاقات وسيتم إضافتها هنا تلقائيًا.' : 'Choose a sub-service card and it will appear here instantly.',
            total: currentLang === 'ar' ? 'الإجمالي' : 'Total',
            duration: currentLang === 'ar' ? 'المدة' : 'Duration',
            minutes: currentLang === 'ar' ? 'دقيقة' : 'min',
            remove: currentLang === 'ar' ? 'حذف' : 'Remove'
        };

        const bookingFlowContent = currentLang === 'ar'
            ? {
                stages: {
                    1: { eyebrow: 'المرحلة 1 من 3', title: 'اختاري الفرع المناسب', hint: 'ابدئي باختيار الفرع، وبعدها نكمّل باقي الحجز بشكل مرتب.' },
                    2: { eyebrow: 'المرحلة 2 من 3', title: 'اختاري الخدمة والمختصة', hint: 'ضيفي الخدمات التي تريدينها ثم حددي المختصة المناسبة لكل خدمة.' },
                    3: { eyebrow: 'المرحلة 3 من 3', title: 'حددي الموعد وراجعي الحجز', hint: 'اختاري اليوم والوقت، ثم راجعي الملخص وأكملي بالطريقة المناسبة لك.' }
                },
                microSteps: { 1: 'أنت الآن في اختيار الفرع.', 2: 'أنت الآن في اختيار الخدمات.', 3: 'أنت الآن في اختيار المختصة.', 4: 'أنت الآن في اختيار الموعد ومراجعة الحجز.' },
                buttons: { 1: 'التالي: الخدمات', 2: 'التالي: اختيار المختصة', 3: 'التالي: الموعد', 4: 'مراجعة الملخص' }
            }
            : {
                stages: {
                    1: { eyebrow: 'Step 1 of 3', title: 'Choose your branch', hint: 'Start by picking the branch that suits you best.' },
                    2: { eyebrow: 'Step 2 of 3', title: 'Choose service and staff', hint: 'Pick the services you want, then assign a staff member to each one.' },
                    3: { eyebrow: 'Step 3 of 3', title: 'Choose time and confirm', hint: 'Select the day and time, then review your booking summary.' }
                },
                microSteps: { 1: 'You are choosing the branch.', 2: 'You are choosing services.', 3: 'You are choosing the staff member.', 4: 'You are choosing the date and reviewing the booking.' },
                buttons: { 1: 'Next: services', 2: 'Next: staff', 3: 'Next: date', 4: 'Review summary' }
            };

        function getVisualStage(step = currentStep) {
            if (step === 1) return 1;
            if (step === 2 || step === 3) return 2;
            return 3;
        }

        function getFirstInternalStepForStage(stage) {
            if (stage === 1) return 1;
            if (stage === 2) return 2;
            return 4;
        }

        function updateJourneyUI() {
            const visualStage = getVisualStage();
            visualStageButtons.forEach((stageButton) => {
                const stageNumber = Number(stageButton.dataset.visualStep);
                stageButton.classList.remove('active', 'completed');
                if (stageNumber < visualStage) {
                    stageButton.classList.add('completed');
                } else if (stageNumber === visualStage) {
                    stageButton.classList.add('active');
                }
            });
            if (currentStageEyebrow) currentStageEyebrow.textContent = bookingFlowContent.stages[visualStage].eyebrow;
            if (currentStageTitle) currentStageTitle.textContent = bookingFlowContent.stages[visualStage].title;
            if (currentStageHint) currentStageHint.textContent = `${bookingFlowContent.stages[visualStage].hint} ${bookingFlowContent.microSteps[currentStep]}`;
        }

        function closeBookingSummary() {
            summaryCard.classList.remove('show');
            summaryCard.classList.add('hidden');
        }

        function getSelectedSubServices() {
            return (selectedData.services || []).flatMap((service) =>
                (service.subServices || []).map((sub) => ({
                    ...sub,
                    parentId: service.id,
                    parentName: service.name,
                    parentImage: service.image
                }))
            );
        }

        function normalizeStaffMember(staff = {}) {
            const fullName = staff.full_name || `${staff.first_name || ''} ${staff.last_name || ''}`.trim();

            return {
                id: staff.id,
                name: fullName || (currentLang === 'ar' ? 'موظف' : 'Staff')
            };
        }

        function getStaffCacheKey(branchId, subServiceId) {
            return `${branchId}-${subServiceId}`;
        }

        function getCachedStaffOptions(branchId, subServiceId) {
            return staffOptionsCache.get(getStaffCacheKey(branchId, subServiceId)) || [];
        }

        function fetchStaffOptions(branchId, subServiceId) {
            if (!branchId || !subServiceId) {
                return Promise.resolve([]);
            }

            const cacheKey = getStaffCacheKey(branchId, subServiceId);
            if (staffOptionsCache.has(cacheKey)) {
                return Promise.resolve(staffOptionsCache.get(cacheKey));
            }

            return fetch(`/staff?branch_id=${branchId}&service_id=${subServiceId}`)
                .then(response => response.json())
                .then(data => {
                    const normalizedStaff = Array.isArray(data)
                        ? data.map(normalizeStaffMember).filter(staff => staff.id)
                        : [];

                    staffOptionsCache.set(cacheKey, normalizedStaff);
                    return normalizedStaff;
                })
                .catch(error => {
                    console.error('Error fetching staff options:', error);
                    return [];
                });
        }

        function updateStaffModeToggleUI() {
            staffModeButtons.forEach((button) => {
                button.classList.toggle('is-active', button.dataset.staffMode === staffSelectionMode);
            });
        }

        async function assignDefaultStaffToSubService(parentServiceId, subServiceId) {
            const parentService = (selectedData.services || []).find(service => String(service.id) === String(parentServiceId));
            if (!parentService) return false;

            const currentSub = (parentService.subServices || []).find(sub => String(sub.id) === String(subServiceId));
            if (!currentSub || currentSub.staffId) return Boolean(currentSub?.staffId);

            const staffOptions = await fetchStaffOptions(selectedData.branch, subServiceId);
            if (staffOptions.length === 0) {
                return false;
            }

            currentSub.staffId = staffOptions[0].id;
            currentSub.staffName = staffOptions[0].name;
            return true;
        }

        async function ensureAnyStaffAssignments() {
            if (staffSelectionMode !== 'any' || !selectedData.branch) {
                return;
            }

            const assignmentTasks = [];
            (selectedData.services || []).forEach((service) => {
                (service.subServices || []).forEach((sub) => {
                    assignmentTasks.push(assignDefaultStaffToSubService(service.id, sub.id));
                });
            });

            await Promise.all(assignmentTasks);
            updateSummarySteps();
        }

        async function preloadSpecificStaffOptions() {
            if (staffSelectionMode !== 'specific' || !selectedData.branch) {
                return;
            }

            const loadTasks = [];
            (selectedData.services || []).forEach((service) => {
                (service.subServices || []).forEach((sub) => {
                    loadTasks.push(fetchStaffOptions(selectedData.branch, sub.id));
                });
            });

            await Promise.all(loadTasks);
            updateSummarySteps();
        }

        function setStaffSelectionMode(mode) {
            staffSelectionMode = mode === 'specific' ? 'specific' : 'any';

            if (staffSelectionMode === 'any') {
                (selectedData.services || []).forEach((service) => {
                    (service.subServices || []).forEach((sub) => {
                        sub.staffId = null;
                        sub.staffName = '';
                    });
                });
            }

            updateStaffModeToggleUI();
            updateSummarySteps();

            if (staffSelectionMode === 'any') {
                void ensureAnyStaffAssignments();
                return;
            }

            void preloadSpecificStaffOptions();
        }

        function calculateFinalTotal() {
            fanaltotal = getSelectedSubServices().reduce((sum, sub) => sum + Number(sub.price || 0), 0);
            return fanaltotal;
        }

        function updateCartBadge(count = getSelectedSubServices().length) {
            if (!cartCountBadge) return;

            cartCountBadge.textContent = count;
            cartCountBadge.classList.remove('is-pop');
            void cartCountBadge.offsetWidth;
            cartCountBadge.classList.add('is-pop');
        }

        function setSideCartState(isOpen) {
            if (!sideCart || !cartBackdrop) return;

            sideCart.classList.toggle('open', isOpen);
            cartBackdrop.classList.toggle('show', isOpen);
            sideCart.setAttribute('aria-hidden', String(!isOpen));
        }

        function closeSideCart() {
            clearTimeout(cartAutoCloseTimer);
            setSideCartState(false);
        }

        function openSideCart(autoClose = false) {
            if (!sideCart) return;

            setSideCartState(true);
            sideCart.classList.remove('is-bumping');
            void sideCart.offsetWidth;
            sideCart.classList.add('is-bumping');

            if (autoClose) {
                clearTimeout(cartAutoCloseTimer);
                cartAutoCloseTimer = setTimeout(() => {
                    if (currentStep === 2) {
                        closeSideCart();
                    }
                }, 2600);
            }
        }

        function removeSelectedSubService(parentId, subServiceId) {
            const parentGroup = (selectedData.services || []).find((service) => String(service.id) === String(parentId));
            if (!parentGroup) return;

            parentGroup.subServices = (parentGroup.subServices || []).filter((sub) => String(sub.id) !== String(subServiceId));

            if ((parentGroup.subServices || []).length === 0) {
                selectedData.services = selectedData.services.filter((service) => String(service.id) !== String(parentId));
            }

            const serviceCard = document.querySelector(`.massage-card[data-massage="${subServiceId}"][data-main="${parentId}"]`);
            if (serviceCard) {
                serviceCard.classList.remove('selected');
            }

            calculateFinalTotal();
            updateSummarySteps();
            updateUI();

            if (getSelectedSubServices().length === 0) {
                closeSideCart();
            }
        }

        function renderSideCart() {
            if (!sideCart) return;

            const items = getSelectedSubServices();
            const total = calculateFinalTotal();

            updateCartBadge(items.length);

            if (items.length === 0) {
                sideCart.innerHTML = `
                    <div class="booking-side-cart__header">
                        <div>
                            <span class="booking-side-cart__eyebrow">${cartTranslations.title}</span>
                            <h3>${cartTranslations.subtitle}</h3>
                        </div>
                        <button type="button" class="booking-side-cart__close" data-close-cart>
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div class="booking-side-cart__empty">
                        <div class="booking-side-cart__empty-icon">
                            <i class="fa-solid fa-basket-shopping"></i>
                        </div>
                        <h4>${cartTranslations.emptyTitle}</h4>
                        <p>${cartTranslations.emptyText}</p>
                    </div>
                `;
                return;
            }

            sideCart.innerHTML = `
                <div class="booking-side-cart__header">
                    <div>
                        <span class="booking-side-cart__eyebrow">${cartTranslations.title}</span>
                        <h3>${cartTranslations.subtitle}</h3>
                    </div>
                    <button type="button" class="booking-side-cart__close" data-close-cart>
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div class="booking-side-cart__body">
                    ${items.map((item) => {
                        const itemKey = `${item.parentId}-${item.id}`;
                        return `
                            <article class="booking-side-cart__item ${lastAddedSubServiceKey === itemKey ? 'is-new' : ''}">
                                <div class="booking-side-cart__thumb">
                                    <img src="${item.parentImage || 'https://via.placeholder.com/72'}" alt="${item.parentName}">
                                </div>
                                <div class="booking-side-cart__content">
                                    <div class="booking-side-cart__top">
                                        <div>
                                            <span class="booking-side-cart__parent">${item.parentName || ''}</span>
                                            <h4>${item.name}</h4>
                                        </div>
                                        <button
                                            type="button"
                                            class="booking-side-cart__remove"
                                            data-remove-subservice="true"
                                            data-parent-id="${item.parentId}"
                                            data-subservice-id="${item.id}"
                                            aria-label="${cartTranslations.remove}"
                                        >
                                            <i class="fa-regular fa-trash-can"></i>
                                        </button>
                                    </div>
                                    <div class="booking-side-cart__meta">
                                        <span><i class="fa-regular fa-clock"></i> ${cartTranslations.duration}: ${item.duration || 0} ${cartTranslations.minutes}</span>
                                        <strong>${Number(item.price || 0)} 
                                            <svg class="riyal-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" width="16" height="18" style="display:inline-block;vertical-align:-0.125em">
                                                <path fill="currentColor" d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path>
                                                <path fill="currentColor" d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path>
                                            </svg>
                                        </strong>
                                    </div>
                                </div>
                            </article>
                        `;
                    }).join('')}
                </div>
                <div class="booking-side-cart__footer">
                    <div class="booking-side-cart__total">
                        <span>${cartTranslations.total}</span>
                        <strong>${total} <svg class="riyal-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" width="16" height="18" style="display:inline-block;vertical-align:-0.125em">
                                <path fill="currentColor" d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path>
                                <path fill="currentColor" d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path>
                            </svg>
                        </strong>
                    </div>
                </div>
            `;

            lastAddedSubServiceKey = null;
        }

        if (cartIcon) {
            cartIcon.addEventListener('click', () => {
                const isOpen = sideCart.classList.contains('open');
                setSideCartState(!isOpen);
            });
        }

        if (cartBackdrop) {
            cartBackdrop.addEventListener('click', closeSideCart);
        }

        if (sideCart) {
            sideCart.addEventListener('click', (event) => {
                const closeButton = event.target.closest('[data-close-cart]');
                if (closeButton) {
                    closeSideCart();
                    return;
                }

                const removeButton = event.target.closest('[data-remove-subservice]');
                if (removeButton) {
                    removeSelectedSubService(removeButton.dataset.parentId, removeButton.dataset.subserviceId);
                }
            });
        }

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeSideCart();
            }
        });

        function initializeApp() {

            const urlParams = new URLSearchParams(window.location.search);
            const branchId = urlParams.get('branch_id');

            if(branchId) {
                selectedData.branch = branchId;
                currentStep = 2;
                updateUI();
                fetchServiceGroups();
            }

            updateUI();
            setupEventListeners();
            setupAutoNavigation();
            renderSideCart();
        }

        function updateUI() {
            // Update progress bar
            progressSteps.forEach((step, index) => {
                const stepNumber = parseInt(step.dataset.progressStep);
                step.classList.remove('active', 'completed');

                if (stepNumber < currentStep) {
                    step.classList.add('completed');
                } else if (stepNumber === currentStep) {
                    step.classList.add('active');
                }
            });

            // Update step content
            stepContents.forEach((content, index) => {
                content.classList.toggle('hidden', index + 1 !== currentStep);
            });

            // Update navigation buttons
            prevBtn.disabled = currentStep === 1;
            nextBtn.textContent = currentStep === maxSteps ? translations.complete : translations.next;
            fetchbranch({{$first_States->id}})

            if (currentStep === 3) {
                updateStaffModeToggleUI();
                updateSummarySteps();

                if (staffSelectionMode === 'any') {
                    void ensureAnyStaffAssignments();
                } else {
                    void preloadSpecificStaffOptions();
                }
            }
        }

        // Add this to your setupEventListeners() function
        document.querySelectorAll('.progress-step').forEach((step, index) => {
            step.addEventListener('click', () => {
                if (index + 1 <= currentStep || index === 0) {
                    currentStep = index + 1;
                    updateUI();
                }
            });
        });

        function setupEventListeners() {
            // Navigation buttons
            prevBtn.addEventListener('click', () => {
                if (currentStep > 1) {
                    currentStep--;
                    updateUI();
                }
            });

            nextBtn.addEventListener('click', () => {
                if (validateCurrentStep()) {
                    if (currentStep < maxSteps) {
                        currentStep++;
                        updateUI();
                    } else {
                        // completeBooking();
                    }
                }
            });

            staffModeButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    if (button.dataset.staffMode === staffSelectionMode) {
                        return;
                    }

                    setStaffSelectionMode(button.dataset.staffMode);
                });
            });
        }

        const morningBtn = document.getElementById('morningBtn');
        const eveningBtn = document.getElementById('eveningBtn');
        const morningTimes = document.getElementById('morning-grid');
        const eveningTimes = document.getElementById('afternoon-grid');

        morningBtn.addEventListener('click', () => {
          morningBtn.classList.add('active');
          eveningBtn.classList.remove('active');
          morningTimes.style.display = 'flex';
          eveningTimes.style.display = 'none';
        });

        eveningBtn.addEventListener('click', () => {
          eveningBtn.classList.add('active');
          morningBtn.classList.remove('active');
          eveningTimes.style.display = 'flex';
          morningTimes.style.display = 'none';
        });

        function showLoader() {
            document.getElementById("wifi-loader").style.display = "flex";
        }

        function hideLoader() {
            document.getElementById("wifi-loader").style.display = "none";
        }
        
        function showUnavailableMessage() {
            if (typeof createNotify === 'function') {
                createNotify({ title: '', desc: notAvailableMessage });
                return;
            }
            alert(notAvailableMessage);
        }
        function fetchbranch(cityId) {
            showLoader();
            fetch(`/branchs/${cityId}`)
                .then(response => response.json())
                .then(data => {
                    const branchsContainer = document.querySelector('.branch-cards');
                    branchsContainer.innerHTML = '';

                    const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';

                    data.forEach(branch => {
                        console.log(branch)
                        const card = document.createElement('div');
                        card.className = "branch-card";

                        card.innerHTML = `
                          <label class="branch-option">
                            <input type="radio" name="branch" value="${branch.id}" hidden>

                            <div class="branch-image">
                                <img src="${branch.feature_image}">
                            </div>

                            <div class="branch-info">
                              <h5 class="branch-name">${branch.name[lang]}</h5>
                              <p style="font-size: 11px;margin-top: 15px;font-weight: 600;">${branch.description}</p>
                            </div>
                          </label>
                        `;

                        card.addEventListener('click', (e) => {
                            document.querySelectorAll('.branch-card').forEach(c => c.classList.remove('selected'));
                            card.classList.add('selected');
                            selectedData = {
                                branch: null,
                                branchName: null,
                                services: []
                            };
                            selectedData.branch = branch.id;
                            selectedData.branchName = branch.name[lang];
                            setTimeout(() => {
                                if (currentStep === 1 && validateCurrentStep()) {
                                    currentStep = 2;
                                    updateUI();
                                    fetchServiceGroups();
                                }
                            }, 300);
                        });
                        branchsContainer.appendChild(card);
                    });
                    hideLoader()
                })
                .catch(error => {
                    console.error('Error fetching services:', error);
                       hideLoader()
                });
        }

        function scrollToSelectedServices() {
            const selectedServicesSection = document.getElementById('selectedServicesSection');
            if (!selectedServicesSection) return;

            window.requestAnimationFrame(() => {
                selectedServicesSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }

        function fetchServiceGroups() {
            showLoader();
            fetch(`/service-groups`)
                .then(response => response.json())
                .then(data => {
                    const serviceGrid = document.querySelector('.service-grid');
                    serviceGrid.innerHTML = '';
                    const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
                    const urlParams = new URLSearchParams(window.location.search);
                    const mainServiceId = urlParams.get('mainService_id');
                    data.forEach(service => {
                        const isFrozen = Number(service.is_frozen) === 1;
                        let serviceName = '';
                        try {
                            const parsedName = JSON.parse(service.name);
                            serviceName = parsedName[lang] || parsedName['en'];
                        } catch (e) {
                            serviceName = service.name;
                        }

                        const card = document.createElement('div');
                        card.className = 'service-card';
                        if (isFrozen) {
                            card.classList.add('is-frozen');
                        }
                        card.dataset.service = service.id;
                        card.innerHTML = `
                            <img src="${service.image}" alt="${serviceName}" class="service-card__image">
                            <h4 class="service-card__title">${serviceName}</h4>`;

                        const handleServiceGroupSelection = (shouldScroll = true) => {
                            if (isFrozen) {
                                showUnavailableMessage();
                                return;
                            }

                            document.querySelectorAll('.service-card').forEach(c => c.classList.remove('selected'));
                            card.classList.add('selected');

                            const exists = selectedData.services.some(s => s.id === service.id);
                            if (!exists) {
                                selectedData.services.push({
                                    id: service.id,
                                    name: serviceName,
                                    image: service.image,
                                    subServices: []
                                });
                            }

                            fetchServicesByGroup(service.id, shouldScroll);
                        };

                        card.addEventListener('click', () => handleServiceGroupSelection(true));
                        serviceGrid.appendChild(card);
                        if(mainServiceId && parseInt(mainServiceId) == service.id){
                            handleServiceGroupSelection(false);
                        }
                    });
                    hideLoader();
                })
                .catch(error => {
                    console.error('Error fetching services:', error);
                    hideLoader();
                });
        }

        function fetchServicesByGroup(serviceGroupId, shouldScroll = false) {
            showLoader();
            return fetch(`/services/${serviceGroupId}/${selectedData.branch}/bookings`)
                .then(response => response.json())
                .then(data => {
                    const massageContainer = document.querySelector('.massage-cards');
                    const selectedServicesSection = document.getElementById('selectedServicesSection');
                    massageContainer.innerHTML = '';
                    const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';

                    if (!document.querySelector('#serviceSearch')) {
                        const searchWrapper = document.createElement('div');
                        searchWrapper.className = 'search-box';

                        const searchInput = document.createElement('input');
                        searchInput.type = 'text';
                        searchInput.id = 'serviceSearch';
                        searchInput.placeholder = lang === 'ar' ? 'ابحث عن الخدمة...' : 'Search service...';

                        searchWrapper.appendChild(searchInput);
                        selectedServicesSection.insertBefore(searchWrapper, massageContainer);

                        searchInput.addEventListener('input', function () {
                            const query = this.value.toLowerCase();
                            document.querySelectorAll('.massage-card').forEach(card => {
                                const name = card.querySelector('.massage-name').textContent.toLowerCase();
                                card.style.display = name.includes(query) ? 'block' : 'none';
                            });
                        });
                    }
                    const urlParams = new URLSearchParams(window.location.search);
                    const subServiceId = urlParams.get('subService_id');
                    data.forEach(service => {
                        const isFrozen = Number(service.is_frozen) === 1;
                        let serviceName = '';
                        let serviceLocation = '';

                        if (typeof service.name === 'object') {
                            serviceName = service.name[lang] || service.name['en'];
                        } else {
                            try {
                                const parsedName = JSON.parse(service.name);
                                serviceName = parsedName[lang] || parsedName['en'];
                            } catch (e) {
                                serviceName = service.name;
                            }
                        }

                        try {
                            const parsedLocation = JSON.parse(service.location);
                            serviceLocation = parsedLocation[lang] || parsedLocation['en'];
                        } catch (e) {
                            serviceLocation = service.location;
                        }

                        const card = document.createElement('div');
                        card.className = 'massage-card';
                        if (isFrozen) {
                            card.classList.add('is-frozen');
                        }
                        card.dataset.massage = service.id;
                        card.dataset.main = serviceGroupId;

                        card.innerHTML = `
                            ${service.mostWanted ? `<div class="most-wanted">MOST WANTED</div>` : ''}
                            <div class="massage-name">${serviceName}</div>
                            ${service.description[lang] ? `
                                <div class="massage-location">
                                    <label style="font-size:16px;color: gray;line-height: 1.5;font-style: normal;" class="tooltip-label">
                                        ${lang === 'ar' ? 'الوصف' : 'Description'}
                                        <i class="fas fa-question-circle"></i>
                                        <span class="tooltip-text">${service.description[lang]}</span>
                                    </label>
                                </div>` : ""}
                            <div class="massage-meta">
                        @if($showDuration)
                                <div class="massage-meta__item massage-duration">
                                    <span class="massage-meta__label">${lang === 'ar' ? 'المده:' : 'Duration:'}</span>
                                    <span class="massage-meta__value">${service.duration_min} ${lang === 'ar' ? 'د' : 'M'}</span>
                                </div>
                        @endif
                                <div class="massage-meta__item massage-price">
                                    <span class="massage-meta__label">${lang === 'ar' ? 'السعر:' : 'Price:'}</span>
                                    <span class="massage-meta__value">${parseInt(service.default_price)} 
                                        <svg class="riyal-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" width="16" height="18" style="display:inline-block;vertical-align:-0.125em">
                                            <path fill="currentColor" d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path>
                                            <path fill="currentColor" d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path>
                                        </svg></span>
                                </div>
                            </div>
                        `;
                        card.addEventListener('click', (e) => {
                            if (isFrozen) {
                                showUnavailableMessage();
                                return;
                            }
                            if (e.target.classList.contains('massage-book-btn')) return;

                            card.classList.toggle('selected');

                            let parentGroup = selectedData.services.find(s => s.id == serviceGroupId);

                            if (!parentGroup) {
                                selectedData.services.push({
                                    id: serviceGroupId,
                                    name: serviceName,
                                    image: service.image,
                                    subServices: []
                                });
                                parentGroup = selectedData.services.find(s => s.id == serviceGroupId);
                            }

                            if (!parentGroup.subServices) parentGroup.subServices = [];

                            const exists = parentGroup.subServices.find(sub => sub.id === service.id);

                            if (exists) {
                                parentGroup.subServices = parentGroup.subServices.filter(sub => sub.id !== service.id);
                            } else {
                                lastAddedSubServiceKey = `${serviceGroupId}-${service.id}`;
                                parentGroup.subServices.push({
                                    id: service.id,
                                    name: serviceName,
                                    duration: service.duration_min,
                                    price: parseInt(service.default_price)
                                });
                            }

                            updateSummarySteps();

                        });
                        massageContainer.appendChild(card);
                        if(subServiceId && parseInt(subServiceId) == service.id){
                            setTimeout(() => {
                                card.click();
                            }, 300);
                        }
                    });
                    if (shouldScroll) {
                        scrollToSelectedServices();
                    }
                    hideLoader();
                })
                .catch(error => {
                    console.error('Error fetching services:', error);
                    hideLoader();
                });
        }

        function fetchStaffMembers(branchId , subserve) {
            showLoader();
            fetch(`/staff?branch_id=${branchId}&service_id=${subserve}`)
                .then(response => response.json())
                .then(data => {
                    const staffGrid = document.getElementById('staffGrid');
                    if (!staffGrid) {
                        console.error('ما في عنصر بالـ id = "staffGrid"');
                        return;
                    }
                    staffGrid.innerHTML = '';

                    if (data.length === 0) {
                        const noStaffMessage = document.createElement('div');
                        noStaffMessage.className = 'no-staff-message';
                        noStaffMessage.innerText = 'لا يوجد موظفين متاحين لهذه الخدمة';
                        staffGrid.appendChild(noStaffMessage);
                        hideLoader();
                        return;
                    }


                    data.forEach(staff => {
                        const card = document.createElement('div');
                        card.className = 'staff-card';
                        card.dataset.staff = staff.id;
                        card.dataset.subserve = subserve;
                        const fullName = staff.full_name || `${staff.first_name || ''} ${staff.last_name || ''}`;
                        const initials = fullName.trim().split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase();

                        card.innerHTML = `
                            <div class="staff-avatar" style="background: linear-gradient(45deg, ${staff.color1 || '#4a90e2'}, ${staff.color2 || '#7b68ee'}); display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">
                                ${initials}
                            </div>
                            <div class="staff-name">${fullName}</div>
                        `;

                        card.addEventListener('click', () => {
                            document.querySelectorAll('.staff-card').forEach(c => c.classList.remove('selected'));
                            card.classList.add('selected');

                            let parentService = selectedData.services.find(s =>
                                s.subServices.some(subSrv => subSrv.id === subserve)
                            );

                            if (parentService) {
                                let currentSub = parentService.subServices.find(subSrv => subSrv.id === subserve);
                                if (currentSub) {
                                    currentSub.staffId = staff.id;
                                    currentSub.staffName = fullName;
                                    updateSummarySteps();
                                }
                            }

                            let count = 0;
                            selectedData.services.forEach(s => count += s.subServices.length);

                            if (count === 1) {
                                currentStep = 4;
                                updateUI();

                                const firstSummaryCard = document.querySelector('.summary-card');
                                if (firstSummaryCard) {
                                    firstSummaryCard.classList.add('selected-card');
                                    generateCalendar(subserve, staff.id);
                                }
                            }
                        });

                        staffGrid.appendChild(card);
                    });
                    hideLoader();
                })
                .catch(error => {
                    console.error('Error fetching staff:', error);
                    hideLoader();
                });
        }

        function generateCalendar(subserve = null , staffId = null) {
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();

            // Update calendar title
            const months = [
                '{{ __("messagess.january") }}',
                '{{ __("messagess.february") }}',
                '{{ __("messagess.march") }}',
                '{{ __("messagess.april") }}',
                '{{ __("messagess.may") }}',
                '{{ __("messagess.june") }}',
                '{{ __("messagess.july") }}',
                '{{ __("messagess.august") }}',
                '{{ __("messagess.september") }}',
                '{{ __("messagess.october") }}',
                '{{ __("messagess.november") }}',
                '{{ __("messagess.december") }}'
            ];
            document.getElementById('calendarTitle').textContent = `${months[month]} ${year}`;

            // Days of week names
            const weekDays = [
                '{{ __("messagess.sunday") }}',
                '{{ __("messagess.monday") }}',
                '{{ __("messagess.tuesday") }}',
                '{{ __("messagess.wednesday") }}',
                '{{ __("messagess.thursday") }}',
                '{{ __("messagess.friday") }}',
                '{{ __("messagess.saturday") }}'
            ];

            // Generate calendar days
            const daysContainer = document.getElementById('calendarDays');
            daysContainer.innerHTML = '';

            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(year, month + 1, 0);

            for (let d = firstDay.getDate(); d <= lastDay.getDate(); d++) {
                const date = new Date(year, month, d);

                const dayElement = document.createElement('div');
                dayElement.className = 'calendar-day';

                // اسم اليوم
                const dayName = document.createElement('div');
                dayName.className = 'calendar-day-name';
                dayName.textContent = weekDays[date.getDay()];
                dayElement.appendChild(dayName);

                // رقم اليوم
                const dayNumber = document.createElement('div');
                dayNumber.className = 'calendar-day-number';
                dayNumber.textContent = d;
                dayElement.appendChild(dayNumber);

                const today = new Date();
                today.setHours(0, 0, 0, 0);
                if (date < today) {
                    dayElement.classList.add('disabled');
                } else {
                    dayElement.addEventListener('click', () => {
                        document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('selected'));
                        dayElement.classList.add('selected');

                        const selectedDateFormatted = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
                        selectedDate = new Date(date);

                        if (selectedData.services) {
                            selectedData.services.forEach(service => {
                                service.subServices.forEach(sub => {
                                    if (sub.id == subserve) {
                                        sub.date = selectedDateFormatted;
                                        updateSummarySteps()
                                        fetchAvailableTimes(selectedDateFormatted, staffId , subserve, sub.duration);
                                    }
                                });
                            });
                        }

                    });

                }

                if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
                    dayElement.classList.add('selected');
                }

                daysContainer.appendChild(dayElement);
            }
        }

        //   document.getElementById('scrollLeft').addEventListener('click', () => {
        //     document.getElementById('calendarDays').scrollBy({ left: -100, behavior: 'smooth' });
        //   });
        //   document.getElementById('scrollRight').addEventListener('click', () => {
        //     document.getElementById('calendarDays').scrollBy({ left: 100, behavior: 'smooth' });
        //   });

        function fetchAvailableTimes(date , staffId , subserve , serveTime = null) {
            showLoader();
            const increasing = Number(serveTime) > 0
                ? Number(serveTime)
                : (() => {
                    for (const service of (selectedData.services || [])) {
                        const sub = (service.subServices || []).find(s => String(s.id) === String(subserve));
                        if (sub && Number(sub.duration) > 0) return Number(sub.duration);
                    }
                    return 30;
                })();

            fetch(`/available/${date}/${staffId}?Increasing=${increasing}`)
                .then(response => response.json())
                .then(data => {

                    const morningGrid = document.querySelector('#morning-grid');
                    const afternoonGrid = document.querySelector('#afternoon-grid');
                    let hasMorning = false;
                    let hasAfternoon = false;

                    if (!morningGrid || !afternoonGrid) {
                        console.error('❌ عناصر الوقت غير موجودة في الصفحة.');
                        return;
                    }

                    morningGrid.innerHTML = '';
                    afternoonGrid.innerHTML = '';

                    if (data.length === 0) {
                        const noTimesText = currentLang === 'ar'
                            ? 'لا توجد مواعيد متاحة لهذا اليوم.'
                            : 'No available times for this day.';

                        morningGrid.innerHTML = `<p>${noTimesText}</p>`;
                        afternoonGrid.innerHTML = `<p>${noTimesText}</p>`;
                        hideLoader();
                        return;
                    }

                    data.forEach(time => {
                        const hour = parseInt(time.split(':')[0], 10);
                        const slot = document.createElement('div');
                        slot.className = 'time-slot';
                        slot.textContent = time;
                        slot.dataset.time = time;

                        slot.addEventListener('click', () => {
                            document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
                            slot.classList.add('selected');
                                selectedData.services.forEach(service => {
                                    service.subServices.forEach(sub => {
                                        if (sub.id == subserve) {
                                            sub.time = time;
                                            updateSummarySteps()
                                        }
                                    });
                                });

                        });

                        if (hour < 12) {
                            hasMorning = true;
                            morningGrid.appendChild(slot);
                        } else {
                            hasAfternoon = true;
                            afternoonGrid.appendChild(slot);
                        }
                    });
                    if (!hasMorning) {
                        const noMorningText = currentLang === 'ar'
                            ? 'لا توجد مواعيد صباحية متاحة.'
                            : 'No morning slots available.';
                        morningGrid.innerHTML = `<p>${noMorningText}</p>`;
                    }

                    if (!hasAfternoon) {
                        const noAfternoonText = currentLang === 'ar'
                            ? 'لا توجد مواعيد مسائية متاحة.'
                            : 'No afternoon slots available.';
                        afternoonGrid.innerHTML = `<p>${noAfternoonText}</p>`;
                    }
                    morningBtn.click()
                    hideLoader();
                })
                .catch(err => {
                    console.error('❌ خطأ أثناء جلب المواعيد:', err);
                    hideLoader();
                });
        }

        function renderStepThreeServiceCards(summaryContainer) {
            const selectedServices = (selectedData.services || []).filter(service =>
                Array.isArray(service.subServices) && service.subServices.length > 0
            );

            summaryContainer.classList.add('staff-selection-layout');
            summaryContainer.style.display = 'block';
            summaryContainer.style.gridTemplateColumns = 'none';
            summaryContainer.style.gap = '0';

            if (selectedServices.length === 0) {
                const noServicesText = currentLang === 'ar'
                    ? 'لم يتم اختيار أي خدمات بعد'
                    : 'No services selected yet';
                summaryContainer.innerHTML = `<p style="color: gray;">${noServicesText}</p>`;
                return;
            }

            summaryContainer.innerHTML = selectedServices.map((service) => `
                <article class="staff-selection-card">
                    <div class="staff-selection-card__header">
                        <div>
                            <strong class="staff-selection-card__title">${service.name}</strong>
                            <p class="staff-selection-card__subtitle">
                                ${currentLang === 'ar' ? 'الخدمات المختارة داخل هذه الخدمة' : 'Selected sub-services in this category'}
                            </p>
                        </div>
                        <img
                            src="${service.image || 'https://via.placeholder.com/72'}"
                            alt="${service.name}"
                            class="staff-selection-card__image"
                        >
                    </div>
                    <div class="staff-selection-card__body">
                        ${(service.subServices || []).map((sub) => {
                            const staffOptions = getCachedStaffOptions(selectedData.branch, sub.id);
                            const hasOptions = staffOptions.length > 0;
                            const selectedStaffId = sub.staffId ? String(sub.staffId) : '';

                            return `
                                <div class="staff-selection-subservice">
                                    <div class="staff-selection-subservice__top">
                                        <strong>${sub.name}</strong>
                                        <span>${sub.duration || 0} ${currentLang === 'ar' ? 'دقيقة' : 'min'}</span>
                                    </div>
                                    <div class="summary-service-meta summary-service-meta--staff">
                                        <span class="summary-service-meta__item">${currentLang === 'ar' ? 'المده:' : 'Duration:'} ${sub.duration || 0} ${currentLang === 'ar' ? 'دقيقة' : 'min'}</span>
                                        <span class="summary-service-meta__item summary-service-meta__item--price">${currentLang === 'ar' ? 'السعر:' : 'Price:'} ${sub.price || 0} 
                                        <svg class="riyal-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" width="16" height="18" style="display:inline-block;vertical-align:-0.125em">
                                            <path fill="currentColor" d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path>
                                            <path fill="currentColor" d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    ${staffSelectionMode === 'specific' ? `
                                        <div class="staff-selection-subservice__picker">
                                            <label class="staff-selection-subservice__label">${currentLang === 'ar' ? 'الموظف' : 'Staff'}</label>
                                            <select
                                                class="staff-selection-subservice__select"
                                                data-parent-id="${service.id}"
                                                data-subservice-id="${sub.id}"
                                                ${hasOptions ? '' : 'disabled'}
                                            >
                                                <option value="">${hasOptions ? (currentLang === 'ar' ? 'اختر الموظف' : 'Select staff') : (currentLang === 'ar' ? 'لا يوجد موظفون متاحون' : 'No staff available')}</option>
                                                ${staffOptions.map((staff) => `
                                                    <option value="${staff.id}" ${selectedStaffId === String(staff.id) ? 'selected' : ''}>${staff.name}</option>
                                                `).join('')}
                                            </select>
                                        </div>
                                    ` : `
                                        <div class="staff-selection-subservice__hint">
                                            ${currentLang === 'ar' ? 'سيتم اختيار الموظف الأنسب تلقائيًا' : 'The best available staff member will be assigned automatically'}
                                        </div>
                                    `}
                                </div>
                            `;
                        }).join('')}
                    </div>
                </article>
            `).join('');

            summaryContainer.querySelectorAll('.staff-selection-subservice__select').forEach((select) => {
                select.addEventListener('change', (event) => {
                    const parentService = (selectedData.services || []).find(service =>
                        String(service.id) === String(event.target.dataset.parentId)
                    );
                    if (!parentService) return;

                    const currentSub = (parentService.subServices || []).find(sub =>
                        String(sub.id) === String(event.target.dataset.subserviceId)
                    );
                    if (!currentSub) return;

                    const selectedStaffId = event.target.value;
                    const staffOptions = getCachedStaffOptions(selectedData.branch, currentSub.id);
                    const selectedStaff = staffOptions.find(staff => String(staff.id) === String(selectedStaffId));

                    currentSub.staffId = selectedStaffId ? Number(selectedStaffId) : null;
                    currentSub.staffName = selectedStaff ? selectedStaff.name : '';
                });
            });
        }

        function updateSummarySteps() {
            const isSummaryStage = summaryCard.classList.contains('show');
            renderSideCart();
            const summaryContainers = document.querySelectorAll('.sammary-steps');
            const selectedSubServices = getSelectedSubServices();
            summaryContainers.forEach(summaryContainer => {
                summaryContainer.innerHTML = '';
                summaryContainer.classList.remove('staff-selection-layout');

                if (currentStep === 3 && !isSummaryStage) {
                    renderStepThreeServiceCards(summaryContainer);
                    return;
                }

                summaryContainer.style.display = "grid";
                summaryContainer.style.gridTemplateColumns = "repeat(3, minmax(250px, 1fr))";
                summaryContainer.style.gap = "15px";

                if (selectedSubServices.length === 0) {
                    const noServicesText = currentLang === 'ar'
                        ? 'لم يتم اختيار أي خدمات بعد'
                        : 'No services selected yet';
                    summaryContainer.innerHTML = `<p style="color: gray;">${noServicesText}</p>`;
                    return;
                }

                selectedData.services.forEach(service => {
                    if (service.subServices && service.subServices.length > 0) {
                        service.subServices.forEach(sub => {
                            const card = document.createElement('div');
                            card.className = 'summary-card';
                            card.style.cssText = `border-radius:10px;padding:20px;background:white;cursor:pointer;transition:0.2s ease-in-out;border: 2px solid #FFFFFF;
                            `;

                            card.onmouseenter = () => card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
                            card.onmouseleave = () => card.style.boxShadow = "none";

                            const header = `
                                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                                    <div>
                                        <strong style="font-size:16px; color:#979797;">${service.name}</strong>
                                        <p style="margin:5px 0 0; font-size:14px; color:#979797;">${sub.name}</p>
                                    </div>
                                    <img src="${service.image || 'https://via.placeholder.com/60'}"
                                         alt="${service.name}"
                                         style="width:60px; height:60px; border-radius:8px; object-fit:cover;">
                                </div>
                            `;

                             const details = `
                            <div style="margin-top:10px;">
                                <label style="font-size:13px; color:#979797;">${currentLang === 'ar' ? 'الموظف:' : 'Staff:'}</label>
                                <input class="OI" type="text" value="${sub.staffName || ''}" disabled
                                       style="width:100%; padding:8px; margin-bottom:10px; border:1px solid #D9D9D9; border-radius:6px; box-sizing:border-box;">

                                <div class="row g-2 justify-content-between">

                                    <div class="col-6 position-relative">
                                        <input type="date"
                                               value="${sub.date || ''}"
                                               disabled
                                               class="form-control pe-5 text-end border rounded-2">

                                        <span class="iconify position-absolute top-50 end-0 translate-middle-y me-2 "
                                              data-icon="uit-calendar"></span>
                                    </div>

                                    <div class="col-6 position-relative">
                                        <input type="time"
                                               value="${sub.time || ''}"
                                               disabled
                                               class="form-control pe-5 text-end  border rounded-2">

                                        <span class="iconify position-absolute top-50 end-0 translate-middle-y me-2 "
                                              data-icon="weui-time-outlined"></span>
                                    </div>

                                </div>


                                <div class="summary-service-meta">
                                    <span class="summary-service-meta__item">
                                        ${currentLang === 'ar' ? 'المده:' : 'Duration:'} ${sub.duration || 0} ${currentLang === 'ar' ? 'دقيقة' : 'min'}
                                    </span>
                                    <span class="summary-service-meta__item summary-service-meta__item--price">
                                        ${currentLang === 'ar' ? 'السعر:' : 'Price:'} ${sub.price || 0} 
                                        <svg class="riyal-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.14 1256.39" width="16" height="18" style="display:inline-block;vertical-align:-0.125em">
                                            <path fill="currentColor" d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"></path>
                                            <path fill="currentColor" d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            `;
                            let deleteBtn = null;
                            if (!isSummaryStage) {
                                deleteBtn = document.createElement('button');
                                deleteBtn.textContent = currentLang === 'ar' ? '\u062D\u0630\u0641 \u0627\u0644\u062E\u062F\u0645\u0629' : 'Delete Service';
                                deleteBtn.style.cssText = `
                                    margin-top:10px;
                                    background:#e74c3c;
                                    color:white;
                                    border:none;
                                    padding:5px 10px;
                                    border-radius:5px;
                                    cursor:pointer;
                                `;
                                deleteBtn.addEventListener('click', (e) => {
                                    e.stopPropagation();
                                    removeSelectedSubService(service.id, sub.id);

                                    if (getSelectedSubServices().length === 0) {
                                        currentStep = 2;
                                        updateUI();
                                    }
                                });
                            }

                            card.innerHTML = header + details;
                            if (deleteBtn) {
                                card.appendChild(deleteBtn);
                            }

                            card.addEventListener('click', () => {
                                if(currentStep === 4) {
                                    document.querySelectorAll('.summary-card').forEach(c => c.classList.remove('selected-card'));
                                    card.classList.add('selected-card');
                                    activeSubId = sub.id;
                                    activeStaffId = sub.staffId;
                                    generateCalendar(sub.id , sub.staffId);
                                }
                            });

                            summaryContainer.appendChild(card);
                        });
                    }
                });
            });
        }

        function setupAutoNavigation() {
        document.querySelectorAll('.progress-step').forEach(step => {
                step.addEventListener('click', () => {
                    const targetStep = parseInt(step.dataset.progressStep);
                    if (targetStep <= currentStep || targetStep === 1) {
                        currentStep = targetStep;
                        updateUI();
                    }
                });
            });

        // عند اختيار المدينة
        document.querySelectorAll('select[name="State"]').forEach(radio => {
                radio.addEventListener('change', (e) => {
                    const stateId = e.target.value;
                    fetchbranch(stateId);
                });
            });
        }

        function validateCurrentStep() {
            switch (currentStep) {
                case 1:
                    const selectedBranch = document.querySelector('input[name="branch"]:checked');
                    if (!selectedBranch) {
                        alert('{{ __("messagess.please_select_branch") }}');
                        return false;
                    }
                    break;
                case 2:
                    const hasAtLeastOneSubService = Array.isArray(selectedData.services) &&
                        selectedData.services.some(service => Array.isArray(service.subServices) && service.subServices.length > 0);

                    if (!hasAtLeastOneSubService) {
                        createNotify({ title: '', desc: '{{ __("messages.gift_card_service_required") }}'})
                        return false;
                    }
                    break;
                case 3:
                    let allHaveStaff = selectedData.services.every(service =>
                        (service.subServices || []).every(sub => sub.staffId)
                    );

                    if (!allHaveStaff) {
                      alert(
                        staffSelectionMode === 'specific'
                            ? (currentLang === 'ar' ? 'من فضلك اختر موظفًا لكل خدمة فرعية' : 'Please choose a staff member for each sub-service')
                            : (currentLang === 'ar' ? 'جارِ تعيين الموظف المناسب تلقائيًا أو لا يوجد موظفون متاحون لبعض الخدمات' : 'Staff is being assigned automatically, or no staff is available for some services')
                      );
                      return false;
                    }
                    break;
                case 4:
                let allHavetimes = selectedData.services.every(service =>
                  service.subServices.every(sub => sub.time)
                );
                    if (!allHavetimes) {
                        alert('يرجى اختيار وقت');
                        return false;
                    }else{
                        currentStep = 4;
                        showBookingSummary();
                    }
                    nextBtn.textContent = translations.complete;
                    break;
            }
            return true;
        }

        function showBookingSummary() {
            const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
            summaryCard.classList.remove('hidden');
            summaryCard.classList.add('show');
            summaryCard.innerHTML = `
                <div id="nad-sun" style="z-index: 999;width: 100%;min-height: 1642px;background: #0000008a;position: absolute;top: 84%;left: 50%;transform: translate(-50%, -50%);border-radius: 0 0 401px 401px / 0 0 80px 80px;">
                    <div class="w-100-mob" style="border-radius: 15px;width: 71%;min-height: 900px;background: white;position: absolute;top: 56%;left: 50%;transform: translate(-50%, -50%);padding: 45px;">
                        <div style="text-align: center;margin: 0 0 30px 0px;">
                            <label style="color: black;font-size: 20px;font-weight: bold;">
                                ${lang === 'ar' ? 'ملخص حجز الخدمات من عناية سامي ' : 'Summary of service booking from  sami'}
                            </label>
                        </div>
                        <div class="sammary-steps"></div>
                        <div class="total-sunmary">
                            ${lang === 'ar' ? 'اجمالي المبلغ المالي :' : 'Total amount of money:'}      <span class="sub-sammary-total">${fanaltotal} {{ __('messages.currency') }}</span>
                        </div>
                            <div class="ti">
                                <label style="text-align: center;font-size: 18px;font-weight: 600;color: #979797;">{{ __('messagess.products_you_may_like') }}</label>
                            </div>
                            @if(isset($suggest) && $suggest->count() > 0)
                            <div class="row g-4">
                                @foreach($suggest as $index => $product)
                                    <div class="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="{{ $index * 100 }}">
                                        @include('components.frontend.products-card', [
                                            'image' => $product->feature_image,
                                            'name' => $product->name,
                                            'des' => $product->short_description,
                                            'product_id' => $product->id,
                                            'categories' => $product->categories,
                                            'min_price' => $product->min_price,
                                            'max_price' => $product->max_price,
                                        ])
                                    </div>
                                @endforeach
                            </div>
                            @endif
                            <div class="two-btn">

                                <button class=" dis-btn btn-e btn-filled" onclick="completeBooking('payment')">
                                     ${lang === 'ar' ? 'ادفع الآن' : 'Pay now :'}
                                     <img src="{{asset('images/icons/vesa.png')}}">
                                </button>
                                <button class=" dis-btn btn-e btn-outline" onclick="completeBooking('cart')">
                                    <img class="mdi-lightcart" src="{{ asset('images/icons/mdi-light-cart.svg') }}" alt="mdi-light:cart">
                                     ${lang === 'ar' ? 'اضافة للسلة' : 'Add to cart'}
                                </button>

                            </div>
                    </div>
                </div>
                `;
                updateSummarySteps()
        }

        function completeBooking(btn) {

            const payload = {
                ...selectedData,
                btn_value: btn
            };
            fetch(`/cart`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
              },
              body: JSON.stringify(payload)
            })
            .then(response => response.json())
            .then(data => {
                document.querySelectorAll('.dis-btn').forEach(btn => {
                    btn.disabled = true;
                    btn.style.opacity = '0.6';
                    btn.style.cursor = 'not-allowed';
                });

                if (data.need_login == true) {
                    createNotify({ title: 'تم تحويل الحجز إلى حجز مؤقت', desc: 'برجاء تسجيل الدخول لتحويل الحجز إلى حجز دائم'
                    });
                    setTimeout(() => {
                        window.location.href = '/signin';
                    }, 3000);
                }

                if(btn == 'cart'){
                    createNotify({ title: 'تمت العملية بنجاح', desc: data.message  });
                      setTimeout(() => {
                        window.location.href = '/cart';
                      }, 3000);
                }
                if(btn == 'payment' && !data.need_login){
                      setTimeout(() => {
                        window.location.href = '/payment?is_buy_now=1';
                      }, 1500);
                }

            })
            .catch(error => {
              console.error('❌ خطأ أثناء الإرسال:', error);
            });
        }
        // Initialize the application
        document.addEventListener('DOMContentLoaded', initializeApp);
</script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
</body>

</html>


