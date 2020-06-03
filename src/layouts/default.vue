<template>
  <v-app light>
    <v-app-bar
      app
      color="#6A76AB"
      dark
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <template v-slot:extension>
        <v-tabs ref="navbarTabsRef">
          <v-tabs-slider color="#f88e01"></v-tabs-slider>
          <template v-for="(tab, index) in navbarTabs">
            <v-tab v-if="tab.to" :key="index" nuxt :to="tab.to">
              {{ tab.title }}
            </v-tab>
            <v-menu
              v-if="tab.isList || tab.isGrid"
              :key="index"
              bottom
              offset-y
              open-on-hover
            >
              <template v-slot:activator="{ on }">
                <v-tab v-on="on">
                  {{ tab.title }}
                </v-tab>
              </template>
              <template v-if="tab.isGrid">
                <v-card light max-width="40rem">
                  <v-container fluid>
                    <template v-for="(groupItem, groupIndex) in tab.groupMenu">
                      <div :key="groupIndex">
                        <div>
                          {{ groupItem.header }}
                        </div>
                        <v-divider></v-divider>
                        <v-row>
                          <v-col
                            v-for="(menuItem,
                            menuItemIndex) in groupItem.menuItems"
                            :key="menuItemIndex"
                            cols="6"
                            md="2"
                            class="px-1 text-center"
                          >
                            <v-btn text nuxt :to="menuItem.to">
                              {{ menuItem.title }}
                            </v-btn>
                          </v-col>
                        </v-row>
                      </div>
                    </template>
                  </v-container>
                </v-card>
              </template>
              <template v-else>
                <v-list>
                  <v-list-item
                    v-for="(menuItem, menuItemIndex) in tab.menuItems"
                    :key="menuItemIndex"
                    nuxt
                    :to="menuItem.to"
                  >
                    <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </template>
            </v-menu>
          </template>
        </v-tabs>
      </template>

      <v-app-bar-nav-icon
        @click="userNavDrawer = !userNavDrawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>
      <search-movie-panel
        class="align-self-center"
        :search-text.sync="searchVal"
        :search="onSearch"
      ></search-movie-panel>

      <v-btn icon>
        <v-icon>fa-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>fa-spinner fa-pulse</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="userNavDrawer" app>
      <user-nav-drawer :mini-variant="false"></user-nav-drawer>
    </v-navigation-drawer>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Ref } from 'nuxt-property-decorator';
  import {
    NavbarItem,
    DropdownMenuItem,
    DropdownGridItem,
    GroupMenu,
  } from '~/model/navbaritem';
  @Component({
    components: {
      Logo: () => import('~/components/Logo.vue'),
      SearchMoviePanel: () => import('~/components/SearchMoviePanel.vue'),
      UserNavDrawer: () => import('~/components/UserNavDrawer.vue'),
    },
  })
  export default class DefaultComponent extends Vue {
    @Ref('navbarTabs') readonly navbarTabsRef: any;
    userNavDrawer = false;
    searchVal = '';
    get navbarTabs(): Array<NavbarItem & DropdownMenuItem & DropdownGridItem> {
      const navArr: Array<NavbarItem & DropdownMenuItem & DropdownGridItem> = [
        {
          title: 'Trang chủ',
          to: '/',
        },
        {
          title: 'Anime mới cập nhật',
          to: '/',
        },
        {
          title: 'Tìm kiếm nâng cao',
          to: '/',
        },
      ];
      let nowYear = new Date().getFullYear();
      const menuItemsYear = [];
      while (nowYear-- > 2010) {
        menuItemsYear.push({
          title: `Năm ${nowYear}`,
          to: `/anime/tim-kiem/nam/${nowYear}`,
        });
      }
      navArr.push({
        title: 'Năm phát hành',
        isList: true,
        menuItems: menuItemsYear,
      });
      // TODO: get from server
      const groupMenuItemCatelog: GroupMenu[] = [
        {
          isGrid: true,
          header: 'A',
          menuItems: [
            { title: 'Âm nhạc', to: '/anime/tim-kiem/the-loai/am-nhac' },
            { title: 'Huyền bí', to: '/anime/tim-kiem/the-loai/am-nhac' },
            { title: 'Lịch sử', to: '/anime/tim-kiem/the-loai/am-nhac' },
            { title: 'Ecchi', to: '/anime/tim-kiem/the-loai/am-nhac' },
            { title: 'Drama', to: '/anime/tim-kiem/the-loai/am-nhac' },
            { title: 'Drama', to: '/anime/tim-kiem/the-loai/am-nhac' },
            { title: 'Drama', to: '/anime/tim-kiem/the-loai/am-nhac' },
            { title: 'Drama', to: '/anime/tim-kiem/the-loai/am-nhac' },
            { title: 'Drama', to: '/anime/tim-kiem/the-loai/am-nhac' },
            { title: 'Drama', to: '/anime/tim-kiem/the-loai/am-nhac' },
            { title: 'Drama', to: '/anime/tim-kiem/the-loai/am-nhac' },
            { title: 'Drama', to: '/anime/tim-kiem/the-loai/am-nhac' },
            { title: 'Drama', to: '/anime/tim-kiem/the-loai/am-nhac' },
          ],
        },
      ];
      navArr.push({
        title: 'Thể loại',
        isGrid: true,
        groupMenu: groupMenuItemCatelog,
      });
      return navArr;
    }

    onSearch(searchVal: string) {}
  }
</script>
<style lang="scss" scoped>
  .v-content {
    background-color: #a4bdc4;
  }
</style>
