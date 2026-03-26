<?php

use App\Http\Controllers\Backend\AdsController;
use App\Http\Controllers\BookingsController;
use App\Http\Controllers\BookingCartController;
use App\Http\Controllers\Backend\ContactMessageController;
use App\Http\Controllers\GiftCardController;
use App\Http\Controllers\Backend\GiftController;
use App\Http\Controllers\HomeBookingController;
use App\Http\Controllers\Backend\InvoiceController;
use App\Http\Controllers\API\CouponValidationController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\Backend\LoyaltyController;
use App\Http\Controllers\FrontendLoyaltyController;
use App\Http\Controllers\Backend\ModuleController;
use App\Http\Controllers\Backend\offersController;
use App\Http\Controllers\PaymentchanalController;
use App\Http\Controllers\PaymentCallbackController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Backend\PermissionController;
use App\Http\Controllers\Backend\ReportsController;
use App\Http\Controllers\Backend\RoleController;
use App\Http\Controllers\Backend\RolePermission;
use App\Http\Controllers\Backend\RejectController;
use App\Http\Controllers\Backend\SearchController;
use App\Http\Controllers\PackageDetailsController;
use App\Http\Controllers\SignController;
use App\Http\Controllers\Backend\TermsAndConditionsController;
use App\Http\Controllers\Backend\TaqnyatSmsController;
use App\Http\Controllers\Backend\WheelController;

use App\Http\Controllers\Backend\BackendController;
use App\Http\Controllers\Backend\BackupController;
use App\Http\Controllers\Backend\BranchController;
use App\Http\Controllers\Backend\NotificationsController;
use App\Http\Controllers\Backend\SettingController;
use App\Http\Controllers\Backend\UserController;
use App\Http\Controllers\Backend\UsersController;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;

use Modules\Affiliate\Http\Controllers\AffiliateAdminController;
use Modules\Employee\Http\Controllers\Backend\EmployeesController;

use App\Providers\RouteServiceProvider;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::controller(SignController::class)->group(function () {
    Route::get('/signup', 'index')->name('signup');
    Route::post('/signup', 'store')->name('signup.store');
    Route::get('/signin', 'login')->name('signin');
    Route::post('/signin/verify', 'verify')->name('signin.verify');
    Route::get('verify-mobile', 'showMobileVerifyForm')->name('verify.mobile');
    Route::post('verify-otp', 'verifyMobileOtp')->name('verify.otp');
    Route::post('resend-otp', 'resendMobileOtp')->name('resend.otp');
    Route::get('send-OTP', 'showVerifyForm')->name('login.verify.form');
    Route::post('verify-send-otp', 'verifyOTP')->name('verify.send.otp');
});

Route::controller(TaqnyatSmsController::class)->group(function () {
    Route::get('/sms-messages', 'index')->name('app.sms');
    Route::post('/store', 'store')->name('store');
    Route::post('/send-test', 'sendTestMessage')->name('send-test');
});

Route::controller(BookingsController::class)->group(function () {
    Route::get('/salonService', 'salon')->name('salon.create');
    Route::get('/salonService-modern', 'salonModern')->name('salon.create.modern');
    Route::get('/salonService-signature', 'salonSignature')->name('salon.create.signature');
    Route::get('/HomeService', 'home')->name('home.create');
});

Route::controller(PackageDetailsController::class)->group(function () {
    Route::get('/details/{id}', 'show')->name('home.details');
});


Route::controller(PaymentchanalController::class)->group(function () {
    Route::post('/payment-chanal', 'payment')->name('payment-chanal');
});
Route::controller(PaymentCallbackController::class)->group(function () {
    Route::get('/payments/callback/{gateway}', 'handle')->name('payments.callback');
});

Route::controller(EmployeesController::class)->group(function () {
    Route::post('/staff/working-hours/{id}', 'store_working_houer')->name('staff.working-hours.store');
});

Route::controller(FrontendLoyaltyController::class)->group(function () {
    Route::get('/loyalety', 'loyalety')->name('home.loyalety');
});

// Use when user not loggin
Route::controller(BookingCartController::class)->group(function () {
    Route::post('/cart', 'store')->name('cart.store');
});

Route::controller(GiftCardController::class)->group(function () {
    Route::post('/gift-cards', 'store')->name('gift.create');
});

