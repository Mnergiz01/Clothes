<template>
    <div id="about" class="space-y-6">
        <!-- Başlık ve Açıklama -->
        <div class="text-center mb-10 space-x-5" data-aos="fade-up">
            <h1 class="text-3xl font-semibold">OUR APPROACH TO FASHION DESIGN</h1>
            <p class="text-lg text-gray-700 mt-10">
                At Elegant Vogue, we blend creativity with craftsmanship to create fashion that transcends trends and stands the test of time. Each design is meticulously crafted, ensuring the highest quality exquisite finish.
            </p>
        </div>

        <!-- Resimler -->
        <div class="relative mb-50 flex flex-row space-x-2 mt-30">
            <div class="relative top-0" data-aos="fade-right"><img src="@/assets/Rectangle 12.svg" alt=""></div>
            <div class="relative top-20" data-aos="fade-left" data-aos-delay="100"><img src="@/assets/Rectangle 13.svg" alt=""></div>
            <div class="relative top-4" data-aos="fade-right" data-aos-delay="200"><img src="@/assets/Rectangle 14.svg" alt=""></div>
            <div class="relative top-40 right-10" data-aos="fade-left" data-aos-delay="300"><img src="@/assets/Rectangle 15.svg" alt=""></div>
        </div>
    </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
    mounted() {
        AOS.init({
            duration: 1000, // Animasyon süresi (ms)
            once: true, // Bir kez tetiklenmesini sağlar
            easing: "ease-in-out",
        });
    }
};
</script>

<style scoped>
h1 {
    font-family: 'Lora', serif;
}

p {
    font-family: 'Poppins', sans-serif;
}
</style>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Poppins:wght@400;500&display=swap" rel="stylesheet">
