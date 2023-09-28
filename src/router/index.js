import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () => import('../views/PokemonsView.vue')
    },
    {
      path: '/pokemon/:name',
      name: 'pokemon',
      component: () => import('../views/PokemonView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not found 404',
      component: () => import('../views/404View.vue')
    },
  ]
})

export default router
