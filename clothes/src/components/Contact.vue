<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
        <div class="w-96 p-6 bg-white rounded-lg shadow-md" data-aos="fade-up">
            <h1 class="text-2xl font-semibold text-center mb-4">
                {{ isRegistering ? "Kayıt Ol" : "Giriş Yap" }}
            </h1>

            <div v-if="isRegistering">
                <!-- Kayıt Ol Formu -->
                <h2 class="text-lg font-medium mb-2">İletişim Bilgileri</h2>
                <input type="email" v-model="email" placeholder="E-posta" class="input-field">
                <input type="number" v-model="phone" placeholder="Telefon" class="input-field">
                
                <h2 class="text-lg font-medium mt-4 mb-2">Adres Bilgileri</h2>
                <div class="flex gap-2">
                    <input type="text" v-model="firstName" placeholder="Ad" class="input-field">
                    <input type="text" v-model="lastName" placeholder="Soyad" class="input-field">
                </div>
                <input type="text" v-model="country" placeholder="Ülke" class="input-field">
                <input type="text" v-model="state" placeholder="Şehir" class="input-field">
                <input type="text" v-model="address" placeholder="Adres" class="input-field">
                <div class="flex gap-2">
                    <input type="text" v-model="city" placeholder="İlçe" class="input-field">
                    <input type="text" v-model="zipCode" placeholder="Posta Kodu" class="input-field">
                </div>

                <div class="flex justify-end mt-4">
                    <button @click="register" class="btn">Kayıt Ol</button>
                </div>
            </div>

            <div v-else>
                <!-- Giriş Yap Formu -->
                <h2 class="text-lg font-medium mb-2">Giriş Bilgileri</h2>
                <input type="email" v-model="email" placeholder="E-posta" class="input-field">
                <input type="password" v-model="password" placeholder="Şifre" class="input-field">
                
                <div class="flex justify-end mt-4">
                    <button @click="login" class="btn">Giriş Yap</button>
                </div>
            </div>

            <!-- Kayıt/Giriş geçiş butonu -->
            <p class="text-center mt-4 text-sm text-gray-600">
                {{ isRegistering ? "Zaten bir hesabınız var mı?" : "Hesabınız yok mu?" }}
                <button @click="toggleAuthMode" class="text-blue-500 font-semibold hover:underline">
                    {{ isRegistering ? "Giriş Yap" : "Kayıt Ol" }}
                </button>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

// Kullanıcı bilgileri için değişkenler
const email = ref("");
const phone = ref("");
const firstName = ref("");
const lastName = ref("");
const country = ref("");
const state = ref("");
const address = ref("");
const city = ref("");
const zipCode = ref("");
const password = ref("");

// Kayıt mı yoksa giriş mi yapıldığını kontrol eden değişken
const isRegistering = ref(true);

// Kayıt fonksiyonu
const register = () => {
    console.log("Kayıt Bilgileri:", {
        email: email.value,
        phone: phone.value,
        firstName: firstName.value,
        lastName: lastName.value,
        country: country.value,
        state: state.value,
        address: address.value,
        city: city.value,
        zipCode: zipCode.value
    });
    alert("Kayıt işlemi başarılı!");
};

// Giriş fonksiyonu
const login = () => {
    console.log("Giriş Bilgileri:", {
        email: email.value,
        password: password.value
    });
    alert("Giriş işlemi başarılı!");
};

// Kayıt ve giriş ekranı arasında geçiş yapan fonksiyon
const toggleAuthMode = () => {
    isRegistering.value = !isRegistering.value;
};

// AOS'u başlat
onMounted(() => {
    AOS.init({
        duration: 800, // Animasyon süresi (ms)
        once: true, // Animasyonun sadece bir kere çalışmasını sağlar
        easing: "ease-in-out",
    });
});
</script>

<style scoped>
.input-field {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
}

.btn {
    background-color: #4a90e2;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

.btn:hover {
    background-color: #357ABD;
}
</style>
