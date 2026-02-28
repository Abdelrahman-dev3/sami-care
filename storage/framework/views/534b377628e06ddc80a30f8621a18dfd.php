<!DOCTYPE html>
<html dir="<?php echo e(app()->getLocale() == 'ar' ? 'rtl' : 'ltr'); ?>" class="<?php echo e(app()->getLocale()); ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?php echo e(mix('css/libs.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(mix('css/backend.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('custom-css/frontend.css')); ?>">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <link rel="stylesheet" href="<?php echo e(asset('custom-css/cart-sidebar.css')); ?>">
    <title>Spa Booking</title>
    <style>
        @import url("https://fonts.cdnfonts.com/css/zain");

        body {
            font-family: 'Zain', sans-serif;
            background: #faf7f2;
            margin: 0;
            padding: 0;
        }

        @media (max-width: 768px) {
            .package-container {
                display: flex;
                flex-direction: column-reverse;
            }
        }

        .package-container {
            width: 90%;
            margin: 40px auto;
            display: flex;
            overflow: hidden;
            background: white;
            box-shadow: 0px 10px 40px rgba(0,0,0,0.15);
            animation: fadeUp 1.2s ease-out;
        }

        .left-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            animation: zoomIn 3s ease-in-out infinite alternate;
        }

        .left-img {
            flex: 1;
            overflow: hidden;
        }

        .right-box {
            font-family: 'Zain', sans-serif;
            flex: 1;
            background: #c88d2a;
            padding: 45px;
            color: white;
            animation: slideRight 1.3s ease-out;
            position: relative;
        }

        .title {
            font-size: 20px;
            opacity: 0;
            animation: fadeIn 1s ease forwards;
        }

        .main-title {
            font-size: 32px;
            margin: 10px 0 15px;
            opacity: 0;
            color:white;
            animation: fadeIn 1.3s ease forwards;
        }

        .stars span {
            font-size: 20px;
            margin: 0 3px;
            animation: pulse 1.5s infinite;
        }

        .desc {
            margin: 20px 0;
            opacity: 0;
            animation: fadeIn 1.5s ease forwards;
        }

        .price, .branch {
            margin: 15px 0;
            font-size: 18px;
            opacity: 0;
            animation: fadeIn 1.7s ease forwards;
        }

        .book-btn {
            margin-top: 25px;
            padding: 12px 40px;
            background: white;
            border: none;
            border-radius: 50px;
            font-size: 18px;
            cursor: pointer;
            transition: 0.4s;
            opacity: 0;
            animation: fadeIn 1.9s ease forwards, popBtn 1.5s ease infinite alternate;
        }

        .book-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 0 20px rgba(255,255,255,0.6);
        }


        /* ðŸŽ¬ Animations */

        @keyframes fadeUp {
            from { transform: translateY(40px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        @keyframes slideRight {
            from { transform: translateX(60px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes zoomIn {
            from { transform: scale(1); }
            to { transform: scale(1.08); }
        }

        @keyframes pulse {
            0% { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(1.3); opacity: 1; }
        }

        @keyframes popBtn {
            0% { transform: scale(1); }
            100% { transform: scale(1.06); }
        }

    </style>
    <style>
    .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 41px;
        width: 100%;
        height: 100%;
        overflow: auto;
        background: rgba(0,0,0,0.5);
    }

    .modal-content {
        background-color: #fff;
        margin: 80px auto;
        padding: 20px;
        border-radius: 15px;
        width: 90%;
        max-width: 500px;
        position: relative;
    }

    .close-btn {
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
    }

    .book-btn {
        background: #ff6b6b;
        color: #fff;
        border: none;
        padding: 12px 25px;
        border-radius: 10px;
        font-size: 16px;
        cursor: pointer;
        transition: background 0.2s;
    }

    .book-btn:hover {
        background: #ff4c4c;
    }

    .submit-button {
        background: #28a745;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        margin-top: 10px;
    }

    .submit-button:hover {
        background: #218838;
    }
    </style>
    <style>
        /* Reset and Base Styles */

:root {
    /* Original design system colors from React version */
    --background: 240 20% 98%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --primary: 200 100% 40%;
    --primary-foreground: 0 0% 98%;
    --secondary: 200 20% 96%;
    --secondary-foreground: 200 50% 20%;
    --muted: 200 10% 95%;
    --muted-foreground: 200 10% 45%;
    --accent: 180 100% 50%;
    --accent-foreground: 240 10% 3.9%;
    --border: 200 20% 88%;
    --input: 200 20% 88%;
    --ring: 200 100% 40%;

    /* Spa theme colors - exact from React version */
    --spa-teal: 180 100% 35%;
    --spa-teal-light: 180 100% 85%;
    --spa-blue: 200 100% 40%;
    --spa-blue-light: 200 100% 90%;
    --spa-gold: 45 100% 60%;
    --spa-gold-light: 45 100% 95%;

    /* Radius */
    --radius: 0.5rem;
}


/* Container */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* Hero Section - exact from React version */
.hero-section {
    position: relative;
    padding: 4rem 0;
    overflow: hidden;
    color: white;
}

.hero-overlay {
    position: absolute;
    inset: 0;

}

.hero-content {
    position: relative;
    text-align: center;
    z-index: 2;
}

.hero-title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.hero-title h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    margin: 0;
}

.sparkle {
    width: 2rem;
    height: 2rem;
    animation: sparkle 2s ease-in-out infinite;
}

@keyframes sparkle {
    0%, 100% {
        transform: scale(1) rotate(0deg);
    }
    50% {
        transform: scale(1.1) rotate(180deg);
    }
}

.price-display {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 0.75rem;
    padding: 1.5rem;
    max-width: 400px;
    margin: 2rem auto 0;
}

.original-price {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: line-through;
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
}

.discount-price {
    color: white;
    font-weight: 700;
    font-size: 1.5rem;
    margin: 0;
}

.wave-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: hsl(var(--background));
}

.wave-bottom svg {
    width: 100%;
    height: 4rem;
    display: block;
}

/* Services Section - exact from React version */
.services-section {
    padding: 4rem 0;
    background: hsl(var(--background));
}

.services-section h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 3rem;
    color: hsl(var(--foreground));
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
}


.service-card h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: hsl(var(--card-foreground));
}


/* Booking Section - exact from React version */
.booking-section {
    padding: 4rem 0;
    background: hsl(var(--muted) / 0.3);
}

.card-header {
    text-align: center;
    padding: 1.5rem 1.5rem 0;
}

.card-header h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: hsl(var(--card-foreground));
    margin: 0;
}

