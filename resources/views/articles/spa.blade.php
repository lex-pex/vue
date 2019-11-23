<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <script src="{{ asset('js/app.js') }}" defer></script>
    </head>
    <body>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-6 text-center p-3">
                <h3>SPA "Articles" upon VueJs</h3>
            </div>
        </div>
    </div>

    <div id="app">
        <div class="container">
            {{--<articles></articles>--}}
        </div>
    </div>

    </body>
</html>











