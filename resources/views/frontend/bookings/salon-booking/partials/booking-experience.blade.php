<div class="booking-shell">
    <div class="booking-layout">
        <main class="booking-main">
            <div class="booking-stepper">
                @php
                    $stepLabels = app()->getLocale() === 'ar'
                        ? ['المدينة', 'الفرع', 'الخدمة الرئيسية', 'الخدمات المختارة', 'الموظفة', 'التاريخ', 'الوقت']
                        : ['City', 'Branch', 'Main service', 'Selected services', 'Staff', 'Date', 'Time'];
                @endphp
                @foreach ($stepLabels as $index => $stepLabel)
                    <button type="button" class="booking-stepper__item{{ $index === 0 ? ' is-active' : '' }}" data-step-jump="{{ $index + 1 }}">
                        <span class="booking-stepper__count">{{ $index + 1 }}</span>
                        <span class="booking-stepper__label">{{ $stepLabel }}</span>
                    </button>
                @endforeach
            </div>

            <section class="booking-stage">
                <article class="booking-panel is-active" data-step-panel="1">
                    <div class="booking-panel__head">
                        <div>
                            <span class="booking-panel__kicker">{{ app()->getLocale() === 'ar' ? 'الخطوة 1' : 'Step 1' }}</span>
                            <h2>{{ app()->getLocale() === 'ar' ? 'ابدأ باختيار المدينة' : 'Start by choosing the city' }}</h2>
                        </div>
                    </div>
                    <div class="booking-grid booking-grid--cities" id="cityGrid" data-guide-anchor="city-grid">
                        @foreach ($States as $state)
                            @php
                                $translatedStateName = is_array($state->name)
                                    ? ($state->name[app()->getLocale()] ?? $state->name['ar'] ?? $state->name['en'] ?? reset($state->name))
                                    : $state->name;
                            @endphp
                            <button type="button" class="booking-choice-card city-card" data-city-id="{{ $state->id }}" data-city-name="{{ $translatedStateName }}">
                                <span class="booking-choice-card__icon"><i class="bi bi-buildings"></i></span>
                                <strong>{{ $translatedStateName }}</strong>
                                <small>{{ app()->getLocale() === 'ar' ? 'حدد المدينة لعرض الفروع' : 'Pick the city to load branches' }}</small>
                            </button>
                        @endforeach
                    </div>
                </article>

                <article class="booking-panel" data-step-panel="2">
                    <div class="booking-panel__head">
                        <div>
                            <span class="booking-panel__kicker">{{ app()->getLocale() === 'ar' ? 'الخطوة 2' : 'Step 2' }}</span>
                            <h2>{{ app()->getLocale() === 'ar' ? 'الآن اختر الفرع' : 'Now choose the branch' }}</h2>
                        </div>
                        <p id="branchStepLead">{{ app()->getLocale() === 'ar' ? 'الفروع المناسبة ستظهر هنا بعد اختيار المدينة.' : 'The matching branches will appear here after selecting the city.' }}</p>
                    </div>
                    <div class="booking-grid booking-grid--branches" id="branchGrid" data-guide-anchor="branch-grid"></div>
                </article>

                <article class="booking-panel" data-step-panel="3">
                    <div class="booking-panel__head">
                        <div>
                            <span class="booking-panel__kicker">{{ app()->getLocale() === 'ar' ? 'الخطوة 3' : 'Step 3' }}</span>
                            <h2>{{ app()->getLocale() === 'ar' ? 'اختر القسم الرئيسي' : 'Choose the main category' }}</h2>
                        </div>
                        <p>{{ app()->getLocale() === 'ar' ? 'يمكنك العودة لهذه الخطوة لاحقًا لإضافة خدمات أخرى من أقسام مختلفة.' : 'You can come back here later to add more services from different categories.' }}</p>
                    </div>
                    <div class="booking-grid booking-grid--services" id="mainServiceGrid" data-guide-anchor="main-grid"></div>
                </article>

                <article class="booking-panel" data-step-panel="4">
                    <div class="booking-panel__head">
                        <div>
                            <span class="booking-panel__kicker">{{ app()->getLocale() === 'ar' ? 'الخطوة 4' : 'Step 4' }}</span>
                            <h2>{{ app()->getLocale() === 'ar' ? 'اختر خدمة أو أكثر' : 'Choose one or more services' }}</h2>
                        </div>
                        <p id="selectionNote">{{ app()->getLocale() === 'ar' ? 'يمكنك تحديد أكثر من خدمة ثم نضبط الموظفة والموعد لكل خدمة على حدة.' : 'You can select multiple services, then configure the staff and time for each one separately.' }}</p>
                    </div>
                    <div class="booking-grid booking-grid--subservices" id="subServiceGrid" data-guide-anchor="sub-grid"></div>
                </article>

                <article class="booking-panel" data-step-panel="5">
                    <div class="booking-panel__head">
                        <div>
                            <span class="booking-panel__kicker">{{ app()->getLocale() === 'ar' ? 'الخطوة 5' : 'Step 5' }}</span>
                            <h2>{{ app()->getLocale() === 'ar' ? 'اختر الموظفة للخدمة الحالية' : 'Choose the staff member for the current service' }}</h2>
                        </div>
                    </div>
                    <div class="booking-editor-rail" data-editor-rail></div>
                    <div class="booking-grid booking-grid--staff" id="staffGrid" data-guide-anchor="staff-grid"></div>
                </article>

                <article class="booking-panel" data-step-panel="6">
                    <div class="booking-panel__head">
                        <div>
                            <span class="booking-panel__kicker">{{ app()->getLocale() === 'ar' ? 'الخطوة 6' : 'Step 6' }}</span>
                            <h2>{{ app()->getLocale() === 'ar' ? 'اختر التاريخ للخدمة الحالية' : 'Choose the date for the current service' }}</h2>
                        </div>
                    </div>
                    <div class="booking-editor-rail" data-editor-rail></div>
                    <div class="booking-dates" id="dateGrid" data-guide-anchor="date-grid"></div>
                </article>

                <article class="booking-panel" data-step-panel="7">
                    <div class="booking-panel__head">
                        <div>
                            <span class="booking-panel__kicker">{{ app()->getLocale() === 'ar' ? 'الخطوة 7' : 'Step 7' }}</span>
                            <h2>{{ app()->getLocale() === 'ar' ? 'اختر الوقت ثم أكمل الحجز' : 'Choose the time and finish the booking' }}</h2>
                        </div>
                    </div>
                    <div class="booking-editor-rail" data-editor-rail></div>
                    <div class="booking-times" id="timeGrid" data-guide-anchor="time-grid"></div>
                    <div class="booking-final-actions">
                        <button type="button" class="booking-primary-btn booking-primary-btn--wide" id="payNowBtn" disabled>
                            <i class="bi bi-credit-card-2-front"></i>
                            {{ app()->getLocale() === 'ar' ? 'ادفع الآن' : 'Pay now' }}
                        </button>
                        <button type="button" class="booking-secondary-btn booking-secondary-btn--wide" id="addToCartBtn" disabled>
                            <i class="bi bi-bag-plus"></i>
                            {{ app()->getLocale() === 'ar' ? 'أضف إلى السلة' : 'Add to cart' }}
                        </button>
                    </div>
                </article>
            </section>

            <div class="booking-nav">
                <button type="button" class="booking-nav__btn booking-nav__btn--ghost" id="prevStepBtn">
                    <i class="bi bi-arrow-left-short"></i>
                    {{ app()->getLocale() === 'ar' ? 'السابق' : 'Previous' }}
                </button>
                <button type="button" class="booking-nav__btn booking-nav__btn--solid" id="nextStepBtn">
                    {{ app()->getLocale() === 'ar' ? 'التالي' : 'Next' }}
                    <i class="bi bi-arrow-right-short"></i>
                </button>
            </div>
        </main>

        <aside class="booking-summary" id="bookingSummary">
            <div class="booking-summary__card">
                <div class="booking-summary__head">
                    <div>
                        <span>{{ app()->getLocale() === 'ar' ? 'ملخص الحجز' : 'Booking summary' }}</span>
                        <h3>{{ app()->getLocale() === 'ar' ? 'الخدمات المختارة وحالتها' : 'Selected services and their status' }}</h3>
                    </div>
                    <span class="booking-summary__badge" id="summaryReadyBadge">{{ app()->getLocale() === 'ar' ? 'قيد الإعداد' : 'In progress' }}</span>
                </div>
                <div class="booking-summary__body" id="summaryBody"></div>
            </div>
        </aside>
    </div>
</div>

<div class="booking-loader" id="bookingLoader" hidden>
    <div class="booking-loader__ring"></div>
    <span>{{ app()->getLocale() === 'ar' ? 'جاري تجهيز الاختيارات...' : 'Preparing your choices...' }}</span>
</div>

<div class="booking-guide is-active" id="bookingGuide">
    <div class="booking-guide__focus" id="guideFocus"></div>
    <div class="booking-guide__card" id="guideCard">
        <div class="booking-guide__head">
            <span id="guideStepCounter"></span>
            <button type="button" id="closeGuideBtn">{{ app()->getLocale() === 'ar' ? 'إلغاء التعليمات' : 'Close guide' }}</button>
        </div>
        <h4 id="guideTitle"></h4>
        <p id="guideText"></p>
        <div class="booking-guide__actions">
            <button type="button" class="booking-guide__btn booking-guide__btn--ghost" id="dismissGuideBtn">{{ app()->getLocale() === 'ar' ? 'فهمت' : 'Got it' }}</button>
        </div>
    </div>
</div>
