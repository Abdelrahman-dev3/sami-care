<!DOCTYPE html>
<html lang="<?php echo e(app()->getLocale()); ?>" dir="<?php echo e(language_direction()); ?>" class="theme-fs-sm">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">

    <title><?php echo $__env->yieldContent('title'); ?> | <?php echo e(app_name()); ?></title>

    <link rel="stylesheet" href="<?php echo e(mix('css/libs.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(mix('css/backend.css')); ?>">
    <?php if(language_direction() == 'rtl'): ?>
        <link rel="stylesheet" href="<?php echo e(asset('css/rtl.css')); ?>">
    <?php endif; ?>
    <link rel="stylesheet" href="<?php echo e(asset('custom-css/frontend.css')); ?>">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">

    <?php echo $__env->yieldPushContent('after-styles'); ?>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Zain:ital,wght@0,200;0,300;0,400;0,700;0,800;0,900;1,300;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"/>
    <!-- Swiper CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"/>


    <!-- Swiper JS -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

    <style>
        .swiper-pagination-bullet-active {
            background-color: #BF9456;
            opacity: 1;
        }
                .swiper-slide{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .swiper-slide img{
            width: 65%;
            height: 250px;
            object-fit: cover;
            border-radius: 8px;
        }
        .shop-swiper-nav {
            color: #BF9456;
        }
        .shop-swiper-nav::after {
            font-size: 18px;
            font-weight: bold;
        }
        @media (max-width: 768px) {
            .swiper-slide img{
                width: 100%;
                object-fit: contain;
            }
            .shop-swiper-nav {
                display: none;
            }

        }
    </style>
    <style>
        body {
          font-family: 'Zain', sans-serif;
        }
        .shop-banner img {
            width: 100%;
            border-radius: 20px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            margin-bottom: 40px;
        }

        /* الأقسام */
        .categories {
            text-align: center;
            margin: 60px;
        }
        .section-title {
            font-size: 26px;
            text-align: center;
            font-weight: bold;
            margin: 25px;
        }
        .categories-list {
            padding: 10px 0 20px;
        }
        .categories-list .swiper-wrapper {
            align-items: center;
        }
        .category-item {
            width: 110px;
            transition: 0.3s;
        }
        .category-item img {
            width: 100%;
            height: 110px;
            cursor: pointer;
            object-fit: cover;
            border-radius: 50%;
            transition: transform 0.3s ease;
        }
        .category-item p {
            margin-top: 10px;
            font-weight: 600;
        }
        .category-item:hover img {
            transform: scale(1.1);
        }

        /* المنتجات */
        .category-products {
            margin-bottom: 70px;
            width: 86%;
            margin: auto;
        }
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 25px;
        }
        .product-card {
            background: #fff;
            border-radius: 15px;
            padding: 15px;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        .product-card:hover {
            transform: translateY(-5px);
        }
        .product-card img {
            width: 100%;
            height: 180px;
            object-fit: contain;
            border-radius: 10px;
        }
        .product-card h3 {
            font-size: 16px;
            margin: 10px 0 5px;
        }
        .product-card .price {
            color: #e0b94a;
            font-weight: bold;
        }
        .add-btn {
            background: #e0b94a;
            border: none;
            padding: 8px 20px;
            border-radius: 8px;
            color: #fff;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.3s;
        }
        .add-btn:hover {
            background: #cda93e;
        }

        /* موبايل */
        @media (max-width: 768px) {
            .category-item {
                width: 85px;
            }
            .product-card img {
                height: 150px;
            }
        }
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
            gap: 25px;
        }
        .c-border{
            border: 3px solid #cf9233;
        }
        .color{
            color: #cf9233;
        }
        .more-btn{
            display: none !important;
        }
    </style>
    <link rel="stylesheet" href="<?php echo e(asset('custom-css/cart-sidebar.css')); ?>">
