<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Auth\Trait\AuthTrait;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    use AuthTrait;

    /**
     * عرض صفحة تسجيل الدخول
     */
    public function create()
    {
        return view('auth.login');
    }

    /**
     * معالجة تسجيل الدخول
     */
    public function store(Request $request)
    {
        // Enforce OTP login for all users and staff
        if ($request->filled('mobile')) {
            return app(\App\Http\Controllers\SignController::class)->verify($request);
        }

        return redirect()->route('signin')->with('info', 'تسجيل الدخول متاح عبر رمز التحقق (OTP) فقط.');
    }

    /**
     * تسجيل الخروج
     */
    public function destroy(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/signin')->with('success', 'تم تسجيل الخروج بنجاح');
    }
}
