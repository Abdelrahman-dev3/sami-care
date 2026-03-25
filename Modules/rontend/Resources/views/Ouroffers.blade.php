<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ language_direction() }}" class="theme-fs-sm">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">

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
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
</head>
<body>
    @php
        use Carbon\Carbon;
    @endphp
    <!-- Lightning Progress Bar -->
    @include('components.frontend.progress-bar')

    <div class="position-relative" style="height: 17vh;">
        @include('components.frontend.second-navbar')
    </div>

    <!-- Page Content -->
    <main class="py-5">
        <div class="container" style="padding: 0 5rem;">
            <h2 class="mb-5 text-center" style="font-size: 42px;background: linear-gradient(90deg, #CF9233, #212121);-webkit-background-clip: text;-webkit-text-fill-color: transparent;font-size: 2.5rem; font-weight: bold;">
                {{ __('messagess.our_offers') }}
            </h2>
            @if(isset($packages) && $packages->count() > 0)
                <div class="row g-4">
                    @foreach($packages as $index => $package)
                        <div class="col-12 col-lg-4">
                            @php
                                $startDate = $package->start_date ? Carbon::parse($package->start_date)->translatedFormat('d-m-Y') : '-';
                                $endDate = $package->end_date ? Carbon::parse($package->end_date)->translatedFormat('d-m-Y') : '-';
                            @endphp
                            @include('components.frontend.package-card', [
                                'image' => $package->media->first()->original_url ?? asset('images/frontend/Rectangle 42489.png'),
                                'name' => $package->name,
                                'description' => Str::limit($package->description ?? '', 100),
                                'price' => 'SR ' . number_format($package->package_price ?? 0, 2),
                                'duration' => $package->duration_min ?? 0 . ' min',
                                'services_count' => $package->service ? $package->service->count() : 0,
                                'package_id' => $package->id
                            ])
                            <div class="mt-2 text-muted" style="font-size: 0.9rem;">
                                {!! nl2br(__('messagess.valid_offer', ['start' => $startDate, 'end' => $endDate])) !!}
                            </div>
                        </div>
                    @endforeach
                </div>
            @else
                @include('components.frontend.no-offers')
            @endif
        </div>
    </main>

    <!-- Footer -->
    @include('components.frontend.footer')

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
