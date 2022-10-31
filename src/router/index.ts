import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index.vue'),
      children: [
        {
          path: '/1',
          name: 'pageIndex1',
          component: () => import('@/views/page-index-1.vue')
        },
        {
          path: '/2',
          name: 'page-index-1',
          component: () => import('@/views/page-index-2.vue')
        },
        {
          path: '/3',
          name: 'page-index-2',
          component: () => import('@/views/page-index-2.vue')
        },
        {
          path: '/3',
          name: 'page-index-3',
          component: () => import('@/views/page-index-3.vue')
        },
        {
          path: '/4',
          name: 'page-item-detail',
          component: () => import('@/pages/page-item-detail.vue')
        },
        {
          path: '/5',
          name: 'page-items-grid',
          component: () => import('@/pages/page-items-grid.vue')
        },
        {
          path: '/6',
          name: 'page-items-list',
          component: () => import('@/pages/page-items-list.vue')
        },
        {
          path: '/7',
          name: 'page-order-cart',
          component: () => import('@/pages/page-order-cart.vue')
        },
        {
          path: '/8',
          name: 'page-order-form',
          component: () => import('@/pages/page-order-form.vue')
        },
        {
          path: '/9',
          name: 'page-profile',
          component: () => import('@/pages/page-profile.vue')
        },
      ]
    },

  ]
})

export default router
