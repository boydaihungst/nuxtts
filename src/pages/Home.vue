<template>
  <div>
    <v-container class="grid-movie pa-1">
      <v-row>
        <v-col v-for="index in 10" :key="index" cols="6" md="3" class="px-6">
          <movie-item-preview
            :index="Math.floor(Math.random() * 50)"
            @on-show-movie-metadata="onShowMovieMetadata($event)"
          ></movie-item-preview>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="movieInfoDialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Jurassic world
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';

  @Component({
    components: {
      Logo: () => import('~/components/Logo.vue'),
      MovieItemPreview: () => import('~/components/MovieItemPreview.vue'),
    },
  })
  export default class Home extends Vue {
    movieInfoDialog = false;
    movies = [
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
      { title: '321', movieType: '123' },
    ];

    onShowMovieMetadata(event) {
      this.movieInfoDialog = true;
    }
  }
</script>
<style lang="scss" scoped>
  .grid-movie {
    > .row {
      > div:hover {
        z-index: 1;
      }
    }
  }
</style>
