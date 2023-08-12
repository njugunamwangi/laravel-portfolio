<div
    x-data="{ categories: {{ json_encode($categories) }} }"
    :class="showCards == 'all' || categories.includes(showCards) ? 'block' : 'hidden' "
    class="w-full px-4 md:w-1/2 xl:w-1/3"
>
    <div class="relative mb-12">
        <div class="overflow-hidden rounded-lg ease-in duration-100 hover:scale-105">
            <img
                src="{{ $image }}"
                alt="{{ $title }}"
                class="w-full h-[260px] object-cover"
            />
        </div>
        <div class="relative z-10 mx-7 -mt-20 rounded-lg bg-white py-9 px-3 text-center shadow-lg" >
            <span class="text-primary mb-2 block text-sm font-semibold">
                {{ implode(", ", $categories) }}
            </span>
            <h3 class="text-dark mb-4 text-xl font-bold">{{ $title }}</h3>
            <x-button-link :href="$projectUrl" variant="outline-primary" >View Details</x-button-link>
        </div>
    </div>
</div>
