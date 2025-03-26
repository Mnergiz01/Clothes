<template>
    <div class=" w-2xs  min-h-screen">
        <div>
            <h1 class="text-3xl font-bold ">Filters</h1>
        </div>
        <div class="my-5 py-4 border-b ">
            <h2>Size</h2>
            <ul class="flex flex-row gap-1 mt-2">
                <li class="border w-2xl text-center p-2">xs</li >
                <li class="border w-2xl text-center p-2">s</li >
                <li class="border w-2xl text-center p-2">m</li >
                <li class="border w-2xl text-center p-2">l</li >
                <li class="border w-2xl text-center p-2">xl</li >
                <li class="border w-2xl text-center p-2">2xl</li >
            </ul>
        </div>
        <div class="flex flex-col gap-2 py-4 border-b" v-for="i in 10" :key="i">
        <Filters></Filters>
        </div>
       
    </div>
</template>

<script setup>

import Filters from '@/components/Filters.vue'
</script>