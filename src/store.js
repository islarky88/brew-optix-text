import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appName: 'Brew Optix',
    menuItems: [{ title: 'Brand', link: '/' }, { title: 'Product', link: '/' }, { title: 'About', link: '/about' }],
    beerBrands: [],
  },
  mutations: {
    setBeerBrands(state, data) {
      state.beerBrands = data;
    },
  },
  actions: {},
});
