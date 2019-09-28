<template>
  <v-container>
    <v-app-bar app :class="{ 'menu-elevate': elevateMenu, 'menu-flat': !elevateMenu}">
      <div class="d-flex align-center" style="margin: 0 auto; width: 1280px;">
        <div class="">
          <v-img position="left" src="/img/logo-light.png" contain height="30"></v-img>
        </div>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
          <v-btn v-for="(item, i) in $store.state.menuItems"
            :key="i"
            class="ml-5"
            :to="item.link"
            text
          >
            {{ item.title }}
          </v-btn>
        </div>

        <div style="border: 1px solid">
          TRY BREWOPTIX
        </div>

        <v-btn class="hidden-md-and-up" @click="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in $store.state.menuItems"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
  export default {
    props: {
      elevateMenu: {
        type: Boolean,
        required: false,
      },
    },
    data() {
      return {
        drawer: false,
      };
    },

  };
</script>

<style lang="scss" scoped>
.menu-elevate {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12) !important;
  background-color: rgba(0,0,0,0.8) !important;
}
.menu-flat {
  box-shadow: unset;
  background-color: unset !important;
}

</style>
