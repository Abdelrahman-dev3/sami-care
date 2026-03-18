<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ language_direction() }}" class="theme-fs-sm">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ __('messages.gift_cards_list') }} | {{ app_name() }}</title>

    <link rel="stylesheet" href="{{ mix('css/libs.min.css') }}">
    <link rel="stylesheet" href="{{ mix('css/backend.css') }}">
    <link rel="stylesheet" href="{{ asset('custom-css/frontend.css') }}">

    @if (language_direction() == 'rtl')
        <link rel="stylesheet" href="{{ asset('css/rtl.css') }}">
    @endif

<style>
.gift-card {
    position: relative;
    background: #000;
    color: #e5b95c;
    overflow: hidden;
    min-height: 320px;
    width: 100%;
    box-shadow: 0 15px 40px rgba(0,0,0,.4);
    padding: 6px;
    border-radius: 10px;
}
.gift-card::before {
    content: "";
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(to right, #d4a437, #f3d27a, #d4a437);
}

.gift-card::after {
    content: "";
    position: absolute;
    top: 0;
    right: 90px;
    width: 6px;
    height: 100%;
    background: linear-gradient(to bottom, #d4a437, #f3d27a, #d4a437);
}

.gift-title {
    font-size: 37px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 68px;
}

.gift-text {
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
    width: 59%;
    margin: auto;
}

.gift-service-title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    width: 59%;
    margin: auto;
}

.gift-service {
    text-align: center;
    font-size: 17px;
    width: 59%;
    margin: auto;
}

.gift-bow {
    position: absolute;
    top: 60px;
    right: 49px;
    width: 90px;
    z-index: 99;
}


.gift-logo span {
    display: block;
    font-weight: bold;
    font-size: 18px;
}

.gift-logo small {
    font-size: 13px;
}
</style>
</head>

<body class="bg-white">

@include('components.frontend.progress-bar')

<div class="position-relative" style="height: 17vh;">
    @include('components.frontend.second-navbar')
</div>

<section class="py-5">
    <div class="container">
    
        @if($gifts->isEmpty())
            <div class="text-center text-muted">{{ __('messages.gift_empty_state') }}</div>
        @else
    
        <div class="row g-4">
        @foreach($gifts as $gift)
        
            <div class="col-12 col-sm-6 col-md-4 col-lg-4">
                <div class="gift-card">
                    <img src="{{ asset('images/gold-bow.png') }}" class="gift-bow">
                
                    <div class="gift-title">
                        {{ __('messages.gift_card_title') }}
                    </div>
                    
                    <div class="gift-text">
                        {{ __('messages.gift_to') }} : {{ $gift->recipient_name ?? '-' }}
                    </div>
                    
                    <div class="gift-text">
                        {{ __('messages.gift_from') }} : {{ $gift->sender_name ?? '-' }}
                    </div>
                    
                    <div class="gift-text mt-3">
                        {{ $gift->message ?? '-' }}
                    </div>
                    
                    <div class="gift-service-title">
                        {{ __('messages.gift_service_title') }}
                    </div>
                    
                    <div class="gift-service">
                        @forelse($gift->services_list as $service)
                            -{{ $service->name }} <br/>
                        @empty
                            -
                        @endforelse
                
                    </div>
            
                    <div class="gift-logo">
                        <span>SAMI</span>
                    </div>
            
                </div>
            </div>
        @endforeach
        </div>
    @endif
    </div>
</section>

<div class="position-relative" style="height: 17vh;"></div>
@include('components.frontend.footer')

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>