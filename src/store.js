import { reactive, readonly } from "vue";

const state = reactive({
  element: null,
});

export default {
  state: readonly(state),
  actions: {
    setElement(item) {
      state.element = item;
    },
  },
};
