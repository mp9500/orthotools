import { createRouter, createWebHistory } from 'vue-router/auto'
import StartPage from '../components/StartPage.vue'
import VerhaeltnisRechner from '../components/VerhaeltnisRechner.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', StartPage},
    { path: '/verhaeltnisrechner', VerhaeltnisRechner},
  ],
})


export default router
