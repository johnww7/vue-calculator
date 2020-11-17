<template>
<div id="display">
    <span id="output-display">{{entireOperationDisplay}}</span>
    <br />
    <span id=input-display>{{currentEntryDisplay}}</span>
</div>    
</template>

<script>
export default {
    name: 'display',
    computed: {
        currentEntryDisplay() {
            let currentEntry = (this.$store.getters.getEntry);
            let currentOperation = this.$store.getters.getEntireOperation;
            let accumulator = this.$store.getters.getTotalValue;
            let arithmeticExpression = /[+-×÷]/;
            console.log('current inputdisplay: ' + currentEntry + ' acc: ' + accumulator);
            console.log('type: ' + typeof(currentEntry) + ' Length: ' + currentEntry.length);
            
            if(currentEntry !== '' && arithmeticExpression.test(currentEntry) == false) {
                console.log('Input display 1: ' + currentEntry)
                return currentEntry;
            }
            else if(currentEntry !== '' && arithmeticExpression.test(currentEntry)) {
                // && arithmeticExpression.test(accumulator) == false
                console.log('Input display 2: ' + currentEntry)
                //let entryPlace= currentEntry.slice(1);
                
                //return entryPlace;
                return currentEntry;
            }
            else if(arithmeticExpression.test(currentOperation[currentOperation.length-1])) {
                console.log('input display: ' + currentOperation);
                return currentOperation[currentOperation.length-1]
            }else {
                console.log('current inputdisplay: ' + currentEntry) 
                return this.$store.getters.getEntry;
            }
            /*let returnedEntry = this.$store.getters.getEntry;
            let arithmeticExpression = /[+-×÷]/;
            let returnValue = ''
            if(arithmeticExpression.test(returnedEntry)) {
                returnValue = returnedEntry.charAt(1);
            }
            else {
                returnValue += returnedEntry;
            }
            console.log('Display: ' + returnValue)
            return returnValue;*/
        },
        entireOperationDisplay() {
            let tempOperation = this.$store.getters.getEntireOperation;
            let currentEntry = this.$store.getters.getEntry;
            //let lastOperation = tempOperation.length-1;
            console.log('outputdisplay: ' + tempOperation);
            console.log('current Entry: ' + currentEntry);
            console.log('current Operation: ' + tempOperation);
            //let emptyArray = [];
            if(!Array.isArray(tempOperation) || !tempOperation.length) {
                //return '0';
                console.log('Outdisplay 1');
                return currentEntry;
            }
            else if((!Array.isArray(tempOperation) || !tempOperation.length) && currentEntry !== '.' && 
            tempOperation[tempOperation.length-1] !== '.') {
                console.log('Outdisplay 2');
                return currentEntry;
            }
            else if(tempOperation[tempOperation.length-1] == '.' && currentEntry.charAt(currentEntry.length-1) == '.'){
                console.log('Outdisplay 3');
                return tempOperation.join('');            
            }
            else if((!Array.isArray(tempOperation)||tempOperation.length !== 0) && tempOperation.includes('=') == false) {
                console.log('Outdisplay 4: ' + (tempOperation.join('') + currentEntry));
                return tempOperation.join('') + currentEntry;
                //return tempOperation.join('');
                //return currentEntry;
            }
            else if((!Array.isArray(tempOperation) || !tempOperation.length) &&  currentEntry == '.') {
                console.log('Outdisplay 5');
                return ('0' + currentEntry);
            }
            else {
               console.log('Outdisplay 6');
               return tempOperation.join('');
               //return currentEntry;
            }
            
            /*if(!Array.isArray(tempOperation) || !tempOperation.length) {
                //return '0';
                return currentEntry;
            }
            else {
                return tempOperation.join('');
            }*/
        }
    }
}
</script>

<style scoped>
    #display {
        width: 400px;
        height: 100px;
        margin: auto;
        background-color: rgba(93, 199, 111, 0.2);
	border: 4px inset #0f2940;
        display: flex;
        flex-direction: column;
        text-align: right;
        border-radius: 3em/1em
        
    }
    #output-display {
        width: auto;
        height: 30px;
        font-size: 20px;
        font-family: 'Graduate', cursive;
        margin-right: 39px;
        margin-top: 5px;
    }
    #input-display {
        width: auto;
        height: 50px;
        font-size: 35px;
        font-family: 'Graduate', cursive;
        margin-right: 39px;
        margin-bottom: 5px;
    }
</style>