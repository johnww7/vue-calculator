<template>
    <button :id="buttonId" class="num-button"> 
        {{num}}</button>
</template>

<script>
export default {
    name: 'NumberedButton',
    props: ["num", "buttonId"]
}
</script>

<style scoped>
    .num-button {
        width: 75px;
        height: 75px;
    }
</style>