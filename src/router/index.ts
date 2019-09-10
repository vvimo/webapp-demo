
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// 路由懒加载
const _import_ = (file: string) => () => import('@/views/' + file + '.vue');

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      // 首页
      path: '/',
      redirect: '/home',
    },
    {
      // 首页
      path: '/home',
      name: 'home',
      component: _import_('Home/index'),
    },
    {
      // 社区
      path: '/community',
      name: 'community',
      component: _import_('Community/index'),
    },
    {
      // 理财
      path: '/assets',
      name: 'assets',
      component: _import_('Assets/index'),
    },
    {
      // 生活
      path: '/life',
      name: 'life',
      component: _import_('Life/index'),
    },
    {
      // 我的
      path: '/my',
      name: 'my',
      component: _import_('My/index'),
    },
    {
      // 登录/注册
      path: '/login',
      name: 'login',
      component: _import_('Login/index'),
    },
  ],
});
