import { Component, Vue, Ref, Prop, Emit } from 'nuxt-property-decorator';
import Plyr from 'plyr';
@Component
export class MediaPlayerMixin extends Vue {
  player: Plyr = null;
  movieId: string = '';

  initialPlayer(
    targets: NodeList | HTMLElement | HTMLElement[] | string,
    options?: Plyr.Options,
  ) {
    return new Plyr(targets, options);
  }

  created() {
    this.movieId = this.$router.currentRoute.params.id;
  }
}
