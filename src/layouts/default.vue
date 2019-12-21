<template>
  <v-app dark>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
      Logo: () => import('~/components/Logo.vue'),
      VuetifyLogo: () => import('~/components/VuetifyLogo.vue'),
    },
  })
  export default class BoardComponent extends Vue {}
</script>
