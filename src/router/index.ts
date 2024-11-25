import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },

    {
      path: '/tiendas',
      name: 'tiendas',
      component: () => import('../views/TiendasView.vue'),
    },

    {
      path: '/tienda/crear',
      name: 'tiendacrear',
      component: () => import('../views/TiendaCrearView.vue'),
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/TiendaLoginView.vue'),
    },

    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/TiendaLoutView.vue'),
    },

  ],
})

export default router
