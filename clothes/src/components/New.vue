<template>
    <div  id="new" class="px-4 md:px-8 lg:px-16 mt-20">
      <!-- Başlık ve Süper Yazı -->
      <div class="flex items-center space-x-2 mb-8">
        <h1 class="text-3xl font-semibold text-gray-800 font-lora">New This Week</h1>
        <sup class="text-xl text-gray-500 font-poppins">(50)</sup>
      </div>
  
      <!-- Carousel (Slayt Gösterisi) -->
      <div class="relative">
        <!-- Sol Ok -->
        <button 
          @click="prevImage" 
          class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full text-white z-10">
          &#8592;
        </button>
  
        <div class="overflow-hidden">
          <div 
            :style="{ transform: 'translateX(' + -carouselIndex * 50 + '%)' }" 
            class="flex transition-transform duration-300">
            <!-- Kartlar -->
            <div v-for="i in 10" :key="i" class="w-1/2 p-2">
              <Card />
            </div>
          </div>
        </div>
  
        <!-- Sağ Ok -->
        <button 
          @click="nextImage" 
          class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full text-white z-10">
          &#8594;
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Card from '@/components/Card.vue'
  
  const carouselIndex = ref(0)
  
  // Carousel için ileri gitme fonksiyonu
  const nextImage = () => {
    if (carouselIndex.value < 4) {  // 5 ekran var, 2 kart geçmesi için 4'e kadar ilerlemesine izin ver
      carouselIndex.value++
    }
  }
  
  // Carousel için geri gitme fonksiyonu
  const prevImage = () => {
    if (carouselIndex.value > 0) {  // 0'dan küçük olamaz
      carouselIndex.value--
    }
  }
  </script>
  
  <style scoped>
  /* Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Poppins:wght@400;500&display=swap');
  </style>
  