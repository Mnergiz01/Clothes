<template>
  <div class="flex flex-col px-4 md:px-8 lg:px-16 min-h-screen gap-40">
    <div class="mt-20">
      <ul class="space-y-4 text-2xl font-serif">
        <li class="cursor-pointer hover:text-gray-600 transition duration-300">Men</li>
        <li class="cursor-pointer hover:text-gray-600 transition duration-300">Women</li>
        <li class="cursor-pointer hover:text-gray-600 transition duration-300">Kids</li>
      </ul>
      <Search />
    </div>
    <div class="flex-grow">
      <Newcollection />
    </div>
    <div class="flex-grow">
      <New />
    </div>
    <div class="flex-grow">
      <about />
    </div>
    
    
  </div>
</template>

<script setup>
import about from '@/components/about.vue'
import Navbar from '@/components/Navbar.vue'
import Search from '@/components/Search.vue'
import Newcollection from '@/components/Newcollection.vue'
import New from '@/components/New.vue'

</script>
