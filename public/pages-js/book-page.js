(function () {
    const config = window.bookingPageConfig || {};
    const currentLang = config.locale || 'ar';
    const showDuration = Boolean(config.showDuration);
    const preselectedBranchId = config.preselectedBranchId;
    const currency = config.currency || 'ر.س';

    const labels = currentLang === 'ar'
        ? {
            chooseCity: 'اختر المدينة',
            chooseBranch: 'اختر الفرع',
            chooseMain: 'اختر القسم الرئيسي',
            chooseServices: 'اختر خدمة واحدة على الأقل',
            chooseStaff: 'اختر الموظفة للخدمة الحالية',
            chooseDate: 'اختر التاريخ للخدمة الحالية',
            anyStaff: 'أي موظفة',
            randomPick: 'اختيار تلقائي من المتاح',
            ready: 'جاهز',
            pending: 'قيد الإعداد',
            notChosen: 'لم يتم الاختيار بعد',
            noResults: 'لا توجد نتائج متاحة الآن',
            noTimes: 'لا توجد أوقات متاحة لهذا اليوم',
            duration: 'المدة',
            minutes: 'دقيقة',
            total: 'الإجمالي',
            selectedCount: 'عدد الخدمات المختارة',
            configureNext: 'ننتقل الآن لضبط الخدمة التالية',
            randomSelected: 'تم اختيار موظفة متاحة تلقائيًا لهذه الخدمة',
            needLogin: 'يرجى تسجيل الدخول لإكمال الحجز.',
            cartSuccess: 'تمت إضافة الحجز إلى السلة بنجاح.',
            paySuccess: 'تم تجهيز الحجز للانتقال إلى الدفع.',
            bookingError: 'حدث خطأ أثناء إرسال الحجز.',
            loadingError: 'حدث خطأ أثناء تحميل البيانات.',
            reviewReady: 'الحجز جاهز',
            summaryRows: ['المدينة', 'الفرع', 'القسم النشط'],
            serviceReady: 'مكتملة',
            servicePending: 'تحتاج استكمال',
            remove: 'حذف',
            summaryTitle: 'الخدمات المختارة',
            currentService: 'الخدمة الحالية',
            addMoreHint: 'يمكنك دائمًا العودة للخدمات وإضافة خدمة أخرى قبل الإرسال'
        }
        : {
            chooseCity: 'Choose city',
            chooseBranch: 'Choose branch',
            chooseMain: 'Choose the main category',
            chooseServices: 'Choose at least one service',
            chooseStaff: 'Choose staff for the current service',
            chooseDate: 'Choose a date for the current service',
            anyStaff: 'Any staff',
            randomPick: 'Auto pick from available',
            ready: 'Ready',
            pending: 'In progress',
            notChosen: 'Not chosen yet',
            noResults: 'Nothing is available right now',
            noTimes: 'No time slots are available for this day',
            duration: 'Duration',
            minutes: 'min',
            total: 'Total',
            selectedCount: 'Selected services',
            configureNext: 'Moving now to configure the next service',
            randomSelected: 'An available staff member was selected automatically for this service',
            needLogin: 'Please sign in to continue your booking.',
            cartSuccess: 'Booking added to cart successfully.',
            paySuccess: 'Booking prepared for payment.',
            bookingError: 'An error occurred while sending the booking.',
            loadingError: 'An error occurred while loading the data.',
            reviewReady: 'Booking ready',
            summaryRows: ['City', 'Branch', 'Active category'],
            serviceReady: 'Completed',
            servicePending: 'Needs setup',
            remove: 'Remove',
            summaryTitle: 'Selected services',
            currentService: 'Current service',
            addMoreHint: 'You can always return to services and add more before sending'
        };

    const guideSteps = currentLang === 'ar'
        ? {
            1: { anchor: 'city-grid', title: 'اختر المدينة أولًا', text: 'ابدأ من هنا. بمجرد اختيار المدينة سننتقل مباشرة إلى خطوة الفروع.' },
            2: { anchor: 'branch-grid', title: 'الآن اختر الفرع', text: 'اختر الفرع المناسب لك، وبعدها سنفتح لك الأقسام الرئيسية داخل هذا الفرع.' },
            3: { anchor: 'main-grid', title: 'اختر القسم الرئيسي', text: 'اختر القسم الذي تريد الحجز منه الآن. يمكنك العودة لاحقًا لإضافة خدمات من قسم آخر.' },
            4: { anchor: 'sub-grid', title: 'اختر خدمة أو أكثر', text: 'في هذه الخطوة يمكنك تحديد أكثر من خدمة في نفس الحجز. بعد ذلك سنضبط الموظفة والموعد لكل خدمة على حدة.' },
            5: { anchor: 'staff-grid', title: 'اختر الموظفة للخدمة الحالية', text: 'أنت الآن تضبط الموظفة للخدمة النشطة. يمكنك أيضًا اختيار أي موظفة ليتم اختيار واحدة متاحة تلقائيًا.' },
            6: { anchor: 'date-grid', title: 'اختر التاريخ', text: 'الآن نحدد يوم التنفيذ للخدمة الحالية، ثم ننتقل مباشرة إلى الأوقات المتاحة لها.' },
            7: { anchor: 'time-grid', title: 'اختر الوقت المتاح', text: 'بعد اختيار الوقت سنكمل تلقائيًا على الخدمة التالية إن وجدت، أو سنجعل الحجز جاهزًا للإرسال.' }
        }
        : {
            1: { anchor: 'city-grid', title: 'Choose the city first', text: 'Start here. Once you choose the city, we will move straight to the branches step.' },
            2: { anchor: 'branch-grid', title: 'Now choose the branch', text: 'Pick the branch that suits you, then we will open the main categories inside it.' },
            3: { anchor: 'main-grid', title: 'Choose the main category', text: 'Pick the category you want now. You can come back later to add services from another category.' },
            4: { anchor: 'sub-grid', title: 'Choose one or more services', text: 'You can select multiple services in the same booking. We will then configure staff and time for each service separately.' },
            5: { anchor: 'staff-grid', title: 'Choose staff for the current service', text: 'You are now configuring the active service. You can also use any staff for an automatic available choice.' },
            6: { anchor: 'date-grid', title: 'Choose the date', text: 'Now we set the day for the current service, then move directly to its available times.' },
            7: { anchor: 'time-grid', title: 'Choose the available time', text: 'After choosing the time, we will move automatically to the next service if needed, or mark the booking ready.' }
        };

    const state = {
        cityId: null,
        cityName: null,
        branchId: null,
        branchName: null,
        currentMainServiceId: null,
        currentMainServiceName: null,
        currentMainServiceImage: null,
        items: [],
        activeItemKey: null,
        guideEnabled: true
    };

    const ui = {
        currentStep: 1,
        branches: [],
        mainServices: [],
        subServices: [],
        staff: [],
        staffContextSubServiceId: null,
        times: [],
        timeContextKey: null,
        lastGuideSignature: null
    };

    const dom = {
        stepperItems: Array.from(document.querySelectorAll('.booking-stepper__item')),
        panels: Array.from(document.querySelectorAll('[data-step-panel]')),
        cityCards: () => Array.from(document.querySelectorAll('.city-card')),
        branchGrid: document.getElementById('branchGrid'),
        mainServiceGrid: document.getElementById('mainServiceGrid'),
        subServiceGrid: document.getElementById('subServiceGrid'),
        staffGrid: document.getElementById('staffGrid'),
        dateGrid: document.getElementById('dateGrid'),
        timeGrid: document.getElementById('timeGrid'),
        editorRails: Array.from(document.querySelectorAll('[data-editor-rail]')),
        prevBtn: document.getElementById('prevStepBtn'),
        nextBtn: document.getElementById('nextStepBtn'),
        payNowBtn: document.getElementById('payNowBtn'),
        addToCartBtn: document.getElementById('addToCartBtn'),
        summaryBody: document.getElementById('summaryBody'),
        summaryBadge: document.getElementById('summaryReadyBadge'),
        summaryFocusBtn: document.getElementById('summaryFocusBtn'),
        helpToggleBtn: document.getElementById('helpToggleBtn'),
        branchLead: document.getElementById('branchStepLead'),
        selectionNote: document.getElementById('selectionNote'),
        summary: document.getElementById('bookingSummary'),
        loader: document.getElementById('bookingLoader'),
        guide: document.getElementById('bookingGuide'),
        guideFocus: document.getElementById('guideFocus'),
        guideCard: document.getElementById('guideCard'),
        guideTitle: document.getElementById('guideTitle'),
        guideText: document.getElementById('guideText'),
        guideCounter: document.getElementById('guideStepCounter'),
        dismissGuideBtn: document.getElementById('dismissGuideBtn'),
        closeGuideBtn: document.getElementById('closeGuideBtn')
    };

    function t(ar, en) {
        return currentLang === 'ar' ? ar : en;
    }

    function showLoader() {
        if (dom.loader) dom.loader.hidden = false;
    }

    function hideLoader() {
        if (dom.loader) dom.loader.hidden = true;
    }

    function notify(message, type = 'warning') {
        if (window.toastr) {
            toastr.options = {
                closeButton: true,
                progressBar: true,
                newestOnTop: true,
                positionClass: currentLang === 'ar' ? 'toast-top-left' : 'toast-top-right',
                timeOut: 2800
            };
            toastr[type]('', message);
            return;
        }

        alert(message);
    }

    function getLocalizedValue(value) {
        if (!value) return '';
        if (typeof value === 'string') {
            try {
                const parsed = JSON.parse(value);
                if (parsed && typeof parsed === 'object') {
                    return parsed[currentLang] || parsed.ar || parsed.en || Object.values(parsed)[0] || value;
                }
            } catch (error) {
                return value;
            }
            return value;
        }
        if (typeof value === 'object') {
            return value[currentLang] || value.ar || value.en || Object.values(value)[0] || '';
        }
        return String(value);
    }

    function formatMoney(amount) {
        return `${Number(amount || 0).toFixed(0)} ${currency}`;
    }

    function getInitials(name) {
        return (name || '')
            .split(' ')
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part.charAt(0))
            .join('')
            .toUpperCase();
    }

    function renderEmpty(container, icon, title, text) {
        if (!container) return;
        container.innerHTML = `
            <div class="booking-empty">
                <i class="${icon}"></i>
                <strong>${title}</strong>
                <p>${text}</p>
            </div>
        `;
    }

    function createMedia(name, image) {
        if (image) {
            return `<div class="booking-media" style="background-image:url('${image}')"></div>`;
        }

        return `<div class="booking-media booking-media--icon"><i class="bi bi-flower1"></i></div>`;
    }

    function makeItemKey(mainServiceId, subServiceId) {
        return `${mainServiceId}-${subServiceId}`;
    }

    function getItemByKey(key) {
        return state.items.find((item) => item.key === key) || null;
    }

    function getActiveItem() {
        if (!state.activeItemKey && state.items.length) {
            state.activeItemKey = state.items[0].key;
        }

        return getItemByKey(state.activeItemKey) || null;
    }

    function setActiveItem(key) {
        if (!getItemByKey(key)) return;
        state.activeItemKey = key;
        ui.staff = [];
        ui.staffContextSubServiceId = null;
        ui.times = [];
        ui.timeContextKey = null;
    }

    function getItemStatus(item) {
        return item.staffId && item.date && item.time ? labels.serviceReady : labels.servicePending;
    }

    function getItemCompletionStep(item) {
        if (!item.staffId) return 5;
        if (!item.date) return 6;
        if (!item.time) return 7;
        return 7;
    }

    function getNextIncompleteItem(afterKey) {
        const ordered = state.items.slice();
        const startIndex = Math.max(ordered.findIndex((item) => item.key === afterKey), -1);

        for (let index = startIndex + 1; index < ordered.length; index += 1) {
            if (getItemStatus(ordered[index]) !== labels.serviceReady) return ordered[index];
        }

        for (let index = 0; index <= startIndex; index += 1) {
            if (ordered[index] && getItemStatus(ordered[index]) !== labels.serviceReady) return ordered[index];
        }

        return null;
    }

    function isBookingReady() {
        return state.items.length > 0 && state.items.every((item) => item.staffId && item.date && item.time);
    }

    function buildPayload() {
        if (!state.branchId || state.items.length === 0) return null;

        const groups = new Map();

        state.items.forEach((item) => {
            if (!groups.has(item.mainServiceId)) {
                groups.set(item.mainServiceId, {
                    id: item.mainServiceId,
                    name: item.mainServiceName,
                    image: item.mainServiceImage,
                    subServices: []
                });
            }

            groups.get(item.mainServiceId).subServices.push({
                id: item.subServiceId,
                name: item.subServiceName,
                duration: item.duration,
                price: Number(item.price || 0),
                staffId: item.staffId,
                staffName: item.staffName,
                date: item.date,
                time: item.time
            });
        });

        return {
            branch: state.branchId,
            branchName: state.branchName,
            services: Array.from(groups.values())
        };
    }

    function resetAllSelections(fromCityOnly = false) {
        if (!fromCityOnly) {
            state.cityId = null;
            state.cityName = null;
        }

        state.branchId = null;
        state.branchName = null;
        state.currentMainServiceId = null;
        state.currentMainServiceName = null;
        state.currentMainServiceImage = null;
        state.items = [];
        state.activeItemKey = null;

        ui.branches = [];
        ui.mainServices = [];
        ui.subServices = [];
        ui.staff = [];
        ui.staffContextSubServiceId = null;
        ui.times = [];
        ui.timeContextKey = null;
    }

    function resetFromBranchSelection() {
        state.currentMainServiceId = null;
        state.currentMainServiceName = null;
        state.currentMainServiceImage = null;
        state.items = [];
        state.activeItemKey = null;

        ui.mainServices = [];
        ui.subServices = [];
        ui.staff = [];
        ui.staffContextSubServiceId = null;
        ui.times = [];
        ui.timeContextKey = null;
    }

    function getMaxAccessibleStep() {
        let max = 1;
        if (state.cityId || state.branchId) max = 2;
        if (state.branchId) max = 3;
        if (state.currentMainServiceId || state.items.length > 0) max = 4;
        if (state.items.length > 0) max = 5;

        const activeItem = getActiveItem();
        if (activeItem?.staffId) max = 6;
        if (activeItem?.date) max = 7;

        return max;
    }

    function validateStep(step = ui.currentStep) {
        switch (step) {
            case 1:
                return Boolean(state.cityId || state.branchId) || (notify(labels.chooseCity), false);
            case 2:
                return Boolean(state.branchId) || (notify(labels.chooseBranch), false);
            case 3:
                return Boolean(state.currentMainServiceId) || (notify(labels.chooseMain), false);
            case 4:
                return Boolean(state.items.length) || (notify(labels.chooseServices), false);
            case 5:
                return Boolean(getActiveItem()?.staffId) || (notify(labels.chooseStaff), false);
            case 6:
                return Boolean(getActiveItem()?.date) || (notify(labels.chooseDate), false);
            default:
                return true;
        }
    }

    function goToStep(step, options = {}) {
        const allowed = Math.min(Math.max(step, 1), 7);
        if (!options.force && allowed > getMaxAccessibleStep() + 1) return;
        ui.currentStep = allowed;
        updateUI();
    }

    function renderSummary() {
        if (!dom.summaryBody) return;

        const total = state.items.reduce((sum, item) => sum + Number(item.price || 0), 0);
        const rows = [
            state.cityName || labels.notChosen,
            state.branchName || labels.notChosen,
            state.currentMainServiceName || labels.notChosen
        ];

        const servicesHtml = state.items.length
            ? state.items.map((item) => `
                <div class="booking-service-chip ${item.key === state.activeItemKey ? 'is-active' : ''}">
                    <button type="button" class="booking-service-chip__main" data-summary-edit="${item.key}">
                        <span class="booking-service-chip__status ${getItemStatus(item) === labels.serviceReady ? 'is-ready' : ''}">${getItemStatus(item)}</span>
                        <strong>${item.subServiceName}</strong>
                        <small>${item.mainServiceName}</small>
                        <small>${item.staffName || labels.notChosen} • ${item.date || labels.notChosen} • ${item.time || labels.notChosen}</small>
                    </button>
                    <button type="button" class="booking-service-chip__remove" data-summary-remove="${item.key}">${labels.remove}</button>
                </div>
            `).join('')
            : `<div class="booking-summary__placeholder">${labels.chooseServices}</div>`;

        dom.summaryBody.innerHTML = `
            <div class="booking-summary__meta">
                ${rows.map((value, index) => `
                    <div class="booking-summary__row ${value !== labels.notChosen ? 'is-filled' : ''}">
                        <span>${labels.summaryRows[index]}</span>
                        <strong>${value}</strong>
                    </div>
                `).join('')}
            </div>
            <div class="booking-summary__services">
                <div class="booking-summary__services-head">
                    <strong>${labels.summaryTitle}</strong>
                    <span>${labels.selectedCount}: ${state.items.length}</span>
                </div>
                ${servicesHtml}
            </div>
            <div class="booking-summary__footer">
                <span>${labels.total}</span>
                <strong>${formatMoney(total)}</strong>
            </div>
            <div class="booking-summary__hint">${labels.addMoreHint}</div>
        `;

        dom.summaryBody.querySelectorAll('[data-summary-edit]').forEach((button) => {
            button.addEventListener('click', () => {
                setActiveItem(button.dataset.summaryEdit);
                goToStep(getItemCompletionStep(getActiveItem()), { force: true });
            });
        });

        dom.summaryBody.querySelectorAll('[data-summary-remove]').forEach((button) => {
            button.addEventListener('click', () => {
                const key = button.dataset.summaryRemove;
                state.items = state.items.filter((item) => item.key !== key);
                if (state.activeItemKey === key) {
                    state.activeItemKey = state.items[0]?.key || null;
                }
                renderSubServices();
                updateUI();
            });
        });
    }

    function renderEditorRails() {
        const active = getActiveItem();
        const html = state.items.length
            ? `
                <div class="booking-editor-rail__head">
                    <strong>${labels.currentService}</strong>
                    <span>${labels.selectedCount}: ${state.items.length}</span>
                </div>
                <div class="booking-editor-rail__list">
                    ${state.items.map((item) => `
                        <button type="button" class="booking-editor-pill ${active?.key === item.key ? 'is-active' : ''}" data-editor-item="${item.key}">
                            <strong>${item.subServiceName}</strong>
                            <small>${getItemStatus(item)}</small>
                        </button>
                    `).join('')}
                </div>
            `
            : `<div class="booking-summary__placeholder">${labels.chooseServices}</div>`;

        dom.editorRails.forEach((rail) => {
            rail.innerHTML = html;
            rail.querySelectorAll('[data-editor-item]').forEach((button) => {
                button.addEventListener('click', () => {
                    setActiveItem(button.dataset.editorItem);
                    goToStep(getItemCompletionStep(getActiveItem()), { force: true });
                });
            });
        });
    }

    function renderBranches() {
        if (!ui.branches.length) {
            renderEmpty(dom.branchGrid, 'bi bi-geo-alt', labels.noResults, t('لا توجد فروع نشطة داخل هذه المدينة حاليًا.', 'No active branches are available in this city right now.'));
            return;
        }

        dom.branchGrid.innerHTML = ui.branches.map((branch) => {
            const branchName = getLocalizedValue(branch.name);
            const address = getLocalizedValue(branch.address?.address_line_1 || branch.address?.city_data?.name || branch.address?.state_data?.name);

            return `
                <button type="button" class="booking-choice-card branch-card ${String(state.branchId) === String(branch.id) ? 'is-selected' : ''}" data-branch-id="${branch.id}">
                    ${createMedia(branchName, branch.feature_image)}
                    <strong>${branchName}</strong>
                    <small>${address || t('فرع متاح الآن', 'Available branch')}</small>
                </button>
            `;
        }).join('');

        dom.branchGrid.querySelectorAll('.branch-card').forEach((card) => {
            card.addEventListener('click', () => {
                const branch = ui.branches.find((item) => String(item.id) === String(card.dataset.branchId));
                if (!branch) return;

                resetFromBranchSelection();
                state.branchId = branch.id;
                state.branchName = getLocalizedValue(branch.name);
                renderBranches();
                fetchMainServices();
                goToStep(3, { force: true });
            });
        });
    }

    function renderMainServices() {
        if (!ui.mainServices.length) {
            renderEmpty(dom.mainServiceGrid, 'bi bi-grid-3x3-gap', labels.noResults, t('لا توجد أقسام رئيسية متاحة لهذا الفرع الآن.', 'No main categories are available for this branch right now.'));
            return;
        }

        dom.mainServiceGrid.innerHTML = ui.mainServices.map((service) => {
            const name = getLocalizedValue(service.name);
            const count = state.items.filter((item) => String(item.mainServiceId) === String(service.id)).length;

            return `
                <button type="button" class="booking-choice-card main-service-card ${String(state.currentMainServiceId) === String(service.id) ? 'is-selected' : ''}" data-main-id="${service.id}">
                    ${createMedia(name, service.image)}
                    <strong>${name}</strong>
                    <small>${count ? `${labels.selectedCount}: ${count}` : t('افتحي القسم لاختيار خدماته', 'Open the category to choose its services')}</small>
                </button>
            `;
        }).join('');

        dom.mainServiceGrid.querySelectorAll('.main-service-card').forEach((card) => {
            card.addEventListener('click', () => {
                const service = ui.mainServices.find((item) => String(item.id) === String(card.dataset.mainId));
                if (!service) return;

                state.currentMainServiceId = service.id;
                state.currentMainServiceName = getLocalizedValue(service.name);
                state.currentMainServiceImage = service.image || null;
                renderMainServices();
                fetchSubServices(service.id);
                goToStep(4, { force: true });
            });
        });
    }

    function renderSubServices() {
        if (!ui.subServices.length) {
            renderEmpty(dom.subServiceGrid, 'bi bi-stars', labels.noResults, t('لا توجد خدمات متاحة داخل هذا القسم حاليًا.', 'No services are available in this category right now.'));
            return;
        }

        if (dom.selectionNote) {
            dom.selectionNote.textContent = t(
                `تم اختيار ${state.items.length} خدمة حتى الآن. يمكنك إضافة المزيد أو الانتقال للخطوة التالية.`,
                `${state.items.length} services selected so far. You can add more or move to the next step.`
            );
        }

        dom.subServiceGrid.innerHTML = ui.subServices.map((service) => {
            const name = getLocalizedValue(service.name);
            const key = makeItemKey(state.currentMainServiceId, service.id);
            const selected = Boolean(getItemByKey(key));
            const durationHtml = showDuration && Number(service.duration_min || 0) > 0
                ? `<span><i class="bi bi-clock"></i>${service.duration_min} ${labels.minutes}</span>`
                : '';

            return `
                <button type="button" class="booking-choice-card sub-service-card ${selected ? 'is-selected' : ''}" data-sub-id="${service.id}">
                    ${createMedia(name, service.feature_image || service.image || null)}
                    <strong>${name}</strong>
                    <div class="booking-meta-row">
                        ${durationHtml}
                        <span><i class="bi bi-cash-stack"></i>${formatMoney(service.default_price)}</span>
                    </div>
                </button>
            `;
        }).join('');

        dom.subServiceGrid.querySelectorAll('.sub-service-card').forEach((card) => {
            card.addEventListener('click', () => {
                const service = ui.subServices.find((item) => String(item.id) === String(card.dataset.subId));
                if (!service) return;

                const key = makeItemKey(state.currentMainServiceId, service.id);
                const existing = getItemByKey(key);

                if (existing) {
                    state.items = state.items.filter((item) => item.key !== key);
                    if (state.activeItemKey === key) {
                        state.activeItemKey = state.items[0]?.key || null;
                    }
                } else {
                    state.items.push({
                        key,
                        mainServiceId: state.currentMainServiceId,
                        mainServiceName: state.currentMainServiceName,
                        mainServiceImage: state.currentMainServiceImage,
                        subServiceId: service.id,
                        subServiceName: getLocalizedValue(service.name),
                        duration: Number(service.duration_min || 30),
                        price: Number(service.default_price || 0),
                        staffId: null,
                        staffName: null,
                        staffMode: null,
                        date: null,
                        time: null
                    });
                    state.activeItemKey = key;
                }

                renderSubServices();
                renderMainServices();
                updateUI();
            });
        });
    }

    function renderStaff() {
        const active = getActiveItem();
        if (!active) {
            renderEmpty(dom.staffGrid, 'bi bi-person-heart', labels.chooseServices, t('اختر خدمة من الخطوة السابقة أولًا.', 'Choose a service from the previous step first.'));
            return;
        }

        if (!ui.staff.length) {
            renderEmpty(dom.staffGrid, 'bi bi-person-x', labels.noResults, t('لا توجد موظفات متاحات لهذه الخدمة الآن.', 'No staff members are available for this service right now.'));
            return;
        }

        const randomCard = `
            <button type="button" class="booking-choice-card staff-card staff-card--random ${active.staffMode === 'random' ? 'is-selected' : ''}" data-random-staff="1">
                <div class="booking-media booking-media--icon booking-media--random"><i class="bi bi-shuffle"></i></div>
                <strong>${labels.anyStaff}</strong>
                <small>${labels.randomPick}</small>
            </button>
        `;

        const staffCards = ui.staff.map((staff) => {
            const fullName = staff.full_name || `${staff.first_name || ''} ${staff.last_name || ''}`.trim();
            return `
                <button type="button" class="booking-choice-card staff-card ${String(active.staffId) === String(staff.id) && active.staffMode !== 'random' ? 'is-selected' : ''}" data-staff-id="${staff.id}">
                    <div class="booking-media booking-media--avatar"><span>${getInitials(fullName || labels.anyStaff)}</span></div>
                    <strong>${fullName || labels.anyStaff}</strong>
                    <small>${t('متاحة لهذه الخدمة', 'Available for this service')}</small>
                </button>
            `;
        }).join('');

        dom.staffGrid.innerHTML = randomCard + staffCards;

        dom.staffGrid.querySelector('[data-random-staff="1"]')?.addEventListener('click', () => {
            const randomStaff = ui.staff[Math.floor(Math.random() * ui.staff.length)];
            if (!randomStaff) return;
            applyStaffSelection(randomStaff, 'random');
            notify(labels.randomSelected, 'success');
        });

        dom.staffGrid.querySelectorAll('[data-staff-id]').forEach((button) => {
            button.addEventListener('click', () => {
                const staff = ui.staff.find((item) => String(item.id) === String(button.dataset.staffId));
                if (!staff) return;
                applyStaffSelection(staff, 'manual');
            });
        });
    }

    function applyStaffSelection(staff, mode) {
        const active = getActiveItem();
        if (!active) return;

        active.staffId = staff.id;
        active.staffName = staff.full_name || `${staff.first_name || ''} ${staff.last_name || ''}`.trim();
        active.staffMode = mode;
        active.date = null;
        active.time = null;
        ui.times = [];
        ui.timeContextKey = null;

        renderStaff();
        updateUI();
        goToStep(6, { force: true });
    }

    function renderDates() {
        const active = getActiveItem();
        if (!active || !active.staffId) {
            renderEmpty(dom.dateGrid, 'bi bi-calendar2-week', labels.chooseStaff, t('اختر الموظفة أولًا حتى نعرض الأيام المناسبة.', 'Choose the staff member first so we can show the suitable days.'));
            return;
        }

        const days = [];
        const today = new Date();
        for (let index = 0; index < 18; index += 1) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + index);
            days.push(nextDate);
        }

        const weekdayFormatter = new Intl.DateTimeFormat(currentLang === 'ar' ? 'ar-SA' : 'en-US', { weekday: 'short' });
        const monthFormatter = new Intl.DateTimeFormat(currentLang === 'ar' ? 'ar-SA' : 'en-US', { month: 'short' });

        dom.dateGrid.innerHTML = days.map((date) => {
            const isoDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
            return `
                <button type="button" class="booking-date-card ${active.date === isoDate ? 'is-selected' : ''}" data-date="${isoDate}">
                    <span>${weekdayFormatter.format(date)}</span>
                    <strong>${date.getDate()}</strong>
                    <small>${monthFormatter.format(date)}</small>
                </button>
            `;
        }).join('');

        dom.dateGrid.querySelectorAll('[data-date]').forEach((button) => {
            button.addEventListener('click', () => {
                active.date = button.dataset.date;
                active.time = null;
                ui.times = [];
                ui.timeContextKey = null;
                renderDates();
                fetchTimesForActiveItem();
                goToStep(7, { force: true });
            });
        });
    }

    function renderTimes() {
        const active = getActiveItem();
        if (!active || !active.date) {
            renderEmpty(dom.timeGrid, 'bi bi-clock-history', labels.chooseDate, t('اختر التاريخ أولًا حتى نعرض الأوقات المتاحة.', 'Choose the date first so we can show the available times.'));
            return;
        }

        if (!ui.times.length) {
            renderEmpty(dom.timeGrid, 'bi bi-clock-history', labels.noTimes, t('جرّب يومًا آخر أو اختر موظفة مختلفة.', 'Try another day or choose a different staff member.'));
            return;
        }

        const morning = ui.times.filter((time) => Number(String(time).split(':')[0]) < 12);
        const evening = ui.times.filter((time) => Number(String(time).split(':')[0]) >= 12);

        const buildGroup = (title, values) => `
            <div class="booking-time-group">
                <div class="booking-time-group__title">${title}</div>
                <div class="booking-time-group__grid">
                    ${values.map((time) => `
                        <button type="button" class="booking-time-slot ${active.time === time ? 'is-selected' : ''}" data-time="${time}">
                            ${time}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        dom.timeGrid.innerHTML = [
            morning.length ? buildGroup(t('الفترة الصباحية', 'Morning'), morning) : '',
            evening.length ? buildGroup(t('الفترة المسائية', 'Evening'), evening) : ''
        ].join('');

        dom.timeGrid.querySelectorAll('[data-time]').forEach((button) => {
            button.addEventListener('click', () => {
                active.time = button.dataset.time;
                renderTimes();
                updateUI();

                const nextItem = getNextIncompleteItem(active.key);
                if (nextItem) {
                    setActiveItem(nextItem.key);
                    notify(labels.configureNext, 'info');
                    goToStep(5, { force: true });
                }
            });
        });
    }

    async function fetchJson(url) {
        const response = await fetch(url, { headers: { 'X-Requested-With': 'XMLHttpRequest' } });
        if (!response.ok) throw new Error(`Request failed for ${url}`);
        return response.json();
    }

    async function fetchBranches(cityId) {
        showLoader();
        if (dom.branchLead) dom.branchLead.textContent = t('جاري تحميل الفروع داخل هذه المدينة.', 'Loading branches for this city.');
        try {
            const data = await fetchJson(`/branchs/${cityId}`);
            ui.branches = Array.isArray(data) ? data : [];
            renderBranches();
        } catch (error) {
            renderEmpty(dom.branchGrid, 'bi bi-exclamation-circle', t('تعذر تحميل الفروع', 'Unable to load branches'), labels.loadingError);
        } finally {
            hideLoader();
            updateUI();
        }
    }

    async function fetchMainServices() {
        showLoader();
        try {
            const data = await fetchJson('/service-groups');
            ui.mainServices = Array.isArray(data) ? data : [];
            renderMainServices();
        } catch (error) {
            renderEmpty(dom.mainServiceGrid, 'bi bi-exclamation-diamond', t('تعذر تحميل الأقسام', 'Unable to load categories'), labels.loadingError);
        } finally {
            hideLoader();
            updateUI();
        }
    }

    async function fetchSubServices(mainServiceId) {
        showLoader();
        try {
            const data = await fetchJson(`/services/${mainServiceId}/${state.branchId}/bookings`);
            ui.subServices = Array.isArray(data) ? data : [];
            renderSubServices();
        } catch (error) {
            renderEmpty(dom.subServiceGrid, 'bi bi-exclamation-diamond', t('تعذر تحميل الخدمات', 'Unable to load services'), labels.loadingError);
        } finally {
            hideLoader();
            updateUI();
        }
    }

    async function fetchStaffForActiveItem(force = false) {
        const active = getActiveItem();
        if (!active) {
            renderStaff();
            return;
        }
        if (!force && ui.staffContextSubServiceId === active.subServiceId) {
            renderStaff();
            return;
        }

        showLoader();
        try {
            const data = await fetchJson(`/staff?branch_id=${state.branchId}&service_id=${active.subServiceId}`);
            ui.staff = Array.isArray(data) ? data : [];
            ui.staffContextSubServiceId = active.subServiceId;
            renderStaff();
        } catch (error) {
            ui.staff = [];
            renderEmpty(dom.staffGrid, 'bi bi-exclamation-circle', t('تعذر تحميل الموظفات', 'Unable to load staff'), labels.loadingError);
        } finally {
            hideLoader();
        }
    }

    async function fetchTimesForActiveItem(force = false) {
        const active = getActiveItem();
        if (!active || !active.staffId || !active.date) {
            renderTimes();
            return;
        }

        const contextKey = `${active.key}-${active.date}-${active.staffId}`;
        if (!force && ui.timeContextKey === contextKey) {
            renderTimes();
            return;
        }

        showLoader();
        try {
            const data = await fetchJson(`/available/${active.date}/${active.staffId}?Increasing=${active.duration || 30}`);
            ui.times = Array.isArray(data) ? data : [];
            ui.timeContextKey = contextKey;
            renderTimes();
        } catch (error) {
            ui.times = [];
            renderEmpty(dom.timeGrid, 'bi bi-clock-history', t('تعذر تحميل الأوقات', 'Unable to load times'), labels.loadingError);
        } finally {
            hideLoader();
        }
    }

    async function submitBooking(mode) {
        const payload = buildPayload();
        if (!payload || !isBookingReady()) {
            notify(labels.chooseServices);
            return;
        }

        showLoader();
        try {
            const response = await fetch('/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: JSON.stringify({ ...payload, btn_value: mode })
            });

            const data = await response.json();
            if (data.need_login) {
                notify(labels.needLogin, 'info');
                setTimeout(() => {
                    window.location.href = '/signin';
                }, 1200);
                return;
            }
            if (!response.ok || data.success === false) {
                notify(data.message || labels.bookingError, 'error');
                return;
            }

            notify(mode === 'cart' ? labels.cartSuccess : labels.paySuccess, 'success');
            setTimeout(() => {
                window.location.href = mode === 'cart' ? '/cart' : '/payment?is_buy_now=1';
            }, 1200);
        } catch (error) {
            notify(labels.bookingError, 'error');
        } finally {
            hideLoader();
        }
    }

    function getGuideContent(step) {
        const base = guideSteps[step];
        const active = getActiveItem();
        if (!base) return null;
        if (step >= 5 && active) {
            return { ...base, title: `${base.title} - ${active.subServiceName}` };
        }
        return base;
    }

    function positionGuide(anchorName) {
        if (!dom.guide || !dom.guide.classList.contains('is-active')) return;
        const anchor = document.querySelector(`[data-guide-anchor="${anchorName}"]`);
        if (!anchor) return;

        const rect = anchor.getBoundingClientRect();
        const padding = 12;
        dom.guideFocus.style.top = `${Math.max(rect.top - padding, 12)}px`;
        dom.guideFocus.style.left = `${Math.max(rect.left - padding, 12)}px`;
        dom.guideFocus.style.width = `${Math.max(rect.width + padding * 2, 120)}px`;
        dom.guideFocus.style.height = `${Math.max(rect.height + padding * 2, 80)}px`;

        const cardWidth = 330;
        const mobile = window.innerWidth < 920;
        const top = mobile ? Math.max(window.innerHeight - 250, 16) : Math.min(rect.bottom + 18, window.innerHeight - 230);
        const left = mobile ? 16 : Math.min(Math.max(rect.left, 16), window.innerWidth - cardWidth - 16);

        dom.guideCard.style.top = `${top}px`;
        dom.guideCard.style.left = `${left}px`;
    }

    function hideGuide() {
        dom.guide?.classList.remove('is-active');
    }

    function showGuideForCurrentStep() {
        if (!state.guideEnabled || !dom.guide) return;

        const active = getActiveItem();
        const signature = `${ui.currentStep}:${active?.key || 'none'}`;
        if (ui.lastGuideSignature === signature) return;

        const content = getGuideContent(ui.currentStep);
        if (!content) return;

        ui.lastGuideSignature = signature;
        dom.guide.classList.add('is-active');
        dom.guideTitle.textContent = content.title;
        dom.guideText.textContent = content.text;
        dom.guideCounter.textContent = `${ui.currentStep} / 7`;
        requestAnimationFrame(() => positionGuide(content.anchor));
    }

    function updateUI() {
        if (!state.activeItemKey && state.items.length) {
            state.activeItemKey = state.items[0].key;
        }

        if (state.items.length === 0 && ui.currentStep > 4) {
            ui.currentStep = state.currentMainServiceId ? 4 : (state.branchId ? 3 : 1);
        }

        const maxAccessible = getMaxAccessibleStep();
        if (ui.currentStep > maxAccessible + 1) {
            ui.currentStep = maxAccessible;
        }

        dom.panels.forEach((panel) => {
            panel.classList.toggle('is-active', Number(panel.dataset.stepPanel) === ui.currentStep);
        });

        dom.stepperItems.forEach((item) => {
            const step = Number(item.dataset.stepJump);
            item.classList.toggle('is-active', step === ui.currentStep);
            item.classList.toggle('is-complete', step < ui.currentStep && step <= maxAccessible);
            item.disabled = step > maxAccessible + 1;
        });

        if (dom.prevBtn) dom.prevBtn.disabled = ui.currentStep === 1;
        if (dom.nextBtn) dom.nextBtn.hidden = ui.currentStep === 7;
        if (dom.payNowBtn) dom.payNowBtn.disabled = !isBookingReady();
        if (dom.addToCartBtn) dom.addToCartBtn.disabled = !isBookingReady();
        if (dom.summaryBadge) {
            dom.summaryBadge.textContent = isBookingReady() ? labels.ready : labels.pending;
            dom.summaryBadge.classList.toggle('is-ready', isBookingReady());
        }

        renderSummary();
        renderEditorRails();

        if (ui.currentStep === 5) fetchStaffForActiveItem();
        if (ui.currentStep === 6) renderDates();
        if (ui.currentStep === 7) fetchTimesForActiveItem();

        showGuideForCurrentStep();
    }

    function seedPlaceholders() {
        renderEmpty(dom.branchGrid, 'bi bi-geo', t('ابدأ باختيار المدينة', 'Start by choosing the city'), t('سنحمّل الفروع المناسبة مباشرة بعد ذلك.', 'We will load the matching branches right after that.'));
        renderEmpty(dom.mainServiceGrid, 'bi bi-grid-1x2', t('اختر الفرع أولًا', 'Choose the branch first'), t('بعد اختيار الفرع سنعرض الأقسام الرئيسية المتاحة.', 'After choosing the branch, we will show the available main categories.'));
        renderEmpty(dom.subServiceGrid, 'bi bi-scissors', t('اختر القسم الرئيسي أولًا', 'Choose the main category first'), t('بعدها يمكنك تحديد خدمة واحدة أو أكثر.', 'Then you can select one or more services.'));
        renderEmpty(dom.staffGrid, 'bi bi-person-heart', t('اختر خدمة أولًا', 'Choose a service first'), t('من الملخص أو من الخطوة السابقة.', 'From the summary or the previous step.'));
        renderEmpty(dom.dateGrid, 'bi bi-calendar2-week', t('اختر الموظفة أولًا', 'Choose staff first'), t('بعد ذلك سنعرض الأيام المناسبة للخدمة الحالية.', 'Then we will show suitable dates for the current service.'));
        renderEmpty(dom.timeGrid, 'bi bi-clock-history', t('اختر التاريخ أولًا', 'Choose the date first'), t('بعد اختيار التاريخ سنعرض الأوقات المتاحة.', 'After choosing the date, we will show the available times.'));
    }

    function bindEvents() {
        dom.cityCards().forEach((card) => {
            card.addEventListener('click', () => {
                resetAllSelections(true);
                state.cityId = Number(card.dataset.cityId);
                state.cityName = card.dataset.cityName;
                dom.cityCards().forEach((cityCard) => cityCard.classList.toggle('is-selected', cityCard === card));
                fetchBranches(state.cityId);
                goToStep(2, { force: true });
            });
        });

        dom.stepperItems.forEach((item) => {
            item.addEventListener('click', () => {
                const step = Number(item.dataset.stepJump);
                if (step <= getMaxAccessibleStep() + 1) goToStep(step);
            });
        });

        dom.prevBtn?.addEventListener('click', () => goToStep(ui.currentStep - 1, { force: true }));
        dom.nextBtn?.addEventListener('click', () => {
            if (!validateStep()) return;
            goToStep(ui.currentStep + 1, { force: true });
        });
        dom.payNowBtn?.addEventListener('click', () => submitBooking('payment'));
        dom.addToCartBtn?.addEventListener('click', () => submitBooking('cart'));
        dom.summaryFocusBtn?.addEventListener('click', () => dom.summary?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
        dom.helpToggleBtn?.addEventListener('click', () => {
            state.guideEnabled = true;
            ui.lastGuideSignature = null;
            showGuideForCurrentStep();
        });
        dom.dismissGuideBtn?.addEventListener('click', hideGuide);
        dom.closeGuideBtn?.addEventListener('click', () => {
            state.guideEnabled = false;
            hideGuide();
        });

        window.addEventListener('resize', () => {
            const content = getGuideContent(ui.currentStep);
            if (content) positionGuide(content.anchor);
        });
        window.addEventListener('scroll', () => {
            const content = getGuideContent(ui.currentStep);
            if (content) positionGuide(content.anchor);
        }, { passive: true });
    }

    async function bootstrapBranch() {
        if (!preselectedBranchId) return;

        showLoader();
        try {
            const data = await fetchJson('/all/branchs/');
            const matched = (Array.isArray(data) ? data : []).find((branch) => String(branch.id) === String(preselectedBranchId));
            if (!matched) return;

            state.branchId = matched.id;
            state.branchName = getLocalizedValue(matched.name);
            if (dom.branchLead) {
                dom.branchLead.textContent = t('تم اختيار الفرع مسبقًا. اختر القسم الرئيسي للمتابعة.', 'The branch is preselected. Choose the main category to continue.');
            }
            fetchMainServices();
            goToStep(3, { force: true });
        } catch (error) {
            // keep default flow
        } finally {
            hideLoader();
        }
    }

    function init() {
        seedPlaceholders();
        bindEvents();
        updateUI();
        bootstrapBranch();
    }

    document.addEventListener('DOMContentLoaded', init);
})();
