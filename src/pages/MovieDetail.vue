<template>
  <div></div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component({
    components: {
      Logo: () => import('~/components/Logo.vue'),
    },
  })
  export default class MovieDetail extends Vue {}
</script>
