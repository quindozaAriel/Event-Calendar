import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

axios.defaults.headers.post['Content-Type'] = 'application/json';

export default new Vuex.Store({
  state: {
    events:[]
  },
  mutations: {
    setEvent(state,payload){
      state.events = payload;
    }
  },
  actions: {
    storeEvents(state,payload) {
      return new Promise((resolve, reject) => {
        axios.post('/api/event',payload)
          .then(result => {
            resolve(result.data);
          }).catch(error => {
            reject(error);
          });
      })
    },
    setEvents({commit}) {
      return new Promise((resolve, reject) => {
        axios.get('/api/event')
          .then(result => {
            commit('setEvent',result.data);
            resolve(result.data);
          }).catch(error => {
            reject(error);
          });
      })
    }
  },
  getters: {
    getEvents: state => state.events,
  }
});