Route::controller(WheelController::class)->group(function () {
    Route::post('/wheel/spin', 'spin')->name('wheel.spin');
});

Route::middleware('auth')->group(function () {
    Route::controller(GiftCardController::class)->group(function () {
        Route::get('/giffte', 'index')->name('gift.page');
    });

    Route::controller(BookingCartController::class)->group(function () {
        Route::get('/cart/sidebar-data', 'sidebarData')->name('cart.sidebar');
        Route::get('/cart', 'index')->name('cart.page');
        Route::delete('/cart/{id}', 'destroy')->name('cart.destroy');
        Route::delete('p/cart/{id}', 'destroy_product')->name('p.cart.destroy');
        Route::delete('g/cart/{id}', 'destroy_gift')->name('g.cart.destroy');
        Route::patch('/cart/product/{id}/qty', 'updateProductQty')->name('cart.product.qty');
        Route::delete('/cart/destroy/All', 'destroy_All')->name('cart.destroyAll');
        Route::get('/loyalty-points/check', 'checkLoyaltyPoints')->name('loyalty.check');
        Route::post('/cart-pay', 'cartPay')->name('cart.payment');
    });

    Route::controller(ContactMessageController::class)->group(function () {
        Route::get('/admin/contact-messages', 'index')->name('contact.index');
        Route::post('/admin/contact-messages/{id}/reply', 'reply')->name('admin.contact-messages.reply');
        Route::post('/admin/contact-messages/bulk-action', 'bulkAction')->name('admin.contact-messages.bulk-action');
        Route::post('/contact', 'store')->name('contact.store');
    });

    Route::controller(ProfileController::class)->group(function () {
        Route::get('/profile', 'profile')->name('profile');
        Route::put('/profile/{id}/update', 'update')->name('profile.update');
    });

    Route::controller(SignController::class)->group(function () {
        Route::post('/logout', 'logout')->name('logout');
    });
});


Route::controller(HomeBookingController::class)->group(function () {
    Route::get('/service-groups', 'getServiceGroups');
    Route::get('/services/{serviceGroupId}/{branchId}/bookings', 'getServicesByGroup');
    Route::get('/staff', 'index');
    Route::get('/staff/home', 'index_home');
    Route::get('/branchs/{id}', 'branchs');
    Route::get('all/branchs/', 'allbranchs');
    Route::post('/bookings', 'store')->name('bookings.store');
    Route::post('/package-booking', 'storePackageBooking')->name('package.booking.store');
    Route::get('/complete-package-booking', 'completePackageBooking')->name('package.booking.complete');
    Route::get('/available/{date}/{staffId}', 'getAvailableTimes');
});

Route::controller(BookingCartController::class)->group(function () {
    Route::get('/cart/add/{id}', 'addToCart')->name('cart.add');
});


Route::get('lang/{locale}', function ($locale) {
    if (in_array($locale, ['en', 'ar'])) {
        session(['locale' => $locale]);
    }
    return redirect()->back();
})->name('language.switch');

// Clear config cache
Route::get('/clear-config', function () {
    Artisan::call('config:clear');
    return 'Config cache cleared!';
});

// Clear application cache
Route::get('/clear-cache', function () {
    Artisan::call('cache:clear');
    return 'Application cache cleared!';
});

// Clear route cache
Route::get('/clear-route', function () {
    Artisan::call('route:clear');
    return 'Route cache cleared!';
});
Route::get('/modules-list', function () {
    Artisan::call('module:list');
    $output = Artisan::output();
    return nl2br($output);
});

// Clear compiled views
Route::get('/clear-view', function () {
    Artisan::call('view:clear');
    return 'View cache cleared!';
});

// Clear all caches together
Route::get('/clear-all', function () {
    Artisan::call('config:clear');
    Artisan::call('cache:clear');
    Artisan::call('route:clear');
    Artisan::call('view:clear');
    return 'All caches cleared!';
});


// Auth Routes
require __DIR__ . '/auth.php';

Route::get('storage-link', function () {
    return Artisan::call('storage:link');
});

Route::get('/admin', function () {
    if (auth()->user()->hasRole('employee')) {
        return redirect(RouteServiceProvider::EMPLOYEE_LOGIN_REDIRECT);
    } else {
        return redirect(RouteServiceProvider::HOME);
    }
})->middleware('auth');

