<link rel="stylesheet" href="<?php echo e(asset('pages-css/learn-about-section.css')); ?>">
<style>
    .m-hero-sec{
        height: 550px;
        position: relative;
        z-index: 99;
        background: #f5f5f5;
        width: 100%;
        overflow-x: clip;
    }
    @media (max-width: 576px) {
        .m-hero-sec{
            height: 770px;
        }
    }
</style>
<section class="py-5 m-hero-sec">
    <div class="s-hero-sec">
        <div class="container" style="padding:0 5rem">
        <div class="row align-items-center g-5" style="margin-top: 20px;">
            <!-- Left: Text -->
            <div class="col-12 col-lg-6 m-a-h" data-aos="fade-right" data-aos-delay="100">
                <h2 class="fw-bold"><?php echo e(__('messagess.main_title')); ?></h2>
                <h3 class="fw-bold"><?php echo e(__('messagess.title_1')); ?></h3>
                <p><?php echo e(__('messagess.description_1')); ?></p>
                <h3 class="fw-bold"><?php echo e(__('messagess.title_2')); ?></h3>
                <p style="color: #000;font-size: 17.6px;line-height: 1.8;font-weight: 400;"><?php echo e(__('messagess.description_2')); ?></p>
            </div>
            <!-- Right: Image -->
            <div class="col-12 col-lg-6 text-center" data-aos="fade-left" data-aos-delay="200">
                <img src="<?php echo e(asset('images/pages/about-imge.png')); ?>" alt="Learn about Sami Spa" class="img-fluid rounded-4" style="max-width: 90%; object-fit: cover;">
            </div>
        </div>
    </div>
    </div>
</section>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
  function adjustAOS() {
    if (window.innerWidth <= 768) {
      document.querySelectorAll('[data-aos="fade-right"]').forEach(el => {
        el.setAttribute('data-aos', 'fade-up');
      });
      document.querySelectorAll('[data-aos="fade-left"]').forEach(el => {
        el.setAttribute('data-aos', 'fade-up');
      });
    }
  }

  adjustAOS(); // Call on page load
  window.addEventListener('resize', adjustAOS); // Call on resize

  AOS.init({ once: true });
</script><?php /**PATH D:\projects\php8\cityart\samiCare\sami-care\resources\views/components/frontend/learn-about-section.blade.php ENDPATH**/ ?>