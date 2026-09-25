<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $code->title }}</title>

    <style>
        body {
            margin: 0;
            padding: 24px;
            background: #f5f5f5;
            font-family: sans-serif;
        }

        main {
            max-width: 760px;
            margin: 40px auto;
            padding: 24px;
            background: white;
            border-radius: 16px;
        }

        .content {
            white-space: pre-wrap;
            overflow-wrap: anywhere;
            line-height: 1.9;
        }
    </style>
</head>
<body>
    <main>
        <h1>{{ $code->title }}</h1>
        <div class="content">{{ $code->content }}</div>
    </main>
</body>
</html>