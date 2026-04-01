<?php


use App\Http\Controllers\Auth\Trait\API\AuthController;
use App\Http\Controllers\Backend\API\AddressController;
use App\Http\Controllers\Backend\API\BranchController;
use App\Http\Controllers\Backend\API\DashboardController;
use App\Http\Controllers\Backend\API\NotificationsController;
use App\Http\Controllers\Backend\API\SettingController;
use App\Http\Controllers\Backend\API\UserApiController;
use App\Http\Controllers\Backend\CalanderBookingController;
use App\Http\Controllers\GiftCardController;
use App\Http\Controllers\HomeBookingController;
use App\Http\Controllers\BookingCartController;
use App\Http\Controllers\API\CouponValidationController;
use App\Http\Controllers\API\SystemUtilityController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PackageDetailsController;
use App\Http\Controllers\Backend\UserController;
use Modules\Service\Http\Controllers\Backend\API\ServiceController;
use App\Http\Controllers\API\PaymentController;
use App\Http\Controllers\Api\AdController;
use App\Http\Controllers\Api\CategoriesController;
use App\Http\Controllers\Api\PackageCatalogController;
use App\Http\Controllers\Api\ShopController;
use App\Http\Controllers\Api\LoyaltyController;
use App\Http\Controllers\Api\CouponController;
use App\Http\Controllers\Api\BookingsController;
use App\Http\Controllers\Api\MobileCartController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\WheelController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::prefix('Home')->group(function () {
    Route::controller(CategoriesController::class)->group(function () {
        Route::get('/categories', 'index');
    });

    Route::controller(PackageCatalogController::class)->group(function () {
        Route::get('/packages', 'packages');
    });

    Route::controller(ShopController::class)->group(function () {
        Route::get('/products', 'homeProducts');
    });

    Route::prefix('wheel')->controller(WheelController::class)->group(function () {
        Route::post('/spin', 'spin');
        Route::get('/prizes', 'prizes');
    });
});

Route::controller(AdController::class)->group(function () {
    Route::get('/ads', 'index');
});

Route::prefix('shop')->group(function () {
    Route::controller(ShopController::class)->group(function () {
        Route::get('/', 'index');
    });
});

Route::controller(PackageCatalogController::class)->group(function () {
    Route::get('/packages/{id}', 'packageDetails')->whereNumber('id');
    Route::get('/offers', 'offers');
    Route::get('/offers/{id}', 'offerDetails')->whereNumber('id');
});

Route::controller(LoyaltyController::class)->group(function () {
    Route::get('/loyalty/point-value', 'index');
});

Route::controller(CouponController::class)->group(function () {
    Route::get('/validate-coupon', 'validateCoupon');
    Route::get('/validate-invoice-coupon', 'validateInvoiceCoupon');
    Route::get('/available-coupons', 'availableCoupons');
});


Route::controller(BranchController::class)->group(function () {
    Route::get('branch-list', 'branchList');
});

// Branch Routes
Route::prefix('branches')->group(function () {
    Route::controller(BranchController::class)->group(function () {
        Route::get('/', 'branchList');
        Route::get('{id}', 'branchDetails');
        Route::get('{id}/services', 'branchService');
        Route::get('{id}/reviews', 'branchReviews');
        Route::get('{id}/employees', 'branchEmployee');
        Route::get('{id}/gallery', 'branchGallery');
        Route::get('{id}/config', 'branchConfig');
        Route::post('{id}/assign', 'assign_update');
        Route::get('{id}/available-dates', 'getAvailableDates');
    });
});

Route::controller(BranchController::class)->group(function () {
    Route::post('verify-slot', 'verifySlot');
});

