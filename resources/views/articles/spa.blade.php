<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title> SPA VueJS </title>
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <script> window.Laravel = { csrfToken : '{{ csrf_token() }}' } </script>
        <script> window.Laravel = { csrf_token : '{{ csrf_token() }}' } </script>

        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <script src="{{ asset('js/app.js') }}" defer></script>
    </head>
    <body>

    <div id="app">
        <navbar></navbar>
        <!-- THIS IS NEVER SHOWS UP -->
        <div> WHATEVER IT IS </div>

        <articles></articles>
    </div>

    <hr/>

    <footer class="page-footer font-small bg-info text-light">
        <div class="footer-copyright text-center py-3">
            © <script>document.write(new Date().getFullYear())</script> Copyright : SPA VueJS Articles
        </div>
    </footer>

    </body>
</html>











