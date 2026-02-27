<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<section class="py-5">

    <div class="container" style="padding: 0 5rem;">

        <h2 class="mb-5 text-center" style="font-size: 42px;background: linear-gradient(90deg, #CF9233, #212121);-webkit-background-clip: text;-webkit-text-fill-color: transparent;font-size: 2.5rem; font-weight: bold;">
            <?php echo e(__('messagess.our_premium_packages')); ?>

        </h2>
        <?php if(isset($packages) && $packages->count() > 0): ?>
            <div class="row g-4">
                <?php $__currentLoopData = $packages; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $package): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="col-12 col-lg-4" data-aos="fade-up" data-aos-delay="<?php echo e($index * 100); ?>">
                        <?php echo $__env->make('components.frontend.package-card', [
                            'image' => $package->media->first()->original_url ?? asset('images/frontend/Rectangle 42489.png'),
                            'name' => $package->name,
                            'description' => Str::limit($package->description ?? '', 100),
                            'price' => 'SR ' . number_format($package->package_price ?? 0, 2),
                            'duration' => $package->duration_min ?? 0 . ' min',
                            'services_count' => $package->service ? $package->service->count() : 0,
                            'package_id' => $package->id
                        ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>
        <?php else: ?>
            <div class="text-center py-5">
                <p class="text-muted"><?php echo e(__('messagess.no_packages_available')); ?></p>
            </div>
        <?php endif; ?>
    </div>
</section>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
  AOS.init({ once: true });

  function __(key) {
    const messagess = {
      'messagess.package_details': <?php echo json_encode(__('messagess.package_details'), 15, 512) ?>,
      'messagess.loading': <?php echo json_encode(__('messagess.loading'), 15, 512) ?>,
      'messagess.included_services': <?php echo json_encode(__('messagess.included_services'), 15, 512) ?>,
      'messagess.service': <?php echo json_encode(__('messagess.service'), 15, 512) ?>,
      'messagess.price': <?php echo json_encode(__('messagess.price'), 15, 512) ?>,
      'messagess.services_included': <?php echo json_encode(__('messagess.services_included'), 15, 512) ?>,
      'messagess.services_count': <?php echo json_encode(__('messagess.services_count'), 15, 512) ?>,
      'messagess.error_loading': <?php echo json_encode(__('messagess.error_loading'), 15, 512) ?>,
    };
    return messagess[key] || key;
  }

  function showPackageDetails(packageId) {
    const modal = new bootstrap.Modal(document.getElementById('packageModal'));
    const contentDiv = document.getElementById('packageDetailsContent');

    contentDiv.innerHTML = `
      <div class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2">${__('messagess.loading')}</p>
      </div>
    `;

    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    modal.show();
    setTimeout(() => {
      window.scrollTo(0, scrollPos);
    }, 100);

    fetch(`/api/v1/packages/${packageId}`)
      .then(response => response.json())
      .then(data => {
        if (data.status && data.data) {
          const package = data.data;
          let servicesHtml = '';
          const packageImage = package.media && package.media.length > 0 ?
            package.media[0].original_url :
            '<?php echo e(asset("images/frontend/slider1.webp")); ?>';

          if (package.service && package.service.length > 0) {
            servicesHtml = `
              <div class="mt-3">
                <h6>${__('messagess.included_services')}</h6>
                <ul class="list-unstyled">
                  ${package.service.map(ps => `
                    <li class="mb-2">
                      <i class="fas fa-check text-success me-2"></i>
                      ${ps.services ? ps.services.name["<?php echo e(app()->getLocale()); ?>"] : __('messagess.service')}
                      ${ps.services ? `(${ps.services.duration_min} min)` : ''}
                    </li>
                  `).join('')}
                </ul>
              </div>
            `;
          }

          contentDiv.innerHTML = `
            <div class="row">
              <div class="col-md-6">
                <img src="${packageImage}" alt="${package.name}" class="img-fluid rounded" style="max-height: 300px; object-fit: cover;">
              </div>
              <div class="col-md-6">
                <h4 class="text-primary mb-3">${package.name["<?php echo e(app()->getLocale()); ?>"]}</h4>
                <p class="text-muted mb-3">${package.description || __('messagess.no_packages_available')}</p>
                <div class="row mb-3">
                  <div class="col-6">
                    <strong>${__('messagess.price')}</strong><br>
                    <span class="text-primary h5">SR ${parseFloat(package.package_price || 0).toFixed(2)}</span>
                  </div>
                  <div class="col-6">
                    <strong>${__('messagess.services_included')}</strong><br>
                    <span class="badge bg-secondary">${package.service ? package.service.length : 0} </span>
                  </div>
                </div>
                ${servicesHtml}
              </div>
            </div>
          `;
        } else {
          contentDiv.innerHTML = `
            <div class="text-center text-danger">
              <p>${__('messagess.error_loading')}</p>
            </div>
          `;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        contentDiv.innerHTML = `
          <div class="text-center text-danger">
            <p>${__('messagess.error_loading')}</p>
          </div>
        `;
      });
  }

  document.addEventListener('DOMContentLoaded', function() {
    const packageModal = document.getElementById('packageModal');

    if (packageModal) {
      packageModal.addEventListener('hidden.bs.modal', function () {
        const backdrops = document.querySelectorAll('.modal-backdrop');
        backdrops.forEach(backdrop => backdrop.remove());
        document.body.classList.remove('modal-open');
        document.body.style.paddingRight = '';
        document.body.style.overflow = '';
      });
    }
  });
</script>
<?php /**PATH D:\projects\php8\cityart\samiCare\sami-care\resources\views/components/frontend/premium-packages-section.blade.php ENDPATH**/ ?>