<template>

    <button :id="buttonId" class="num-button" v-on:click="getButtonValue"> 
        {{num}}
    </button>
    
</template>

<script>
export default {
    name: "number-button",
    props: ["num", "buttonId"],
    data() {
        return {
            buttonNum: this.num
        }
    },
    methods: {
        getButtonValue() {
            let numberString = this.buttonNum.toString().replace(/\s/g, "");
            this.$store.commit('incrementEntry',  numberString);

        }
    }
}
</script>

<style>
    .num-button {
        width: 75px;
        height: 75px;
        
    }
</style>