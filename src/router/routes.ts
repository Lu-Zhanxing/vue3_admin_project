export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: { title: '登录' },
  },
  {
    path: '/',
    // component: () => import('@/views/home/index.vue'),
    component: () => import('@/layout/index.vue'),
    name: 'home',
    meta: { title: 'layout', show: true },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页', show: true, icon:'House' },
      },
      // ,{
      //   path: '/ceshi',
      //   component: () => import('@/views/home/index.vue'),
      //   meta:{title:'测试路由',show:false}
      // }
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: { title: '404' },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: { title: '任意路由' },
  },
]
