import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

axios.defaults.headers.post['Content-Type'] = 'application/json';

export default new Vuex.Store({
  state: {},
  mutations: {

  },
  actions: {
    storeEvents(state,payload) {
      return new Promise((resolve, reject) => {
        axios.post('/api/event',payload)
          .then(result => {
            // commit('CREATE_POST', res.data)
            resolve(result);
          }).catch(error => {
            reject(error);
          });
      })
    }
  },
  getters: {}
});