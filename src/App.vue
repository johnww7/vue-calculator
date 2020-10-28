<template>
  <div id="app">
    <CalculatorView></CalculatorView>
  </div>
</template>

<script>
import CalculatorView from './views/CalculatorView.vue'

export default {
  name: 'App',
  components: {
    CalculatorView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
body {
  background: linear-gradient(90deg, rgba(70, 77, 84, 0.7), rgba(243, 246, 249, 0.8), rgba(0, 0, 0, 0.8));
}
</style>
