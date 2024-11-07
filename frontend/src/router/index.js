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
  {
    path: '/feed',
    name: 'yourFeed',
    component: McvGlobalFeed
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: McvGlobalFeed
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    component: McvGlobalFeed
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component: McvGlobalFeed
  },
  {
    path: '/articles/:slug/edit',
    name: 'editArticle',
    component: McvGlobalFeed
  },
  {
    path: '/settings',
    name: 'settings',
    component: McvGlobalFeed
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: McvGlobalFeed
  },
  {
    path: '/profiles/:slug/favorites',
    name: 'userProfileFavorites',
    component: McvGlobalFeed
  }
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
