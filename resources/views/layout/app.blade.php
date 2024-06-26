<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="csrf-token" content="{{ csrf_token() }}" />

        <link rel="icon" type="image/x-icon" href="{{ asset('/img/favicon.ico') }}">

        <title>NjugunaMwangi</title>

        <link href="{{ asset('css/app.css') }}" rel="stylesheet"/>
    </head>
    <body class="antialiased text-gray-800 dark:text-gray-200">
        <div class="min-h-screen bg-gray-100 dark:bg-gray-900 pt-24">
            <!-- ====== Navbar Section Start -->
            <x-layout.navbar></x-layout.navbar>
            <!-- ====== Navbar Section End -->
            {{$slot}}
            <x-layout.footer></x-layout.footer>
        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
