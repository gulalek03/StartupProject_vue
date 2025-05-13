import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.querySelector(to.hash)
          const navbarHeight = 80 

          if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight
            window.scrollTo({ top, behavior: 'smooth' })
          }

          resolve()
        }, 300) 
      })
    } else {
      return { top: 0 }
    }
  }
})


export default router
