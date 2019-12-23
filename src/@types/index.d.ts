import { Auth } from './auth';
import { accessorType } from '~/store/index';

declare module '@nuxt/vue-app' {
  interface Context {
    $auth: Auth;
  }
  interface NuxtAppOptions {
    $auth: Auth;
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $accessor: typeof accessorType;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType;
    $auth: Auth;
  }
}

declare module '@nuxt/types' {
  interface Context {
    $accessor: typeof accessorType;
    $auth: Auth;
  }
  interface NuxtAppOptions {
    $accessor: typeof accessorType;
    $auth: Auth;
  }
}