Route::group(['middleware' => ['auth']], function () {
    Route::controller(NotificationsController::class)->group(function () {
        Route::get('notification-list', 'notificationList')->name('notification.list');
        Route::get('notification-counts', 'notificationCounts')->name('notification.counts');
    });
});

// Language Switch
Route::controller(LanguageController::class)->group(function () {
    Route::get('language/{language}', 'switch')->name('language.switch');
});
Route::group(['prefix' => 'app', 'middleware' => 'auth'], function () {
    Route::controller(BackendController::class)->group(function () {
        Route::post('set-user-setting', 'setUserSetting')->name('backend.setUserSetting');
    });

    Route::group(['as' => 'backend.', 'middleware' => ['auth']], function () {
        Route::controller(SearchController::class)->group(function () {
            Route::get('get_search_data', 'get_search_data')->name('get_search_data');
        });

        // Sync Role & Permission
        Route::controller(RolePermission::class)->group(function () {
            Route::get('/permission-role', 'index')->name('permission-role.list')->middleware('password.confirm');
            Route::post('/permission-role/store/{role_id}', 'store')->name('permission-role.store');
            Route::get('/permission-role/reset/{role_id}', 'reset_permission')->name('permission-role.reset');
        });
        // Role & Permissions Crud
        Route::resource('permission', PermissionController::class);
        Route::resource('role', RoleController::class);

        Route::group(['prefix' => 'module', 'as' => 'module.'], function () {
            Route::controller(ModuleController::class)->group(function () {
                Route::get('index_data', 'index_data')->name('index_data');
                Route::post('update-status/{id}', 'update_status')->name('update_status');
            });
        });

        Route::resource('module', ModuleController::class);

        /*
        *
        *  Settings Routes
        *
        * ---------------------------------------------------------------------
        */
        Route::group(['middleware' => []], function () {
            Route::controller(SettingController::class)->group(function () {
                Route::get('settings/{vue_capture?}', 'index')->name('settings')->where('vue_capture', '^(?!storage).*$');
                Route::get('settings-data', 'index_data');
                Route::post('settings', 'store')->name('settings.store');
                Route::post('setting-update', 'update')->name('setting.update');
                Route::get('clear-cache', 'clear_cache')->name('clear-cache');
                Route::post('verify-email', 'verify_email')->name('verify-email');
            });
        });

        /*
        *
        *  Notification Routes
        *
        * ---------------------------------------------------------------------
        */
        Route::group(['prefix' => 'notifications', 'as' => 'notifications.'], function () {
            Route::controller(NotificationsController::class)->group(function () {
                Route::get('/', 'index')->name('index');
                Route::get('/markAllAsRead', 'markAllAsRead')->name('markAllAsRead');
                Route::delete('/deleteAll', 'deleteAll')->name('deleteAll');
                Route::get('/{id}', 'show')->name('show');
            });
        });

        /*
        *
        *  Backup Routes
        *
        * ---------------------------------------------------------------------
        */
        Route::group(['prefix' => 'backups', 'as' => 'backups.'], function () {
            Route::controller(BackupController::class)->group(function () {
                Route::get('/', 'index')->name('index');
                Route::get('/create', 'create')->name('create');
                Route::get('/download/{file_name}', 'download')->name('download');
                Route::get('/delete/{file_name}', 'delete')->name('delete');
            });
        });
        Route::controller(ReportsController::class)->group(function () {
            Route::get('daily-booking-report', 'daily_booking_report')->name('reports.daily-booking-report');
            Route::get('daily-booking-report-index-data', 'daily_booking_report_index_data')->name('reports.daily-booking-report.index_data');
            Route::get('overall-booking-report', 'overall_booking_report')->name('reports.overall-booking-report');
            Route::get('overall-booking-report-index-data', 'overall_booking_report_index_data')->name('reports.overall-booking-report.index_data');
            Route::get('payout-report', 'payout_report')->name('reports.payout-report');
            Route::get('payout-report-index-data', 'payout_report_index_data')->name('reports.payout-report.index_data');
            Route::get('staff-report', 'staff_report')->name('reports.staff-report');
            Route::get('staff-report-index-data', 'staff_report_index_data')->name('reports.staff-report.index_data');
            Route::get('order-report', 'order_report')->name('reports.order-report');
            Route::get('order-report-index-data', 'order_report_index_data')->name('reports.order-report.index_data');
            Route::get('financial-report', 'financial_report')->name('reports.financial-report');
            Route::get('financial-report-index-data', 'financial_report_index_data')->name('reports.financial-report.index_data');
            Route::get('coupon-report', 'coupon_report')->name('reports.coupon-report');
            Route::get('coupon-report-index-data', 'coupon_report_index_data')->name('reports.coupon-report.index_data');
            Route::get('promotion-report', 'promotion_report')->name('reports.promotion-report');
            Route::get('promotion-report-index-data', 'promotion_report_index_data')->name('reports.promotion-report.index_data');
            Route::get('payment-transactions-report', 'payment_transactions_report')->name('reports.payment-transactions-report');
            Route::get('payment-transactions-report-index-data', 'payment_transactions_report_index_data')->name('reports.payment-transactions-report.index_data');
            Route::get('daily-booking-report-review', 'daily_booking_report_review')->name('reports.daily-booking-report-review');
            Route::get('overall-booking-report-review', 'overall_booking_report_review')->name('reports.overall-booking-report-review');
            Route::get('payout-report-review', 'payout_report_review')->name('reports.payout-report-review');
            Route::get('staff-report-review', 'staff_report_review')->name('reports.staff-report-review');
            Route::get('order_booking_report_review', 'order_booking_report_review')->name('reports.order_booking_report_review');
        });

    });

    /*
    *
    * Backend Routes
    * These routes need view-backend permission
    * --------------------------------------------------------------------
    */

    Route::middleware(['checkInstallation'])->group(function () {

        Route::group(['as' => 'backend.', 'middleware' => ['auth']], function () {
            /**
             * Backend Dashboard
             * Namespaces indicate folder structure.
             */
            Route::controller(BackendController::class)->group(function () {
                Route::get('/', 'index')->name('home');
                Route::post('set-current-branch/{branch_id}', 'setCurrentBranch')->name('set-current-branch');
                Route::post('reset-branch', 'resetBranch')->name('reset-branch');
            });

            Route::group(['prefix' => ''], function () {
                Route::controller(BackendController::class)->group(function () {
                    Route::get('dashboard', 'index')->name('dashboard');
                });

                /**
                 * Branch Routes
                 */
                Route::group(['prefix' => 'branch', 'as' => 'branch.'], function () {
                    Route::controller(BranchController::class)->group(function () {
                        Route::get('index_list', 'index_list')->name('index_list');
                        Route::get('assign/{id}', 'assign_list')->name('assign_list');
                        Route::post('assign/{id}', 'assign_update')->name('assign_update');
                        Route::get('index_data', 'index_data')->name('index_data');
                        Route::get('trashed', 'trashed')->name('trashed');
                        Route::patch('trashed/{id}', 'restore')->name('restore');
                        Route::get('gallery-images/{id}', 'getGalleryImages');
                        Route::post('gallery-images/{id}', 'uploadGalleryImages');
                        Route::post('bulk-action', 'bulk_action')->name('bulk_action');
                        Route::post('update-status/{id}', 'update_status')->name('update_status');
                        Route::post('update-select-value/{id}/{action_type}', 'update_select')->name('update_select');
                        Route::post('branch-setting', 'UpdateBranchSetting')->name('branch_setting');
                    });
                });
                Route::controller(BranchController::class)->group(function () {
                    Route::get('branch-info', 'branchData')->name('branchData');
                });
                Route::resource('branch', BranchController::class);

                /*
                *
                *  Users Routes
                *
                * ---------------------------------------------------------------------
                */
                Route::group(['prefix' => 'users', 'as' => 'users.'], function () {
                    Route::controller(UserController::class)->group(function () {
                        Route::get('user-list', 'user_list')->name('user_list');
                        Route::get('emailConfirmationResend/{id}', 'emailConfirmationResend')->name('emailConfirmationResend');
                        Route::post('create-customer', 'create_customer')->name('create_customer');
                        Route::post('information', 'update')->name('information');
                        Route::post('change-password', 'change_password')->name('change_password');
                    });

                    Route::controller(UsersController::class)->group(function () {
                        Route::get('create', 'create')->name('create')->middleware('permission:view_role_permissions');
                        Route::post('/', 'store')->name('store')->middleware('permission:view_role_permissions');
                    });
                });
            });
            Route::controller(UserController::class)->group(function () {
                Route::get('my-profile/{vue_capture?}', 'myProfile')->name('my-profile')->where('vue_capture', '^(?!storage).*$');
                Route::get('my-info', 'authData')->name('authData');
                Route::post('my-profile/change-password', 'change_password')->name('change_password');
            });
        });
    });
});

