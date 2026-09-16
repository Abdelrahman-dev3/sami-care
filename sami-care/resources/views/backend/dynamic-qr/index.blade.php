@extends('backend.layouts.app')

@section('title', 'إدارة QR')

@section('content')
<div dir="rtl">
    <h4 class="mb-4">إدارة QR</h4>

    @if (session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul class="mb-0">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <div class="card mb-4">
        <div class="card-body">
            <h5 class="mb-3">إنشاء QR جديد</h5>

            <form
                method="POST"
                action="{{ route('backend.dynamic-qr.store') }}"
            >
                @csrf

               {{--  <label class="form-label" for="new-title">العنوان</label>
                <input
                    id="new-title"
                    name="title"
                    class="form-control mb-3"
                    maxlength="150"
                    required
                >

                <label class="form-label" for="new-type">نوع المحتوى</label>
                <select
                    id="new-type"
                    name="type"
                    class="form-select mb-3"
                >
                    <option value="url">رابط</option>
                    <option value="text">نص</option>
                </select>

                <label class="form-label" for="new-content">
                    الرابط أو النص
                </label>
                <textarea
                    id="new-content"
                    name="content"
                    class="form-control mb-3"
                    rows="4"
                    maxlength="10000"
                    dir="auto"
                    required
                ></textarea> --}}

                @include('backend.dynamic-qr.fields', ['code' => null])

                <button class="btn btn-primary" type="submit">
                    إنشاء QR
                </button>
            </form>
        </div>
    </div>

    <div class="row">
        @foreach ($codes as $code)
            <div class="col-12 col-lg-6 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="text-center">{{ $code->title }}</h5>

                        <div
                            class="dynamic-qr text-center my-3"
                            data-url="{{ route('dynamic-qr.open', ['token' => $code->token]) }}"
                            data-filename="qr-{{ $code->token }}.png"
                        ></div>

                        <div class="text-center mb-3">
                            <button
                                type="button"
                                class="btn btn-outline-primary download-qr"
                                disabled
                            >
                                تحميل PNG
                            </button>

                            <a
                                href="{{ route('dynamic-qr.open', ['token' => $code->token]) }}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="btn btn-outline-secondary"
                            >
                                فتح المحتوى
                            </a>

                            <p class="qr-error text-danger mt-2" role="alert"></p>
                        </div>

                        <form
                            method="POST"
                            action="{{ route('backend.dynamic-qr.update', $code) }}"
                        >
                            @csrf
                            @method('PUT')
                            @include('backend.dynamic-qr.fields', ['code' => $code])
                            {{-- <label class="form-label">العنوان</label>
                            <input
                                name="title"
                                value="{{ $code->title }}"
                                class="form-control mb-3"
                                maxlength="150"
                                required
                            >

                            <label class="form-label">نوع المحتوى</label>
                            <select name="type" class="form-select mb-3">
                                <option
                                    value="url"
                                    {{ $code->type === 'url' ? 'selected' : '' }}
                                >رابط</option>

                                <option
                                    value="text"
                                    {{ $code->type === 'text' ? 'selected' : '' }}
                                >نص</option>
                            </select>

                            <label class="form-label">الرابط أو النص</label>
                            <textarea
                                name="content"
                                class="form-control mb-3"
                                rows="4"
                                maxlength="10000"
                                dir="auto"
                                required
                            >{{ $code->content }}</textarea> --}}

                            <button class="btn btn-success" type="submit">
                                حفظ التعديل
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        @endforeach
    </div>

    {{ $codes->links() }}
</div>
@endsection

@push('after-scripts')
<script src="{{ asset('js/qrcode.min.js') }}"></script>
<script>
(function () {
    document.querySelectorAll('.dynamic-qr').forEach(function (element) {
        const card = element.closest('.card-body');
        const button = card.querySelector('.download-qr');

        try {
            const source = document.createElement('div');

            new QRCode(source, {
                text: element.dataset.url,
                width: 512,
                height: 512,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.M
            });

            const qrCanvas = source.querySelector('canvas');

            if (!qrCanvas) {
                throw new Error('Canvas unavailable');
            }

            const canvas = document.createElement('canvas');
            canvas.width = 640;
            canvas.height = 640;

            const context = canvas.getContext('2d');
            context.fillStyle = '#ffffff';
            context.fillRect(0, 0, 640, 640);
            context.drawImage(qrCanvas, 64, 64);

            const imageUrl = canvas.toDataURL('image/png');
            const image = document.createElement('img');

            image.src = imageUrl;
            image.alt = 'QR ' + card.querySelector('h5').textContent;
            image.style.width = '240px';
            image.style.maxWidth = '100%';

            element.replaceChildren(image);
            button.disabled = false;

            button.addEventListener('click', function () {
                const link = document.createElement('a');

                link.href = imageUrl;
                link.download = element.dataset.filename;
                document.body.appendChild(link);
                link.click();
                link.remove();
            });
        } catch (error) {
            card.querySelector('.qr-error').textContent =
                'تعذر إنشاء الصورة. تأكد من وجود مكتبة QR.';
        }
    });
})();
</script>
<script>
(function () {
    document.querySelectorAll('.qr-fields').forEach(function (group) {
        const type = group.querySelector('.qr-type');
        const normalFields = group.querySelector('.normal-fields');
        const content = normalFields.querySelector('[name="content"]');
        const wifiFields = group.querySelector('.wifi-fields');
        const security = group.querySelector('.wifi-security');
        const password = group.querySelector('.wifi-password');

        function syncFields() {
            const isWifi = type.value === 'wifi';

            normalFields.hidden = isWifi;
            content.disabled = isWifi;
            content.required = !isWifi;

            wifiFields.hidden = !isWifi;

            wifiFields.querySelectorAll('input, select').forEach(function (field) {
                field.disabled = !isWifi;
                field.required =
                    isWifi && field.hasAttribute('data-wifi-required');
            });

            const needsPassword = isWifi && security.value !== 'nopass';

            password.disabled = !needsPassword;
            password.required = needsPassword;
        }

        type.addEventListener('change', syncFields);
        security.addEventListener('change', syncFields);

        syncFields();
    });
})();
</script>

@endpush

