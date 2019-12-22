import { Context } from '@nuxt/types';

export default function({ $axios }: Context) {
  $axios.onRequest(() => {
    // console.log('Making request to ' + config.url);
  });

  $axios.onError((error) => {
    const code = error?.response?.status;
    if (code === 401) {
      // TODO: Update timeout token
    }
  });
}
