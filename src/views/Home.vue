<template>
  <v-container>
    <h1>Brands List</h1>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" lg="3">
          <v-card>
            <v-card-title primary-title>
              Brand
            </v-card-title>
            <v-card-text>
              this is a text
            </v-card-text>
            <v-card-actions>
              See Details
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
  import HelloWorld from '../components/HelloWorld';

  export default {
    components: {

    },
    mounted() {
      alert('hello');
    },
  };
</script>
