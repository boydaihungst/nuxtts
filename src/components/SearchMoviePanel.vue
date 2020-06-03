<template>
  <v-form class="overflow-hidden" @submit.prevent="">
    <v-text-field
      v-model="searchTextSync"
      class="search-field align-baseline"
      label=""
      :loading="loading"
      solo
      light
      dense
      hide-details
      append-icon="fa-search"
      @click:append="onSearch"
    ></v-text-field>
  </v-form>
</template>

<script lang="ts">
  import {
    Component,
    Vue,
    Watch,
    PropSync,
    Emit,
  } from 'nuxt-property-decorator';
  @Component
  export default class SearchMovieComponent extends Vue {
    @PropSync('searchText', { type: String, default: '' })
    searchTextSync: string;

    loading = false;

    @Emit('search')
    onSearch() {
      return this.searchTextSync;
    }
  }
</script>

<style lang="scss"></style>
