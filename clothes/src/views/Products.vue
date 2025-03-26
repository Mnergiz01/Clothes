<template>
    <div class="min-h-screen flex">
        <!-- Sidebar Bölümü -->
        <sidebar class="w-1/3 mt-50"></sidebar>

        <!-- İçerik Bölümü -->
        <div class="flex-1 mt-20  mx-10">
            <div class="flex flex-col">
                <h3>Home/Products</h3>
                <h1 class="text-4xl">Products</h1>
                <Search></Search>
            </div>
            <div class="flex flex-row flex-wrap">
                <router-link v-for="i in 24" :key="i" :to="'/addcart'">
                    <Card />
                </router-link>
            </div>

        </div>
    </div>
</template>

<script setup>
import Sidebar from '@/components/sidebar.vue';
import Search from '@/components/Search.vue'
import Card from '@/components/Card.vue'
</script>

<style scoped>
/* Gerekli özelleştirmeler ve stiller burada yapılabilir */
</style>