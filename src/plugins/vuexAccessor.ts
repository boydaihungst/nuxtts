import { Plugin } from '@nuxt/types';
import { accessorType } from '../store';

const vuexAccessorPlugin: Plugin = (context, inject) => {
  inject('accessor', typeof accessorType);
};
export default vuexAccessorPlugin;
