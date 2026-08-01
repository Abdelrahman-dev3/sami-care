<style>
    .details-btn {
        position: absolute;
        bottom: 43px;
        transform: translateY(50%);
        width: 66%;
        height: 70px;
        background: #eeeeee;
        border-radius: 40px;
        text-decoration: none;
        color: #222;
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        padding-left: 10px;
    }
    
    .circle-icon {
        width: 55px;
        height: 55px;
        background-color: #C68A2B;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        position: relative;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }
    
    .circle-icon::before {
        content: "";
        position: absolute;
        width: 45px;
        height: 45px;
        border: 1px solid white;
        border-radius: 50%;
    }
    .package-branch-badge {
        position: absolute;
        top: 18px;
        inset-inline-start: 50%;
        transform: translateX(-50%);
        max-width: 78%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        padding: 8px 13px;
        border-radius: 999px;
        background: rgba(255,255,255,0.92);
        color: #7d551a;
        font-size: 12px;
        font-weight: 800;
        box-shadow: 0 8px 20px rgba(0,0,0,0.18);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        z-index: 2;
    }
    .package-card-meta {
        position: absolute;
        bottom: 82px;
        inset-inline-start: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 8px;
        color: rgba(255,255,255,0.92);
        font-size: 12px;
        font-weight: 700;
        z-index: 2;
    }
</style>

<div class="d-flex flex-column align-items-center position-relative" style="padding-bottom: 40px;">

  <!-- الدائرة -->
  <div class="position-relative"
       style="width: 320px; height: 320px; border-radius: 50%; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.15);">
    
    <img src="{{ $image ?? asset('images/frontend/slider1.webp') }}"
         alt="Package"
         class="w-100 h-100"
         style="object-fit: cover;">

    <!-- Overlay -->
    <div class="position-absolute top-0 start-0 w-100 h-100"
         style="background: linear-gradient(to top, rgba(0,0,0,0.65) 35%, rgba(0,0,0,0) 100%);">
    </div>

    @if(!empty($branch_name))
      <div class="package-branch-badge">
        <i class="bi bi-geo-alt"></i>
        <span>{{ $branch_name }}</span>
      </div>
    @endif

    <div class="position-absolute start-50 translate-middle-x text-center"
         style="bottom: 110px;">
      <h3 class="text-white fw-bold mb-2 text-nowrap">
        {{ $name ?? '' }}
      </h3>
      <p class="text-white mb-0">
        {{ $description ?? '' }}
      </p>
    </div>

    @if(!empty($services_count))
      <div class="package-card-meta">
        <i class="bi bi-stars"></i>
        <span>{{ $services_count }} {{ app()->getLocale() === 'ar' ? 'خدمات' : 'services' }}</span>
      </div>
    @endif
  </div> 

  <a href="{{ route('home.details', $package_id) }}"
     class="details-btn d-flex align-items-center justify-content-between px-4">
     
     <span class="flex-grow-1 text-center fw-bold fs-5">
        {{ __('package.learn_more') }}
     </span>

     <div class="circle-icon">
        <span class="iconify" data-icon="tabler:arrow-left" data-width="22"></span>
     </div>
  </a>

</div>
