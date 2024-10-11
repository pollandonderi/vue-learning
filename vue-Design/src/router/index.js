import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/components/landing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: Landing
    },
    
  ]
})

export default router