.card-content {
    padding: 0.5rem;
}

.form-field {
    margin-bottom: 1.5rem;
}

.form-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: hsl(var(--card-foreground));
}

[dir="rtl"] .form-label {
    flex-direction: row-reverse;
}

.label-icon {
    width: 1rem;
    height: 1rem;
    color: hsl(var(--primary));
}

.form-input,
.form-select,
.form-textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid hsl(var(--border));
    border-radius: calc(var(--radius) - 2px);
    font-size: 0.875rem;
    background: hsl(var(--card));
    color: hsl(var(--card-foreground));
    transition: all 0.2s ease-out;
}

[dir="rtl"] .form-input,
[dir="rtl"] .form-select,
[dir="rtl"] .form-textarea {
    text-align: right;
    font-family: 'Zain', sans-serif;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
    outline: none;
    border-color: hsl(var(--ring));
    box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
}

.form-textarea {
    resize: vertical;
    min-height: 100px;
}

.submit-button {
    width: 100%;
    background: linear-gradient(135deg, hsl(var(--spa-teal)), hsl(var(--spa-blue)));
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: calc(var(--radius) - 2px);
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

[dir="rtl"] .submit-button {
    font-family: 'Zain', sans-serif;
}

.submit-button:hover {
    box-shadow: 0 10px 40px -10px hsl(var(--spa-teal) / 0.3);
}

.submit-button:active {
    transform: translateY(1px);
}

/* Toast Notification - exact from React version */
.toast-notification {
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 50;
    background: hsl(var(--card));
    border: 1px solid hsl(var(--border));
    border-radius: var(--radius);
    padding: 1rem;
    box-shadow: 0 10px 40px -10px hsl(var(--spa-teal) / 0.3);
    max-width: 400px;
    transform: translateX(110%);
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

[dir="rtl"] .toast-notification {
    right: auto;
    left: 1.5rem;
    transform: translateX(-110%);
}

.toast-notification.show {
    transform: translateX(0);
    opacity: 1;
}

.toast-content {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
}

.toast-icon {
    color: #22c55e;
    flex-shrink: 0;
    margin-top: 0.125rem;
}

.toast-text h4 {
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: hsl(var(--card-foreground));
    font-size: 0.875rem;
}

.toast-text p {
    color: hsl(var(--muted-foreground));
    font-size: 0.75rem;
    margin: 0;
}

[dir="rtl"] .toast-text h4,
[dir="rtl"] .toast-text p {
    font-family: 'Zain', sans-serif;
}

/* Loading state */
.loading .submit-button {
    position: relative;
    color: transparent;
    cursor: not-allowed;
}

.loading .submit-button::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1rem;
    height: 1rem;
    margin: -0.5rem 0 0 -0.5rem;
    border: 2px solid transparent;
    border-top: 2px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        padding: 0 0.5rem;
    }

    .hero-section {
        padding: 3rem 0;
    }

    .hero-title {
        flex-direction: column;
        gap: 0.5rem;
    }

    .hero-title h1 {
        font-size: 2rem;
    }

    .services-section {
        padding: 3rem 0;
    }

    .services-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .booking-section {
        padding: 3rem 0;
    }

    .toast-notification {
        top: 1rem;
        right: 1rem;
        left: 1rem;
        max-width: none;
        transform: translateY(-110%);
    }

    [dir="rtl"] .toast-notification {
        transform: translateY(-110%);
    }

    .toast-notification.show {
        transform: translateY(0);
    }
}

