import {createRouter, createWebHashHistory} from 'vue-router';
import McvGlobalFeed from '@/views/GlobalFeed/GlobalFeed.vue';
import McvRegister from '@/views/Register/Register.vue';
import McvLogin from '@/views/Login/Login.vue';

const routes = [
  {
    path: '/',
    name: 'GlobalFeed',
    component: McvGlobalFeed,
  },
  {
    path: '/register',
    name: 'register',
    component: McvRegister,
    meta: {title: 'Register'},
  },
  {
    path: '/login',
    name: 'login',
    component: McvLogin,
    meta: {title: 'Login'},
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = 'Medium';
  }
});

export default router;
