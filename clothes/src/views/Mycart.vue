<template>
    <div class="flex flex-row mx-10 min-h-screen mt-40">
        <div class="w-full">
            <div class="flex flex-col">
                <div class="border-b">
                    <h1>Alışveriş Sepetim</h1>
                </div>
                <div class="flex flex-wrap gap-10">

                    <Card v-for="i in 10" :key="i"></Card>


                </div>
            </div>
        </div>
        <div class="w-96 h-100 p-4 mt-20 border rounded-lg shadow-lg bg-white ">
            <div class="flex flex-col space-y-10">
                <h1 class="text-xl font-bold text-gray-800  pb-2">Order Summary</h1>
                <div class="space-y-2 border-b pb-2">
                    <div class="flex flex-row justify-between text-gray-700">
                        <span>Subtotal</span>
                        <span class="font-semibold">$180</span>
                    </div>
                    <div class="flex flex-row justify-between text-gray-700">
                        <span>Shipping</span>
                        <span class="font-semibold">$10</span>
                    </div>
                </div>
                <div class="flex flex-row justify-between text-lg font-semibold text-gray-900">
                    <span>Total</span>
                    <span>$190</span>
                </div>
                <div class="flex items-center space-x-2">
                    <input type="checkbox" id="terms" class="w-4 h-4">
                    <label for="terms" class="text-gray-700 text-sm">Okudum Onaylıyorum</label>
                </div>
                <button class="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition">Devam
                    Et</button>
            </div>
        </div>

    </div>
</template>

<script setup>

import Card from '@/components/Paycard.vue'
</script>