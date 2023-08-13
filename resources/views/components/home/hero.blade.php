<!-- Hero Section start -->
<div id="home" class="relative bg-white pt-[100px] pb-[110px] lg:pt-[110px] dark:bg-slate-800">
    <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap">
            <div class="w-full px-4 lg:w-5/12 pt-[100px]">
                <div class="hero-content">
                    <h1 class="text-dark dark:text-gray-200 mb-6 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]" >
                        I am Njuguna Mwangi, <br />
                        a <span class="rounded-md text-amber-600">Full Stack Web Artisan</span>
                    </h1>
                    <p class="text-body-color mb-8 max-w-[480px] text-base">
                        Unlocking the digital realm's potential, I weave intricate codes into captivating user experiences. With an eye for design and a passion for innovation, I sculpt dynamic websites that bridge imagination and functionality. Join me on a journey where pixels transform into portals of boundless possibilities.
                    </p>
                    <ul class="flex flex-wrap items-center">
                        <li>
                            <x-button-link href="#about" variant="amber" class="rounded-lg mr-4">
                                About Me
                            </x-button-link>
                        </li>
                        <li>
                            <x-button-link href="#projects" variant="primary" class="rounded-lg">
                                My Projects
                            </x-button-link>
                        </li>
                    </ul>
                    <div class="clients pt-16">
                        <h6 class="font-normal test-xs flex items-center text-body-color dark:ttext-gray-300 mb-4" >
                            Follow me on Social Media
                            <span class="w-8 h-[1px] bg-body-color inline-block ml-2" ></span>
                        </h6>
                        <x-social-icons></x-social-icons>
                    </div>
                </div>
            </div>
            <div class="hidden px-4 lg:block lg:w-1/12"></div>
            <div class="w-full px-4 lg:w-6/12">
                <div class="lg:ml-auto lg:text-right">
                    <div class="relative z-10 inline-block pt-11 lg:pt-0">
                        <img
                            src="{{ url('img/hero.png') }}"
                            alt="hero"
                            class="max-w-full lg:ml-auto"
                        />
                        <span class="absolute -left-8 -bottom-8 z-[-1]">
                            <svg
                                width="93"
                                height="93"
                                viewBox="0 0 93 93"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                                <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                                <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                                <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                                <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                                <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                                <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                                <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                                <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                                <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                                <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                                <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                                <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                                <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                                <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                                <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                                <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                                <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                                <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                                <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                                <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                                <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                                <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                                <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                                <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Hero Section end -->
