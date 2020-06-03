import { Component, Vue, mixins, Ref } from 'nuxt-property-decorator';
import VuePlyr from 'vue-plyr/dist/vue-plyr.ssr.js';
import { DefaultConfig } from '../config/plyrConfig';

// The second argument is optional and sets the default config values for every player.
Vue.use(VuePlyr, {
  plyr: {
    ...DefaultConfig,
  },
});