Route::controller(ProfileController::class)->group(function () {
    Route::get('/my-bookings', 'myBookings')->name('profile.my_bookings');
    Route::get('/coupon', 'coupon')->name('profile.coupon');
    Route::post('/booking/cancel/{id}', 'destroy_myBooking')->name('myBooking.destroy');
    Route::get('/complate-bookings', 'complateBookings')->name('profile.complateBokkings');
});


Route::middleware(['auth'])->prefix('app/affiliate')->name('affiliate.')->group(function () {
    Route::controller(AffiliateAdminController::class)->group(function () {
        Route::get('/statistics', 'dashboard')->name('statistics');
        Route::post('/settings', 'updateSettings')->name('settings.update');
    });
});
Route::middleware(['auth'])->group(function () {
    Route::controller(GiftController::class)->group(function () {
        Route::get('/app/gift', 'index')->name('app.gift');
        Route::get('/validate-gift-code', 'validateGiftCode');
        Route::get('/gift/delete/{id}', 'destroy')->name('gift.delete');
    });

    Route::controller(ProfileController::class)->group(function () {
        Route::get('/complate-Gift', 'complateGift')->name('profile.complateGift');
    });

    Route::controller(InvoiceController::class)->group(function () {
        Route::get('/app/invoice', 'index')->name('app.invoice');
        Route::get('/invoices/{id}', 'destroy')->name('invoices.destroy');
    });

    Route::controller(LoyaltyController::class)->group(function () {
        Route::get('/app/loyalty', 'index')->name('app.loyalty');
        Route::post('/app/loyalty/store', 'store')->name('loyalty.store');
    });


    Route::controller(AdsController::class)->group(function () {
        Route::get('/app/ads/', 'index')->name('app.ads');
        Route::post('/app/ads/store', 'store')->name('ads.store');
        Route::put('/ads/update-status/{id}', 'updateStatus')->name('ads.update-status');
        Route::put('app/ads/update-link', 'update_link')->name('ads.update_link');
        Route::delete('/app/ads/destroy/{id}', 'destroy')->name('ads.destroy');
    });

    Route::controller(RejectController::class)->group(function () {
        Route::get('/app/reject/', 'index')->name('app.reject');
        Route::post('/app/reject/store', 'store')->name('app.store');
        Route::put('/reject/update/{id}', 'update');
        Route::get('/reject/{id}', 'destroy')->name('reject.destroy');
    });

    Route::controller(TermsAndConditionsController::class)->group(function () {
        Route::get('/app/TermsAndConditions', 'index')->name('app.TermsAndConditions');
        Route::post('/app/TermsAndConditions/store', 'store')->name('TermsAndConditions.store');
        Route::put('/TermsAndConditions/{id}/update', 'update')->name('TermsAndConditions.update');
        Route::get('/TermsAndConditions/{id}', 'destroy')->name('TermsAndConditions.destroy');
    });

    Route::controller(WheelController::class)->group(function () {
        Route::get('/app/Wheel/settings', 'index')->name('app.Wheel');
        Route::post('/app/Wheel/settings/store', 'store')->name('Wheel.store');
        Route::delete('/app/Wheel/settings/destroy/{id}', 'destroy')->name('Wheel.destroy');
        Route::delete('/app/Wheel/settings/destroy_all', 'destroy_all')->name('Wheel.destroy_all');
    });

    Route::controller(CouponValidationController::class)->group(function () {
        Route::get('/validate-coupon', 'validateCoupon');
        Route::get('/validate-invoice-coupon', 'validateInvoiceCoupon');
    });

});

//  Get quick cart
Route::controller(PackageDetailsController::class)->group(function () {
    Route::get('/qu/cart', 'getUserCart');
    Route::delete('/qu/cart/remove/{id}', 'remove');
});

