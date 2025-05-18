<template>
    <div class="w-full bg-yellow-200 h-auto">
        <div class="flex justify-between h-full items-start mx-[32px]">

            <div class="flex-1">
                <div>
                    <nav class="bg-purple-100 shadow-md flex items-center justify-between relative z-30">
                        <div v-if="menuOpen"
                            class="fixed inset-0 bg-blur bg-opacity-30 z-20 backdrop-blur-md flex items-center justify-center">

                        </div>
                        <!-- Sol: Toggler -->
                        <div class="flex items-center">
                            <div class="relative">
                                <button @click="toggleMenu" class="cursor-pointer text-gray-700 hover:text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>

                                <!-- Menü (açılır) -->
                                <div v-if="menuOpen"
                                    class="w-[300px] absolute top-0 left-0 right-0 z-50 h-screen bg-yellow-200 text-white border rounded shadow-md flex flex-col text-left overflow-y-auto p-8">
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
                        <div
                            class="cursor-pointer bg-warm-gray absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-gray-800 h-[40px]">
                            SMALLS
                        </div>
                        <div
                            class="cursor-pointer absolute top-7 text-sm bg-black bg-opacity-70 text-white backdrop-blur-lg w-full text-center text-xl ">
                            Limited-Time Offer: ✨35% Off + Free Treats for Life✨
                        </div>
                        <!-- Sağ: Login + Cart -->
                        <div class="flex items-center space-x-4">
                            <!-- Login -->
                            <a href="#" class="text-gray-700 hover:text-blue-500 cursor-pointer font-medium">
                                LOG IN
                            </a>

                            <!-- Cart -->
                            <div class="cursor-pointer text-gray-700 hover:text-blue-500 font-medium mx-[12px]">
                                CART({{ cartCount }})
                            </div>
                        </div>
                    </nav>
                    <img src="/cat.bg.webp" alt="cat">
                    <div class="flex flex-col absolute top-[60%] right-4 transform -translate-x-1/3 -translate-y-1/2 
              bg-white/60 bg-opacity-80 p-6 rounded-md w-[405px] h-[400px] text-center z-10">
                        <div class="px-12 pb-7 pt-10">
                            <h1 class="text-gray-800 text-2xl font-semibold">Voted #1 Healthiest<br />
                                Cat Food 🐱🥩</h1>
                        </div>
                        <div class="px-6 pt-10 pb-5">
                            <p class="text-black mt-2 text-start font-serif">Receive gently cooked food every month.
                                Take our
                                1-minute quiz to find
                                the best plan for your cat</p>
                        </div>
                        <div class="">
                            <button
                                class="border border-black hover:text-black hover:bg-yellow-200 cursor-pointer bg-black text-white text-base px-9 py-1.5 rounded-full hover:bg-gray-800 transition duration-300">
                                START NOW
                            </button>
                            <div
                                class="cursor-pointer hover:bg-yellow-200 px-0 mt-4 underline underline-offset-4 text-sm">
                                100% Money-back guarantee</div>



                        </div>

                    </div>

                    


                    <div>
            <div class="absolute right-130 bottom-1 z-10 w-[100px] h-[100px] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-64 h-64">
                    <defs>
                        <clipPath id="a">
                            <!-- Define your clipping path here if needed -->
                            <rect width="100" height="100" />
                        </clipPath>
                    </defs>
                    <g clip-path="url(#a)">
                        <path fill="#FFEC66" stroke="#000"
                            d="M28.155 7.791c1.894-5.517 8.322-7.932 13.366-5.09l.24.138 1.824 1.1a10.308 10.308 0 0 0 10.92-.18l.317-.213 1.743-1.223c4.776-3.35 11.396-1.526 13.806 3.736l.111.254.832 1.962a10.308 10.308 0 0 0 8.94 6.274l.38.013 2.13.035c5.833.097 10.116 5.464 8.972 11.139l-.058.27-.481 2.075a10.31 10.31 0 0 0 3.545 10.331l.3.235 1.702 1.28c4.662 3.507 4.973 10.367.712 14.285l-.206.185-1.609 1.396a10.308 10.308 0 0 0-3.204 10.441l.105.366.624 2.037c1.71 5.578-2.07 11.31-7.82 11.975l-.276.028-2.122.183a10.309 10.309 0 0 0-8.73 6.564l-.13.359-.691 2.015c-1.895 5.517-8.323 7.932-13.366 5.09l-.24-.138-1.824-1.1a10.308 10.308 0 0 0-10.92.18l-.317.213-1.743 1.223c-4.776 3.35-11.396 1.526-13.806-3.736l-.111-.254-.832-1.962a10.308 10.308 0 0 0-8.94-6.274l-.38-.013-2.13-.035c-5.833-.097-10.116-5.464-8.972-11.139l.058-.27.48-2.075A10.309 10.309 0 0 0 6.81 59.139l-.3-.234-1.703-1.28C.145 54.117-.166 47.257 4.096 43.34l.206-.185L5.91 41.76a10.308 10.308 0 0 0 3.204-10.441l-.106-.366-.624-2.038c-1.71-5.577 2.07-11.308 7.821-11.974l.275-.028 2.122-.183a10.309 10.309 0 0 0 8.73-6.564l.13-.359.692-2.015Z" />
                        <path fill="#000"
                            d="m24.773 43.205 3.082-1.122 1.296 3.561-.986.36-.393-.847c-.175.777-.788 1.404-1.68 1.729-1.955.711-3.552-.08-4.349-2.27-.729-2.002-.073-3.826 2.004-4.582 1.447-.526 2.81-.203 3.663 1.03l-1.146.683c-.474-.69-1.204-1.116-2.172-.764-.686.25-1.146.652-1.307 1.232-.139.497-.083 1.147.208 1.946.294.808.634 1.334 1.072 1.632.487.344 1.089.36 1.85.082 1.053-.383 1.495-1.214 1.16-2.37l-1.936.705-.366-1.005Zm6.493 1.67-2.394-6.578 4.463-1.625.356.978-3.289 1.197.653 1.794 2.942-1.07.352.968-2.941 1.07.677 1.86 3.289-1.196.355.977-4.463 1.625Zm8.023-2.92-2.032-5.582-2.133.776-.363-.996 5.45-1.983.363.995-2.142.78 2.031 5.582-1.175.428Zm7.67-2.792-2.393-6.578 4.463-1.625.356.977-3.298 1.2.653 1.796 2.95-1.074.353.968-2.95 1.074 1.032 2.837-1.165.425Zm10.63-5.657c.256.705.48 1.113.94 1.414v.031l-1.268.462c-.33-.263-.495-.543-.81-1.408-.288-.789-.763-.956-1.684-.621l-1.25.455.944 2.593-1.175.428-2.394-6.578 2.415-.879c1.306-.475 2.707-.72 3.337 1.01.294.808.076 1.526-.446 1.992.719.015 1.134.396 1.39 1.101Zm-3.249-1.031c.79-.287 1.507-.655 1.165-1.595-.37-1.014-1.138-.788-1.918-.504l-1.175.428.763 2.095 1.165-.424Zm6.163 1.758-2.394-6.578 4.463-1.624.356.977-3.289 1.197.653 1.795 2.941-1.07.353.967-2.941 1.07.677 1.861 3.289-1.197.355.978-4.463 1.624Zm6.519-2.372-2.394-6.578 4.463-1.625.356.977-3.289 1.197.653 1.795 2.942-1.07.352.968-2.941 1.07.677 1.86 3.289-1.196.356.977-4.464 1.624Zm-33.47 27.08-2.032-5.582-2.133.777-.362-.996 5.45-1.984.363.996-2.143.78 2.032 5.581-1.175.428Zm9.337-5.186c.256.705.48 1.113.94 1.414v.031l-1.268.462c-.33-.263-.496-.543-.81-1.408-.288-.789-.764-.956-1.684-.621l-1.25.455.944 2.593-1.175.428-2.394-6.578 2.415-.879c1.306-.475 2.707-.72 3.337 1.01.294.808.076 1.526-.446 1.992.719.015 1.134.396 1.39 1.101Zm-3.25-1.031c.79-.287 1.508-.655 1.166-1.595-.37-1.014-1.139-.788-1.918-.504l-1.175.428.763 2.095 1.165-.424Zm6.164 1.758-2.395-6.578 4.464-1.624.356.977-3.29 1.197.654 1.795 2.941-1.07.352.967-2.94 1.07.676 1.861 3.29-1.197.355.978-4.463 1.624Zm10.841-3.946-1.24-1.507-2.565.934.037 1.945-1.25.454.134-7.497 1.222-.445 4.903 5.665-1.24.451Zm-3.817-1.686 1.87-.68-1.132-1.387c-.249-.303-.573-.696-.82-1.053l-.01.003c.046.505.05.866.06 1.33l.032 1.787Zm7.572.32-2.031-5.582-2.133.776-.363-.996 5.45-1.984.363.996-2.143.78 2.032 5.582-1.175.427Zm7.333-2.542c-1.475.537-3.022.292-3.61-1.261l1.165-.573c.352.968 1.197 1.214 2.109.882.836-.305 1.417-.814 1.137-1.585-.284-.78-1.157-.43-2.222-.287-1.29.171-2.509.126-2.967-1.134-.51-1.4.587-2.363 1.77-2.794 1.401-.51 2.699-.365 3.413 1.131l-1.118.641c-.369-.898-1.069-1.154-1.962-.829-.667.243-1.156.74-.93 1.36.219.602 1.02.523 1.986.342 1.464-.277 2.702-.324 3.215 1.086.578 1.588-.623 2.525-1.986 3.021Zm-34.915 27.48-2.395-6.579 4.464-1.624.356.977-3.299 1.2.654 1.795 2.95-1.074.353.968-2.951 1.074 1.033 2.838-1.165.424Zm9.132-3.197c-2.039.742-3.664-.04-4.46-2.229-.726-1.992-.083-3.822 1.984-4.575 2.049-.745 3.74.246 4.461 2.229.732 2.011.064 3.83-1.985 4.575Zm-.345-.95c.686-.249 1.115-.65 1.264-1.204.162-.549.083-1.233-.183-1.966-.274-.752-.672-1.32-1.123-1.624-.48-.325-1.057-.36-1.706-.124-.705.256-1.142.692-1.302 1.187-.16.495-.086 1.255.184 1.997.29.8.698 1.364 1.091 1.625.503.328 1.136.342 1.775.11Zm9.82-4.414c.256.705.48 1.113.94 1.414v.031l-1.268.462c-.33-.263-.496-.543-.81-1.408-.288-.79-.764-.956-1.684-.621l-1.25.455.944 2.593-1.175.428-2.394-6.578 2.415-.88c1.306-.474 2.707-.718 3.337 1.01.294.809.076 1.526-.446 1.993.719.015 1.134.396 1.39 1.101Zm-3.249-1.031c.79-.287 1.507-.655 1.165-1.595-.37-1.014-1.138-.788-1.918-.504l-1.175.427.763 2.096 1.165-.424Zm9.887-.726 3.299-1.2.362.996-4.463 1.625-2.395-6.578 1.166-.424 2.031 5.581Zm5.396-.835-2.395-6.578 1.175-.428 2.394 6.578-1.175.428Zm3.527-1.284-2.394-6.578 4.463-1.625.356.978-3.298 1.2.653 1.795 2.95-1.074.353.968-2.95 1.074 1.032 2.838-1.165.424Zm6.326-2.303-2.394-6.578 4.464-1.624.356.977-3.29 1.197.654 1.795 2.941-1.07.352.967-2.94 1.07.676 1.862 3.29-1.198.355.978-4.464 1.624Zm5.953-4.22-1.063-2.455-.821-2.255 1.109-.403.82 2.255.754 2.567-.799.29Zm.454 1.889-.462-1.269 1.222-.445.461 1.269-1.221.445Z" />
                    </g>
                </svg>
            </div>
        </div>






                </div>
            </div>






        </div>




        <Shape />
        <part3 />
        <part4 />
        
    </div>
</template>

<script setup>

import { ref } from 'vue'
import Shape from "./Shape.vue";
import part3 from "./part3.vue";
import part4 from "./part4.vue";

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