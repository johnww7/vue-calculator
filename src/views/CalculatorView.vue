<template>
<div id="calculator-container">
    <display class="display-area"></display>
    <clear-button class="clear-area"></clear-button>
    <equal-button class="equal-area"></equal-button>
    <decimal-button class="decimal-area"></decimal-button>
    
    <number-button
        v-for="num in numButtonValues"
        v-bind:key="num.id"
        v-bind:num="num.value"
        v-bind:buttonId="num.id"
        v-bind:style="{ gridArea: num.id}"
        v-on:numberedButtonPressed="numberButtonVal"
    
    >
    </number-button>
    <number-button class="num-zero" 
    v-bind:num="0" buttonId="zero"> </number-button>
    <arithmetic-button 
        v-for="ops in arithButtonValues"
        v-bind:key="ops.id"
        v-bind:opsValue="ops.value"
        v-bind:style="{ gridArea: ops.id}"
    >
    </arithmetic-button>
</div>    
</template>

<script>
import ArithmeticButton from '../components/ArithmeticButton.vue';
import Clear from '../components/Clear.vue';
import Display from '../components/Display.vue';
import EqualButton from '../components/EqualButton.vue';
import NumberedButton from '../components/NumberedButton.vue';
import DecimalButton from '../components/DecimalButton.vue';

export default {
   name: 'CalculatorView',
   components: {
       "arithmetic-button":ArithmeticButton,
       "clear-button":Clear,
       "display":Display,
       "equal-button":EqualButton,
       "number-button":NumberedButton,
       "decimal-button":DecimalButton
   },
   data() {
       return {
       numButtonValues: [
           {id: 'one', value: 1}, {id: 'two', value: 2}, {id: 'three', value: 3},
           {id: 'four', value: 4}, {id: 'five', value: 5}, {id: 'six', value: 6},
           {id: 'seven', value: 7}, {id: 'eight', value: 8}, {id: 'nine', value: 9}],
        arithButtonValues: [
            {id: 'add', value: '+'}, {id: 'subtract', value: '-'},
            {id: 'multiply', value: 'x'}, {id: 'divide', value: '/'}
        ]
       
       }
       
   },
   methods: {
       numberButtonVal() {
           console.log('digit button pressed')
       }
   } 
}

</script>

<style>
    #calculator-container{
        width: 500px;
        height: 500px;
        display: grid;
        margin: 25px auto;
        
        border: 2px solid blue;
        grid-template-columns: repeat(5, 80px);
        grid-template-rows: repeat(6, 80px);
        /*justify-items: center;
        align-items: center;*/
        justify-content: center;
        padding-top: 10px;
        grid-column-gap: 1px;
        grid-row-gap: 1px;
        grid-template-areas:
            "display display display display display"
            "display display display display display"
            "seven eight nine divide clear"
            "four five six multiply clear"
            "one two three subtract equal"
            "num0 num0 deci add equal";
    }

    .display-area{
        grid-area: display;
    }
    .clear-area{
        grid-area: clear;
    }
    .equal-area {
        grid-area: equal;
    }
    .decimal-area {
        grid-area: deci;
    }
    .num-zero{
        grid-area: num0;
        width: 160px;
    }
    /*.num-area1 {
        grid-area: num1;
    }
    */
    .ops-area {
        grid-area: ops;
    }
</style>