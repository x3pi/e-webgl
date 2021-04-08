const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/P01.vue') }],
  },
  {
    path: '/p01',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/P01.vue') }],
  },
  {
    path: '/p02',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/P02.vue') }],
  },
  {
    path: '/p03',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/P03.vue') }],
  },
  {
    path: '/p04',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/P04.vue') }],
  },
  {
    path: '/p05',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/P05.vue') }],
  },
  {
    path: '/p06',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/P06.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
]

export default routes
