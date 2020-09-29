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
            //this.$emit('numberedButtonPressed', this.buttonNum)
            let numberString = this.buttonNum.toString().replace(/\s/g, "");
            this.$store.commit('incrementEntry',  numberString);
            console.log("In number button component: " + typeof(this.buttonNum))

        }
    }
}
</script>

<style>
    .num-button {
        width: 80px;
        height: 80px;
        
    }
</style>