<div class="booking-shell booking-shell--signature">
    <div class="booking-layout booking-layout--signature">
        <aside class="booking-signature-rail">
            <div class="booking-signature-card booking-signature-card--progress">
                <div class="booking-signature-card__head">
                    <span>{{ app()->getLocale() === 'ar' ? 'خريطة الحجز' : 'Booking map' }}</span>
                    <strong>{{ app()->getLocale() === 'ar' ? 'كل خطوة في مكانها' : 'Every step in order' }}</strong>
                </div>
                <div class="booking-stepper booking-stepper--signature">
                    @php
                        $stepLabels = app()->getLocale() === 'ar'
                            ? ['المدينة', 'الفرع', 'الخدمة الرئيسية', 'الخدمات المختارة', 'الموظفة', 'التاريخ', 'الوقت']
                            : ['City', 'Branch', 'Main service', 'Selected services', 'Staff', 'Date', 'Time'];
                    @endphp
                    @foreach ($stepLabels as $index => $stepLabel)
                        <button type="button" class="booking-stepper__item{{ $index === 0 ? ' is-active' : '' }}" data-step-jump="{{ $index + 1 }}">
                            <span class="booking-stepper__count">{{ str_pad($index + 1, 2, '0', STR_PAD_LEFT) }}</span>
                            <span class="booking-stepper__label">{{ $stepLabel }}</span>
                        </button>
                    @endforeach
                </div>
            </div>
        </aside>

        <main class="booking-main booking-main--signature">
            <section class="booking-stage booking-stage--signature">
                <article class="booking-panel booking-panel--signature is-active" data-step-panel="1">
                    <div class="booking-panel__head booking-panel__head--signature">
                        <div>
                            <span class="booking-panel__kicker">{{ app()->getLocale() === 'ar' ? 'المرحلة 1' : 'Stage 1' }}</span>
                            <h2>{{ app()->getLocale() === 'ar' ? 'اختر المدينة' : 'Choose the city' }}</h2>
                        </div>
                        <p>{{ app()->getLocale() === 'ar' ? 'ابدأ من المدينة ليظهر لك فقط ما يناسب نطاقك.' : 'Start with the city so everything that follows stays relevant.' }}</p>
                    </div>
                    <div class="booking-grid booking-grid--cities" id="cityGrid" data-guide-anchor="city-grid">
                        @foreach ($States as $state)
                            @php
                                $translatedStateName = is_array($state->name)
                                    ? ($state->name[app()->getLocale()] ?? $state->name['ar'] ?? $state->name['en'] ?? reset($state->name))
                                    : $state->name;
                            @endphp
                            <button type="button" class="booking-choice-card booking-choice-card--signature city-card" data-city-id="{{ $state->id }}" data-city-name="{{ $translatedStateName }}">
                                <span class="booking-choice-card__icon"><i class="bi bi-geo-alt"></i></span>
                                <strong>{{ $translatedStateName }}</strong>
                                <small>{{ app()->getLocale() === 'ar' ? 'انطلق من هنا لعرض الفروع المتاحة' : 'Start here to reveal available branches' }}</small>
                            </button>
                        @endforeach
                    </div>
                </article>

                <article class="booking-panel booking-panel--signature" data-step-panel="2">
                    <div class="booking-panel__head booking-panel__head--signature">
                        <div>
                            <span class="booking-panel__kicker">{{ app()->getLocale() === 'ar' ? 'المرحلة 2' : 'Stage 2' }}</span>
                            <h2>{{ app()->getLocale() === 'ar' ? 'اختر الفرع الأنسب' : 'Choose the best branch' }}</h2>
                        </div>
                        <p id="branchStepLead">{{ app()->getLocale() === 'ar' ? 'سنحمّل الفروع التي تخدم المدينة المختارة حتى تكون الخيارات مركزة وواضحة.' : 'Only branches that match the chosen city will appear here.' }}</p>
                    </div>
                    <div class="booking-grid booking-grid--branches" id="branchGrid" data-guide-anchor="branch-grid"></div>
                </article>

                <article class="booking-panel booking-panel--signature" data-step-panel="3">
                    <div class="booking-panel__head booking-panel__head--signature">
                        <div>
                            <span class="booking-panel__kicker">{{ app()->getLocale() === 'ar' ? 'المرحلة 3' : 'Stage 3' }}</span>
                            <h2>{{ app()->getLocale() === 'ar' ? 'اختر القسم الرئيسي' : 'Choose the main category' }}</h2>
                        </div>
                        <p>{{ app()->getLocale() === 'ar' ? 'القسم الرئيسي يحدد المسار العام للخدمات التي ستظهر في الخطوة التالية.' : 'The main category defines the service path you will continue with next.' }}</p>
                    </div>
                    <div class="booking-grid booking-grid--services" id="mainServiceGrid" data-guide-anchor="main-grid"></div>
                </article>

                <article class="booking-panel booking-panel--signature" data-step-panel="4">
                    <div class="booking-panel__head booking-panel__head--signature">
                        <div>
                            <span class="booking-panel__kicker">{{ app()->getLocale() === 'ar' ? 'المرحلة 4' : 'Stage 4' }}</span>
                            <h2>{{ app()->getLocale() === 'ar' ? 'كوّن الحجز بالخدمات التي تريدها' : 'Build your booking with the right services' }}</h2>
                        </div>
                        <p id="selectionNote">{{ app()->getLocale() === 'ar' ? 'يمكنك اختيار خدمة أو أكثر، وسنحوّل كل خدمة إلى محطة مستقلة داخل نفس الحجز.' : 'You can pick one or many services, and each one will become its own station inside the same booking.' }}</p>
                    </div>
                    <div class="booking-grid booking-grid--subservices" id="subServiceGrid" data-guide-anchor="sub-grid"></div>
                </article>

                <article class="booking-panel booking-panel--signature" data-step-panel="5">
                    <div class="booking-panel__head booking-panel__head--signature">
                        <div>
                            <span class="booking-panel__kicker">{{ app()->getLocale() === 'ar' ? 'المرحلة 5' : 'Stage 5' }}</span>
                            <h2>{{ app()->getLocale() === 'ar' ? 'اختر الموظفة أو دع النظام يختار' : 'Choose the staff member or let the system choose' }}</h2>
                        </div>
                        <p>{{ app()->getLocale() === 'ar' ? 'الآن نضبط الخدمة النشطة. يمكنك اختيار أي موظفة ليتم التوزيع تلقائيًا من المتاح.' : 'Configure the active service now, or let the system assign an available staff member automatically.' }}</p>
                    </div>
                    <div class="booking-editor-rail booking-editor-rail--signature" data-editor-rail></div>
                    <div class="booking-grid booking-grid--staff" id="staffGrid" data-guide-anchor="staff-grid"></div>
                </article>

                <article class="booking-panel booking-panel--signature" data-step-panel="6">
                    <div class="booking-panel__head booking-panel__head--signature">
                        <div>
                            <span class="booking-panel__kicker">{{ app()->getLocale() === 'ar' ? 'المرحلة 6' : 'Stage 6' }}</span>
                            <h2>{{ app()->getLocale() === 'ar' ? 'اختر التاريخ المناسب' : 'Choose the suitable date' }}</h2>
                        </div>
                        <p>{{ app()->getLocale() === 'ar' ? 'بعد تثبيت الموظفة، نفتح لك الأيام المناسبة للخدمة الحالية فقط.' : 'Once staff is selected, we narrow the calendar to the dates that fit the current service.' }}</p>
                    </div>
                    <div class="booking-editor-rail booking-editor-rail--signature" data-editor-rail></div>
                    <div class="booking-dates" id="dateGrid" data-guide-anchor="date-grid"></div>
                </article>

                <article class="booking-panel booking-panel--signature" data-step-panel="7">
                    <div class="booking-panel__head booking-panel__head--signature">
                        <div>
                            <span class="booking-panel__kicker">{{ app()->getLocale() === 'ar' ? 'المرحلة 7' : 'Stage 7' }}</span>
                            <h2>{{ app()->getLocale() === 'ar' ? 'اختر الوقت وأغلق الحجز بثقة' : 'Choose the time and finish with confidence' }}</h2>
                        </div>
                        <p>{{ app()->getLocale() === 'ar' ? 'بعد اختيار الوقت، ننتقل تلقائيًا للخدمة التالية إن وجدت أو نفعّل الإرسال مباشرة.' : 'After picking a time, we either move to the next service automatically or unlock the final action.' }}</p>
                    </div>
                    <div class="booking-editor-rail booking-editor-rail--signature" data-editor-rail></div>
                    <div class="booking-times" id="timeGrid" data-guide-anchor="time-grid"></div>
                    <div class="booking-final-actions booking-final-actions--signature">
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

            <div class="booking-nav booking-nav--signature">
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

        <aside class="booking-summary booking-summary--signature" id="bookingSummary">
            <div class="booking-summary__card booking-summary__card--signature">
                <div class="booking-summary__head">
                    <div>
                        <span>{{ app()->getLocale() === 'ar' ? 'ملخص تنفيذي' : 'Executive summary' }}</span>
                    </div>
                    <span class="booking-summary__badge" id="summaryReadyBadge">{{ app()->getLocale() === 'ar' ? 'قيد الإعداد' : 'In progress' }}</span>
                </div>
                <div class="booking-summary__body" id="summaryBody"></div>
                <p class="booking-summary__hint">{{ app()->getLocale() === 'ar' ? 'الملخص يتحدث مباشرة مع كل اختيار تقوم به حتى تشاهد الصورة كاملة بدون الرجوع لكل خطوة.' : 'The summary updates live with every choice so you always keep the full picture in view.' }}</p>
            </div>
        </aside>
    </div>
</div>

<div class="booking-loader" id="bookingLoader" hidden>
    <div class="booking-loader__ring"></div>
    <span>{{ app()->getLocale() === 'ar' ? 'جار تجهيز تجربة الحجز...' : 'Preparing the booking experience...' }}</span>
</div>

<div class="booking-guide is-active" id="bookingGuide">
    <div class="booking-guide__focus" id="guideFocus"></div>
    <div class="booking-guide__card" id="guideCard">
        <div class="booking-guide__head">
            <span id="guideStepCounter"></span>
            <button type="button" id="closeGuideBtn">{{ app()->getLocale() === 'ar' ? 'إغلاق التعليمات' : 'Close guide' }}</button>
        </div>
        <h4 id="guideTitle"></h4>
        <p id="guideText"></p>
        <div class="booking-guide__actions">
            <button type="button" class="booking-guide__btn booking-guide__btn--ghost" id="dismissGuideBtn">{{ app()->getLocale() === 'ar' ? 'متابعة' : 'Continue' }}</button>
        </div>
    </div>
</div>
