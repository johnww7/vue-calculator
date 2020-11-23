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
    <number-button 
        class="num-zero" 
        v-bind:num="0" 
        buttonId="zero"
        v-on:numberedButtonPressed="numberButtonVal"
    > 
    </number-button>
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
            {id: 'multiply', value: '×'}, {id: 'divide', value: '÷'}
        ]
       
       }
       
   },
   methods: {
       numberButtonVal(value) {
           console.log('digit button pressed: ' + value);
       }
   } 
}

</script>

<style>
    #calculator-container{
        width: 500px;
        height: 500px;
        display: grid;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
    border:5px outset #3e4348;
		border-radius: 10px 50px 30px;
		background-clip: border-box;
		background-image: -webkit-linear-gradient(45deg, #595959 12%,#4c4c4c 15%,#4c4c4c 15%,#515151 39%,#353832 61%,#d3d3d3 89%); /* Chrome10-25,Safari5.1-6 */
		background-image: linear-gradient(45deg, #595959 12%,#4c4c4c 15%,#4c4c4c 15%,#515151 39%,#353832 61%,#d3d3d3 89%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        grid-template-columns: repeat(5, 80px);
        grid-template-rows: repeat(6, 80px);
        justify-content: center;
        padding-bottom: 10px;
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
    .ops-area {
        grid-area: ops;
    }

    button {
        -moz-box-shadow: 0px 10px 16px -7px #0e20e6;
        -webkit-box-shadow: 0px 10px 16px -7px #0e20e6;
        box-shadow: 0px 10px 16px -7px #0e20e6;
        background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #5736d9), color-stop(1, #333859));
        background:-moz-linear-gradient(top, #5736d9 5%, #333859 100%);
        background:-webkit-linear-gradient(top, #5736d9 5%, #333859 100%);
        background:-o-linear-gradient(top, #5736d9 5%, #333859 100%);
        background:-ms-linear-gradient(top, #5736d9 5%, #333859 100%);
        background:linear-gradient(to bottom, #5736d9 5%, #333859 100%);
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#5736d9', endColorstr='#333859',GradientType=0);
        background-color:#5736d9;
        -moz-border-radius:8px;
        -webkit-border-radius:8px;
        border-radius:8px;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        font-family:Times New Roman;
        font-size:20px;
        font-weight:bold;
        padding:13px 32px;
        text-decoration:none;
        text-shadow:0px 1px 0px #c1b9c9;
        margin: 5px;
    }
    button:hover {
        background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #333859), color-stop(1, #5736d9));
        background:-moz-linear-gradient(top, #333859 5%, #5736d9 100%);
        background:-webkit-linear-gradient(top, #333859 5%, #5736d9 100%);
        background:-o-linear-gradient(top, #333859 5%, #5736d9 100%);
        background:-ms-linear-gradient(top, #333859 5%, #5736d9 100%);
        background:linear-gradient(to bottom, #333859 5%, #5736d9 100%);
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#333859', endColorstr='#5736d9',GradientType=0);
        background-color:#333859;
    }
    button:active {
        position:relative;
        top:1px;
    }
</style>