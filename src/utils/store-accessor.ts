/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import example from '~/store/testmodule';

let exampleStore: example = null;

function initialiseStores(store: Store<any>): void {
  exampleStore = getModule(example, store);
}

export { initialiseStores, exampleStore };
