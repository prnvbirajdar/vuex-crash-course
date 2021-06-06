<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Component1 />
  <History />
</template>

<script>
import Component1 from "./components/Component1.vue";
import History from "./components/History.vue";

export default {
  components: { Component1, History },
};
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
</style>
