<template>
  <h1>{{ counter }}</h1>
  <button @click="decrement">-</button>
  <input type="number" v-model="inputVal" />
  <button @click="increment">+</button>
</template>

<script>
import { ref, computed } from "vue";
import {mapState} from 'vuex'

export default {
  setup() {
    // const counter = ref(0);

    const inputVal = ref(0);

    // const storeCounter = computed(()=> {
    //     return ...mapState('counter')})


    // const spacesLeft = computed(() => {
    //   return capacity.value - attending.value.length;
    // });

    const increment = () => counter.value++;

    const decrement = () => counter.value--;

    return {  inputVal, increment, decrement};
  },
computed:{
    ...mapState('counter')
}


};
</script>

<style scoped></style>
