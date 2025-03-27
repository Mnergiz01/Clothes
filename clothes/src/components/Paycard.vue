<template>
    <div class="w-[400px] mt-10 p-4 rounded-lg   transition duration-300 flex flex-row gap-4">
        <div>
            <!-- Resim -->
            <img src="@/assets/Group 67.svg" alt="Clothes" class="w-full h-auto rounded-lg object-cover" />

            <!-- Kategori Başlığı -->
            <p class="text-center text-lg font-semibold mt-4">Kategori</p>

            <!-- Ürün Bilgisi -->
            <div class="flex flex-row justify-between items-center mt-3">
                <span class="text-md font-medium text-gray-800">Clothes Name</span>
                <span class="text-md font-semibold text-gray-600">Fiyat</span>
            </div>
        </div>
        <div class="flex flex-col gap-5">
            <div> x </div>
                <div> Beden </div>
                <div class="w-10 h-10 bg-black"></div>
                <div>
                    <div class="flex flex-col text-center">
                        <span class="border w-7">+</span>
                        <span class="border w-7">1</span>
                        <span class="border w-7">-</span>
                    </div>
                </div>
        </div>
    </div>
</template>

<style scoped>
/* Ekstra stil düzenlemeleri */
</style>