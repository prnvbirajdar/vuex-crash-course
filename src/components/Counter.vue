<template>
  <h1>{{ counter }}</h1>
  <button @click="decrement">-</button>
  <input type="number" v-model="inputVal" />
  <button @click="increment">+</button>
  <div>
    <button @click="addRandomNum">Add Random Number</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const inputVal = ref(0);

    const counter = computed(() => store.state.counter);

    function increment() {
      store.commit("INCREMENT_COUNTER", inputVal.value);
    }

    function decrement() {
      store.commit("DECREMENT_COUNTER", inputVal.value);
    }

    function addRandomNum() {
      store.dispatch("addRandomNumber");
    }

    return { counter, inputVal, increment, decrement, addRandomNum };
  },
};
</script>

<style scoped></style>
