import { Plugin } from '@nuxt/types';
import { accessorType } from '../store';

const vuexAccessorPlugin: Plugin = (context, inject) => {
  console.log(context);
  inject('accessor', typeof accessorType);
};
export default vuexAccessorPlugin;
