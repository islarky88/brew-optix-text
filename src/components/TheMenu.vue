<template>
  <v-container>
    <v-app-bar class="" app :class="{ 'menu-elevate': elevateMenu, 'menu-flat': !elevateMenu}">
      <div class="d-flex align-center" style="margin: 0 auto; width: 1280px;">
        <div class="">
          <v-img position="left"
            src="/img/logo-light.png"
            contain
            width="200"
            height="30"
          ></v-img>
        </div>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down d-flex menu-items">
          <div v-for="(item, i) in $store.state.menuItems"
            :key="i"
            class="ml-5 d-flex align-center menu-item"
          >
            {{ item.title }} <v-icon>mdi-chevron-down</v-icon>
          </div>
        </div>

        <div class="ml-3 menu-try-button">
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

.menu-item {
  cursor: pointer;
  margin: 0 15px;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: 'PT Sans';
  transition: opacity .2s ease;
}

.menu-item:hover {
  opacity: 0.7;
}

.menu-try-button {
  cursor: pointer;
  font-family: 'PT Sans';
position: relative;
text-align: center;
font-style: normal;
text-decoration: none !important;
outline: 0;
vertical-align: middle;
display: block;
font-size: 12px;
text-transform: uppercase;
line-height: 1;
letter-spacing: .12em;
border-style: solid;
border-width: 1px;
padding: 1em 1.4em;
margin: 0 10px;

transition: all .4s cubic-bezier(0.694,.0482,.335,1);
border-color: #e6b75d;
background-color: #e6b75d;
}

.menu-try-button:hover {
      color: #000;
background-color: white;
}
</style>
