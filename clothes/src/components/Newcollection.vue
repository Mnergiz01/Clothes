<template>
    <div  id="collections" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
        <!-- Sol Kolon (Yazılar ve Butonlar) -->
        <div class="flex flex-col justify-between space-y-4 sm:space-y-6 lg:space-y-8">
            <div>
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold font-lora mb-6 sm:mb-8 lg:mb-10">New Collection</h1>
                <div class="flex flex-col">
                    <span class="text-lg sm:text-xl lg:text-2xl text-gray-700 font-poppins">Summer</span>
                    <span class="text-lg sm:text-xl lg:text-2xl text-gray-700 font-poppins">2024</span>
                </div>
            </div>
            <div class="flex flex-col sm:flex-row justify-between items-center sm:items-start lg:items-center">
                <div class="space-y-2 sm:space-y-4 flex flex-row justify-between sm:flex-col sm:space-x-0 space-x-10">
                    <router-link to="/products">
                    <div class="flex items-center justify-between space-x-10 bg-neutral-400 w-full sm:w-auto p-2 rounded-lg hover:bg-neutral-500 transition-colors duration-300">
                        <span class="text-xl text-white cursor-pointer hover:underline">Go To Shop</span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-width="2" d="M2 12h20m-9-9l9 9l-9 9"/></svg></span>
                    </div>
                </router-link>
                </div>
                
            </div>
        </div>

        <!-- Resim Kolonu -->
        <div class="flex justify-center items-center">
            <img src="@/assets/Rectangle 12.svg" alt="Rectangle 12" class="w-full h-auto object-contain" />
        </div>

        <div class="flex justify-center items-center">
            <img src="@/assets/Rectangle 13.svg" alt="Rectangle 13" class="w-full h-auto object-contain" />
        </div>
    </div>
</template>

<style scoped>
/* Resimlere boyutlandırma eklemek */
img {
    max-width: 100%;
    height: auto;
}

/* Font stil düzenlemeleri */
h1 {
    font-family: 'Lora', serif;
}

span {
    font-family: 'Poppins', sans-serif;
}

/* Hover efektleri */
.hover\:underline:hover {
    text-decoration: underline;
}

.hover\:bg-neutral-500:hover {
    background-color: #6b7280;
}

.hover\:bg-gray-200:hover {
    background-color: #e5e7eb;
}

.transition-colors {
    transition: background-color 0.3s ease;
}

/* Özel rounded stil */
.rounded-lg {
    border-radius: 8px;
}
</style>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Poppins:wght@400;500&display=swap" rel="stylesheet">
