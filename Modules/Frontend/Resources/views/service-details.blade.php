<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $service->name }} - Service Details</title>
    <link rel="stylesheet" href="{{ mix('css/libs.min.css') }}">
    <link rel="stylesheet" href="{{ mix('css/backend.css') }}">
    <link rel="stylesheet" href="{{ asset('custom-css/frontend.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <style>
        .details-card {
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 2px 16px rgba(0,0,0,0.07);
            padding: 1.5rem 1.5rem 1rem 1.5rem;
            margin-bottom: 1.5rem;
            border-left: 4px solid var(--primary-color);
        }
        .details-label {
            color: var(--primary-color);
            font-weight: 600;
            font-size: 1.1rem;
        }
        .details-value {
            font-size: 1.1rem;
            color: #222;
        }
        .service-title {
            font-size: 2.5rem;
            font-weight: bold;
            color: var(--primary-color);
            border-bottom: 3px solid var(--primary-color);
            display: inline-block;
            padding-bottom: 0.5rem;
            margin-bottom: 1.5rem;
        }
        .booking-btn {
            background: var(--primary-color);
            color: white;
            border: none;
            padding: 0.8rem 2rem;
            border-radius: 25px;
            font-weight: 600;
            font-size: 1.1rem;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
            text-decoration: none;
        }
        .booking-btn:hover {
            background: #a67c3f;
            color: white;
            text-decoration: none;
            transform: translateY(-2px);
        }
        .booking-btn--disabled,
        .booking-btn--disabled:hover {
            background: #d9b866;
            color: #3b2f12;
            transform: none;
        }
        .price-badge {
            background: var(--primary-color);
            color: #fff;
            padding: 0.5rem 1.2rem;
            border-radius: 25px;
            font-weight: bold;
            font-size: 1.2rem;
            cursor: pointer;
            display: inline-block;
            margin-bottom: 1rem;
        }
        .category-badge {
            background: #f5f5f5;
            color: var(--primary-color);
            padding: 0.3rem 0.8rem;
            border-radius: 15px;
            font-size: 0.95rem;
            display: inline-block;
            margin-bottom: 1rem;
        }
        .details-section {
            margin-bottom: 2rem;
        }
        .details-img {
            border-radius: 12px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.08);
            width: 100%;
            max-height: 350px;
            object-fit: cover;
        }
        .details-description {
            background: #f8f9fa;
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 2rem;
        }
        .service-info-section {
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 2px 16px rgba(0,0,0,0.07);
            padding: 2rem;
            margin-bottom: 2rem;
        }
        .service-state-badge {
            vertical-align: middle;
        }
        .service-frozen-alert {
            background: #fff5d6;
            border: 1px solid #f0d17c;
            color: #6c5310;
            border-radius: 12px;
            padding: 1rem 1.25rem;
            margin-bottom: 1.5rem;
            font-weight: 600;
        }
        .related-service-card {
            display: block;
            text-decoration: none;
            color: inherit;
            margin-bottom: 1rem;
            padding: 1rem;
            background: #f8f9fa;
            border-radius: 0.75rem;
        }
        .related-service-card--disabled {
            opacity: 0.72;
            cursor: not-allowed;
        }
        .related-service-image {
            width: 60px;
            height: 60px;
            object-fit: cover;
        }
        @media (max-width: 768px) {
            .service-title { font-size: 1.8rem; }
            .details-card { padding: 1rem; }
        }
    </style>