/* Animations for smooth entrance */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-up {
    animation: fadeInUp 0.6s ease-out;
}
.h5{
    font-size:15.6px;
}
.gap-4 {
    gap: 19.5px !important;
}
    </style>
    <style>
        .service-card {
            max-height: 112px;
            margin: 10px 0;
            flex: 1 1 calc(50% - 10px);
            background: #f9f9f9;
            border-radius: 10px;
            padding: 10px 15px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.05);
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .service-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .service-card h3 {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 5px;
        }

        .service-card .duration {
            font-size: 14px;
            color: #666;
        }

        .service-card .service-price {
            font-size: 15px;
            font-weight: 700;
            color: #ff6b6b;
            margin-top: 5px;
        }

        .right-box .branch,
        .right-box .price {
            margin-top: 15px;
            font-size: 15px;
        }
        .more-btn{
            border: none;
            margin-top: 66px;
            width: 60%;
            height: 55px;
            background-color: white;
            border-radius: 28px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
        .more-btn::before {
            content: "";
            position: absolute;
            width: 96%;
            height: 80%;
            border: 2px solid #CF9233;
            border-radius: 28px;
        }
    </style>
    <style>
        .pkg-modal {
            display: none;
            position: fixed;
            inset: 0;
            z-index: 3000;
            background: rgba(0, 0, 0, 0.45);
            padding: 20px;
        }

        .pkg-modal.show { display: block; }

        .pkg-modal-card {
            width: min(720px, 95%);
            margin: 0 auto 0;
            background: #efefef;
            border-radius: 10px;
            padding: 22px 26px;
            position: relative;
            box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
        }

        .pkg-modal-close {
            position: absolute;
            top: 12px;
            left: 14px;
            border: 0;
            background: transparent;
            color: #888;
            font-size: 20px;
            cursor: pointer;
        }

        .pkg-modal-title {
            text-align: center;
            color: #333;
            font-size: 22px;
            margin-bottom: 16px;
            font-weight: 600;
        }

        .pkg-box {
            width: min(420px, 100%);
            margin: 0 auto 20px;
            background: #f5f5f5;
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 14px;
        }

        .pkg-field-label {
            text-align: center;
            margin: 8px 0 14px;
            color: #444;
            font-size: 16px;
            font-weight: 500;
        }


        .pkg-calendar {
            background: #fff;
            border-radius: 10px;
            border: 1px solid #ddd;
            padding: 8px;
        }

        .pkg-calendar .flatpickr-calendar {
            box-shadow: none;
            border: 0;
            width: 100%;
            background: transparent;
        }

        .pkg-calendar .flatpickr-day.selected,
        .pkg-calendar .flatpickr-day.startRange,
        .pkg-calendar .flatpickr-day.endRange {
            background: #c88d2a;
            border-color: #c88d2a;
            color: #fff;
        }

        .pkg-calendar .flatpickr-current-month .flatpickr-monthDropdown-months,
        .pkg-calendar .flatpickr-current-month input.cur-year {
            font-weight: 700;
            color: #c88d2a;
        }

        .pkg-period-toggle {
            width: 240px;
            margin: 10px auto 14px;
            background: #d2d2d2;
            border-radius: 999px;
            padding: 3px;
            display: flex;
            gap: 4px;
        }

        .pkg-period-btn {
            flex: 1;
            border: 0;
            border-radius: 999px;
            padding: 6px 10px;
            background: transparent;
            color: #444;
            cursor: pointer;
            font-size: 14px;
        }

        .pkg-period-btn.active {
            background: #fff;
            color: #222;
        }

        .pkg-times {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
            min-height: 42px;
        }

        .pkg-time-btn {
            border: 1px solid #c5c5c5;
            background: #fff;
            border-radius: 999px;
            padding: 7px 14px;
            cursor: pointer;
            color: #444;
            font-size: 13px;
        }

        .pkg-time-btn.active {
            background: #b9b9b9;
            color: #222;
            border-color: #b9b9b9;
        }

        .pkg-modal-actions {
            margin-top: 18px;
            display: flex;
            gap: 16px;
            justify-content: center;
        }

        .pkg-action-btn {
            min-width: 190px;
            border-radius: 999px;
            border: 2px solid #c88d2a;
            padding: 10px 18px;
            font-size: 17px;
            cursor: pointer;
        }

        .pkg-action-btn.secondary { background: #fff; color: #c88d2a; }
        .pkg-action-btn.primary { background: #c88d2a; color: #fff; }
    </style>
</head>
<body>
    <div class="position-relative" style="height: 17vh;">
        <?php echo $__env->make('components.frontend.second-navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
    <?php if (isset($component)) { $__componentOriginale64d5aa5503a59d98392532b139a3f6d = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginale64d5aa5503a59d98392532b139a3f6d = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.frontend.cart-sidebar','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('frontend.cart-sidebar'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginale64d5aa5503a59d98392532b139a3f6d)): ?>
<?php $attributes = $__attributesOriginale64d5aa5503a59d98392532b139a3f6d; ?>
<?php unset($__attributesOriginale64d5aa5503a59d98392532b139a3f6d); ?>
<?php endif; ?>
<?php if (isset($__componentOriginale64d5aa5503a59d98392532b139a3f6d)): ?>
<?php $component = $__componentOriginale64d5aa5503a59d98392532b139a3f6d; ?>
<?php unset($__componentOriginale64d5aa5503a59d98392532b139a3f6d); ?>
<?php endif; ?>
    <div class="package-container">
        <div class="right-box">
            <h3 class="title"><?php echo e(__('messagess.our_special_packages')); ?></h3>
            <h1 class="main-title"><?php echo e($package['name'][app()->getLocale()] ?? ''); ?></h1>

            <div class="stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <div class="desc">
                <p><?php echo e(__('branch.lbl_description')); ?> :</p>
                <ul>
                    <li><?php echo e($package['description']); ?></li>
                </ul>
            </div>
            <div class="desc">
                <p><?php echo e(__('messagess.prices_and_services')); ?> :</p>
                <?php $__currentLoopData = $services; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $service): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="service-card">
                        <div class="card-content">
                            <h3><?php echo e($service->service_name); ?></h3>
                            <p class="duration"><?php echo e(__('messagess.duration', ['minutes' => $service->duration_min])); ?></p>
                            <p class="service-price">SR <?php echo e($service->discounted_price); ?></p>
                        </div>
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>
            <p class="branch"><strong><?php echo e($branchName); ?> </strong> : <?php echo e($branchDes); ?></p>
            <p class="price"><strong style="color:white"><?php echo e(__('messagess.price')); ?> :</strong>  <?php echo e($totalService); ?> </p>
            <div style="width:100%;display: flex;justify-content: end;">
                <button type="button" id="openModalBtn" class="more-btn"><?php echo e(__('messagess.add_to_cart')); ?></button>
            </div>
        </div>
        <div class="left-img">
            <img src="<?php echo e($package['image']); ?>" alt="">
        </div>
    </div>
    <div id="bookingModal" class="pkg-modal" aria-hidden="true">
        <div class="pkg-modal-card" role="dialog" aria-modal="true">
            <button type="button" class="pkg-modal-close" id="closeModalBtn">×</button>
            <div class="pkg-modal-title"><?php echo e(__('messagess.bookNow')); ?></div>

            <div class="pkg-box">
                <div class="pkg-field-label"><?php echo e(__('messagess.select_preferred_day')); ?> </div>
                <input type="hidden" id="dateInput">
                <div id="calendarContainer" class="pkg-calendar"></div>
            </div>

            <div class="pkg-field-label"><?php echo e(__('messagess.select_preferred_time')); ?> </div>
            <div class="pkg-period-toggle">
                <button type="button" class="pkg-period-btn active" data-period="morning"><?php echo e(__('messagess.morning')); ?></button>
                <button type="button" class="pkg-period-btn" data-period="evening"><?php echo e(__('messagess.afternoon')); ?></button>
            </div>

            <div class="pkg-times" id="timeSlots"></div>

            <div class="pkg-modal-actions">
                <button type="button" id="saveBookingBtn" class="pkg-action-btn primary"><?php echo e(__('messagess.add_to_cart')); ?></button>
            </div>
        </div>
    </div>
    <script src="<?php echo e(asset('custom-js/cart-sidebar.js')); ?>"></script>
    <!-- JS booking modal -->
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    <script>
    const modal = document.getElementById('bookingModal');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    const dateInput = document.getElementById('dateInput');
    const calendarContainer = document.getElementById('calendarContainer');
    const timeSlots = document.getElementById('timeSlots');
    const periodBtns = document.querySelectorAll('.pkg-period-btn');
    const saveBookingBtn = document.getElementById('saveBookingBtn');

    let selectedTime = null;
    let currentPeriod = 'morning';
    let allTimes = [];
    const fixedStaffId = <?php echo e($package['branch_id'] == 32 ? 266 : 267); ?>;
    let bookingCalendar = null;

    function openModal() {
        modal.classList.add('show');
        modal.setAttribute('aria-hidden', 'false');
        initCalendar();
    }

    function closeModal() {
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
    }

    function initCalendar() {
        if (bookingCalendar) return;

        bookingCalendar = flatpickr(calendarContainer, {
            inline: true,
            minDate: "today",
            dateFormat: "Y-m-d",
            defaultDate: "today",
            disableMobile: true,
            onChange: function(selectedDates, dateStr) {
                dateInput.value = dateStr;
                if (dateStr) {
                    loadAvailableTimes(dateStr);
                }
            }
        });

        dateInput.value = bookingCalendar.input.value || '';
        if (dateInput.value) {
            loadAvailableTimes(dateInput.value);
        }
    }

    function normalizeHour(timeStr) {
        const [h] = timeStr.split(':').map(Number);
        return h;
    }

    function formatTimeLabel(timeStr) {
        const [h, m] = timeStr.split(':').map(Number);
        const isPM = h >= 12;
        const displayH = ((h + 11) % 12) + 1;
        const suffixPm = "PM";
        const suffixAm = "AM";
        return `${displayH}:${String(m).padStart(2, '0')} ${isPM ? suffixPm : suffixAm}`;
    }

    function filterByPeriod(times) {
        return times.filter((timeStr) => {
            const hour = normalizeHour(timeStr);
            if (currentPeriod === 'morning') {
                return hour < 12;
            }
            return hour >= 12;
        });
    }

    function renderTimes() {
        const filtered = filterByPeriod(allTimes);
        timeSlots.innerHTML = '';

        if (!filtered.length) {
            timeSlots.innerHTML = `<span style="color:#777;">No available times</span>`;
            return;
        }

        filtered.forEach((timeStr) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'pkg-time-btn';
            btn.textContent = formatTimeLabel(timeStr);
            btn.dataset.value = timeStr;
            if (selectedTime === timeStr) {
                btn.classList.add('active');
            }
            btn.addEventListener('click', () => {
                selectedTime = timeStr;
                document.querySelectorAll('.pkg-time-btn').forEach((b) => b.classList.remove('active'));
                btn.classList.add('active');
            });
            timeSlots.appendChild(btn);
        });
    }

    async function loadAvailableTimes(dateValue) {
        selectedTime = null;
        allTimes = [];
        timeSlots.innerHTML = `<span style="color:#777;">Loading times...</span>`;

        try {
            const res = await fetch(`/available/${dateValue}/${fixedStaffId}`);
            const data = await res.json();
            allTimes = Array.isArray(data) ? data : [];
            renderTimes();
        } catch (e) {
            timeSlots.innerHTML = `<span style="color:#c00;">Unable to load times</span>`;
        }
    }

    async function savePackageBooking() {
        if (!dateInput.value) {
            createNotify({ title: '', desc: "Please select date" });
            return;
        }

        if (!selectedTime) {
            createNotify({ title: '', desc: "Please select time" });
            return;
        }

        const payload = {
            date: dateInput.value,
            time: selectedTime,
            notes: '',
            employye_id: "<?php echo e($package['branch_id'] == 32 ? 266 : 267); ?>",
            package_id: "<?php echo e($package['id'] ?? null); ?>",
            branch_id: "<?php echo e($package['branch_id'] ?? 0); ?>",
            total_price: "<?php echo e($totalService ?? 0); ?>"
        };

        try {
            const res = await fetch("<?php echo e(route('package.booking.store')); ?>", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    "X-CSRF-TOKEN": "<?php echo e(csrf_token()); ?>"
                },
                body: JSON.stringify(payload)
            });

            const data = await res.json();

            if (data.status === 'guest') {
                closeModal();
                createNotify({ title: '', desc: "Please login to complete booking" });
                setTimeout(() => window.location.href = '/signin', 1500);
                return;
            }

            if (data.status === 'saved') {
                closeModal();
                createNotify({
                    title: "Success",
                    desc: "Added To Cart successfully"
                });
                CartSidebar.refresh();   // re-fetch cart data + update badge
                CartSidebar.open();
                return;
            }

            createNotify({
                title: "Error",
                desc: data.message || "An error occurred while saving booking"
            });
        } catch (error) {
            createNotify({
                title: "Error",
                desc: "An error occurred while saving booking"
            });
        }
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    periodBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            periodBtns.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            currentPeriod = btn.dataset.period;
            renderTimes();
        });
    });

    saveBookingBtn.addEventListener('click', savePackageBooking);
    </script>

    <?php echo $__env->make('components.frontend.notifications', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php echo $__env->make('components.frontend.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

</body>
</html>
<?php /**PATH D:\projects\php8\cityart\samiCare\sami-care\resources\views/home/details.blade.php ENDPATH**/ ?>