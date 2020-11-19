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
            //let arithmeticExpression = /[+-×÷]/;
            if((state.entireOperation).includes('=')) {
                state.accumulator = 0;
                state.currentEntry = '0';
                let length = state.entireOperation.length
                state.entireOperation.splice(0, length);
            }
            if(state.currentEntry == '0' && value !== '.'){
                state.currentEntry = value;
                console.log('Equal zero and val not .')
            }
            else if((state.currentEntry).length == 1 && state.currentEntry == '0'
            && value == '.') {
                state.currentEntry += '.';
                console.log('Add decimal after 0')
            }
            /*else if(state.currentEntry.charAt(state.currentEntry.length-1) !== '.'
            || value !== '.' || arithmeticExpression.test(state.currentEntry.length-1) == false) {
                state.currentEntry = value;
                console.log('Checking for operator: ' + state.currentEntry)
            }*/
            else if(state.currentEntry.charAt(state.currentEntry.length-1) !== '.'
                || value !== '.' ){
                    state.currentEntry += value;
                    console.log('Adding value to entry: ' + state.currentEntry);
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
            let entry = Number(state.currentEntry);
            console.log('entry: ' + entry + ' value: ' + value);
            console.log('Entire operation before operator: ' + state.entireOperation)
            console.log('Last operator: ' + lastEntireOperation);
            let arithmeticExpression = /[+-×÷]/;
            let arithemticExprNoMinus = /[+×÷]/;
            if((state.entireOperation).includes('=') && arithmeticExpression.test(value)){
                state.accumulator = lastEntireOperation;
                state.currentEntry = value;
                let length = state.entireOperation.length
                console.log('last operation: ' + lastEntireOperation);
                state.entireOperation.splice(0, length);
                state.entireOperation.push(lastEntireOperation);
                state.entireOperation.push(value);
                state.currentEntry = '';
                console.log('Whats in operation after total: ' + state.entireOperation);
            }
            else if(arithmeticExpression.test(lastEntireOperation-1) && lastEntireOperation == '-' && value !== '-') {
                console.log('Removing 2 operators');
                state.entireOperation.pop();
                state.entireOperation.pop();
                state.entireOperation.push(value);
                state.currentEntry = value;
                state.currentEntry = '';
            }
            else if(isNaN(entry) == false && arithmeticExpression.test(value) && entry !== 0){
                //&& (arithmeticExpression.test(lastEntireOperation) && arithmeticExpression.test(value)) == false
                console.log('push state current entry and operation entered');
                state.entireOperation.push(state.currentEntry, value)
                state.currentEntry = value;
                state.currentEntry = '';
            }
            else if(arithmeticExpression.test(lastEntireOperation) && lastEntireOperation !== undefined && 
            value !== '-' ) {
                //&& isNaN(entry) == true
                state.entireOperation.pop();
                console.log('After removing op: ' + state.entireOperation);
                console.log('state: ' + state.currentEntry + ' : ' + value);
                console.log('state tyep: ' + typeof(state.currentEntry))
                state.entireOperation.push(value);
                
                state.currentEntry = value;
                state.currentEntry = '';
            }
            else if(arithemticExprNoMinus.test(lastEntireOperation) && lastEntireOperation !== undefined 
            && value == '-'){
                // && isNaN(entry) == true
                console.log('Adding minus sign' + ' currententry: ' + state.currentEntry);
                //state.entireOperation.push(state.currentEntry, value);
                state.entireOperation.push(value);
                state.currentEntry = value;
                state.currentEntry = '';  
            }
            else if(arithmeticExpression.test(lastEntireOperation) && state.currentEntry == '') {
                console.log('Operation from store: ' + state.entireOperation);
                state.currentEntry = ''
            }
            else {
                console.log('push state current entry and operation entered');
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
