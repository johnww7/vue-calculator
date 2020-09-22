<template>

    <button :id="buttonId" class="num-button"> 
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
            this.$emit('numberedButtonPressed', this.buttonNum)
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