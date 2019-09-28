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
      <div class="d-flex">
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <BeerBrandTile brand="Carlsberg" image="carlsberg"></BeerBrandTile>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <BeerBrandTile brand="Heineken" image="heineken"></BeerBrandTile>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <BeerBrandTile brand="Sapporo" image="sapporo"></BeerBrandTile>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <!-- {{ beerBrands }} -->
  </v-container>
</template>

<script>
  import BeerBrandTile from '../components/BeerBrandTile';
  export default {
    components: {
      BeerBrandTile,
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
