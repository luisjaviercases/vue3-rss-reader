<template>
  <div class="search-input">
    <span>{{ $t("searchInput.description") }}</span>
    <input
      type="text"
      :placeholder="$t('searchInput.placeholder')"
      v-model="searchQuery"
    />
  </div>
</template>

<script>
import { watch, ref } from "vue";

export default {
  props: {},
  emits: ["updatedQuery"],
  setup(props, { emit }) {
    const searchQuery = ref("");

    /**
     * Emit event to parent when input contains change
     */
    watch(searchQuery, (newVal) => {
      emit("updatedQuery", newVal);
    });

    return {
      searchQuery,
    };
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  margin-bottom: 0.5em;
}
</style>
