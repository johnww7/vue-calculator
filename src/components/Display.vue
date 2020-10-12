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
            let currentEntry = this.$store.getters.getEntry;
            console.log('current inputdisplay: ' + currentEntry) 
             return this.$store.getters.getEntry;
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
            console.log('outputdisplay: ' + typeof(tempOperation));
            //let emptyArray = [];
            if(!Array.isArray(tempOperation) || !tempOperation.length) {
                return '0';
            }
            else {
                return tempOperation.join('');
            }
        }
    }
}
</script>

<style scoped>
    #display {
        width: 400px;
        height: 160px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
    }
</style>