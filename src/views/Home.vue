<template>
  <v-container>
    <h1>Brands List</h1>
    <v-container>
      <v-row>
        <v-col v-for="(item, i) in $store.state.storeItems"
          :key="i"
          cols="12"
          sm="6"
          lg="3"
        >
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

    {{ brands }}
  </v-container>
</template>

<script>
  import axios from 'axios';
  export default {
    components: {

    },
    data() {
      return {
        brands: [],
      };
    },
    mounted() {
      // console.log(process.env.BASE_API_URL);
      this.fetchBrands();
    },
    methods: {
      async fetchBrands() {

        let url = 'http://private-anon-e2d1d383a9-brewoptixv2.apiary-mock.com/brands';

        try {
          let { data } = await axios.get(url);

          if (data.length === 0) {
            throw new Error('Post not found.');
          }

          this.brands = data;
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log(e);
        }
      },
    },
  };
</script>
