<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ language_direction() }}" class="theme-fs-sm">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title') | {{ app_name() }}</title>

    <link rel="stylesheet" href="{{ mix('css/libs.min.css') }}">
    <link rel="stylesheet" href="{{ mix('css/backend.css') }}">
    @if (language_direction() == 'rtl')
        <link rel="stylesheet" href="{{ asset('css/rtl.css') }}">
    @endif
    <link rel="stylesheet" href="{{ asset('custom-css/frontend.css') }}">

    @stack('after-styles')
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Zain:ital,wght@0,200;0,300;0,400;0,700;0,800;0,900;1,300;1,400&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Zain', sans-serif !important;
        }
        .WheelOfFortune{
            width: 100%;
            height: 100vh;
            position: fixed;
            z-index: 999999;
            background: #00000047;
            backdrop-filter: blur(15px);
            display: none;
            justify-content: center;
            align-items: center;
        }
        .Wheel{
            text-align: center;
        }
        .Wheel h1{
            color: white;
            font-weight: bold;
        }
        .Wheel h5{
            color: white;
            margin: 18px 0;
        }
        .Wheel input{
            height: 39px;
            border: navajowhite;
            border-radius: 5px;
            padding: 6px;
            width: 65%;
            margin-bottom: 20px;
        }
        .Wheel button{
            color: white;
            width: 186px;
            height: 42px;
            border: none;
            border-radius: 23px;
            background: #CF9233;
        }
        #wheel {
            max-height: inherit;
            width: inherit;
            top: 0;
            padding: 0;
            display: block;
            border: 17px solid #B18624;
            border-radius: 50%;
            box-sizing: border-box;
            height: 268.8px;
            width: 268.8px;
        }
        @keyframes rotate {
          100% {
            transform: rotate(360deg);
            }
        }
        #final-value {
            font-size: 1.5em;
            text-align: center;
            margin-top: 1.5em;
            color: white;
            font-weight: 500;
        }
        .Wheel-img .arrow-wheel {
            position: absolute;
            top: 7%;
            right: 37%;
        }
        .Wheel-img{
            width: 51%;
            position: relative;
            border-radius: 1em;
            margin: auto;
        }
        #wheel-svg{
            border: 14px solid #B48829;
            border-radius: 50%;
            margin-bottom: 20px;
        }
        @media (max-width: 576px) {
          #wheel-svg {
            width: 200px;
            height: 200px;
          }
          .Wheel-img .arrow-wheel {
            top: 8%;
            right: 33% !important;
            height:160px;
          }
        }
        .notify-wrap{
            z-index: 999999 !important;
        }
        .close-wheel{
            position: absolute;
            top: 20% !important;
            right: 35% !important;
            font-size: 30px;
            color: #fff;
            cursor: pointer;
            font-weight: bold;
            z-index: 1000000;
            transition: 0.3s;
        }

        .close-wheel:hover{
            color: #CF9233;
        }
    </style>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">

</head>

