<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ language_direction() }}" class="theme-fs-sm">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>@yield('title') | {{ app_name() }}</title>
    
  <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet"/>
  <link rel="stylesheet" href="{{ mix('css/libs.min.css') }}">
  <link rel="stylesheet" href="{{ mix('css/backend.css') }}">
  @if (language_direction() == 'rtl')<link rel="stylesheet" href="{{ asset('css/rtl.css') }}">@endif
  <link rel="stylesheet" href="{{ asset('custom-css/frontend.css') }}">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"> 
  @stack('after-styles')
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap" rel="stylesheet">
  <style>
    body {
      background-color: #f8f8f8;
      font-family: 'Almarai', sans-serif !important;
    }
    .order-summary {
      background: #fff;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .summary-box {
      background: #fff;
      border-radius: 10px;
      padding: 20px;
      width: 90%;
      line-height: 3;
      border: 2px solid #97979745;
    }
    .output{
        width: 50%;
        font-size: 16px;
        font-weight: bold;
    }
    .summary-box h6{
        font-weight: bold;
        font-size: 15px;
    }
    .summary-box div span{
        color: #979797;
    }
    .btn-gold {
      background-color: #c79c3f;
      color: #fff;
      font-weight: 600;
      border: none;
    }
    .btn-gold:hover {
      background-color: #b68d35;
      color: #fff;
    }
    .product-img {
        width: 65px;
        height: 55px;
        border-radius: 10px;
        background-color: #1d1d1d;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .product-img i {
      color: #c79c3f;
      font-size: 22px;
    }
    .table thead th {
      background-color: #CF9233;
      color: white;
      text-align: center;
    }
    .table {
        font-size: 14px;
        border-collapse: separate;
        border-spacing: 0 25px;
    }
    .table tbody td {
      vertical-align: middle;
      text-align: center;
      background-color: #F8F8F8;
      padding: 20px;
      gap: 25px;
    }
    .coupon-input {
      max-width: 120px;
      margin: 0 auto;
    }
    .cart-empty { color: #888; font-size: 1.3rem; margin: 3rem 0; text-align: center; }
    .prc{
        font-weight: bold;
    }
    .text-start{
        margin: 0 20px 0 0;
        text-align: start !important;
    }
    .btn-delete{
        padding: 10px;
        width: 13%;
        background: #FF473E;
        border-radius: 10px;
        border: none;
    }
    .service-delete{
        border: none;
    }
    .service-delete i{
        color:#979797;
    }
    .co-ser{
        height: 40px;
        border-radius: 10px 0 0 10px;
        padding: 10px;
        color: black;
        font-size: 12px;
        font-weight: bold;
        background: #D9D9D9;
        border: none;
        cursor: pointer;
    }
    .co-ser-in{
        width: 100px;
        height: 40px;
        border-radius: 0 11px 11px 0;
        background: white;
        margin: 0 0 0 -4px;
        border: 1px solid #D9D9D9;
    }
    .side-bar{
        display: flex;
        justify-content: end;
    }
    @media (max-width: 576px) {
        thead{
            display:none;
        }
        .product-img{
            display:none;
        }
        tr{
            display: flex;
            flex-direction: column;
        }
        .table tbody tr td{
            text-align: start;
        }
    }
    .star-rating {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
    }
    .star-input {
        display: none;
    }
    .star-label {
        font-size: 1.5rem;
        color: #ddd;
        cursor: pointer;
        margin: 0 2px;
    }
    .star-input:checked ~ .star-label {
        color: #ffc107;
    }
    .star-label:hover,
    .star-label:hover ~ .star-label {
        color: #ffc107;
    }
  </style>
</head>
<body class="bg-white">
@include('components.frontend.progress-bar')
@include('components.frontend.notifications')
<div class="position-relative" style="height: 17vh;">
    @include('components.frontend.second-navbar')
</div>
<div class="container py-5">
  <div class="row g-4">
    <div class="col-lg-12">
      <div class="order-summary p-3">
        <table class="table align-middle">
          <thead>
            <tr style="background-color: red;">
                <th style="padding:16px 20px;font-weight:bold;">{{ __('messagess.product') }}</th>
                <th style="padding:16px 20px;font-weight:bold;">{{ __('messagess.price') }}</th>
                <th style="padding:16px 20px;font-weight:bold;">{{ __('messages.branch') }}</th>
                <th style="padding:16px 20px;font-weight:bold;">{{ __('profile.date') }}</th>
                <th style="padding:16px 20px;font-weight:bold;">{{ __('profile.time') }}</th>
                <th style="padding:16px 20px;font-weight:bold;">{{ __('messages.stars') }}</th>
            </tr> 
          </thead>
          <tbody>
            @foreach($bookings as $booking)
                @foreach($booking->services as $service)
                <tr>
                  <td class="d-flex align-items-center gap-2">
                    <div class="product-img"><i class="bi bi-person"></i></div>
                    <div class="text-start">
                      <strong>{{ $service->service_name }} <i class="bi bi-chevron-left"></i> <i class="bi bi-chevron-left" style="margin: 0 -9px;"></i> <i class="bi bi-chevron-left"></i> {{ $service->service_name }}</strong><br>
                      <small class="text-muted">{{ __('messagess.employee') }}: {{ $service->employee->full_name ?? '-' }}</small>
                    </div>
                  </td>

                  <td class="prc">
                    {{ $service->service->default_price ?? 0  }} {{ __('messagess.currency') }}
                  </td>
                  <td>
                    {{ $booking->branch->name }}
                  </td>
                  <td>
                    {{ \Carbon\Carbon::parse($booking->start_date_time)->format('d-m-Y') }}
                  </td>
                  <td>
                    {{ \Carbon\Carbon::parse($booking->start_date_time)->format('H:i') }}
                  </td>
                  <td>
                      <button type="button" class="btn btn-sm btn-warning" 
                              onclick="openRatingModal({{ $booking->id }})">
                          <i class="fa-solid fa-star"></i> {{ __('employee.rate') }}
                      </button>
                  </td>
                </tr>
                @endforeach
          @endforeach
          </tbody>
        </table>
      </div>
    </div>
  </div>
  
    <!-- Employee Rating Modal -->
    <div class="modal fade" style="z-index: 999999999999999999999;" id="ratingModal" tabindex="-1" aria-labelledby="ratingModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ratingModalLabel">{{ __('employee.rate_employee') }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="ratingModalBody">
            <!-- Dynamic content will be loaded here -->
          </div>
        </div>
      </div>
    </div>
    
</div>
<div class="position-relative" style="height: 17vh;"></div>
<!-- Footer -->
@include('components.frontend.footer')
<!-- Bootstrap Icons -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script>
    @if (session('success'))
        toastr.success("{{ session('success') }}");
    @endif
    
    @if (session('error'))
        toastr.error("{{ session('error') }}");
    @endif
    
    // Employee Rating Functions
    function openRatingModal(bookingId) {
        fetch(`/employee/rating/booking/${bookingId}`)
            .then(response => response.json())
            .then(data => {
                if (data.status) {
                    showRatingForm(data.data, bookingId);
                } else {
                    createNotify({ title: '', desc: data.message });
                }
            })
            .catch(error => {
                console.error('Error:', error);
                createNotify({ title: '', desc: 'حدث خطأ في تحميل التقييمات' });
            });
    }

    function showRatingForm(employees, bookingId) {
        const modalBody = document.getElementById('ratingModalBody');
        let html = '';

        if (employees.length === 0) {
            html = '<p class="text-center">لا يوجد موظفين في هذا الحجز</p>';
        } else {
            employees.forEach(function(emp) {
                html += `
                    <div class="mb-4 p-3 border rounded">
                        <div class="d-flex align-items-center mb-3">
                            <img src="${emp.employee_image || '{{ asset("images/user.png") }}'}" 
                                 class="rounded-circle me-2" width="50" height="50" alt="">
                            <strong>${emp.employee_name}</strong>
                        </div>
                        ${emp.already_rated ? `
                            <div class="text-warning mb-2">
                                ${getStarDisplay(emp.rating)}
                            </div>
                            <p class="mb-0">${emp.review_msg || ''}</p>
                            <button class="btn btn-sm btn-primary mt-2" onclick="editRating(${bookingId}, ${emp.employee_id})">
                                تعديل التقييم
                            </button>
                        ` : `
                            <div class="rating-input mb-2">
                                <label class="d-block mb-1">التقييم:</label>
                                <div class="star-rating">
                                    ${getStarInputs(emp.employee_id)}
                                </div>
                            </div>
                            <div class="mb-2">
                                <label class="d-block mb-1">التعليق (اختياري):</label>
                                <textarea class="form-control" id="review_msg_${emp.employee_id}" rows="2" 
                                          placeholder="أضف تعليقك..."></textarea>
                            </div>
                            <button class="btn btn-success" onclick="submitRating(${bookingId}, ${emp.employee_id})">
                                إرسال التقييم
                            </button>
                        `}
                    </div>
                `;
            });
        }

        modalBody.innerHTML = html;
        var ratingModal = new bootstrap.Modal(document.getElementById('ratingModal'));
        ratingModal.show();
    }

    function getStarInputs(employeeId) {
        let html = '';
        for (let i = 5; i >= 1; i--) {
            html += `
                <input type="radio" name="rating_${employeeId}" value="${i}" id="star${i}_${employeeId}" 
                       class="star-input" ${i === 5 ? 'checked' : ''}>
                <label for="star${i}_${employeeId}" class="star-label">
                    <i class="fa-solid fa-star"></i>
                </label>
            `;
        }
        return html;
    }

    function getStarDisplay(rating) {
        let html = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                html += '<i class="fa-solid fa-star text-warning"></i>';
            } else {
                html += '<i class="fa-regular fa-star text-secondary"></i>';
            }
        }
        return html;
    }

    function submitRating(bookingId, employeeId) {
        const rating = document.querySelector(`input[name="rating_${employeeId}"]:checked`).value;
        const reviewMsg = document.getElementById(`review_msg_${employeeId}`).value;

        fetch('/employee/rating', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': '{{ csrf_token() }}'
            },
            body: JSON.stringify({
                booking_id: bookingId,
                employee_id: employeeId,
                rating: rating,
                review_msg: reviewMsg
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status) {
                createNotify({ title: '', desc: data.message });
                openRatingModal(bookingId); // Refresh the modal
            } else {
                createNotify({ title: '', desc: data.message });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            createNotify({ title: '', desc: 'حدث خطأ في إرسال التقييم' });
        });
    }

    function editRating(bookingId, employeeId) {
        const modalBody = document.getElementById('ratingModalBody');
        fetch(`/employee/rating/booking/${bookingId}`)
            .then(response => response.json())
            .then(data => {
                if (data.status) {
                    const emp = data.data.find(e => e.employee_id === employeeId);
                    if (emp) {
                        let html = `
                            <div class="mb-4 p-3 border rounded">
                                <div class="d-flex align-items-center mb-3">
                                    <img src="${emp.employee_image || '{{ asset("images/user.png") }}'}" 
                                         class="rounded-circle me-2" width="50" height="50" alt="">
                                    <strong>${emp.employee_name}</strong>
                                </div>
                                <div class="rating-input mb-2">
                                    <label class="d-block mb-1">التقييم:</label>
                                    <div class="star-rating">
                                        ${getStarInputsEdit(employeeId, emp.rating)}
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <label class="d-block mb-1">التعليق (اختياري):</label>
                                    <textarea class="form-control" id="review_msg_${employeeId}" rows="2">${emp.review_msg || ''}</textarea>
                                </div>
                                <button class="btn btn-success" onclick="submitRating(${bookingId}, ${employeeId})">
                                    تحديث التقييم
                                </button>
                            </div>
                        `;
                        modalBody.innerHTML = html;
                    }
                }
            });
    }

    function getStarInputsEdit(employeeId, currentRating) {
        let html = '';
        for (let i = 5; i >= 1; i--) {
            html += `
                <input type="radio" name="rating_${employeeId}" value="${i}" id="star${i}_${employeeId}" 
                       class="star-input" ${i === currentRating ? 'checked' : ''}>
                <label for="star${i}_${employeeId}" class="star-label">
                    <i class="fa-solid fa-star"></i>
                </label>
            `;
        }
        return html;
    }
</script>
</body>
</html>