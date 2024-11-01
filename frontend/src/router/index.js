import {createRouter, createWebHashHistory} from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import McvRegister from '@/views/Register/Register.vue';

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
