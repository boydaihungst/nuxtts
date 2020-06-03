import VueRouter, { RouteConfig } from 'vue-router';
import 'vue-class-component/hooks';
import './class-component-hooks';
import Vue from 'vue';
// Layouts
const DefaultLayout = () =>
  import('~/layouts/default.vue').then((m) => m.default || m);
// Pages
const Homepage = () => import('~/pages/Home.vue').then((m) => m.default || m);
const SearchPage = () =>
  import('~/pages/Search.vue').then((m) => m.default || m);
const MovieWatch = () =>
  import('~/pages/MovieWatch.vue').then((m) => m.default || m);

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '',
    component: Homepage,
    children: [
      {
        name: 'homepage',
        path: '/home',
        components: {
          default: Homepage,
        },
        meta: {},
      },
    ],
  },
  {
    name: 'filterMovie',
    // /tim-kiem/anime/BD/2020
    path: '/tim-kiem/:movieType/:catelog/:catelogFilter',
    components: {
      default: SearchPage,
    },
    meta: {},
  },
  {
    name: 'detail',
    path: '/thong-tin/:movieType/:movieName',
    components: {
      default: SearchPage,
    },
    meta: {},
  },
  {
    name: 'watch-movie',
    path: '/xem/:movieName/:id',
    components: {
      default: MovieWatch,
    },
    meta: {},
  },
  {
    path: '*',
    component: () => import('~/layouts/error.vue').then((m) => m.default || m),
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
