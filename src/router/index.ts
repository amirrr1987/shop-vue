import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'page-index-1',
      component: () => import('@/views/page-index-2.vue')
    },
    {
      path: '/page-index-2',
      name: 'page-index-2',
      component: () => import('@/views/page-index-2.vue')
    },
    {
      path: '/page-index-3',
      name: 'page-index-3',
      component: () => import('@/views/page-index-3.vue')
    },
    {
      path: '/page-item-detail',
      name: 'page-item-detail',
      component: () => import('@/views/page-item-detail.vue')
    },
    {
      path: '/page-items-grid',
      name: 'page-items-grid',
      component: () => import('@/views/page-items-grid.vue')
    },
    {
      path: '/page-items-list',
      name: 'page-items-list',
      component: () => import('@/views/page-items-list.vue')
    },
    {
      path: '/page-order-cart',
      name: 'page-order-cart',
      component: () => import('@/views/page-order-cart.vue')
    },
    {
      path: '/page-order-form',
      name: 'page-order-form',
      component: () => import('@/views/page-order-form.vue')
    },
    {
      path: '/page-profile',
      name: 'page-profile',
      component: () => import('@/views/page-profile.vue')
    },
  ]
})

export default router
