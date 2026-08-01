@php
    use App\Models\BookingReview;
    $customerReviews = BookingReview::with('user')
        ->where('is_approved', 1)
        ->where('status', 1)
        ->orderBy('rating', 'desc')
        ->orderBy('created_at', 'desc')
        ->take(10)
        ->get();

    $avgRating = BookingReview::where('is_approved', 1)->where('status', 1)->avg('rating');
    $totalReviewsCount = BookingReview::where('is_approved', 1)->where('status', 1)->count();
@endphp

@if($customerReviews->count() > 0)
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
<style>
    .reviews-section {
        position: relative;
        padding: 80px 20px 100px;
        background: linear-gradient(180deg, #f8f7f4 0%, #fff 100%);
        overflow: hidden;
    }
    .reviews-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 120px;
        height: 4px;
        background: linear-gradient(90deg, transparent, #BF9456, transparent);
        border-radius: 2px;
    }

    .reviews-container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .reviews-header {
        text-align: center;
        margin-bottom: 50px;
    }
    .reviews-header .sub-title {
        color: #BF9456;
        font-size: 0.9rem;
        font-weight: 600;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
    .reviews-header h2 {
        font-size: 2.2rem;
        font-weight: 800;
        color: #1a1a2e;
        margin-bottom: 16px;
    }
    .reviews-overall {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin-top: 12px;
    }
    .reviews-overall .overall-stars {
        display: flex;
        gap: 4px;
    }
    .reviews-overall .overall-stars i {
        color: #f5a623;
        font-size: 1.1rem;
    }
    .reviews-overall .overall-text {
        font-size: 0.9rem;
        color: #888;
    }
    .reviews-overall .overall-value {
        font-weight: 700;
        color: #1a1a2e;
        font-size: 1.2rem;
    }

    /* Review Card */
    .review-card {
        background: #fff;
        border-radius: 20px;
        padding: 32px 28px;
        box-shadow: 0 4px 25px rgba(0,0,0,0.06);
        border: 1px solid #f0ece4;
        transition: transform 0.35s ease, box-shadow 0.35s ease;
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .review-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 12px 35px rgba(0,0,0,0.1);
    }
    .review-card::before {
        content: '\201C';
        position: absolute;
        top: 16px;
        left: 24px;
        font-size: 4rem;
        color: #BF9456;
        opacity: 0.15;
        font-family: Georgia, serif;
        line-height: 1;
    }

    .review-card-header {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-bottom: 16px;
    }
    .review-avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #BF9456, #d4a96a);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: 700;
        font-size: 1.2rem;
        flex-shrink: 0;
        overflow: hidden;
    }
    .review-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .review-user-info {
        flex: 1;
    }
    .review-user-name {
        font-weight: 700;
        color: #1a1a2e;
        font-size: 1rem;
        margin-bottom: 2px;
    }
    .review-stars {
        display: flex;
        gap: 2px;
    }
    .review-stars i {
        font-size: 0.8rem;
        color: #f5a623;
    }
    .review-stars i.empty {
        color: #ddd;
    }

    .review-text {
        flex: 1;
        color: #555;
        font-size: 0.95rem;
        line-height: 1.7;
        margin-bottom: 16px;
        position: relative;
        z-index: 1;
    }

    .review-date {
        font-size: 0.75rem;
        color: #bbb;
        margin-top: auto;
    }

    /* Swiper customization */
    .reviews-swiper {
        padding: 10px 0 50px !important;
    }
    .reviews-swiper .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background: #d0cbc2;
        opacity: 1;
        transition: all 0.3s;
    }
    .reviews-swiper .swiper-pagination-bullet-active {
        background: #BF9456;
        width: 28px;
        border-radius: 5px;
    }
    .reviews-swiper .swiper-button-next,
    .reviews-swiper .swiper-button-prev {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: #fff;
        box-shadow: 0 2px 12px rgba(0,0,0,0.1);
        color: #BF9456;
    }
    .reviews-swiper .swiper-button-next::after,
    .reviews-swiper .swiper-button-prev::after {
        font-size: 1rem;
        font-weight: 700;
    }

    @media (max-width: 768px) {
        .reviews-header h2 { font-size: 1.6rem; }
        .review-card { padding: 24px 20px; }
        .reviews-swiper .swiper-button-next,
        .reviews-swiper .swiper-button-prev { display: none; }
    }
</style>

<section class="reviews-section">
    <div class="reviews-container">
        {{-- Header --}}
        <div class="reviews-header">
            <div class="sub-title">
                <i class="fas fa-star"></i>
                {{ __('messagess.our_offers') == 'العروض والخصومات' ? 'آراء عملائنا' : 'Customer Reviews' }}
            </div>
            <h2>{{ app()->getLocale() == 'ar' ? 'ماذا يقول عملاؤنا عنا' : 'What Our Customers Say' }}</h2>
            <div class="reviews-overall">
                <span class="overall-value">{{ number_format($avgRating, 1) }}</span>
                <div class="overall-stars">
                    @for($i = 1; $i <= 5; $i++)
                        <i class="fa-solid fa-star" style="{{ $i <= round($avgRating) ? '' : 'color: #ddd;' }}"></i>
                    @endfor
                </div>
                <span class="overall-text">({{ $totalReviewsCount }} {{ app()->getLocale() == 'ar' ? 'تقييم' : 'reviews' }})</span>
            </div>
        </div>

        {{-- Reviews Slider --}}
        <div class="swiper reviews-swiper">
            <div class="swiper-wrapper">
                @foreach($customerReviews as $review)
                    <div class="swiper-slide" style="height: auto;">
                        <div class="review-card">
                            <div class="review-card-header">
                                <div class="review-avatar">
                                    @if($review->user && $review->user->profile_image)
                                        <img src="{{ asset($review->user->profile_image) }}" alt="">
                                    @else
                                        {{ $review->user ? mb_substr($review->user->first_name ?? '', 0, 1) : '?' }}
                                    @endif
                                </div>
                                <div class="review-user-info">
                                    <div class="review-user-name">{{ $review->user->first_name ?? '' }} {{ $review->user->last_name ? mb_substr($review->user->last_name, 0, 1) . '.' : '' }}</div>
                                    <div class="review-stars">
                                        @for($i = 1; $i <= 5; $i++)
                                            <i class="fa-solid fa-star {{ $i <= $review->rating ? '' : 'empty' }}"></i>
                                        @endfor
                                    </div>
                                </div>
                            </div>
                            <div class="review-text">
                                {{ $review->review_text }}
                            </div>
                            <div class="review-date">
                                <i class="fas fa-calendar-alt"></i>
                                {{ $review->created_at->diffForHumans() }}
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </div>
</section>

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        new Swiper('.reviews-swiper', {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: {{ $customerReviews->count() > 3 ? 'true' : 'false' }},
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        });
    });
</script>
@endif
