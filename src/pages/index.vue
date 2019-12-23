<template>
  <div>
    <div>{{ $auth.loggedIn }}</div>
    <v-btn color="success" @click="doLogin">
      Login
    </v-btn>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
      Logo: () => import('~/components/Logo.vue'),
      VuetifyLogo: () => import('~/components/VuetifyLogo.vue'),
    },
  })
  export default class Index extends Vue {
    auth = false;

    async doLogin() {
      this.$axios.getUri();
      await this.$auth.loginWith('local', {
        data: {
          email: 'eve.holt@reqres.in',
          password: 'cityslicka',
        },
      });
    }
  }
</script>
