<section
    id="projects"
    x-data="
        {
          showCards: 'all',
          activeClasses: 'bg-primary text-white',
          inactiveClasses: 'text-body-color hover:bg-primary hover:text-white',
        }
      "
    class="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]" >

    @if(count($items) > 0)
        <div class="container mx-auto">
            <div class="-mx-4 flex flex-wrap">
                <div class="w-full px-4">
                    <div class="mx-auto mb-[60px] max-w-[510px] text-center">
                        <span class="text-primary mb-2 block text-lg font-semibold">
                            My Portfolio
                        </span>
                        <h2
                            class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
                        >
                            My Recent Projects
                        </h2>
                        <p class="text-body-color text-base">
                            Here are some of my most recent, completed & submitted projects
                        </p>
                    </div>
                </div>
            </div>
            <div class="-mx-4 flex flex-wrap justify-center">
                <div class="w-full px-4">
                    <ul class="mb-12 flex flex-wrap justify-center space-x-1">
                        <li class="mb-1">
                            <button
                                @click="showCards = 'all' "
                                :class="showCards == 'all' ? activeClasses : inactiveClasses "
                                class="inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8"
                            >
                                All Projects
                            </button>
                        </li>
                        @foreach($tabs as $tab)
                            <li class="mb-1">
                                <button
                                    @click="showCards = '{{$tab}}' "
                                    :class="showCards === '{{$tab}}' ? activeClasses : inactiveClasses "
                                    class="inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8"
                                >
                                    {{ $tab }}
                                </button>
                            </li>
                        @endforeach
                    </ul>
                </div>
            </div>
            <div class="-mx-4 flex flex-wrap">
                @foreach($items as $item)
                    <x-project-item
                        :title="$item['name']"
                        :image="$item['image_url']"
                        :categoryTabs="$item['categoryTabs']"
                        :projectUrl="$item['project_url']" ></x-project-item>
                @endforeach
            </div>
        </div>
    @else
        <div class="container mx-auto">
            <div class="-mx-4 flex flex-wrap">
                <div class="w-full px-4">
                    <div class="mx-auto mb-[60px] max-w-[510px] text-center">
                        <span class="text-primary mb-2 block text-lg font-semibold">
                            My Portfolio
                        </span>
                        <h2
                            class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
                        >
                            No Projects
                        </h2>
                        <p class="text-body-color text-base">
                            Please add some projects
                        </p>
                    </div>
                </div>
            </div>
        </div>
    @endif
</section>
