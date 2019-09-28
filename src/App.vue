<template>
  <v-app class="pa-0">
    <TheMenu :elevate-menu="elevateMenu"></TheMenu>

    <v-content class="pa-0">
      <router-view></router-view>
      <div style="height: 1200px"></div>
    </v-content>
  </v-app>
</template>

<script>
  import TheMenu from './components/TheMenu';
  export default {
    name: 'App',
    components: {
      TheMenu,
    },
    data: () => ({
      scrollX: 0,
      scrollY: 0,
      elevateMenu: false,
    }),
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.scrollY = window.scrollY;
        this.scrollX = window.scrollX;
        if (window.scrollY > 50) {
          this.elevateMenu = true;
        } else {
          this.elevateMenu = false;
        }
      },
    },
  };
</script>

<style lang="scss">
* {
  font-family: "Montserrat";
}
#app {
  background-color: black;
}
.container {
  padding: 0;
}

</style>
