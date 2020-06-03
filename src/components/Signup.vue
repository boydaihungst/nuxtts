<template>
  <img class="VuetifyLogo" alt="Vuetify Logo" src="" />
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  @Component
  export default class SignupComponent extends Vue {
    // Properties

    middleware: [];
    // Run
    asyncData(context) {
      return { name: 'World' };
    }

    fetch() {}
    head() {}
  }
</script>

<style lang="scss">
  .VuetifyLogo {
    width: 180px;
    transform: rotateY(560deg);
    animation: turn 3.5s ease-out forwards 1s;
  }

  @keyframes turn {
    100% {
      transform: rotateY(0deg);
    }
  }
</style>
