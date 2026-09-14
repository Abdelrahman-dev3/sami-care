<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\DynamicQr;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class DynamicQrController extends Controller
{
    public function index()
    {
        $codes = DynamicQr::latest()->paginate(12);

        return view('backend.dynamic-qr.index', compact('codes'));
    }

    public function store(Request $request)
    {
        $data = $this->validatedData($request);

        $code = new DynamicQr($data);

        // يُنشأ مرة واحدة ولا يتغير عند تعديل المحتوى.
        $code->token = (string) Str::uuid();
        $code->save();

        return back()->with('success', 'تم إنشاء QR بنجاح.');
    }

    public function update(Request $request, DynamicQr $dynamicQr)
    {
        $dynamicQr->update($this->validatedData($request));

        return back()->with(
            'success',
            'تم تحديث المحتوى، وصورة QR القديمة ما زالت تعمل.'
        );
    }

    private function validatedData(Request $request): array
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:150'],
            'type' => ['required', 'in:url,text'],
            'content' => ['required', 'string', 'max:10000'],
        ]);

        if ($data['type'] === 'url') {
            $data['content'] = trim($data['content']);

            $scheme = strtolower(
                (string) parse_url($data['content'], PHP_URL_SCHEME)
            );

            if (
                !filter_var($data['content'], FILTER_VALIDATE_URL)
                || !in_array($scheme, ['http', 'https'], true)
            ) {
                throw ValidationException::withMessages([
                    'content' => 'أدخل رابطًا صحيحًا يبدأ بـ https:// أو http://',
                ]);
            }
        }

        return $data;
    }
}