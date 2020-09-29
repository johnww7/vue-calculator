import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        accumulator: 0,
        currentEntry: '0',
        entireOperation: []
    },
    getters: {
        getEntry(state) {
            return state.currentEntry;
        },
        getEntireOperation(state) {
            return state.entireOperation;
        } 
    },
    mutations: {
        incrementEntry(state, value) {
            if(state.currentEntry == 0 && value !== '.'){
                state.currentEntry = value;
            }
            else if(state.currentEntry.charAt(state.currentEntry.length-1) !== '.'
                || value !== '.'){
                    state.currentEntry += value;
            }
            else {
               // state.currentEntry;
               console.log('what')
            }
        },
        addOperation(state, value){
            if(value === '+' || value === '-' || value === '/' || value ==='x') {
                state.entireOperation.push(state.currentEntry, value);
                state.currentEntry = value;
            }
            else {
                console.log('Not an arithmetic value');
            }
        }
    }
})