</head>
<body>
    @php
        $isFrozen = (bool) $service->is_frozen;
    @endphp
    <!-- Lightning Progress Bar -->
    @include('components.frontend.progress-bar')

    <!-- Hero/Header Section (like About page) -->
    <div class="position-relative" style="height: 35vh; min-height: 220px;">
        <img src="{{ asset('images/frontend/slider1.webp') }}" alt="Service Hero" class="w-100 h-100" style="object-fit: cover;">
        <div class="position-absolute top-0 start-0 w-100 h-100" style="background: rgba(0,0,0,0.35);"></div>
        @include('components.frontend.navbar')
        @include('components.frontend.second-navbar')
    </div>

    <main class="container" style="margin-top: -60px; z-index: 2; position: relative;">
        <!-- Title and Booking Button -->
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h1 class="service-title">
                {{ $service->name }}
                @if($isFrozen)
                    <span class="badge bg-warning text-dark ms-2 service-state-badge">{{ __('service.lbl_freeze') }}</span>
                @endif
            </h1>
            <a href="#" @if($isFrozen) onclick="return showUnavailableMessage(event)" @endif class="booking-btn {{ $isFrozen ? 'booking-btn--disabled' : '' }}">
                <i class="fas fa-calendar-plus"></i>
                {{ $isFrozen ? __('service.lbl_freeze') : 'Book This Service' }}
            </a>
        </div>

        <div class="row g-4">
            <div class="col-lg-7">
                <!-- Service Image and Description -->
                <div class="details-section">
                    <img src="{{ $service->feature_image ?? asset('images/frontend/slider1.webp') }}" alt="{{ $service->name }}" class="details-img mb-3">
                    @if($isFrozen)
                        <div class="service-frozen-alert">
                            <i class="fas fa-snowflake me-2"></i>{{ __('messagess.not_available_now') }}
                        </div>
                    @endif
                    <div class="details-description">
                        <span class="details-label"><i class="fas fa-info-circle me-2"></i>Description</span>
                        <div class="details-value mt-2">{{ $service->description ?? 'No description available for this service.' }}</div>
                    </div>
                </div>

                <!-- Service Details Cards -->
                <div class="row g-3">
                    <div class="col-md-6">
                        <div class="details-card text-center">
                            <div class="details-label mb-2"><i class="fas fa-money-bill-wave me-1"></i>Price</div>
                            <div class="price-badge" data-bs-toggle="modal" data-bs-target="#pricingModal">SR {{ number_format($service->default_price ?? 0, 2) }}</div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="details-card text-center">
                            <div class="details-label mb-2"><i class="fas fa-clock me-1"></i>Duration</div>
                            <div class="details-value">{{ $service->duration_min ?? 0 }} min</div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="details-card text-center">
                            <div class="details-label mb-2"><i class="fas fa-tags me-1"></i>Category</div>
                            <div class="details-value category-badge">{{ $service->category->name ?? 'General' }}</div>
                        </div>
                    </div>
                    @if($service->sub_category)
                    <div class="col-md-6">
                        <div class="details-card text-center">
                            <div class="details-label mb-2"><i class="fas fa-layer-group me-1"></i>Sub Category</div>
                            <div class="details-value category-badge">{{ $service->sub_category->name }}</div>
                        </div>
                    </div>
                    @endif
                    @if($service->branches && $service->branches->count() > 0)
                    <div class="col-md-12">
                        <div class="details-card text-center">
                            <div class="details-label mb-2"><i class="fas fa-map-marker-alt me-1"></i>Available at</div>
                            <div class="details-value">{{ $service->branches->pluck('name')->implode(', ') }}</div>
                        </div>
                    </div>
                    @endif
                    <div class="col-md-12">
                        <div class="details-card text-center">
                            <div class="details-label mb-2"><i class="fas fa-check-circle me-1"></i>Status</div>
                            <div class="details-value">
                                @if($isFrozen)
                                    <span class="badge bg-warning text-dark">{{ __('service.lbl_freeze') }}</span>
                                @elseif($service->status)
                                    <span class="badge bg-success">Active</span>
                                @else
                                    <span class="badge bg-danger">Inactive</span>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-5">
                <!-- Quick Info Section -->
                <div class="service-info-section">
                    <h5 class="mb-3" style="color: var(--primary-color);">
                        <i class="fas fa-star me-2"></i>Quick Info
                    </h5>

                    <div class="price-badge">
                        <i class="fas fa-tag me-2"></i>
                        SR {{ number_format($service->default_price ?? 0, 2) }}
                    </div>

                    @if($service->category)
                    <div class="category-badge">
                        <i class="fas fa-folder me-2"></i>
                        {{ $service->category->name }}
                    </div>
                    @endif

                    <div class="d-grid gap-2 mt-3">
                        <a href="#" @if($isFrozen) onclick="return showUnavailableMessage(event)" @endif class="booking-btn text-center {{ $isFrozen ? 'booking-btn--disabled' : '' }}">
                            <i class="fas fa-calendar-plus me-2"></i>
                            {{ $isFrozen ? __('service.lbl_freeze') : 'Book This Service' }}
                        </a>
                        <button class="btn btn-outline-secondary">
                            <i class="fas fa-heart me-2"></i>
                            Add to Favorites
                        </button>
                    </div>
                </div>

                <!-- Related Services -->
                @if($relatedServices->count() > 0)
                <div class="service-info-section">
                    <h5 class="mb-3" style="color: var(--primary-color);">
                        <i class="fas fa-link me-2"></i>Related Services
                    </h5>

                    @foreach($relatedServices as $relatedService)
                    <a href="{{ route('frontend.service.details', $relatedService->id) }}"
                       @if($relatedService->is_frozen) onclick="return showUnavailableMessage(event)" @endif
                       class="related-service-card {{ $relatedService->is_frozen ? 'related-service-card--disabled' : '' }}">
                        <div class="d-flex align-items-center">
                            <img src="{{ $relatedService->feature_image ?? asset('images/frontend/slider1.webp') }}"
                                 alt="{{ $relatedService->name }}"
                                 class="rounded me-3 related-service-image">
                            <div>
                                <h6 class="mb-1">
                                    {{ $relatedService->name }}
                                    @if($relatedService->is_frozen)
                                        <span class="badge bg-warning text-dark ms-2 service-state-badge">{{ __('service.lbl_freeze') }}</span>
                                    @endif
                                </h6>
                                <p class="mb-0 text-muted">SR {{ number_format($relatedService->default_price ?? 0, 2) }}</p>
                            </div>
                        </div>
                    </a>
                    @endforeach
                </div>
                @endif
            </div>
        </div>
    </main>

    <!-- Pricing Modal -->
    <div class="modal fade" id="pricingModal" tabindex="-1" aria-labelledby="pricingModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="pricingModalLabel">Service Pricing</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" style="max-height: 400px; overflow-y: auto;">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Category</th>
                  <th>Price (SR)</th>
                  <th>Duration (minutes)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ $service->name }}</td>
                  <td>{{ $service->category->name ?? 'General' }}</td>
                  <td>{{ number_format($service->default_price, 2) }}</td>
                  <td>{{ $service->duration_min }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    @include('components.frontend.footer')
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init({ once: true, duration: 800 });
        const notAvailableMessage = @json(__('messagess.not_available_now'));

        function showUnavailableMessage(event) {
            if (event && typeof event.preventDefault === 'function') {
                event.preventDefault();
            }

            if (typeof createNotify === 'function') {
                createNotify({ title: '', desc: notAvailableMessage });
            } else {
                alert(notAvailableMessage);
            }

            return false;
        }

        // Fix modal backdrop issue
        document.addEventListener('DOMContentLoaded', function() {
            const pricingModal = document.getElementById('pricingModal');

            if (pricingModal) {
                pricingModal.addEventListener('hidden.bs.modal', function () {
                    // Remove any remaining backdrop
                    const backdrops = document.querySelectorAll('.modal-backdrop');
                    backdrops.forEach(backdrop => backdrop.remove());

                    // Remove modal-open class from body
                    document.body.classList.remove('modal-open');
                    document.body.style.paddingRight = '';
                    document.body.style.overflow = '';
                });
            }
        });
    </script>
</body>
</html>
