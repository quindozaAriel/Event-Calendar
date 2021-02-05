require('./bootstrap');


import Vue from 'vue';

import App from './vue/app';
import store from './vue/store/';

import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue)

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const options = {
};
Vue.use(Toast, options);

const app = new Vue({
    el: '#app',
    components: { App },
    store
});