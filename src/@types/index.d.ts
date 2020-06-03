import { Auth } from './auth';

declare module '@nuxt/vue-app' {
  interface Context {
    $auth: Auth;
  }
  interface NuxtAppOptions {
    $auth: Auth;
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {}
}

declare module 'vue/types/vue' {
  interface Vue {
    $auth: Auth;
  }
}

declare module '@nuxt/types' {
  interface Context {
    $auth: Auth;
  }
  interface NuxtAppOptions {
    $auth: Auth;
  }
}
