<template>
<button class="arith-button">
    {{opsValue}}
</button>    
</template>

<script>
export default {
    name: 'ArithmeticButton',
    props: ['opsValue']
}
</script>

<style scoped>
    .arith-button {
        width: 75px;
        height: 75px;
    }
</style>