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
        
        <link rel="stylesheet" href="{{ asset('pages-css/gift.css') }}">
        <style>
            .top-label{
                color: white;
                background: #CF9233;
            }
            .gift-guide-overlay {
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.68);
                display: none;
                align-items: center;
                justify-content: center;
                z-index: 1200;
                padding: 16px;
            }

            .gift-guide-overlay.active {
                display: flex;
            }

            .gift-guide-card {
                width: min(860px, 100%);
                min-height: 290px;
                border: 2px solid #c78e2e;
                border-radius: 10px;
                background: radial-gradient(circle at 50% 20%, #22252d 0%, #13161d 55%, #0d1117 100%);
                box-shadow: 0 22px 50px rgba(0, 0, 0, 0.5);
                padding: 34px 32px 28px;
                position: relative;
                color: #d8a03c;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 24px;
            }

            .gift-guide-close {
                position: absolute;
                top: 12px;
                left: 12px;
                width: 22px;
                height: 22px;
                border: 0;
                border-radius: 50%;
                cursor: pointer;
                font-size: 14px;
                line-height: 22px;
                font-weight: 700;
                color: #2a2a2a;
                background: #fff;
            }

            .gift-guide-text {
                margin: 0;
                font-weight: 700;
                line-height: 1.8;
                font-size: clamp(23px, 2.2vw, 40px);
                color: #d49a33;
            }

            .gift-guide-actions {
                display: flex;
                justify-content: center;
            }

            .gift-guide-next {
                background: #cb9134;
                color: #fff;
                border: 3px solid #fff;
                border-radius: 999px;
                min-width: 210px;
                min-height: 48px;
                padding: 10px 28px;
                font-size: 18px;
                font-weight: 700;
                cursor: pointer;
            }

            @media (max-width: 768px) {
                .gift-guide-card {
                    min-height: 250px;
                    padding: 28px 18px 20px;
                }

                .gift-guide-next {
                    min-width: 180px;
                    min-height: 42px;
                    font-size: 16px;
                }
            }
        </style>
    </head>

<body dir="{{ app()->getLocale() == 'ar' ? 'rtl' : 'ltr' }}" class="{{ app()->getLocale() }}">
    <div class="position-relative" style="height: 17vh;">
        @include('components.frontend.second-navbar')
        @include('components.frontend.notifications')
    </div>
    <!-- Main Container -->
    <div class="container">
        <div id="wifi-loader" style="display:none;">
            <svg class="circle-outer" viewBox="0 0 86 86">
                <circle class="back" cx="43" cy="43" r="40"></circle>
                <circle class="front" cx="43" cy="43" r="40"></circle>
                <circle class="new" cx="43" cy="43" r="40"></circle>
            </svg>
            <svg class="circle-middle" viewBox="0 0 60 60">
                <circle class="back" cx="30" cy="30" r="27"></circle>
                <circle class="front" cx="30" cy="30" r="27"></circle>
            </svg>
            <svg class="circle-inner" viewBox="0 0 34 34">
                <circle class="back" cx="17" cy="17" r="14"></circle>
                <circle class="front" cx="17" cy="17" r="14"></circle>
            </svg>
            <div class="text" data-text="Loading"></div>
        </div>
        <!-- Content -->
        <div class="content">
            <!-- Progress Bar -->
            <div class="progress-bar">
                <div class="progress-step active" data-progress-step="1">
                    <i class="fa-solid fa-file-lines"></i>
                </div>
                <div class="line"></div>
                <div class="progress-step" data-progress-step="2">
                    <span class="iconify" data-icon="mdi-light:home" style="font-size: 29px;"></span>
                </div>
                <div class="line"></div>
                <div class="progress-step" data-progress-step="3">
                    <i class="bi bi-calendar"></i>
                </div>
            </div>
            <!-- Step 1: Location -->
            <div id="step1" class="step-content">
                
                <div class="content-form">
                    
                    <div class="column-mob" style="display: flex;gap: 34px;">
                        <div class="d-flex w-100-mob" style="flex-direction: column;gap: 12px;width: 47%;">
                            <lable>{{ __('messagess.recipient_name') }}:</lable>
                            <input id="recipient_name" type="text">
                        </div>
                        <div class="d-flex w-100-mob" style="flex-direction: column;gap: 12px;width: 47%;">
                            <lable>{{ __('messagess.recipient_mobile') }} </lable>
                            <input id="recipient_mobile" type="text">
                        </div>
                    </div>
                    
                    <div>
                        <div class="d-flex" style="flex-direction: column;gap: 12px;width: 100%;">
                            <lable style="margin-top: 15px;">{{ __('messagess.gift_message_from_sender') }}</lable>
                            <textarea id="message" style="height: 140px;" maxlength="500" placeholder="{{ __('messagess.friend_greeting') }}"></textarea>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <!-- Step 2: Location -->
            <div id="step2" class="step-content">
                <div class="location-form">
                    <div class="form-group">
                        <label class="top-label"> {{ __('messagess.select_branch') }} </label>
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
            <!-- Step 3: Service & massage -->
            <div id="step3" class="step-content hidden">
                <label class="top-label" style="width: 58%;margin: auto;"> {{ __('messagess.select_service_to_book') }} </label>
                <br>
                <div class="service-grid">

                </div>
                <div class="massage-cards">

                </div>
                <div class="sammary-steps"></div>
            </div>

            <div class="step-content hidden2" id="summaryCard" style="height: 800px;">

            </div>
            
            <div class="gift-guide-overlay" id="giftGuideOverlay">
                <div class="gift-guide-card" role="dialog" aria-modal="true" aria-labelledby="giftGuideText">
                    <button type="button" class="gift-guide-close" id="giftGuideClose" aria-label="Close">×</button>
                    <p class="gift-guide-text" id="giftGuideText">
                        {{ __('messages.gift_guide_text') }}
                    </p>
                    <div class="gift-guide-actions">
                        <button type="button" class="gift-guide-next" id="giftGuideNext">{{ __('messagess.next') }}</button>
                    </div>
                </div>
            </div>
            
            <!-- Navigation -->
            <div class="navigation">
                <button class="btn btn-secondary" id="prevBtn" disabled>{{ __('messagess.previous') }}</button>
                <button class="btn btn-primary" id="nextBtn">{{ __('messagess.next') }}</button>
            </div>
        </div>
    </div>
    <div class="position-relative" style="height: 17vh;"></div>
    <!-- Footer -->
    @include('components.frontend.footer')
    <script>
        const translations = { next: "{{ __('messagess.next') }}", complete: "{{ __('messagess.complete') }}"};
        
        // Application State
        let currentStep = 1;
        let maxSteps = 3; 
        
        let selectedData = {
            branch: null,
            branchName: null,
            services: [],
            location: null
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


        function initializeApp() {
            updateUI();
            setupEventListeners();
            setupAutoNavigation();
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

            document.getElementById("giftGuideOverlay").addEventListener('click', () => {
                hideGiftGuideOverlay()
            });

            nextBtn.addEventListener('click', () => {
                if (validateCurrentStep()) {
                    if (currentStep < maxSteps) {
                        currentStep++;
                        updateUI(); 
                    } else { 
                        if (validateCurrentStep()) {
                            completeBooking();
                        }
                    }
                }
            });
        }

        function showLoader() {
            document.getElementById("wifi-loader").style.display = "flex";
        }
        
        function hideLoader() {
            document.getElementById("wifi-loader").style.display = "none";
        }

        function showGiftGuideOverlay() {
            document.getElementById("giftGuideOverlay").style.display = "flex";
        }
        
        function hideGiftGuideOverlay() {
            document.getElementById("giftGuideOverlay").style.display = "none";
        }
 
        function fetchbranch(cityId) {
            showLoader();
            fetch(`/branchs/${cityId}`)
                .then(response => response.json())
                .then(data => {
                    const branchsContainer = document.querySelector('.branch-cards');
                    const recipient_name = document.getElementById('recipient_name').value.trim();
                    const recipient_mobile = document.getElementById('recipient_mobile').value.trim();
                    const message = document.getElementById('message').value.trim();                        
                    branchsContainer.innerHTML = '';

                    const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';

                    data.forEach(branch => {
                        
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
                                services: [],
                                location: null
                            };
                            selectedData.location = { recipient_name, recipient_mobile, message };
                            selectedData.branch = branch.id;
                            selectedData.branchName = branch.name[lang];
                            setTimeout(() => {
                                if (currentStep == 2 && validateCurrentStep()) {
                                    currentStep = 3;
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
        
        function fetchServiceGroups() {
            showLoader();
            fetch(`/service-groups`)
                .then(response => response.json())
                .then(data => {
                    const serviceGrid = document.querySelector('.service-grid');
                    serviceGrid.innerHTML = '';
                    const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
                    data.forEach(service => {
                        let serviceName = '';
                        try {
                            const parsedName = JSON.parse(service.name);
                            serviceName = parsedName[lang] || parsedName['en'];
                        } catch (e) {
                            serviceName = service.name;
                        }

                        const card = document.createElement('div');
                        card.className = 'service-card';
                        card.dataset.service = service.id;
                        card.innerHTML = `
                            <img src="${service.image}" alt="${serviceName}" style="position: absolute;width: 100%;height: 100%;border-radius: 6px;object-fit: cover;object-position: center;""> 
                            <h4 style="position: absolute;top: 78px;width: 100%;text-align: center;font-size: 21px;color: white;">${serviceName}</h4>`;
                            
                        card.addEventListener('click', () => {
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
                        fetchServicesByGroup(service.id);
                    });
                        serviceGrid.appendChild(card);
                    });
                    hideLoader();
                })
                .catch(error => {
                    console.error('Error fetching services:', error);
                    hideLoader();
                });
        }

        function fetchServicesByGroup(serviceGroupId) {
            showLoader();
            fetch(`/services/${serviceGroupId}/${selectedData.branch}/bookings`)
                .then(response => response.json())
                .then(data => {
                    const massageContainer = document.querySelector('.massage-cards');
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
                        massageContainer.parentNode.insertBefore(searchWrapper, massageContainer);
        
                        searchInput.addEventListener('input', function () {
                            const query = this.value.toLowerCase();
                            document.querySelectorAll('.massage-card').forEach(card => {
                                const name = card.querySelector('.massage-name').textContent.toLowerCase();
                                card.style.display = name.includes(query) ? 'block' : 'none';
                            });
                        });
                    }
                    data.forEach(service => {
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
                            <div class="massage-duration"> <span style="font-weight: 200;"> ${lang === 'ar' ? 'مدة الجلسة :' : 'Session Duration:'} </span> ${service.duration_min} ${lang === 'ar' ? 'دقائق' : 'Minutes'}</div>
                            <div class="massage-price"> <span style="font-weight: 200;"> ${lang === 'ar' ? 'السعر :' : 'price :'} </span>${parseInt(service.default_price)} ${lang === 'ar' ? 'ريال' : 'SAR'}</div>
                        `;
                        card.addEventListener('click', (e) => {
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
                                parentGroup.subServices.push({
                                    id: service.id,
                                    name: serviceName,
                                    duration: service.duration_min,
                                    price: parseInt(service.default_price)
                                });
                            }
                        
                            fanaltotal = selectedData.services.reduce((sum, service) => {
                                const subTotal = service.subServices.reduce((subSum, sub) => subSum + sub.price, 0);
                                return sum + subTotal;
                            }, 0);
                            
                            updateSummarySteps();
                        });
                        massageContainer.appendChild(card);
                    });
                    hideLoader();
                })
                .catch(error => {
                    console.error('Error fetching services:', error);
                    hideLoader();
                });
        }
        
        function updateSummarySteps() {
            const summaryContainers = document.querySelectorAll('.sammary-steps');
            summaryContainers.forEach(summaryContainer => {
                summaryContainer.innerHTML = '';
            
                summaryContainer.style.display = "grid";
                summaryContainer.style.gridTemplateColumns = "repeat(3, minmax(250px, 1fr))";
                summaryContainer.style.gap = "15px";
        
                if (!selectedData.services || selectedData.services.length === 0) {
                    summaryContainer.innerHTML = '<p style="color: gray;">لم يتم اختيار أي خدمات بعد</p>';
                    return;
                }
        
                selectedData.services.forEach(service => {
                    if (service.subServices && service.subServices.length > 0) {
                        service.subServices.forEach(sub => {
                            const card = document.createElement('div');
                            card.className = 'summary-card';
                            card.style.cssText = `border-radius:10px;padding:20px;background:#fff;cursor:pointer;transition:0.2s ease-in-out;background: #212121;
                            `;
                            
                            card.onmouseenter = () => card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
                            card.onmouseleave = () => card.style.boxShadow = "none";
                            
                            const header = `
                                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                                    <div>
                                        <strong style="font-size:16px;">${service.name}</strong>
                                        <p style="margin:5px 0 0; font-size:14px;">${sub.name}</p>
                                    </div>
                                    <img src="${service.image || 'https://via.placeholder.com/60'}" 
                                         alt="${service.name}" 
                                         style="width:60px; height:60px; border-radius:8px; object-fit:cover;">
                                </div>
                            `;
        
                            const details = `
                                <div style="margin-top:10px;">
                                    <label style="font-size:13px;">الموظف:</label>
                                    <input class="form-textarea" type="text" value="${sub.staffName || ''}"  disabled placeholder="الموظف" 
                                           style="width:100%; padding:8px; margin-bottom:10px; border:1px solid #ccc; border-radius:6px;">
                                    
                                    <div style="display:flex; flex-direction:row-reverse; justify-content:flex-end; gap:6px;">
                                        <input type="date" value="${sub.date || ''}" disabled 
                                               style="flex:1; padding:8px; border:1px solid #ccc; border-radius:6px;color: #CF9233;">
                                        <input type="time"  value="${sub.time || ''}" disabled 
                                               style="flex:1; padding:8px; border:1px solid #ccc; border-radius:6px;color: #CF9233;">
                                    </div>
        
                                    <div style="text-align:right; font-weight:bold; color:#a36b2c; margin-top:8px;">
                                        السعر: ${sub.price || 0} ريال
                                    </div>
                                </div>
                            `;
        
                            card.innerHTML = header + details;
    
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
                    const messages = {
                        fillAll: "{{ __('messages.fill_all_details') }}",
                        invalidMobile: "{{ __('messages.invalid_saudi_mobile') }}"
                    };
                    
                    const recipient_name = document.getElementById('recipient_name').value.trim();
                    const recipient_mobile = document.getElementById('recipient_mobile').value.trim();
                    const message = document.getElementById('message').value.trim();
    
                    const saudiPhoneRegex = /^(05\d{8}|9665\d{8}|\+9665\d{8})$/;
              
                    if (!recipient_name || !recipient_mobile || !message) {
                        createNotify({ title: '', desc: messages.fillAll})
                        return false;
                    }
                
                    if (!saudiPhoneRegex.test(recipient_mobile)) {
                        createNotify({ title: '', desc: messages.invalidMobile})
                        return false;
                    }
                    
                    selectedData.location = { recipient_name, recipient_mobile, message };
                    break;
                case 2:
                    const selectedBranch = document.querySelector('input[name="branch"]:checked');
                    if (!selectedBranch) {
                        createNotify({ title: '', desc: '{{ __("messagess.please_select_branch") }}'})
                        return false;
                    }
                    break;
                case 3:
                    const hasAtLeastOneSubService = Array.isArray(selectedData.services) &&
                        selectedData.services.some(service => Array.isArray(service.subServices) && service.subServices.length > 0);

                    if (!hasAtLeastOneSubService) {
                        createNotify({ title: '', desc: '{{ __("messages.gift_card_service_required") }}'})
                        return false;
                    }
                    break;
                case 4:
                    nextBtn.textContent = translations.complete;
                    break;
            }
            return true;
        }
        
        function completeBooking() {
            const payload = {
                ...selectedData, 
            };
            fetch(`/gift-cards`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',  
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content 
                },
                body: JSON.stringify(payload)
            })
            .then(response => response.json())
            .then(data => {
                if (data.status == true) {
                    showGiftGuideOverlay();
                    createNotify({ title: 'تمت العملية بنجاح', desc: data.message  });
                    setTimeout(() => {
                        window.location.href = '/cart'; 
                    }, 4500);
                }else{
                    createNotify({
                        title: "{{ app()->getLocale() === 'ar' ? 'خطأ' : 'error' }}",
                        desc: data.message
                    });
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
