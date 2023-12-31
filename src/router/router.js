import { createWebHistory, createRouter } from 'vue-router';

import vCatalog from '../components/catalog/v-catalog.vue';
import vCart from '../components/cart/v-cart.vue';

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: vCatalog,
  },
  {
    path: '/cart',
    name: 'cart',
    component: vCart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
