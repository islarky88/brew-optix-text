import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appName: 'Brew Optix',
    menuItems: [{ title: 'Brand', link: '/' }, { title: 'Product', link: '/' }, { title: 'About', link: '/about' }],
    beerBrands: [],
  },
  mutations: {
    SET_BEER_BRANDS(state, payload) {
      state.beerBrands = payload;
    },
  },
  actions: {

    async fetchBeerBrands({ commit }, products) {

        let url = 'http://private-anon-e2d1d383a9-brewoptixv2.apiary-mock.com/brands';

        try {
          let { data } = await axios.get(url);

          if (data.length === 0) {
            throw new Error('No brands fetched');
          }

          commit('SET_BEER_BRANDS', data);

        } catch (e) {
          // eslint-disable-next-line no-console
          console.log(e);
        }

    },

  },
});
