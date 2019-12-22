import {
  getterTree,
  mutationTree,
  actionTree,
  getAccessorType,
} from 'typed-vuex';
import { Context } from '@nuxt/types';
export const state = () => ({});

export const getters = getterTree(state, {});

export const mutations = mutationTree(state, {});

export const actions = actionTree({ state, getters, mutations }, {});
export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
    // submodule,
  },
});
