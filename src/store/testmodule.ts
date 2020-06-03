import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
  name: 'mymodule',
  stateFactory: true,
  namespaced: true,
})
export default class MyModule extends VuexModule {
  wheels = 2;

  @Mutation
  incrWheels(extra) {
    this.wheels += extra;
  }

  get axles() {
    return this.wheels / 2;
  }
}
