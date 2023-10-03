import { createRouter, createWebHistory } from 'vue-router'

const MainLayout = () => import('@/layouts/MainLayout.vue')
const FilesView = () => import('@/views/FilesView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/files',
          name: 'files',
          component: FilesView,
        },
      ],
    },
  ],
})

export default router
