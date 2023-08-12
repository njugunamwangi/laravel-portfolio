<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        <link href="{{ asset('css/app.css') }}" rel="stylesheet"/>
    </head>
    <body class="antialiased">
    <!-- ====== Navbar Section Start -->
    <header
        x-data="
        {
          navbarOpen: false
        }
      "
        class="flex w-full items-center bg-white"
    >
        <div class="container mx-auto">
            <div class="relative -mx-4 flex items-center justify-between">
                <div class="w-60 max-w-full px-4">
                    <a href="javascript:void(0)" class="block w-full py-5">
                        <img
                            src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
                            alt="logo"
                            class="w-full"
                        />
                    </a>
                </div>
                <div class="flex w-full items-center justify-between px-4">
                    <div>
                        <button
                            @click="navbarOpen = !navbarOpen"
                            :class="navbarOpen && 'navbarTogglerActive' "
                            id="navbarToggler"
                            class="ring-primary absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                        >
            <span
                class="bg-body-color relative my-[6px] block h-[2px] w-[30px]"
            ></span>
                            <span
                                class="bg-body-color relative my-[6px] block h-[2px] w-[30px]"
                            ></span>
                            <span
                                class="bg-body-color relative my-[6px] block h-[2px] w-[30px]"
                            ></span>
                        </button>
                        <nav
                            :class="!navbarOpen && 'hidden' "
                            id="navbarCollapse"
                            class="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none"
                        >
                            <ul class="block lg:flex">
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                                    >
                                        Payment
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                                    >
                                        Features
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="hidden justify-end pr-16 sm:flex lg:pr-0">
                        <a
                            href="javascript:void(0)"
                            class="text-dark hover:text-primary py-3 px-7 text-base font-medium"
                        >
                            Login
                        </a>
                        <a
                            href="javascript:void(0)"
                            class="bg-primary rounded-lg py-3 px-7 text-base font-medium text-white hover:bg-opacity-90"
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- ====== Navbar Section End -->

    <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
