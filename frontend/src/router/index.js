import {createRouter, createWebHashHistory} from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import McvRegister from '@/views/Register/Register.vue';
import McvLogin from '@/views/Login/Login.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
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
