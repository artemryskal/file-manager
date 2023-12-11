import { createRouter, createWebHistory } from 'vue-router'

const MainLayout = () => import('@/layouts/MainLayout.vue')
const HomeView = () => import('@/views/HomeView.vue')
const DocsView = () => import('@/views/DocsView.vue')
const LoginView = () => import('@/views/LoginView.vue')
const SignupView = () => import('@/views/SignupView.vue')
const Sidebar = () => import('@/components/sidebar/Sidebar.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/',
          component: HomeView
        },
        // Страница документов
        {
          path: 'docs',
          name: 'docs',
          components: {
            default: DocsView,
            sidebar: Sidebar,
          },
          meta: {
            auth: true,
          },
        },
        // Страница логина
        {
          path: 'login',
          name: 'login',
          components: {
            default: LoginView,
          },
        },
        // Страница регистрации
        {
          path: 'signup',
          name: 'signup',
          components: {
            default: SignupView,
          },
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.auth)) {
    if (!localStorage.getItem('jwt_key')) {
      return next({ name: 'login' })
    }
  }
  next()
})

export default router
