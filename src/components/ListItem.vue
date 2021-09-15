<template>
  <li class="list-item">
    <div class="list-item__info-container">
      <span class="list-item__info-container__title">{{ item.title }}</span>
      <span class="list-item__info-container__date">{{ item.pubDate }}</span>
      <p class="list-item__info-container__description">
        {{ parseContent(item.description) }}
      </p>
      <img :src="item.thumbnail" />
    </div>
    <div class="list-item__link-contaniner">
      <router-link
        class="list-item__link-container--link-more"
        to="/info"
        @click="$emit('click')"
      >
        {{ $t("listItem.viewMore") }}
      </router-link>
    </div>
  </li>
</template>

<script>
import { useParseHTML } from "@/hooks/parseHTML";

export default {
  props: {
    item: {},
  },
  emits: ["click"],
  setup() {
    const { parseContent } = useParseHTML();

    return {
      parseContent,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_mixins.scss";

.list-item {
  list-style: none;
  display: flex;
  align-items: center;
  margin-top: 1.5em;

  &:first-of-type {
    margin-top: 0;
  }

  &__info-container {
    display: flex;
    flex: 0 0 70%;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    &__title {
      font-size: 1.5em;
    }

    &__date {
      font-size: 0.75em;
    }

    &__description {
      @include two-lines-text;
    }
  }

  &__link-contaniner {
    flex: 0 0 30%;

    &--link-more {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
