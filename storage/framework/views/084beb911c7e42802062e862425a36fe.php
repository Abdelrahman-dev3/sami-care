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

  <?php echo $__env->yieldPushContent('after-styles'); ?>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">

  <style>
    body {
      background: white !important;
    }

    .card {
      font-size: 15px;
      line-height: 1.6;
      color: black;
    }

    .card-body {
      background: #F3F5F5;
    }

    .card-title {
      font-size: 23px;
      margin-bottom: 27px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }

    .toggle-content {
      transition: max-height 0.4s ease;
    }
    .card-title i {
      transition: transform 0.6s ease;
    }

    .card-title.active i {
      transform: rotate(180deg);
    }
    .toggle-content li {
        list-style-type: disc;
        list-style-position: inside;
    }
    .hidden{
        max-height: 61px;
        overflow: hidden;
    }
    @media (max-width: 768px) {
        .container {
            padding: 0 56px;
        }
    }
  </style>
</head>

<body>
  <?php echo $__env->make('components.frontend.progress-bar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

  <div class="position-relative" style="height: 17vh;">
    <?php echo $__env->make('components.frontend.second-navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
  </div>

  <main>
    <div class="container mt-4">
      <div class="row">
        <?php $__currentLoopData = $terms; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $term): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="col-md-6 mb-4">
          <div class="card shadow-sm">
            <div class="card-body hidden">
              <h5 class="card-title toggle-title">
                <?php echo e($index + 1); ?> - <?php echo e($term->title[app()->getLocale()]); ?>

                <i class="fas fa-chevron-down"></i>
              </h5>
              <ul class="list-unstyled mt-3 toggle-content">
                <?php $__currentLoopData = $term->points[app()->getLocale()]; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $point): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <li><?php echo e($point); ?></li>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
              </ul>
            </div>
          </div>
        </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
      </div>
    </div>
  </main>

  <div class="position-relative" style="height: 17vh;"></div>
  <?php echo $__env->make('components.frontend.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

  <script>
    document.querySelectorAll('.toggle-title').forEach(title => {
      title.addEventListener('click', function () {
        const content = this.parentElement;
        this.classList.toggle('active');
        content.classList.toggle('hidden');
      });
    });
  </script>
</body>
</html>
<?php /**PATH /home/city2tec/sami-care.sa/Modules/rontend/Resources/views/TermsAndConditions.blade.php ENDPATH**/ ?>