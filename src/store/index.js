import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.store({
    state:{
        accumulator: 0,
        currentEntry: '0',
        entireOperation: []
    },
})
