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