<!DOCTYPE html>
<html lang="<?php echo e(app()->getLocale()); ?>" dir="<?php echo e(language_direction()); ?>" class="theme-fs-sm">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo e($product->name); ?> - Products Details</title>
    <link rel="stylesheet" href="<?php echo e(mix('css/libs.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(mix('css/backend.css')); ?>">
    <?php if(language_direction() == 'rtl'): ?>
        <link rel="stylesheet" href="<?php echo e(asset('css/rtl.css')); ?>">
    <?php endif; ?>
    <link rel="stylesheet" href="<?php echo e(asset('custom-css/frontend.css')); ?>">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
     <style>
    body {
      background: white !important;
    }
    .na {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 65px;
    }
    .product-card-m {
        background: #F8F8F8;
        direction: ltr;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px;
        width: 75%;
        height: 520px;
    }

    .product-info-m {
      height: 100%;
      flex: 1;
      padding: 30px;
      text-align:end;
    }

    .product-category-m {
      color: #212121;
      font-size: 14px;
      margin-bottom: 32px;
    }

    .product-title-m {
      font-size: 24px;
      font-weight: 700;
      margin: 0 0 10px;
      white-space: nowrap;
    }

    .stars-m {
        color: #CF9233;
        margin-bottom: 15px;
        font-size: 16px;
    }

    .product-desc-m {
      color: #555;
      line-height: 1.8;
      font-size: 15px;
      margin-bottom: 20px;
    }

    .product-price-m {
      font-weight: bold;
      color: #d49a00;
      font-size: 18px;
      margin-bottom: 20px;
    }

    .product-actions-m {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }

    .quantity-control {
      display: flex;
      align-items: center;
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
    }

    .quantity-control button {
      background: none;
      border: none;
      width: 35px;
      height: 35px;
      font-size: 20px;
      cursor: pointer;
      color: #333;
    }

    .quantity-control input {
      width: 40px;
      text-align: center;
      border: none;
      font-size: 16px;
      outline: none;
    }

    .add-to-cart-m {
      background: #d49a00;
      color: white;
      border: none;
      padding: 10px 25px;
      border-radius: 30px;
      cursor: pointer;
      font-size: 15px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .add-to-cart-m:hover {
      background: #b88300;
    }

    .product-image img {
      width: 300px;
      border-radius: 15px;
    }
    .ti {
        font-size: 27px;
        margin: 30px 0;
        font-weight: bold;
        color: black;
    }
    @media (max-width: 576px) {
        .na {
            margin-top: -79px;
            display: block;
        }
        .product-card-m {
            background: white;
            display: flex;
            padding: 0;
            box-shadow: 0;
            width: 100%;
            flex-direction: column-reverse;
        }
        .product-image-mob {
            width: 100% !important;
            height: 400px !important;
        }
    }
  </style>
</head>
<body>
    <!-- Lightning Progress Bar -->
    <?php echo $__env->make('components.frontend.progress-bar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php echo $__env->make('components.frontend.notifications', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <!-- Hero/Header Section (like About page) -->
    <div class="position-relative" style="height: 17vh;">
        <?php echo $__env->make('components.frontend.second-navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>

    <main class="container">
    <div class="na">
     <div class="product-card-m">
    <div class="product-info-m">
      <div class="product-category-m">
        <?php $__currentLoopData = $product->categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <?php echo e($category->name); ?> - 
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
      </div>
      <h2 class="product-title-m"><?php echo e($product->name); ?></h2>
      <div class="stars-m">★★★★★</div>
      <p class="product-desc-m">
        <?php echo $product->description; ?>

      </p>
      <div class="product-price-m"> <span style="color:black;font-size: 15px;font-weight: 400;"> <?php echo e(__('messagess.price')); ?> : </span> <?php echo e($product->max_price); ?> <?php echo e(__('messagess.SAR')); ?></div>

      <div class="product-actions-m">
          <?php if(auth()->guard()->check()): ?>
            <button class="add-to-cart-m" onclick="addtocart(<?php echo e($product->id); ?> ,  document.getElementById('quantity').value )" ><?php echo e(__('messagess.add_to_cart')); ?> <i class="fa-solid fa-cart-shopping"></i></button>
          <?php endif; ?>
          <?php if(auth()->guard()->guest()): ?>
              <button class="add-to-cart" onclick='shownav()'>
                <span style="font-weight: bold;width: 100%;">
                    <?php echo e(__('messagess.add_to_cart')); ?>

                </span>
              </button>
        <?php endif; ?>

        <div class="quantity-control">
          <button id="minus">−</button>
          <input type="text" id="quantity" value="1">
          <button id="plus">+</button>
        </div>
      </div>
    </div>

    <div class="product-image product-image-mob" style="width: 49%;height: 400px;">
      <img src="<?php echo e($product->feature_image); ?>" alt="منتج">
    </div>
  </div>
    </div>
    <div class="ti">
        <label style="text-align: center;"><?php echo e(__('messagess.products_you_may_like')); ?></label>
    </div>
    <?php if(isset($suggest) && $suggest->count() > 0): ?>
    <div class="row g-4">
        <?php $__currentLoopData = $suggest; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>

            <div class="col-12 col-md-6 col-lg-4" style="display: flex;justify-content: center;" data-aos="fade-up" data-aos-delay="<?php echo e($index * 100); ?>">
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
    <?php endif; ?>

  <script>
    const plus = document.getElementById('plus');
    const minus = document.getElementById('minus');
    const quantity = document.getElementById('quantity');

    plus.addEventListener('click', () => {
      quantity.value = parseInt(quantity.value) + 1;
    });

    minus.addEventListener('click', () => {
      if (quantity.value > 1)
        quantity.value = parseInt(quantity.value) - 1;
    });
  </script>
    </main>
    <div class="position-relative" style="height: 27vh;">
    </div>
    <?php echo $__env->make('components.frontend.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init({ once: true, duration: 800 });
        function addtocart(productId , qty = 1) {
            fetch(`/cart/add/${productId}?qty=${qty}`)
                .then(response => response.json())
                .then(data => {
                    createNotify({ title: data.status, desc: data.message });
                })
                .catch(error => {
                    createNotify({ title: data.status, desc: data.message });
                });
        }
    </script>
</body>
</html>
<?php /**PATH /home/city2tec/sami-care.sa/Modules/rontend/Resources/views/product-details.blade.php ENDPATH**/ ?>