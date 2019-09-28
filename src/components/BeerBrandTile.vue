<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="`/img/brands/${image}.jpg`"
      height="200px"
    ></v-img>

    <v-card-title>
      <p>{{ brand }}</p>
    </v-card-title>
  </v-card>
</template>

<script>
  export default {
    props: {
      brand: {type: String, required: true},
      image: {type: String, required: true},
    },
  };
</script>

<style lang="scss" scoped>

</style>
