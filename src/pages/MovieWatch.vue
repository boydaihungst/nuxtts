<template>
  <div>
    <vue-plyr ref="plyr-player">
      <video></video>
    </vue-plyr>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, mixins, Ref } from 'nuxt-property-decorator';
  import { MediaPlayerMixin } from '~/mixins/mediaPlayer';
  import { DefaultConfig } from '~/config/plyrConfig';
  @Component({
    components: {
      Logo: () => import('~/components/Logo.vue'),
    },
  })
  export default class MovieWatch extends Vue {
    @Ref('plyr-player') readonly plyrPlayer: any;

    get mediaPlayer(): Plyr {
      return this.plyrPlayer.player;
    }

    mounted() {
      this.mediaPlayer.source = {
        type: 'video',
        title: 'movie name',
        sources: [
          {
            src:
              'http://localhost:3001/api/onedrive/streaming/movie?id=5ed3e5b9ef51a6f3a81a0de1',
            type: 'video/mp4',
            size: 1080,
          },
        ],
        // poster: 'https://i.picsum.photos/id/1/1080/1920.jpg',
      };
    }
  }
</script>
