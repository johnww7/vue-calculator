<template>
    
    <button id="decimal" v-on:click="addDecimal">
        .
    </button>
        
</template>

<script>
export default {
    name: "decimal-button",
    methods: {
        addDecimal() {
            //let numberString = this.buttonNum.toString().replace(/\s/g, "");
            this.$store.commit('incrementEntry',  '.');
        }
    }
}
</script>

<style scoped>
    #decimal {
        width: 75px;
        height: 75px;
    }
</style>