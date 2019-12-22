/* eslint-disable import/first */
import { Component } from 'vue-property-decorator';
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '',
    component: () =>
      import('~/layouts/default.vue').then((m) => m.default || m),
    redirect: { name: 'homePage' },
    children: [
      {
        name: 'homePage',
        path: '/home',
        component: () =>
          import('~/pages/index.vue').then((m) => m.default || m),
        meta: { pageName: 'Trang chủ' },
      },
    ],
  },
];

export function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: '/',
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,
  });
}
