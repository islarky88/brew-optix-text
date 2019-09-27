<template>
  <v-container>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase mr-5">
        <span>{{ $store.state.appName }}</span>
      </v-toolbar-title>
      <v-btn class="ml-5" v-for="(item, i) in $store.state.menuItems" :key="i" :to="item.link" text>
        {{ item.title }}
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn text>
        Login
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
  export default {

  };
</script>

<style lang="scss" scoped>

</style>
