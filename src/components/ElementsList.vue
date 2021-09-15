<template>
  <div class="elements-list">
    <AddFeedInput @setFeedUrl="doRequest" />
    <div v-if="state.fetching">
      <h2>{{ $t("elementList.loading") }}</h2>
    </div>
    <div class="elements-list__results-container" v-else-if="state.response">
      <SearchInput @updatedQuery="updateSearchQuery" />
      <span>{{ $t("elementList.info") }}</span>
      <button @click="sortBy('pubDate')">
        {{ $t("elementList.orderTitle") }}
        {{
          sorting.field === "pubDate"
            ? sorting.orderBy
              ? $t("elementList.ascending")
              : $t("elementList.descending")
            : ""
        }}
      </button>
      <ul>
        <ListItem
          v-for="item in orderItems"
          :key="item.id"
          :item="item"
          @click="addElement(item)"
        />
      </ul>
    </div>
    <div class="elements-list__no-results-container" v-else>
      {{ $t("elementList.noResultsToShow") }}
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
import { useFetch } from "@/hooks/fetch";
import store from "../store";
import ListItem from "./ListItem.vue";
import SearchInput from "./SearchInput.vue";
import AddFeedInput from "./AddFeedInput.vue";

export default {
  components: {
    ListItem,
    SearchInput,
    AddFeedInput,
  },
  setup() {
    const state = reactive({
      response: null,
      error: null,
      fetching: false,
    });

    const searchQuery = ref("");

    /**
     * oderBy value 1 = ascendent
     * oderBy value 0 = descendent
     */
    const sorting = ref({ field: "pubDate", orderBy: 1 });

    /**
     * Return filter list (from input inserted value) ordered by date
     */
    const orderItems = computed(() => {
      let aux = state.response.filter((item) => {
        return (
          item.title.toLowerCase().indexOf(searchQuery.value.toLowerCase()) !=
          -1
        );
      });
      return aux.sort(
        (a, b) =>
          new Date(a.pubDate).getTime() -
          new Date(b.pubDate).getTime() * sorting.value.orderBy
      );
    });

    /**
     * Save clicked element to store
     */
    function addElement(item) {
      store.actions.setElement(item);
    }

    /**
     * Update searchQuery value from inserted text in input by user
     */
    function updateSearchQuery(variable) {
      searchQuery.value = variable;
    }

    /**
     * Do request when user intrduces an URL in input
     */
    function doRequest(receivedUrl) {
      const { response, error, fetchData, fetching } = useFetch(
        receivedUrl,
        {}
      );

      //Call function to get data from request
      fetchData();

      state.response = response;
      state.error = error;
      state.fetching = fetching;
    }

    /**
     * Change sorting value when user clicks in button
     */
    function sortBy(field) {
      sorting.value = { field, orderBy: sorting.value.orderBy ? 0 : 1 };
    }

    return {
      state,
      sorting,
      searchQuery,
      orderItems,
      addElement,
      updateSearchQuery,
      sortBy,
      doRequest,
    };
  },
};
</script>

<style lang="scss" scoped>
.elements-list {
  &__no-results-container {
    font-size: 1.5em;
    margin-top: 1em;
  }
}
</style>
