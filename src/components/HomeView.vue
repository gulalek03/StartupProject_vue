<!-- <template>
    <div>




    </div>
 
</template>

<script setup>

</script> -->

<template>
    <div>
      <!-- Overlay when menu is open (blurred background) -->
       
     
  
      <!-- Navbar -->
      <div>
        <nav class="bg-white shadow-md p-4 flex items-center justify-between relative z-30">
             <div v-if="menuOpen" class="fixed inset-0 bg-black bg-opacity-30 z-20 backdrop-blur-md flex items-center justify-center">
        
             </div>
             <!-- Sol: Toggler -->
        <div class="flex items-center">
          <div class="relative">
            <button @click="toggleMenu" class="text-gray-700 hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
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

       <div class="h-screen bg-cover bg-center" style="background-image: url('/public/cat.bg.webp')">
          <h1 class="text-white text-4xl text-center pt-40">Merhaba Dünya</h1>
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
  .fixed.bg-black.bg-opacity-30 {
    backdrop-filter: blur(4px); /* Daha hafif bir bulanıklık */
  }
  
  /* Menüde kaydırılabilir içerik */
  .menu-content {
    max-height: 80vh /* Menü içeriği çok uzun olursa kaydırılabilir */
    overflow-y-auto /* Yalnızca dikey kaydırma */
  }
  </style>
  
  
  

  
  
  
  
  