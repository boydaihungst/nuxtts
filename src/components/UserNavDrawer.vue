<template>
  <v-list class="py-0">
    <v-list-item two-line>
      <v-list-item-avatar>
        <img src="https://randomuser.me/api/portraits/men/81.jpg" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>Application</v-list-item-title>
        <v-list-item-subtitle>Subtext</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
    <v-list-item-group>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        item
        ripple
        nuxt-link
        :to="item.to"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-badge
            :value="!!item.badge"
            :inline="true"
            :light="true"
            :content="item.badge"
          ></v-badge>
        </v-list-item-action>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'nuxt-property-decorator';
  import NavMenuItem from '~/model/navMenuItem';
  @Component
  export default class UserNavDrawerComponent extends Vue {
    // Properties
    @Prop({
      default: (): Array<NavMenuItem> => [
        {
          title: 'My Collection',
          icon: 'mdi-view-dashboard',
          to: '/my-collection',
          badge: '100',
        },
        {
          title: 'Trending',
          icon: 'mdi-image',
          to: '/trending',
          badge: 'New',
        },
        {
          title: 'History',
          icon: 'mdi-help-box',
          to: '/history',
        },
        {
          title: 'New Movies',
          icon: 'mdi-help-box',
          to: '/new-movie',
        },
        {
          title: 'Scriptions',
          icon: 'mdi-help-box',
          to: '/scription',
        },
        {
          title: 'Watch later',
          icon: 'mdi-help-box',
          to: '/watch-later',
        },
      ],
    })
    readonly menuItems!: Array<NavMenuItem>;

    @Prop({
      default: false,
    })
    miniVariant: boolean;

    middleware = [];
    // Run
    asyncData(context) {
      return { name: 'World' };
    }

    fetch() {}
    head() {}
  }
</script>

<style lang="scss">
  .VuetifyLogo {
    width: 180px;
    transform: rotateY(560deg);
    animation: turn 3.5s ease-out forwards 1s;
  }

  @keyframes turn {
    100% {
      transform: rotateY(0deg);
    }
  }
</style>
