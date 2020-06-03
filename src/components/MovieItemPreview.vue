<template>
  <v-hover v-slot:default="{ hover }">
    <div ref="itemPreviewRef" class="item-preview">
      <v-card
        :class="[
          hover ? 'elevation-10 zoom-on-hover' : 'elevation-4',
          'd-flex flex-row ',
        ]"
        dark
        tile
        :ripple="false"
        min-width="80px"
        height="fit-content"
      >
        <v-img
          width="11rem"
          min-width="80px"
          raised
          lazy-src=""
          :src="`https://i.picsum.photos/id/${index}/1080/1920.jpg`"
          aspect-ratio="0.7"
          alt="movie-poster"
          class="movie-poster overflow-visible"
          to="/detail"
          nuxt
          ripple
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
          <div
            :class="[hover ? 'elevation-10' : 'elevation-4', 'rating-wrapper']"
          >
            <span class="rating-val text--white">8.3</span>
          </div>
          <v-fade-transition>
            <v-overlay v-if="hover" absolute color="#036358">
              <div class="d-flex flex-column align-center">
                <v-btn
                  color="warning"
                  icon
                  x-large
                  dark
                  :to="{
                    name: 'watch-movie',
                    params: {
                      movieName: 'test',
                      id: '5ed3e5b9ef51a6f3a81a0de1',
                    },
                  }"
                  nuxt
                  ripple
                >
                  <v-icon>
                    fas fa-play-circle fa-2x
                  </v-icon>
                </v-btn>
                <v-btn
                  type="button"
                  text
                  @click="onShowMovieMetadata('movieId123')"
                >
                  Nội dung
                </v-btn>
              </div>
            </v-overlay>
          </v-fade-transition>
        </v-img>
      </v-card>
      <v-list class="transparent" flat :ripple="false">
        <v-list-item
          :ripple="false"
          nuxt
          to="/detail"
          dark
          two-line
          class="px-0"
        >
          <v-list-item-content class="text-left">
            <v-list-item-title class="text-left">
              Jurassic world
            </v-list-item-title>
            <v-list-item-subtitle class="text-left">
              Science Fiction
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-hover>
</template>

<script lang="ts">
  import { Component, Vue, Ref, Prop, Emit } from 'nuxt-property-decorator';
  @Component
  export default class MovieItemPreviewComponent extends Vue {
    @Ref('itemPreviewRef') readonly itemPreviewRef!: HTMLDivElement;
    @Prop({ default: 1 }) index: number;

    @Emit()
    onShowMovieMetadata(movieId: string) {}
  }
</script>

<style lang="scss" scoped>
  .item-preview {
    width: 11rem;
    > .v-card {
      background: transparent;
    }
    .rating-wrapper {
      position: absolute;
      right: calc(0% - 35px / 2);
      bottom: 20px;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      background: #f88e01;
      display: flex;
      justify-content: center;
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      .rating-val {
        align-self: center;
      }
    }
    .itemPreviewExtraContent {
      z-index: 4 !important;
    }
    .popover-info-movie {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      position: absolute;
      width: 20rem;
      left: 100%;
    }
    .expand-width-enter-active {
      animation: expand-width 0.5s;
    }
    .expand-width-leave-active {
      animation: expand-width 0.5s reverse;
    }
    @keyframes expand-width {
      from {
        max-width: 0rem;
      }
      to {
        max-width: 20rem;
      }
    }
    .zoom-on-hover {
      transition: transform 0.2s;
      transform: scale(1.1);
    }
  }
</style>
