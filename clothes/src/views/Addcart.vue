<template>
    <div class="flex justify-center items-center h-screen">
        <div>
            <img src="@/assets/Rectangle 14.svg" class="object-contain max-w-full max-h-full w-80 h-120" alt="">
        </div>
        <div class="flex flex-col gap-2">
            <img 
                v-for="i in 5" 
                :key="i" 
                src="@/assets/Rectangle 14.svg" 
                class="object-contain w-20 h-20 hover:scale-110 transition-transform duration-300 cursor-pointer" 
                alt=""
                @click="handleImageClick(i)">
        </div>
        <div class="border h-auto w-80 mx-12">
            <div class="mx-10 my-10">
                <h1 class="text-2xl">Ürün Adı</h1>
                <h2>Fiyatı</h2>
                <p class="font-light">Kategori</p>
                <br>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, esse?</p>
            </div>
            <div class="mx-10">
                <h1>Color</h1>
                <div class="flex flex-row gap-2 items-center justify-center">
                    <div class="h-8 w-10 bg-gray-300 my-5 hover:bg-gray-500" v-for="i in 6" :key="i"></div>
                </div>
            </div>

            <div class="mx-8 my-10">
                <h1>Size</h1>
                <div class="flex flex-row">
                    <ul class="flex gap-1">
                        <li class="border w-10 h-6 text-center hover:bg-gray-200">XS</li>
                        <li class="border w-10 h-6 text-center hover:bg-gray-200">S</li>
                        <li class="border w-10 h-6 text-center hover:bg-gray-200">M</li>
                        <li class="border w-10 h-6 text-center hover:bg-gray-200">L</li>
                        <li class="border w-10 h-6 text-center hover:bg-gray-200">XL</li>
                        <li class="border w-10 h-6 text-center hover:bg-gray-200">2XL</li>
                    </ul>
                </div>
            </div>

            <!-- Add to Cart Button Section -->
            <div class="mx-10 my-5 flex justify-center">
                <button class="bg-gray-400 text-white py-2 px-6 rounded hover:bg-gray-600">Add to Cart</button>
            </div>
        </div>
    </div>
</template>



<style scoped></style>
