<template>
  <v-container fluid class="px-0">
    <v-parallax src="/img/front-parallax.jpeg">
      <v-container class="align-center justify-center">
        <div class="d-flex justify-center flex-column">
          <div class="text-center"
            style="font-size: 36px;
          font-famly: 'Montserrat';
          text-transform: uppercase;
          font-weight: 900;"
          >
            Online Ordering
          </div>
          <div class="text-center mt-5"
            style="font-family: Playfair Display;
            font-style: italic;
            font-size: 18px;"
          >
            Apply to be part of our pilot program for craft brewers.
          </div>
        </div>
      </v-container>
    </v-parallax>


    <v-container>
      <h1>Brands List</h1>
      <v-row>
        <v-col v-for="(item, i) in beerBrands"
          :key="i"
          cols="12"
          sm="6"
          lg="3"
        >
          <v-card>
            <v-card-title primary-title>
              {{ item.name }}
            </v-card-title>
            <v-card-text>
              this is a text
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text :to="'/brand/' + item.supplier_id">
                See Details <v-icon>mdi-arrow-right-bold-hexagon-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- {{ beerBrands }} -->
  </v-container>
</template>

<script>
  // import axios from 'axios';
  export default {
    components: {

    },
    data() {
      return {
        brands: [],
      };
    },
    computed: {
      beerBrands() {
        return this.$store.state.beerBrands;
      },
    },
    mounted() {
      // console.log(process.env.BASE_API_URL);
      this.$store.dispatch('fetchBeerBrands');
    },
    methods: {
      // async fetchBrands() {

      //   let url = 'http://private-anon-e2d1d383a9-brewoptixv2.apiary-mock.com/brands';

      //   try {
      //     let { data } = await axios.get(url);

      //     if (data.length === 0) {
      //       throw new Error('Post not found.');
      //     }

      //     this.brands = data;
      //   } catch (e) {
      //     // eslint-disable-next-line no-console
      //     console.log(e);
      //   }
      // },
    },
  };
</script>
