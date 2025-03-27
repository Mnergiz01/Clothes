<template>
  <div class="w-[400px] mt-10 p-4 rounded-lg hover:shadow-xl transition duration-300" data-aos="fade-up">
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
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
AOS.init({
  duration: 800, // Animasyon süresi (ms)
  once: true, // Sadece bir kere tetiklenmesini sağlar
  easing: "ease-in-out",
});
});
</script>

<style scoped>
/* Ekstra stil düzenlemeleri */
</style>