Route::controller(SystemUtilityController::class)->group(function () {
    Route::get('lang/{locale}', 'switchLocale');
    Route::get('clear-config', 'clearConfig');
    Route::get('clear-cache', 'clearCache');
    Route::get('clear-route', 'clearRoute');
    Route::get('modules-list', 'modulesList');
    Route::get('clear-view', 'clearView');
    Route::get('clear-all', 'clearAll');
    Route::get('storage-link', 'storageLink');
    Route::get('test-upload', 'testUpload');
});

Route::get('branch-list', [BranchController::class, 'branchList']);


Route::prefix('services')->group(function () {
    Route::controller(ServiceController::class)->group(function () {
        Route::get('/branches/{id}', 'servicesbranches');
    });
});

Route::prefix('gift-cards')->group(function () {
    Route::controller(GiftCardController::class)->group(function () {
        Route::get('/', 'index')->name('gift.page');
        Route::post('/', 'store')->name('gift.create');
        Route::get('/payment-result', 'handlePaymentResult')->name('gift.payment_result');
    });
});

Route::get('validate-coupon', [CouponValidationController::class, 'validateCoupon']);
Route::get('validate-invoice-coupon', [CouponValidationController::class, 'validateInvoiceCoupon']);

Route::controller(BookingsController::class)->group(function () {
    Route::get('/States', 'States');
    Route::get('/branchs/{id}', 'branchs');
    Route::get('/service-groups', 'getServiceGroups');
    Route::get('/services/{serviceGroupId}/{branchId}/bookings', 'getServicesByGroup');
    Route::get('/staff', 'getstaff');
    Route::get('/available/{date}/{staffId}', 'getAvailableTimes');
});

Route::controller(AuthController::class)->group(function () {
    Route::post('register', 'sendRegisterOtp');
    Route::post('verify-register-otp', 'verifyRegisterOtp');

    Route::post('resend-register-otp', 'resendRegisterOtp');
    
    Route::post('login', 'login');
    Route::post('verify-login-otp', 'verifyLoginOtp');

    Route::post('resend-login-otp', 'resendLoginOtp');

    Route::get('logout', 'logout');
});


Route::controller(DashboardController::class)->group(function () {
    Route::get('dashboard-detail', 'dashboardDetail');
});

Route::controller(BranchController::class)->group(function () {
    Route::get('base-branches', 'baseBranches');
    Route::get('branch-configuration', 'branchConfig');
    Route::get('branch-detail', 'branchDetails');
    Route::get('branch-service', 'branchService');
    Route::get('branch-review', 'branchReviews');
    Route::get('branch-employee', 'branchEmployee');
    Route::get('branch-gallery', 'branchGallery');
});

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::controller(ProfileController::class)->group(function () {
        Route::get('/profile', 'show');
        Route::post('/profile/update', 'update');
    });

    Route::controller(MobileCartController::class)->group(function () {
        Route::get('/mobile/cart', 'index');
        Route::post('/mobile/cart/bookings', 'storeBooking');
        Route::post('/mobile/cart/packages', 'storePackage');
        Route::post('/mobile/cart/gift-cards', 'storeGiftCard');
    });

    Route::controller(BookingCartController::class)->group(function () {
        Route::post('/cart/products/{id}', 'addToCart');
        Route::delete('/cart/{id}', 'destroy');
        Route::post('/cart-pay', 'cartPay');
        Route::get('/wallet-loyalty-balance', 'walletLoyaltyBalance');
        Route::get('/loyallety', 'balance');
    });

    Route::controller(PaymentController::class)->group(function () {
        Route::post('/payment-chanal', 'payment');
    });

    Route::controller(PackageDetailsController::class)->group(function () {
        Route::get('/details/{id}', 'show');
    });
});

Route::controller(SettingController::class)->group(function () {
    Route::post('app-configuration', 'appConfiguraton');
});






