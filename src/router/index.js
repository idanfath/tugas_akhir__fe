import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  
  {
    path: '/shell/dashboard', name: 'DashboardShell',
    component: () => import('../shell/DashboardShell'),
    beforeEnter: (to, from, next) => {
      if (to.name === 'DashboardShell') {return next({ name: 'home' })}next()},
    children: [
      {
        path: '/dashboard', name: 'home',
        component: () => import('../views/admin/AdminHome.vue'),
      },
    ]
  },
  {
    path: '/shell/main', name: 'MainShell',
    component: () => import('../shell/MainShell'),
    children: [
      {
        path: '/',
        name: 'landing',
        component: function () {return import('../views/HomeView.vue')}
      },
      {
        path: '/about',
        name: 'about',
        component: function () {return import('../views/AboutView.vue')}
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
