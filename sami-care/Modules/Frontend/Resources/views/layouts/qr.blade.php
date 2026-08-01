<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ language_direction() }}" class="theme-fs-sm">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>@yield('title', __('بطاقة عناية سامي')) | {{ app_name() }}</title>

    <link rel="icon" type="image/png" href="{{ asset('images/samilogo.png') }}">

    <link rel="stylesheet" href="{{ mix('css/libs.min.css') }}">
    <link rel="stylesheet" href="{{ mix('css/backend.css') }}">
    <link rel="stylesheet" href="{{ asset('custom-css/frontend.css') }}">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">

    @stack('after-styles')
</head>
<body class="sami-card-body">
    <main>
        @yield('content')
    </main>

    <script src="{{ mix('js/backend.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>

    @stack('after-scripts')
</body>
</html>
