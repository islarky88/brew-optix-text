<template>
  <v-container>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase mr-5">
        <span>{{ $store.state.appName }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="(item, i) in $store.state.menuItems"
        :key="i"
        class="ml-5"
        :to="item.link"
        text
      >
        {{ item.title }}
      </v-btn>


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
