@php
    $theme = setting('home_theme', 'none');
    $themes = [
        'ramadan' => [
            'title' => 'رمضان كريم',
            'subtitle' => 'أجواء رمضانية مميزة على الصفحة الرئيسية',
        ],
        'eid_aladha' => [
            'title' => 'عيد الأضحى مبارك',
            'subtitle' => 'احتفل معنا بعروض وخصومات مناسبة العيد',
        ],
        'eid_alfitr' => [
            'title' => 'عيد الفطر مبارك',
            'subtitle' => 'فرحة العيد تبدأ من هنا',
        ],
        'saudi_national_day' => [
            'title' => 'اليوم الوطني السعودي',
            'subtitle' => 'حب الوطن يجمعنا في هذه المناسبة',
        ],
    ];
@endphp

@if(isset($themes[$theme]))
    <section class="home-theme-banner home-theme-{{ $theme }}">
        <div class="home-theme-content">
            <span class="home-theme-badge">{{ $themes[$theme]['title'] }}</span>
            <h2>{{ $themes[$theme]['title'] }}</h2>
            <p>{{ $themes[$theme]['subtitle'] }}</p>
        </div>
    </section>

    <style>
        .home-theme-banner {
            position: relative;
            width: min(1100px, 92%);
            margin: 20px auto 30px;
            padding: 26px 28px;
            border-radius: 18px;
            color: #fff;
            overflow: hidden;
            box-shadow: 0 18px 35px rgba(0, 0, 0, 0.15);
        }
        .home-theme-banner::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 20% 10%, rgba(255, 255, 255, 0.25), transparent 55%);
            opacity: 0.8;
            pointer-events: none;
        }
        .home-theme-banner::after {
            content: '';
            position: absolute;
            inset: 0;
            background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.12) 75%, transparent 75%, transparent);
            background-size: 36px 36px;
            opacity: 0.25;
            pointer-events: none;
        }
        .home-theme-content {
            position: relative;
            z-index: 1;
            text-align: center;
        }
        .home-theme-badge {
            display: inline-block;
            padding: 6px 14px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.22);
            font-size: 14px;
            margin-bottom: 10px;
        }
        .home-theme-banner h2 {
            margin: 0 0 6px;
            font-size: 28px;
            font-weight: 800;
        }
        .home-theme-banner p {
            margin: 0;
            font-size: 16px;
            opacity: 0.95;
        }
        .home-theme-ramadan {
            background: linear-gradient(135deg, #0d2a1d 0%, #0f4c3a 100%);
        }
        .home-theme-eid_aladha {
            background: linear-gradient(135deg, #4b1d1d 0%, #8b3d2d 100%);
        }
        .home-theme-eid_alfitr {
            background: linear-gradient(135deg, #2c2c54 0%, #3d4c8b 100%);
        }
        .home-theme-saudi_national_day {
            background: linear-gradient(135deg, #0b3b2e 0%, #1b7a5a 100%);
        }
        @media (max-width: 768px) {
            .home-theme-banner {
                padding: 20px;
            }
            .home-theme-banner h2 {
                font-size: 22px;
            }
            .home-theme-banner p {
                font-size: 14px;
            }
        }
    </style>
@endif
