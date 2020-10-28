<template>
<div>
<button class="arith-button" v-on:click="getArithmeticValue">
    {{opsValue}}
</button>   
</div> 
</template>

<script>
export default {
    name: "arithmetic-button",
    props: ['opsValue'],
    methods: {
        getArithmeticValue() {
            let operationString = this.opsValue.toString().replace(/\s/g, "");
            this.$store.commit('addOperation',  operationString);
            console.log('Operation pressed: ' + this.opsValue);
        }
    }
}
</script>

<style>
    .arith-button {
        width: 75px;
        height: 75px;
    }
</style>