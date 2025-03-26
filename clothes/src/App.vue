<template>
    <div class="background min-h-screen min-w-screen">
      <div class="px-10 py-10">
        <Navbar></Navbar>
        <router-view></router-view>
        
      </div>
      <Footer></Footer>
      
    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

</script>
<style>
.background {
  background-image: url('https://images.pexels.com/photos/3847504/pexels-photo-3847504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-size: cover;
  background-position: center;
}
</style>
