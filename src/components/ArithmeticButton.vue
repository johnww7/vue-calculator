<template>
<div>
<button class="arith-button">
    {{opsValue}}
</button>   
</div> 
</template>

<script>
export default {
    name: "arithmetic-button",
    props: ['opsValue']
}
</script>

<style>
    .arith-button {
        width: 80px;
        height: 80px;
    }
</style>