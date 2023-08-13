<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
    <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
    <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div class="mx-auto max-w-md">
            <h1 class="font-bold text-lg text-indigo-400 ">Contact Form from Ndachi.dev</h1>
            <div class="pt-4">
                <div class="flex flex-wrap">
                    <h3 class="text-lg">Name: </h3>
                    <h2 class="text-lg font-bold">{{$name}}</h2>
                </div>
                <div class="flex flex-wrap">
                    <h3 class="text-lg">Email: </h3>
                    <h2 class="text-lg font-bold">{{$email}}</h2>
                </div>
                <div class="flex flex-wrap">
                    <h3 class="text-lg">Phone: </h3>
                    <h2 class="text-lg font-bold">{{$phone}}</h2>
                </div>
            </div>
            <div class="divide-y divide-gray-300/50">
                <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
                    <p>{{$body}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
