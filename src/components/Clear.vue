<template>

    <button id="clear" v-on:click="allClear">
        AC
    </button>
    
</template>

<script>
export default {
    name: "clear-button",
    methods:{
        allClear() {
            this.$store.commit('clearAll');
            console.log('Entry: ' + this.$store.getters.getEntry);
            console.log('EntireOperation: ' + this.$store.getters.getEntireOperation);
            console.log('accumulator: ' + this.$store.getters.getTotalValue);
        }
    }
}
</script>

<style>
    #clear {
        width: 80px;
        height: 156px;
        vertical-align: middle;
        display: table-cell;
    }
</style>