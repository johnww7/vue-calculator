<template>
<div>
    <button id="equal" v-on:click="setTotal">
        =
    </button>
</div>    
</template>

<script>
export default {
    name: 'equal-button',
    methods: {
        setTotal() {
            this.$store.commit('setTotal',  '=');
            this.findTotal();
            let accumulatedTotal = this.$store.getters.getTotalValue;
            this.$store.commit('pushAccumulator', accumulatedTotal);
        },
        findTotal(){
            let testExp = /[+×÷]/;
            let testForMinus = /[-]/;
            let entireOperation = this.$store.getters.getEntireOperation;
            console.log('Whats in entire Operation: ' + entireOperation);
            let tempArr = entireOperation.reduce(function(acc, next) {
                let tempValue = Number.parseFloat(next); 
                console.log('Type of tempValue: ' + typeof(tempValue))
                if(testExp.test(acc[acc.length-2]) && testForMinus.test(acc[acc.length-1]) && Number.isNaN(tempValue) == false) {
                    let lastAccEntry =  acc[acc.length-1] + tempValue;
                    acc.pop();    
                    acc.push(lastAccEntry);
                }
                else if(isNaN(tempValue) == false){
                    console.log('Is Nan: ' + tempValue);
                    acc.push(tempValue);
                }
                else {
                    console.log('Push next: ' + next);
                    acc.push(next);
                }
                console.log('Whats in acc: ' + acc);
                return acc;       
            }, []);

            let operationArray = [];
            var tempAcc = 0;
            console.log("whats in tempArr: " + tempArr);
            for(let element of tempArr) {
                console.log('Whats in operationArray1: ' + operationArray)
                if(element == "=") {
                   tempAcc = Math.round(operationArray[0]*1000)/1000;
                    console.log('Whats in tempAcc: ' + tempAcc)
                    break;
                }
                operationArray.push(element);

                if(operationArray.length == 3) {
                    let result = this.performOperation(operationArray);
                    console.log('Result of operation: ' + result);
                    operationArray.length = 0;
                    operationArray.push(result);
                }
                console.log('Whats in operationArray2: ' + operationArray)
            }
            console.log("whats in tempAcc: " + tempAcc);
            this.$store.commit('setAccumulator', tempAcc);

        },
        performOperation(arr) {
            let retVal = 0;
            switch(arr[1]) {
                case '+':
                retVal = arr[0] + arr[2];
                break;
            case '-':
            case '−':
                retVal = arr[0] - arr[2];
                break;
            case '×':
                retVal = arr[0] * arr[2];
                break;
            case '÷':
                retVal = arr[0] / arr[2];
                break;
            default:
                retVal = undefined;
                break;
            }
            return retVal;
        }
    }
}
</script>

<style scoped>
    #equal {
        width: 80px;
        height: 156px;
    }
</style>