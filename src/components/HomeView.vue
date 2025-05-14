<template>
    <div class="w-full bg-yellow-500 h-auto">
    <div class="flex justify-between h-full items-start mx-[50px]">
        <!-- <div class="w-[50px] bg-yellow-500 h-screen"></div> -->
        <div class="flex-1">
            <div>
                <nav class="bg-white shadow-md flex items-center justify-between relative z-30">
                    <div v-if="menuOpen"
                        class="fixed inset-0 bg-blur bg-opacity-30 z-20 backdrop-blur-md flex items-center justify-center">

                    </div>
                    <!-- Sol: Toggler -->
                    <div class="flex items-center">
                        <div class="relative">
                            <button @click="toggleMenu" class="text-gray-700 hover:text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            <!-- Menü (açılır) -->
                            <div v-if="menuOpen"
                                class="w-[300px] absolute top-0 left-0 right-0 z-50 h-screen bg-yellow-500 text-white border rounded shadow-md flex flex-col text-left overflow-y-auto p-8">
                                <!-- Menü Kategorileri -->
                                <a href="#" class="px-4 py-2 hover:bg-yellow-400">Kategori 1</a>
                                <a href="#" class="px-4 py-2 hover:bg-yellow-400">Kategori 2</a>
                                <a href="#" class="px-4 py-2 hover:bg-yellow-400">Kategori 3</a>
                                <a href="#" class="px-4 py-2 hover:bg-yellow-400">Kategori 4</a>
                                <a href="#" class="px-4 py-2 hover:bg-yellow-400">Kategori 5</a>
                                <a href="#" class="px-4 py-2 hover:bg-yellow-400">Kategori 6</a>

                                <!-- Get Started Butonu -->
                                <a href="#"
                                    class="px-4 py-2 mt-4 bg-black text-white font-semibold text-center rounded hover:bg-gray-800">
                                    Get Started
                                </a>

                                <!-- Ekstra metinler -->
                                <div class="mt-4 text-center">
                                    <p class="text-sm">Email Us</p>
                                    <p class="text-sm">Text Us</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Orta: Smalls -->
                    <div class="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-gray-800">
                        SMALLS
                    </div>
                    <div
                        class=" absolute top-7 text-sm bg-black bg-opacity-70 text-white backdrop-blur-lg w-full text-center text-xl ">
                        ✨35% Off + Free Treats for Life✨
                    </div>
                    <!-- Sağ: Login + Cart -->
                    <div class="flex items-center space-x-4">
                        <!-- Login -->
                        <a href="#" class="text-gray-700 hover:text-blue-500 cursor-pointer">
                            LOG IN
                        </a>

                        <!-- Cart -->
                        <div class="cursor-pointer text-gray-700 hover:text-blue-500">
                            CART({{ cartCount }})
                        </div>
                    </div>
                </nav>
                <img src="/cat.bg.webp" alt="">
                <div class="flex flex-col absolute top-1/2 right-10 transform -translate-x-1/2 -translate-y-1/2 
              bg-white/60 bg-opacity-80 p-6 rounded-md w-[405px] h-[400px] text-center z-10">
                    <div class="px-12 pb-7 pt-4"><h1 class="text-gray-800 text-2xl font-semibold">Voted #1 Healthiest<br />
                        Cat Food 🐱🥩</h1>
                    </div>
                    <div class="px-6"><p class="text-black mt-2 text-start">Receive gently cooked food every month. Take our 1-minute quiz to find
                        the best plan for your cat</p>
                    </div>
                    <div class="">
                       

                    </div>

                </div>

            </div>
        </div>
        <!-- <div class="w-[50px] bg-yellow-500 h-screen"></div> -->





    </div>

    <div class="flex h-auto bg-purple-100 mx-[50px]">
        <div class="w-full text-center font-bold">
            <h1>PURRS IN THE PRESS</h1>
        </div>
    </div>


</div>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const cartCount = ref(0)

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
}

const addToCart = () => {
    cartCount.value++
}
</script>

<style scoped>
/* Menüye bulanıklık efekti */
.fixed.bg-blur.bg-opacity-30 {
    backdrop-filter: blur(4px);
    /* Daha hafif bir bulanıklık */
}

/* Menüde kaydırılabilir içerik */
.menu-content {
    max-height: 80vh
        /* Menü içeriği çok uzun olursa kaydırılabilir */
        overflow-y-auto
        /* Yalnızca dikey kaydırma */
}
</style>