<body class="{{ auth()->user()->user_setting['theme_scheme'] ?? '' }}">
    <div class="WheelOfFortune">
        <div class="Wheel">
            <span class="close-wheel" id="close-wheel">&times;</span>
            <div class="Wheel-img">
            <svg id="wheel-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="250" height="250">
              <title>Lucky Wheel</title>
              <rect width="100%" height="100%" fill="transparent"/>
              <g id="wheel-group" transform="translate(0,0)">
                <path id="s0" d="M250,250 L250,0 A250,250 0 0,1 375,33.494 Z" fill="#B89743"/>
                <path id="s1" d="M250,250 L375,33.494 A250,250 0 0,1 466.506,125 Z" fill="#4E4E4B"/>
                <path id="s2" d="M250,250 L466.506,125 A250,250 0 0,1 500,250 Z" fill="#B89743"/>
                <path id="s3" d="M250,250 L500,250 A250,250 0 0,1 466.506,375 Z" fill="#4E4E4B"/>
                <path id="s4" d="M250,250 L466.506,375 A250,250 0 0,1 375,466.506 Z" fill="#B89743"/>
                <path id="s5" d="M250,250 L375,466.506 A250,250 0 0,1 250,500 Z" fill="#4E4E4B"/>
                <path id="s6" d="M250,250 L250,500 A250,250 0 0,1 125,466.506 Z" fill="#B89743"/>
                <path id="s7" d="M250,250 L125,466.506 A250,250 0 0,1 33.494,375 Z" fill="#4E4E4B"/>
                <path id="s8" d="M250,250 L33.494,375 A250,250 0 0,1 0,250 Z" fill="#B89743"/>
                <path id="s9" d="M250,250 L0,250 A250,250 0 0,1 33.494,125 Z" fill="#4E4E4B"/>
                <path id="s10" d="M250,250 L33.494,125 A250,250 0 0,1 125,33.494 Z" fill="#B89743"/>
                <path id="s11" d="M250,250 L125,33.494 A250,250 0 0,1 250,0 Z" fill="#4E4E4B"/>

                <text x="291.411" y="95.452" font-size="28" font-family="Segoe UI Emoji, Noto Color Emoji, sans-serif" text-anchor="middle" dominant-baseline="central" fill="#fff">🎁</text>
                <text x="363.137" y="136.863" font-size="28" font-family="Segoe UI Emoji, Noto Color Emoji, sans-serif" text-anchor="middle" dominant-baseline="central" fill="#fff"></text>
                <text x="404.548" y="208.589" font-size="28" font-family="Segoe UI Emoji, Noto Color Emoji, sans-serif" text-anchor="middle" dominant-baseline="central" fill="#fff">🎁</text>
                <text x="404.548" y="291.411" font-size="28" font-family="Segoe UI Emoji, Noto Color Emoji, sans-serif" text-anchor="middle" dominant-baseline="central" fill="#fff"></text>
                <text x="363.137" y="363.137" font-size="28" font-family="Segoe UI Emoji, Noto Color Emoji, sans-serif" text-anchor="middle" dominant-baseline="central" fill="#fff">🎁</text>
                <text x="291.411" y="404.548" font-size="28" font-family="Segoe UI Emoji, Noto Color Emoji, sans-serif" text-anchor="middle" dominant-baseline="central" fill="#fff"></text>
                <text x="208.589" y="404.548" font-size="28" font-family="Segoe UI Emoji, Noto Color Emoji, sans-serif" text-anchor="middle" dominant-baseline="central" fill="#fff">🎁</text>
                <text x="136.863" y="363.137" font-size="28" font-family="Segoe UI Emoji, Noto Color Emoji, sans-serif" text-anchor="middle" dominant-baseline="central" fill="#fff"></text>
                <text x="95.452" y="291.411" font-size="28" font-family="Segoe UI Emoji, Noto Color Emoji, sans-serif" text-anchor="middle" dominant-baseline="central" fill="#fff">🎁</text>
                <text x="95.452" y="208.589" font-size="28" font-family="Segoe UI Emoji, Noto Color Emoji, sans-serif" text-anchor="middle" dominant-baseline="central" fill="#fff"></text>
                <text x="136.863" y="136.863" font-size="28" font-family="Segoe UI Emoji, Noto Color Emoji, sans-serif" text-anchor="middle" dominant-baseline="central" fill="#fff">🎁</text>
                <text x="208.589" y="95.452" font-size="28" font-family="Segoe UI Emoji, Noto Color Emoji, sans-serif" text-anchor="middle" dominant-baseline="central" fill="#fff"></text>
              </g>

              <defs>
                <radialGradient id="inner-shadow" cx="50%" cy="50%">
                  <stop offset="60%" stop-color="rgba(0,0,0,0.0)"/>
                  <stop offset="100%" stop-color="rgba(0,0,0,0.25)"/>
                </radialGradient>
              </defs>
              <circle cx="250" cy="250" r="250" fill="url(#inner-shadow)"/>

            </svg>

                <svg class="arrow-wheel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="70" height="200">
                  <defs>
                    <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stop-color="#d8a43a"/>
                      <stop offset="1" stop-color="#b27a2a"/>
                    </linearGradient>
                    <radialGradient id="centerGrad" cx="50%" cy="50%" r="60%">
                      <stop offset="0" stop-color="#4a4a4a"/>
                      <stop offset="1" stop-color="#222"/>
                    </radialGradient>
                  </defs>

                  <polygon points="100,20 130,80 70,80" fill="url(#gold)" />
                  <circle cx="100" cy="120" r="50" fill="url(#centerGrad)" stroke="url(#gold)" stroke-width="8"/>
                </svg>
            </div>
            <h1 class="hid-wheel">{{ __('messagess.get_your_gift') }}</h1>
            <h5 id="final-value"></h5>
            <h5 class="hid-wheel" style="color: white;">{{ __('messagess.spin_the_wheel_to_get_your_gift') }}</h5>
            <input class="hid-wheel" id="name" type="text" placeholder="{{ __('messagess.name') }}:">
            <input class="hid-wheel" id="phone" type="number" placeholder="{{ __('messagess.phone') }}:">
            @auth
                <button class="hid-wheel" id="spin-btn">
                    {{ __('messagess.spin_the_wheel') }}
                </button>
            @endauth

            @guest
                <button type="button" class="hid-wheel" onclick="showLoginAlert()">
                    {{ __('messagess.spin_the_wheel') }}
                </button>
            @endguest
        </div>
    </div>

    <x-frontend.progress-bar />

    <header class="shadow">
        <x-frontend.second-navbar />
        <x-frontend.slider-hero />
    </header>

    <main>
        @yield('content')
    </main>

    <x-frontend.footer />

    <script src="{{ mix('js/backend.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>
    <script>
        function showLoginAlert() {
            createNotify({
                title: "{{ __('messages.alert') }}",
                desc: "{{ __('messages.login_required') }}"
            });
        }
