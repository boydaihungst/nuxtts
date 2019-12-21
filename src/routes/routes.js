/* eslint-disable import/first */
import { Component } from 'vue-property-decorator';
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: () => import('~/layouts/default.vue'),
    redirect: { name: 'homePage' },
    children: [
      {
        name: 'homePage',
        path: '/home',
        component: () => import('~/pages/index.vue'),
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
