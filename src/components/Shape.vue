<template>


    <div class="bg-purple-100 mx-[32px]">
        <div class="flex h-auto bg-purple-100 mx-[50px]">
            <div class="w-full text-center mb-10">
                <h1 class="font-serif text-[6.25rem]">PURRS IN THE PRESS</h1>
            </div>
        </div>
        <div class="flex flex-row mb-18 w-full px-10 mx-auto justify-between gap-6">
            <div v-for="item in shapes" :key="item.name" class="relative flex flex-col items-center justify-center w-full">
                <div
                    class="absolute top-[-25px] bg-yellow-200 rounded-full items-center justify-center h-[50px] w-[132px]  p-4 text-center z-30">
                    <p>{{ item.date }}</p>
                </div>
                <div
                    class="flex bg-yellow-200 rounded-full items-center justify-center h-[160px] w-full p-4 text-center z-20">
                    <p>{{ item.name }}</p>
                </div>
                <div
                    class="absolute bottom-[-25px] bg-yellow-200 rounded-full items-center justify-center h-[72px] w-[296px] text-center z-10">
                    <p class="mt-10">{{ item.location }}</p>
                </div>
            </div>

        </div>





        <div class="flex flex-row gap-4 rounded-lg bg-white h-[632px] mx-[80px] mb-[60px]">
            <img src="/meat.webp" alt="meat" class="w-1/2">

            <div class="flex flex-col justify-between items-center mt-40 w-1/2">
                <div class="flex flex-col items-center">

                    <div class=" ">
                        Everything they need. <br />
                        Nothing they don’t.
                    </div>


                    <div class="w-[360px]">
                        <p>Other brands pack their products with carbohydrates, preservatives, and harmful artificial
                            ingredients. Smalls is ultra-high protein with no fillers of any kind. Because we believe
                            cats
                            deserve better.</p>
                    </div>
                </div>


                <div class="">
                    <button
                        class="mb-5 border border-black hover:text-yellow-400 hover:bg-black cursor-pointer bg-yellow-200 text-black text-base px-9 py-1.5 rounded-full transition duration-300">
                        START NOW
                    </button>
                </div>





            </div>
        </div>



        <div class="flex flex-row rounded-lg bg-white h-[632px] mx-[80px] mt-[60px]">

            <div class="flex flex-col justify-between items-center gap-4 w-1/2">
                <div class="mt-20">
                    How it works
                </div>
                <div class="flex flex-col items-center mb-5">

                    <div class="flex items-center border-t w-[536px] h-[58px]">
                        <div class="relative bg-[#ffec66] rounded-full w-5 h-5 mr-4"><svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                                stroke="currentColor" class="size-6 absolute left-[-2px] top-[-2px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <p>Try our Sampler</p>
                    </div>

                    <div class="flex items-center border-t w-[536px] h-[58px]">
                        <div class="relative bg-[#ffec66] rounded-full w-5 h-5 mr-4"><svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                                stroke="currentColor" class="size-6 absolute left-[-2px] top-[-2px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <p> Build a plan for your lifestyle </p>
                    </div>

                    <div class="flex items-center border-t w-[536px] h-[58px]">
                        <div class="relative bg-[#ffec66] rounded-full w-5 h-5 mr-4"><svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                                stroke="currentColor" class="size-6 absolute left-[-2px] top-[-2px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <p>Watch your kitty thrive</p>
                    </div>

                    <div>
                        <button
                            class="border border-black hover:text-yellow-400 hover:bg-black cursor-pointer bg-yellow-200 text-black text-base px-9 py-1.5 rounded-full transition duration-300">
                            START NOW
                        </button>
                    </div>
                </div>


            </div>
            <div class="w-1/2">
                <img src="/blackCat.webp" alt="black cat eating food" class="h-[632px]">
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';



const shapes = ref([
    { name: "“The Best Cat Food, According to Veterinarians.”", date: "06.20.23", location: 'NEW YORK' },
    { name: "“My kitty, Gus, gives it two paws up.”", date: "01.10.20", location: 'BUSINESS INSIDER' },
    { name: "“My cats went completely ballistic for this stuff.”", date: "12.05.19", location: 'BuzzFeed' },
])
</script>