</script>

    <script>
        const lang = "{{ app()->getLocale() }}";
        const wheelWrapper = document.querySelector(".WheelOfFortune");
        const wheelElement = document.getElementById("wheel-svg");
        const spinBtn = document.getElementById("spin-btn");
        const finalValue = document.getElementById("final-value");
        const wheelCongrats = @json(__('messagess.wheel_congrats'));
        const wheelNotWinner = @json(__('messagess.wheel_not_winner'));
        const wheelUnavailable = @json(__('messagess.wheel_not_available_now'));
        const wheelSpinError = @json(__('messagess.wheel_spin_error'));
        const shouldShowWheel = @json($shouldShowWheel ?? false);
        const prizes = @json($prizes ?? []);
        const spinUrl = @json(route('wheel.spin'));
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
        let isSpinning = false;

        const closeWheelBtn = document.getElementById("close-wheel");

        if (closeWheelBtn) {
            closeWheelBtn.addEventListener("click", () => {
                wheelWrapper.style.display = "none";
            });
        }

        if (shouldShowWheel && wheelWrapper) {
            wheelWrapper.style.display = "flex";
        }

        const hideWheelInputs = () => {
            document.querySelectorAll('.hid-wheel').forEach((ele) => {
                ele.style.display = 'none';
            });
            const arrow = document.querySelector('.arrow-wheel');
            if (arrow) {
                arrow.style.right = '39%';
            }
        };

        const notifyError = (message) => {
            if (typeof createNotify === 'function') {
                createNotify({
                    title: lang === 'ar' ? 'تنبيه' : 'Warning',
                    desc: message
                });
            } else {
                alert(message);
            }
        };

        if (spinBtn) {
            spinBtn.addEventListener("click", () => {
                const name = document.getElementById("name")?.value?.trim();
                const phone = document.getElementById("phone")?.value?.trim();

                if (!name || !phone) {
                    notifyError(lang === 'ar' ? 'يرجى ملء البيانات' : 'Please fill in the data');
                    return;
                }

                if (isSpinning) return;

                isSpinning = true;
                spinBtn.disabled = true;
                finalValue.innerHTML = `<p>${lang === 'ar' ? 'حظًا سعيدًا!' : 'Good Luck!'}</p>`;

                const randomDegree = Math.floor(360 * (2 + Math.random() * 3));
                wheelElement.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
                wheelElement.style.transform = `rotate(${randomDegree}deg)`;

                setTimeout(async () => {
                    try {
                        if (prizes.length === 0) {
                            finalValue.innerHTML = `<h5 style="font-size:22px;font-weight:bold;">${wheelUnavailable}</h5>`;
                            hideWheelInputs();
                            return;
                        }

                        const response = await fetch(spinUrl, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'X-CSRF-TOKEN': csrfToken,
                                'Accept': 'application/json',
                            },
                            body: JSON.stringify({ name, phone }),
                        });

                        const result = await response.json();

                        if (!response.ok || !result.status) {
                            // This displays the 'Next eligible date' or error from backend
                            finalValue.innerHTML = `<h5 style="font-size:22px;font-weight:bold;">${result.message || wheelSpinError}</h5>`;
                            hideWheelInputs();
                            return;
                        }

                        // result.message now comes fully formatted from the Controller (see below)
                        finalValue.innerHTML = `<h5 style="font-size:22px;font-weight:bold;">${result.message}</h5>`;

                        hideWheelInputs();
                    } catch (error) {
                        finalValue.innerHTML = `<h5 style="font-size:22px;font-weight:bold;">${wheelSpinError}</h5>`;
                    } finally {
                        wheelElement.style.transition = "none";
                        isSpinning = false;
                    }
                }, 4500);
            });
        }
    </script>

    @stack('after-scripts')
</body>

</html>
