<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<style>
  .package-branch-filter {
    margin: -18px auto 34px;
    padding: 18px;
    border: 1px solid rgba(207, 146, 51, 0.22);
    border-radius: 18px;
    background: #fff;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
  }
  .package-branch-filter__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 14px;
    color: #444;
  }
  .package-branch-filter__header span {
    color: #CF9233;
    font-size: 13px;
    font-weight: 800;
  }
  .package-branch-filter__header strong {
    font-size: 15px;
    font-weight: 700;
  }
  .package-branch-filter__chips {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .package-branch-filter__chip {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 10px 16px;
    border: 1px solid #e8e0d5;
    border-radius: 999px;
    background: #fafafa;
    color: #555;
    text-decoration: none;
    font-weight: 700;
    font-size: 13px;
    transition: 0.2s ease;
  }
  .package-branch-filter__chip:hover,
  .package-branch-filter__chip.is-active {
    border-color: #CF9233;
    background: #fff6e7;
    color: #9b681a;
  }
  @media (max-width: 768px) {
    section.py-5 > .container {
      padding: 0 1rem !important;
    }
    .package-branch-filter__header {
      align-items: flex-start;
      flex-direction: column;
    }
    .package-branch-filter__chip {
      width: 100%;
      justify-content: center;
    }
  }
</style>
<section class="py-5">

    <div class="container" style="padding: 0 5rem;">

        <h2 class="mb-5 text-center" style="font-size: 42px;background: linear-gradient(90deg, #CF9233, #212121);-webkit-background-clip: text;-webkit-text-fill-color: transparent;font-size: 2.5rem; font-weight: bold;">
            {{ __('messagess.our_premium_packages') }}
        </h2>

        @isset($branches)
            <div class="package-branch-filter" aria-label="{{ app()->getLocale() === 'ar' ? 'فلترة الباقات حسب الفرع' : 'Filter packages by branch' }}">
                <div class="package-branch-filter__header">
                    <span>{{ app()->getLocale() === 'ar' ? 'الفروع' : 'Branches' }}</span>
                    <strong>{{ app()->getLocale() === 'ar' ? 'اختر الفرع لعرض الباقات التابعة له' : 'Choose a branch to view its packages' }}</strong>
                </div>
                <div class="package-branch-filter__chips">
                    <a
                        href="{{ route('frontend.Packages') }}"
                        class="package-branch-filter__chip {{ empty($selectedBranchId) ? 'is-active' : '' }}"
                    >
                        {{ app()->getLocale() === 'ar' ? 'كل الفروع' : 'All branches' }}
                    </a>
                    @foreach($branches as $branch)
                        @php
                            $filterBranchName = $branch->getTranslation('name', app()->getLocale(), false) ?: $branch->getTranslation('name', 'en', false);
                        @endphp
                        <a
                            href="{{ route('frontend.Packages', ['branch_id' => $branch->id]) }}"
                            class="package-branch-filter__chip {{ (int) ($selectedBranchId ?? 0) === (int) $branch->id ? 'is-active' : '' }}"
                        >
                            <i class="bi bi-geo-alt"></i>
                            {{ $filterBranchName }}
                        </a>
                    @endforeach
                </div>
            </div>
        @endisset

        @if(isset($packages) && $packages->count() > 0)
            <div class="row g-4">
                @foreach($packages as $index => $package)
                    @php
                        $branchName = $package->branch
                            ? ($package->branch->getTranslation('name', app()->getLocale(), false) ?: $package->branch->getTranslation('name', 'en', false))
                            : null;
                    @endphp
                    <div class="col-12 col-lg-4" data-aos="fade-up" data-aos-delay="{{ $index * 100 }}">
                        @include('components.frontend.package-card', [
                            'image' => $package->media->first()->original_url ?? asset('images/frontend/Rectangle 42489.png'),
                            'name' => $package->name,
                            'description' => Str::limit($package->description ?? '', 100),
                            'price' => 'SR ' . number_format($package->package_price ?? 0, 2),
                            'duration' => $package->duration_min ?? 0 . ' min',
                            'services_count' => $package->service ? $package->service->count() : 0,
                            'branch_name' => $branchName,
                            'package_id' => $package->id
                        ])
                    </div>
                @endforeach
            </div>
        @else
            <div class="text-center py-5">
                <p class="text-muted">{{ __('messagess.no_packages_available') }}</p>
            </div>
        @endif
    </div>
</section>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
  AOS.init({ once: true });

  function __(key) {
    const messagess = {
      'messagess.package_details': @json(__('messagess.package_details')),
      'messagess.loading': @json(__('messagess.loading')),
      'messagess.included_services': @json(__('messagess.included_services')),
      'messagess.service': @json(__('messagess.service')),
      'messagess.price': @json(__('messagess.price')),
      'messagess.services_included': @json(__('messagess.services_included')),
      'messagess.services_count': @json(__('messagess.services_count')),
      'messagess.error_loading': @json(__('messagess.error_loading')),
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
            '{{ asset("images/frontend/slider1.webp") }}';

          if (package.service && package.service.length > 0) {
            servicesHtml = `
              <div class="mt-3">
                <h6>${__('messagess.included_services')}</h6>
                <ul class="list-unstyled">
                  ${package.service.map(ps => `
                    <li class="mb-2">
                      <i class="fas fa-check text-success me-2"></i>
                      ${ps.services ? ps.services.name["{{ app()->getLocale() }}"] : __('messagess.service')}
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
                <h4 class="text-primary mb-3">${package.name["{{ app()->getLocale() }}"]}</h4>
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
