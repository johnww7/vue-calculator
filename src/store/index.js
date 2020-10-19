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
        },
        getTotalValue(state) {
            return state.accumulator;
        }
    },
    mutations: {
        incrementEntry(state, value) {
            if(state.currentEntry == '0' && value !== '.'){
                state.currentEntry = value;
                console.log('Equal zero and val not .')
            }
            else if((state.currentEntry).length == 1 && state.currentEntry == '0'
            && value == '.') {
                state.currentEntry += '.';
                console.log('Add decimal after 0')
            }
            else if(state.currentEntry.charAt(state.currentEntry.length-1) !== '.'
                || value !== '.'){
                    state.currentEntry += value;
                    console.log('Adding value to enty')
            }
            else {
               // state.currentEntry;
               //let currentEntry =state.currentEntry;
               //state.currentEntry = currentEntry;
               console.log('what')
            }
        },
        addOperation(state, value){
            let lastEntireOperation = state.entireOperation[state.entireOperation.length-1];
            let arithmeticExpression = /[+-×÷]/;
            if(arithmeticExpression.test(lastEntireOperation) && state.currentEntry == '') {
                console.log('Operation: ' + state.entireOperation);
                state.currentEntry = ''
            }
            else {
                state.entireOperation.push(state.currentEntry, value)
                state.currentEntry = value;
                state.currentEntry = '';
            }
            
            /*if(value === '+' || value === '-' || value === '/' || value ==='x') {
                state.entireOperation.push(state.currentEntry, value);
                state.currentEntry = value;
            }
            else {
                console.log('Not an arithmetic value');
            }*/
        },
        setTotal(state, value){
            if(value == '=') {
                state.entireOperation.push(state.currentEntry);
                state.currentEntry = value;
                state.entireOperation.push(value);            
            }
            else {
                console.log('Wrong input');
            }
        },
        setAccumulator(state, value) {
            state.accumulator = value;
            
        },
        pushAccumulator(state, value) {
            state.entireOperation.push(value); 
            state.currentEntry = value;
        },
        clearAll(state) {
            state.accumulator = 0;
            state.currentEntry = '0';
            let length = state.entireOperation.length
            state.entireOperation.splice(0, length);
        }
    }
})