Route::get('user-detail', [AuthController::class, 'userDetails']);
Route::get('services', [CalanderBookingController::class, 'getservices']);
Route::post('/Calander-bookings-new', [CalanderBookingController::class, 'store']);
Route::get('/employees', [CalanderBookingController::class, 'emplouee']);
// routes/api.php
Route::put('/booking-carts/{id}', [CalanderBookingController::class, 'update']);
Route::delete('/booking-carts/{id}', [CalanderBookingController::class, 'destroy']);
Route::get('/booking-carts/by-time', [CalanderBookingController::class, 'getAllByTime']);
Route::get('/booking-carts/by-day', [CalanderBookingController::class, 'getAllByDay']);

Route::middleware('auth:sanctum')->controller(SystemUtilityController::class)->group(function () {
    Route::get('/admin', 'adminRedirect');
    Route::get('/user', 'currentUser');
});

Route::controller(AuthController::class)->group(function () {
    Route::post('register', 'sendRegisterOtp');
    Route::post('verify-register-otp', 'verifyRegisterOtp');

    Route::post('resend-register-otp', 'resendRegisterOtp');
    
    Route::post('login', 'login');
    Route::post('verify-login-otp', 'verifyLoginOtp');

    Route::post('resend-login-otp', 'resendLoginOtp');

    Route::get('logout', 'logout');
});


Route::get('/available/{date}/{staffId}', [HomeBookingController::class, 'getAvailableTimes']);


Route::prefix('gift-cards')->group(function () {
    Route::get('/', [GiftCardController::class, 'index']);
    Route::post('/', [GiftCardController::class, 'store']);
    Route::get('/payment-result', [GiftCardController::class, 'handlePaymentResult']);
});

Route::get('/success-py-gift', [GiftCardController::class, 'handlePaymentResult']);


Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::apiResource('user', UserApiController::class);
    Route::apiResource('setting', SettingController::class);
    Route::apiResource('notification', NotificationsController::class);
    Route::get('notification-list', [NotificationsController::class, 'notificationList']);
    Route::get('gallery-list', [DashboardController::class, 'globalGallery']);
    Route::get('search-list', [DashboardController::class, 'searchList']);
    Route::post('update-profile', [AuthController::class, 'updateProfile']);
    Route::post('change-password', [UserController::class, 'change_password'])->name('change_password');
    Route::post('change-password', [AuthController::class, 'changePassword']);
    Route::post('delete-account', [AuthController::class, 'deleteAccount']);

    Route::post('add-address', [AddressController::class, 'store']);
    Route::get('address-list', [AddressController::class, 'AddressList']);
    Route::get('remove-address', [AddressController::class, 'RemoveAddress']);
    Route::post('edit-address', [AddressController::class, 'EditAddress']);


    Route::get('/cart', [BookingCartController::class, 'index']);
    Route::post('/cart', [BookingCartController::class, 'store']);
    Route::delete('/cart/{id}', [BookingCartController::class, 'destroy']);
    Route::post('/cart-pay', [BookingCartController::class, 'cartPay']);
    Route::get('/loyallety', [BookingCartController::class, 'balance']);
    Route::get('/details/{id}', [PackageDetailsController::class, 'show']);
    Route::get('/pay-now', [HomeBookingController::class, 'createPayment']);
    Route::post('/payments/init', [PaymentController::class, 'init']);
    Route::get('/payments/{token}', [PaymentController::class, 'status']);

    // Route to fetch the current visibility status
    Route::get('/get-visibility-settings', [SettingController::class, 'getVisibilitySettings']);

    // Route to update the visibility status
    Route::post('/update-service-duration-visibility', [SettingController::class, 'updateVisibility']);

// Duration value routes
    Route::get('/get-service-duration-value', [SettingController::class, 'getDurationValue']);
    Route::post('/update-service-duration-value', [SettingController::class, 'updateDurationValue']);

// points validity routes
    Route::get('/get-points-validity', [SettingController::class, 'getPointsValidity']);
    Route::post('/update-points-validity', [SettingController::class, 'updatePointsValidity']);


});
Route::post('app-configuration', [SettingController::class, 'appConfiguraton']);

