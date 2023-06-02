<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

        <!-- Styles -->
        <link href="{{ asset('/css/app.css') }}" >
        
        @vite(['resources/css/app.css'])
    </head>
    <body class="antialiased text-gray-800 dark:text-gray-200">
        <div class="min-h-screen bg-gray-100 dark:bg-gray-900 pt-24">
            <!-- ====== Navbar Section Start -->
                <x-layout.navbar></x-layout.navbar>
            <!-- ====== Navbar Section End -->
            {{$slot}}
            <x-layout.footer></x-layout.footer>
        </div>
        @vite(['resources/js/app.js'])
    </body>
</html>
