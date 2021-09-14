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
      <router-link to="/info" @click="$emit('click')">
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

<style scoped>
.list-item {
  list-style: none;
  display: flex;
  align-items: center;
  margin-top: 1.5em;
}

.list-item:first-of-type {
  margin-top: 0;
}

.list-item__info-container {
  display: flex;
  flex: 0 0 70%;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.list-item__link-contaniner {
  flex: 0 0 30%;
}

.list-item__info-container__title {
  font-size: 1.5em;
}

.list-item__info-container__date {
  font-size: 0.75em;
}

.list-item__info-container__description {
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
