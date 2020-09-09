<template>
<div id="calculator-container">
    <Display class="display-area"></Display>
    <Clear class="clear-area"></Clear>
    <EqualButton class="equal-area"></EqualButton>
    <DecimalButton class="decimal-area"></DecimalButton>
    
    <NumberedButton
        v-for="num in numButtonValues"
        v-bind:key="num.id"
        v-bind:num="num.value"
        v-bind:buttonId="num.id"
        v-bind:style="{ gridArea: num.id}"
    >
    </NumberedButton>
    <NumberedButton class="num-zero" 
    v-bind:num="0" buttonId="zero"> </NumberedButton>
    <ArithmeticButton 
        v-for="ops in arithButtonValues"
        v-bind:key="ops.id"
        v-bind:opsValue="ops.value"
        v-bind:style="{ gridArea: ops.id}"
    >
    </ArithmeticButton>
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
       ArithmeticButton,
       Clear,
       Display,
       EqualButton,
       NumberedButton,
       DecimalButton
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
       
   } 
}

</script>

<style scoped>
    #calculator-container{
        width: 500px;
        height: 500px;
        display: grid;
        margin: 25px auto;
        border: 2px solid blue;
        grid-template-columns: repeat(5, 75px);
        grid-template-rows: repeat(6, 75px);
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
        width: 150px;
    }
    /*.num-area1 {
        grid-area: num1;
    }
    .num-area2 {
        grid-area: num2;
    }
    .num-area3 {
        grid-area: num3;
    }
    .num-area4 {
        grid-area: num4;
    }
    .num-area5 {
        grid-area: num5;
    }
    .num-area6 {
        grid-area: num6;
    }
    .num-area7 {
        grid-area: num7;
    }
    .num-area8 {
        grid-area: num8;
    }
    .num-area9 {
        grid-area: num9;
    }*/
    .ops-area {
        grid-area: ops;
    }
</style>