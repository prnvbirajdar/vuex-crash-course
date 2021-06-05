<template>
  <h1>{{ counter }}</h1>
  <h2>{{ inputVal }}</h2>
  <button @click="decrement">-</button>
  <input type="number" v-model="inputVal" />
  <button @click="increment">+</button>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const counter = ref(0);

    const inputVal = ref(0);

    const increment = () => counter.value++;

    const decrement = () => counter.value--;

    return { counter, inputVal, increment, decrement};
  },
};
</script>

<style scoped></style>
