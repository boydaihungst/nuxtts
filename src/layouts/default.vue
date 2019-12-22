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

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component({
    components: {
      Logo: () => import('~/components/Logo.vue'),
      VuetifyLogo: () => import('~/components/VuetifyLogo.vue'),
    },
  })
  export default class DefaultComponent extends Vue {
    @Prop() name: string;
  }
</script>
<style lang="scss" scoped></style>
