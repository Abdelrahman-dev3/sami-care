<!DOCTYPE html>
<html dir="{{ app()->getLocale() === 'ar' ? 'rtl' : 'ltr' }}" class="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ __('messagess.booking_system') }}</title>
    <link rel="stylesheet" href="{{ mix('css/backend.css') }}">
    @if (language_direction() == 'rtl')
        <link rel="stylesheet" href="{{ asset('css/rtl.css') }}">
    @endif
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    <link rel="stylesheet" href="{{ asset('pages-css/book-page-signature.css') }}">
</head>
<body class="booking-page-shell booking-page-shell--signature">
    <div class="position-relative booking-top-space">
        @include('components.frontend.second-navbar')
        @include('components.frontend.notifications')
    </div>

    @include('frontend.bookings.salon-booking.partials.booking-experience-signature')

    <div class="position-relative booking-bottom-space"></div>
    @include('components.frontend.footer')

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    <script>
        window.bookingPageConfig = {
            locale: @json(app()->getLocale()),
            showDuration: @json((bool) $showDuration),
            preselectedBranchId: @json($b),
            currency: @json(__('messages.currency'))
        };
    </script>
    <script src="{{ asset('pages-js/book-page.js') }}"></script>
</body>
</html>
