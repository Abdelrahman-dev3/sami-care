                <!--req links-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Zain:ital,wght@0,200;0,300;0,400;0,700;0,800;0,900;1,300;1,400&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('pages-css/second-navbar.css') }}?v={{ filemtime(public_path('pages-css/second-navbar.css')) }}">


    <div class="m-nav d-none d-lg-flex flex-column justify-content-center">
        <div class="d-flex w-100">
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