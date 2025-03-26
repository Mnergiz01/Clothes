import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Addcart from '../views/Addcart.vue'
import Products from '../views/Products.vue'
import Mycart from '../views/Mycart.vue'
import Likeproduct from '../views/Likeproduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/addcart',
      name: 'Addcart',
      component: Addcart,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
    {
      path: '/mycart',
      name: 'Mycart',
      component: Mycart,
    },
    {
      path: '/likeproduct',
      name: 'Likeproduct',
      component: Likeproduct,
    },
    
    
  ],
})

export default router
