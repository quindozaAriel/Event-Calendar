import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {},
  mutations: {

  },
  actions: {
    storeEvents(){
        axios.post('',post)
    }
  },
  getters:{}
});