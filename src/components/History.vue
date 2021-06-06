<template>
  <h4>History</h4>
  <span style="margin: 2rem" v-for="(num, index) in list" :key="index">{{
    num
  }}</span>
  <div><input placeholder="Enter number" type="number" v-model="filteredNum"/></div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  setup() {
    const store = useStore();

    const filteredNum = ref(0)

    const list = computed(() => store.state.numList);

    return { list, filteredNum };
  },
};
</script>

