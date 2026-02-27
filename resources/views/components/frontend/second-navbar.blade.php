                <!--req links-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Zain:ital,wght@0,200;0,300;0,400;0,700;0,800;0,900;1,300;1,400&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('pages-css/second-navbar.css') }}?v={{ filemtime(public_path('pages-css/second-navbar.css')) }}">

@php
    $homeTheme = setting('home_theme', 'none');
    $showThemeDecor = $homeTheme !== 'none' && request()->routeIs('frontend.home');
@endphp


    <div class="m-nav d-none d-lg-flex flex-column justify-content-center {{ $showThemeDecor ? 'theme-' . $homeTheme : '' }}">
        @if($showThemeDecor)
            <div class="nav-theme-layer">
                @if($homeTheme === 'ramadan')
                    <div class="nav-theme-item nav-theme-lantern">
                        <svg viewBox="0 0 120 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <defs>
                                <linearGradient id="lanternBody" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0" stop-color="#f7d37a"/>
                                    <stop offset="1" stop-color="#c58a26"/>
                                </linearGradient>
                                <linearGradient id="lanternGlow" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0" stop-color="#fff6d0"/>
                                    <stop offset="1" stop-color="#f1b74b"/>
                                </linearGradient>
                            </defs>
                            <rect x="50" y="10" width="20" height="20" rx="4" fill="#9b6a1e"/>
                            <rect x="42" y="30" width="36" height="12" rx="6" fill="#b27a2a"/>
                            <path d="M25 50 H95 L80 160 Q60 185 40 160 Z" fill="url(#lanternBody)" stroke="#8a5b1c" stroke-width="3"/>
                            <rect x="38" y="70" width="44" height="70" rx="10" fill="url(#lanternGlow)" opacity="0.9"/>
                            <circle cx="60" cy="110" r="8" fill="#fff3b0"/>
                            <rect x="45" y="160" width="30" height="12" rx="4" fill="#8a5b1c"/>
                        </svg>
                    </div>
                    <div class="nav-theme-item nav-theme-crescent">
                        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <circle cx="60" cy="60" r="40" fill="#f7d37a"/>
                            <circle cx="74" cy="50" r="36" fill="#212121"/>
                            <circle cx="38" cy="36" r="6" fill="#f7d37a"/>
                        </svg>
                    </div>
                @elseif($homeTheme === 'eid_aladha')
                    <div class="nav-theme-item nav-theme-garland"></div>
                    <div class="nav-theme-item nav-theme-firework">
                        <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <circle cx="70" cy="70" r="8" fill="#ffd36b"/>
                            <g stroke="#ffd36b" stroke-width="4" stroke-linecap="round">
                                <line x1="70" y1="10" x2="70" y2="38"/>
                                <line x1="70" y1="102" x2="70" y2="130"/>
                                <line x1="10" y1="70" x2="38" y2="70"/>
                                <line x1="102" y1="70" x2="130" y2="70"/>
                                <line x1="24" y1="24" x2="44" y2="44"/>
                                <line x1="96" y1="96" x2="116" y2="116"/>
                                <line x1="24" y1="116" x2="44" y2="96"/>
                                <line x1="96" y1="44" x2="116" y2="24"/>
                            </g>
                        </svg>
                    </div>
                @elseif($homeTheme === 'eid_alfitr')
                    <div class="nav-theme-item nav-theme-lantern nav-theme-lantern-small">
                        <svg viewBox="0 0 120 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <defs>
                                <linearGradient id="fitrBody" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0" stop-color="#d7e6ff"/>
                                    <stop offset="1" stop-color="#7aa7f7"/>
                                </linearGradient>
                            </defs>
                            <rect x="50" y="10" width="20" height="20" rx="4" fill="#3b4c70"/>
                            <rect x="42" y="30" width="36" height="12" rx="6" fill="#4b5f8b"/>
                            <path d="M25 50 H95 L80 160 Q60 185 40 160 Z" fill="url(#fitrBody)" stroke="#31446b" stroke-width="3"/>
                            <rect x="38" y="70" width="44" height="70" rx="10" fill="#e6f1ff" opacity="0.9"/>
                            <circle cx="60" cy="110" r="8" fill="#ffffff"/>
                            <rect x="45" y="160" width="30" height="12" rx="4" fill="#31446b"/>
                        </svg>
                    </div>
                    <div class="nav-theme-item nav-theme-stars">
                        <svg viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <polygon points="15,10 19,22 32,22 21,30 25,42 15,34 5,42 9,30 -2,22 11,22" fill="#d7e6ff"/>
                            <polygon points="70,6 74,18 87,18 76,26 80,38 70,30 60,38 64,26 53,18 66,18" fill="#f7d37a"/>
                            <polygon points="120,14 124,26 137,26 126,34 130,46 120,38 110,46 114,34 103,26 116,26" fill="#d7e6ff"/>
                        </svg>
                    </div>
                @elseif($homeTheme === 'saudi_national_day')
                    <div class="nav-theme-item nav-theme-flag">
                        <svg viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <rect x="0" y="20" width="140" height="60" rx="8" fill="#0f6d4f"/>
                            <rect x="0" y="20" width="140" height="60" rx="8" fill="url(#flagGlow)"/>
                            <defs>
                                <linearGradient id="flagGlow" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0" stop-color="#ffffff" stop-opacity="0.2"/>
                                    <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
                                </linearGradient>
                            </defs>
                            <rect x="12" y="52" width="88" height="6" rx="3" fill="#ffffff"/>
                            <rect x="100" y="48" width="30" height="14" rx="7" fill="#ffffff"/>
                        </svg>
                    </div>
                    <div class="nav-theme-item nav-theme-ribbon"></div>
                @endif
            </div>
        @endif
        <div class="d-flex w-100 nav-theme-content">
            <div class="logo">
                <a href="/"> <img src="{{asset('images/samilogo.png')}}"></a>
            </div>
            <div class="links">
                <ul class="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
    
                        <li class="nav-item h5">
                            <a class="nav-link text-white {{ request()->routeIs('frontend.home') ? 'text-active' : '' }}" href="{{ route('frontend.home') }}">
                                {{ __('messagess.nav_home') }}
                            </a>
                        </li>
    
                        <li class="nav-item h5">
                            <a class="nav-link text-white {{ request()->routeIs('frontend.about') ? 'text-active' : '' }}" href="{{ route('frontend.about') }}">
                                {{ __('messagess.nav_about') }}
                            </a>
                        </li>
    
                        <li class="nav-item h5">
                            <a class="nav-link text-white {{ request()->routeIs('frontend.services') ? 'text-active' : '' }}" href="{{ route('frontend.services') }}">
                                {{ __('messagess.nav_services') }}
                            </a>
                        </li>
    
                        <li class="nav-item h5">
                            <a class="nav-link text-white {{ request()->routeIs('frontend.Packages') ? 'text-active' : '' }}" href="{{ route('frontend.Packages') }}">
                                {{ __('messagess.nav_package') }}
                            </a>
                        </li>
    
                        <li class="nav-item h5">
                            <a class="nav-link text-white {{ request()->routeIs('frontend.Ouroffers') ? 'text-active' : '' }}" href="{{ route('frontend.Ouroffers') }}">
                                {{ __('messagess.our_offers') }}
                            </a>
                        </li>
    
                        <li class="nav-item h5">
                            <a class="nav-link text-white {{ request()->routeIs('frontend.Shop') ? 'text-active' : '' }}" href="{{ route('frontend.Shop') }}">
                                {{ __('messagess.store') }}
                            </a>
                        </li>
    
                        <li class="nav-item h5">
                            <a class="nav-link text-white {{ request()->routeIs('gift.page') ? 'text-active' : '' }}" href="{{ route('gift.page') }}">
                               {{ __('messagess.gift_cards') }}
                            </a>
                        </li>
    
                        <li class="nav-item h5">
                            <a class="nav-link text-white {{ request()->routeIs('frontend.branches') ? 'text-active' : '' }}" href="{{ route('frontend.branches') }}">
                                {{ __('messagess.our_branches') }}
                            </a>
                        </li>
    
                        <li class="nav-item h5">
                            <a class="nav-link text-white {{ request()->routeIs('frontend.contact') ? 'text-active' : '' }}" href="{{ route('frontend.contact') }}">
                                {{ __('messagess.nav_contact') }}
                            </a>
                        </li>
                        
                    </ul>
            </div>
            <div class="settings d-flex justify-content-center align-items-center gap-4">
                <div class="language-selector text-center">
                    <div class="icon-circle">
                        <span class="iconify" data-icon="mdi:earth"></span>
                    </div>
                    <div class="icon-text">{{ __('messagess.lang') }}</div>
    
                    <div class="dropdown-content" style="top:55px;left:auto;right:0">
                        <a href="{{ route('language.switch', 'ar') }}">
                            العربية
                        </a>
                        <a href="{{ route('language.switch', 'en') }}">
                            English
                        </a>
                    </div>
            </div>
            <!-- Cart -->
            <a href="{{ route('cart.page') }}">
            <div class="text-center">
                <div class="icon-circle">
                    <span class="iconify" data-icon="mdi-light:cart"></span>
                </div>
                <div class="icon-text">{{ __('messagess.nav_cart') }}</div>
            </div>
            </a>
            <!-- My Profile -->
            <a href="{{ route('profile') }}">
            <div class="text-center">
                <div class="icon-circle">
                    <span class="iconify" data-icon="fluent:person-28-regular"></span>
                </div>
                @if (Auth::check())
                <div class="icon-text">{{ __('messagess.profile') }}</div>
                @else
                <div class="icon-text">{{ __('auth.signin') }}</div>
                @endif
            </div>
            </a>
        </div>
            <div class="loyalty" style="width: 15% !important;height: 100%;display: flex;justify-content: center;align-items: center;">
                <a href="{{route('home.loyalety')}}" class="more-btn-nav">
                    <p style="color: #BF9456;font-size: 16px;margin: 0 13px;font-weight: bold;"> <img style="width: 22px;margin: 0 7px;" src="{{ asset('images/icons/basil-present-outline-11.svg') }}" > {{ __('messagess.loyalty_points') }}</p>
                </a>
            </div>
        </div>
    </div>

                <!-- menu  -->
    <div class="mob-nav">
        <button class="btn mob-btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu">
            <div class="hamburger" onclick="this.classList.toggle('active')">
                <span class="iconify" style="width: 32px;height: 27px;color: white;" data-icon="hugeicons:menu-02"></span>
            </div>
        </button>

        <a href="/" style="display: flex;align-items: center;width: 124px;"> <img style="width: 30px;" src="{{asset('images/samilogo.png')}}"></a>

        <div class="loyalty" style="width: 52%;height: 100%;margin: 11px;display: flex;justify-content: center;align-items: center;">
            <a href="{{route('home.loyalety')}}" class="more-btn-nav">
                <p style="color: #BF9456;font-size: 16px;margin: 0 13px;font-weight: bold;"> <img style="width: 22px;margin: 0 7px;" src="{{ asset('images/icons/basil-present-outline-11.svg') }}" > {{ __('messagess.loyalty_points') }}</p>
            </a>
        </div>
    </div>

                <!-- menu  -->
    <div class="offcanvas offcanvas-start bg-white " tabindex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="mobileMenuLabel">{{ __('messagess.navItems') }}</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link  {{ request()->routeIs('frontend.home') ? 'text-active' : '' }}" href="{{ route('frontend.home') }}">
              {{ __('messagess.nav_home') }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link  {{ request()->routeIs('frontend.about') ? 'text-active' : '' }}" href="{{ route('frontend.about') }}">
              {{ __('messagess.nav_about') }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link  {{ request()->routeIs('frontend.services') ? 'text-active' : '' }}" href="{{ route('frontend.services') }}">
              {{ __('messagess.nav_services') }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link  {{ request()->routeIs('frontend.Packages') ? 'text-active' : '' }}"href="{{ route('frontend.Packages') }}">
                {{ __('messagess.nav_package') }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link  {{ request()->routeIs('frontend.Ouroffers') ? 'text-active' : '' }}"href="{{ route('frontend.Ouroffers') }}">
                {{ __('messagess.our_offers') }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link  {{ request()->routeIs('frontend.Shop') ? 'text-active' : '' }}"href="{{ route('frontend.Shop') }}">
                {{ __('messagess.store') }}
            </a>
          </li>
         <li class="nav-item">
            <a class="nav-link  {{ request()->routeIs('gift.page') ? 'text-active' : '' }}"href="{{ route('gift.page') }}">
               {{ __('messagess.gift_cards') }}
            </a>
          </li>
         <li class="nav-item">
            <a class="nav-link  {{ request()->routeIs('frontend.branches') ? 'text-active' : '' }}"href="{{ route('frontend.branches') }}">
                {{ __('messagess.our_branches') }}
            </a>
         </li>

         <li class="nav-item">
            <a class="nav-link  {{ request()->routeIs('frontend.contact') ? 'text-active' : '' }}"href="{{ route('frontend.contact') }}">
                {{ __('messagess.nav_contact') }}
            </a>
         </li>
         <li  class="nav-item">
            <a href="{{ route('language.switch', 'en') }}" style="color:#cf9233;text-decoration-line: none;">English</a> |
            <a href="{{ route('language.switch', 'ar') }}" style="color:#cf9233;text-decoration-line: none;">العربية</a>
         </li>
             <div class="settings d-flex justify-content-center align-items-center gap-4" style="width: 100% !important;height: 100% !important;margin-top: 22px !important;">
                <!-- My Profile -->
                <a href="{{ route('profile') }}">
                <div class="text-center">
                    <div class="icon-circle">
                        <img class="fluentperson-28-regular"src="{{ asset('images/icons/fluent-person-28-regular-2.svg') }}"alt="fluent:person-28-regular"/>
                    </div>
                    <div class="icon-text">{{ __('messagess.profile') }}</div>
                </div>
                </a>
                <!-- Cart -->
                <a href="{{ route('cart.page') }}">
                <div class="text-center">
                    <div class="icon-circle">
                        <img class="mdi-lightcart" src="{{ asset('images/icons/mdi-light-cart.svg') }}" alt="mdi-light:cart" />
                    </div>
                    <div class="icon-text">{{ __('messagess.nav_cart') }}</div>
                </div>
                </a>
            </div>
        </ul>
      </div>
    </div>
    
                <!--req scripts-->
<script src="https://code.iconify.design/3/3.1.0/iconify.min.js"></script>