</head>
<body>
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
    <?php echo $__env->make('components.frontend.progress-bar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php echo $__env->make('components.frontend.notifications', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <div class="position-relative" style="height: 17vh;">

        <?php echo $__env->make('components.frontend.second-navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
    <!-- Swiper -->
        <div class="swiper mySwiper" style="display: flex; justify-content: center; align-items: center; margin-top: 37px;">
            <div class="swiper-wrapper">
                <?php $__currentLoopData = $ads; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $ad): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="swiper-slide">
                        <img src="<?php echo e(asset($ad->image)); ?>">
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>

            <!-- Pagination -->
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev shop-swiper-nav"></div>
            <div class="swiper-button-next shop-swiper-nav"></div>
        </div>

    <!-- Page Content -->
    <main>
    
    <section class="categories">
        <h2 class="section-title"><?php echo e(__('messagess.categories')); ?></h2>
        <div class="swiper categories-list categories-swiper">
            <div class="swiper-wrapper">
                <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="swiper-slide">
                        <div class="category-item" data-id="<?php echo e($category->id); ?>" data-aos="fade-up">
                            <img src="<?php echo e($category->feature_image); ?>" alt="<?php echo e($category->name); ?>">
                            <p><?php echo e($category->name); ?></p>
                        </div>
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>
        </div>
    </section>

    <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <?php if($category->products->count()): ?>
            <section class="category-products" data-category-id="<?php echo e($category->id); ?>" data-aos="fade-up">
                <h2 class="section-title"><?php echo e($category->name); ?></h2>
                <div class="products-grid">
                    <?php $__currentLoopData = $category->products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <?php echo $__env->make('components.frontend.products-card', [
                            'image' => $product->feature_image,
                            'name' => $product->name,
                            'des' => $product->short_description,
                            'product_id' => $product->id,
                            'categories' => $product->categories,
                            'min_price' => $product->min_price,
                            'max_price' => $product->max_price,
                        ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
            </section>
        <?php endif; ?>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

    <?php if(isset($products) && $products->count() > 0): ?>
    <h2 class="section-title"><?php echo e(__('messagess.Bestselling products')); ?></h2>
        <div class="row" style="width: 92%;margin: auto;">
            <?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="col-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="<?php echo e($index * 100); ?>">

                    <?php echo $__env->make('components.frontend.products-card', [
                        'image' => $product->feature_image,
                        'name' => $product->name,
                        'des' => $product->short_description,
                        'product_id' => $product->id,
                        'categories' => $product->categories,
                        'min_price' => $product->min_price,
                        'max_price' => $product->max_price,
                    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    <a href="<?php echo e(route('frontend.Shop')); ?>" class="more-btn">
        <p style="color:white;font-size: 16px;margin: 0 13px;"><?php echo e(__('product.learn_more')); ?></p>
        <span class="arrow" style="color: white;"><span class="iconify" data-icon="tabler:arrow-left" data-width="22"></span></span>
    </a>
    <?php endif; ?>
</div>

    </main>

    <div class="position-relative" style="height: 17vh;">
    </div>
    <!-- Footer -->
    <?php echo $__env->make('components.frontend.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="<?php echo e(asset('custom-js/cart-sidebar.js')); ?>"></script>
    <script>
    AOS.init({ once: true });

    document.addEventListener('DOMContentLoaded', () => {
      new Swiper(".categories-swiper", {
        slidesPerView: 6,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          0: { slidesPerView: 3, spaceBetween: 12 },
          576: { slidesPerView: 4, spaceBetween: 16 },
          768: { slidesPerView: 5, spaceBetween: 18 },
          1024: { slidesPerView: 6, spaceBetween: 20 },
        }
      });

      const categories = document.querySelectorAll('.category-item');
      const sections = document.querySelectorAll('.category-products');
      if (sections.length) sections[0].style.display = 'block';

      categories.forEach(cat => {
        cat.addEventListener('click', () => {
          const id = cat.dataset.id;
          document.querySelectorAll('.category-item').forEach(c => {
            c.classList.remove('color');
            c.firstElementChild.classList.remove('c-border');
          });

          cat.classList.add('color');
          cat.firstElementChild.classList.add('c-border');
          sections.forEach(sec => sec.style.display = 'none');
          const target = document.querySelector(`.category-products[data-category-id="${id}"]`);
          if (target) {
            target.style.display = 'block';
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    });
        function addtocart(productId) {
        fetch(`/cart/add/${productId}`)
            .then(response => response.json())
            .then(data => {
                createNotify({ title: data.status, desc: data.message });
                CartSidebar.refresh();   // re-fetch cart data + update badge
                CartSidebar.open();
            })
            .catch(error => {
                createNotify({ title: data.status, desc: data.message });
            });
    }
</script>
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
<script>
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        effect: 'fade', // تأثير fade بسيط
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // النقط قابلة للنقر للتنقل
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
</script>
</body>
</html>
<?php /**PATH D:\projects\php8\cityart\samiCare\sami-care\Modules/rontend\Resources/views/shop.blade.php ENDPATH**/ ?>