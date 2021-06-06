import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    counter: 0,
  },
  getters: {},
  mutations: {
    INCREMENT_COUNTER(state, payload) {
      state.counter = state.counter + Number(payload);
    },
    DECREMENT_COUNTER(state, payload) {
      state.counter = state.counter - Number(payload);
    },
  },
  actions: {
    async addRandomNumber(context) {
      const randonNum = await axios.get(
        "https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new"
      );
      
      context.commit("INCREMENT_COUNTER", randonNum.data);
    },
  },
});

export default store;
