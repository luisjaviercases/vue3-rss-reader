<template>
  <div class="ui cards" style="margin: 10px">
    <div v-if="state.fetching"><h2>Fetching Data!</h2></div>
    <ul class="elements-list">
      <ListItem
        v-for="product in orderProducts"
        :key="product.id"
        :item="product"
        @click="addElement(product)"
      />
    </ul>
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import { useFetch } from "@/hooks/fetch";
import store from "../store";
import ListItem from "./ListItem.vue";

export default {
  components: {
    ListItem,
  },
  setup() {
    const state = reactive({
      response: [],
      error: null,
      fetching: false,
    });

    const orderProducts = computed(() => {
      return state.response;
    });

    function addElement(item) {
      store.actions.setElement(item);
    }

    const { response, error, fetchData, fetching } = useFetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://e00-marca.uecdn.es/rss/portada.xml",
      {}
    );

    fetchData();

    state.response = response;
    state.error = error;
    state.fetching = fetching;

    return {
      state,
      orderProducts,
      addElement,
    };
  },
};
</script>
