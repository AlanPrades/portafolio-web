import Home from "@/pages/home/Home.vue";
import Updates from "@/pages/latest/Updates.vue";
import Commissions from "@/pages/comissions/Commissions.vue";
import Portfolio from "@/pages/Portfolio/Portfolio.vue";
import { createRouter, createWebHashHistory } from "vue-router";


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/typophobik',
      name: 'typophobik',
      component: Home
    },
    {
      path: '/Commissions',
      name: 'Commissions',
      component: Commissions
    },
    {
      path: '/Updates',
      name: 'Updates',
      component: Updates
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})