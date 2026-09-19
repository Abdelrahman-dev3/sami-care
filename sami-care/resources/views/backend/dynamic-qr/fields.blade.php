@php
    $selectedType = isset($code) ? $code->type : 'url';

    $wifi = $selectedType === 'wifi'
        ? (json_decode($code->content, true) ?: [])
        : [];

    $normalContent = isset($code) && $selectedType !== 'wifi'
        ? $code->content
        : '';

    $normalTitle = isset($code) ? $code->title
        : '';
@endphp

<div class="qr-fields">
<label class="form-label" for="new-title">العنوان</label>
                <input
                    id="new-title"
                    name="title"
                    class="form-control mb-3"
                    maxlength="150"
                    value="{{$normalTitle}}"
                    required
                >

    <label class="form-label">نوع المحتوى</label>

    <select name="type" class="form-select mb-3 qr-type">
        <option value="url" {{ $selectedType === 'url' ? 'selected' : '' }}>
            رابط
        </option>

        <option value="text" {{ $selectedType === 'text' ? 'selected' : '' }}>
            نص
        </option>

        <option value="wifi" {{ $selectedType === 'wifi' ? 'selected' : '' }}>
            واي فاي
        </option>
    </select>

    <div class="normal-fields">
        <label class="form-label">الرابط أو النص</label>

        <textarea
            name="content"
            class="form-control mb-3"
            rows="4"
            maxlength="10000"
            dir="auto"
        >{{ $normalContent }}</textarea>
    </div>

    <div class="wifi-fields" hidden>
        <label class="form-label">اسم الشبكة</label>

        <input
            name="ssid"
            class="form-control mb-3"
            value="{{ $wifi['ssid'] ?? '' }}"
            dir="auto"
            autocomplete="off"
            data-wifi-required
        >

        <label class="form-label">نوع الحماية</label>

        <select
            name="security"
            class="form-select mb-3 wifi-security"
            data-wifi-required
        >
            <option
                value="WPA"
                {{ ($wifi['security'] ?? 'WPA') === 'WPA' ? 'selected' : '' }}
            >WPA / WPA2 Personal</option>

            <option
                value="WEP"
                {{ ($wifi['security'] ?? '') === 'WEP' ? 'selected' : '' }}
            >WEP</option>

            <option
                value="nopass"
                {{ ($wifi['security'] ?? '') === 'nopass' ? 'selected' : '' }}
            >بدون كلمة مرور</option>
        </select>

        <label class="form-label">كلمة المرور</label>

        <div class="input-group mb-3">
    <input
        name="password"
        type="password"
        class="form-control wifi-password"
        value="{{ $wifi['password'] ?? '' }}"
        autocomplete="new-password"
        dir="auto"
    >

    <button
        type="button"
        class="btn btn-outline-secondary toggle-wifi-password"
        aria-label="إظهار كلمة المرور"
        aria-pressed="false"
    >
        إظهار
    </button>
</div>

        <label class="d-block mb-3">
            <input
                type="checkbox"
                name="hidden"
                value="1"
                {{ !empty($wifi['hidden']) ? 'checked' : '' }}
            >
            الشبكة مخفية
        </label>
    </div>
</div>