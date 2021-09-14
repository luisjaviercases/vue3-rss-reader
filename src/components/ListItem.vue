<template>
  <li class="item">
    <div class="item--info">
      <span class="title">{{ item.title }}</span>
      <span class="date">{{ item.pubDate }}</span>
      <p class="description">{{ parseContent(item.description) }}</p>
      <img :src="item.thumbnail" />
    </div>
    <div class="item--link">
      <router-link to="/info" @click="$emit('click')"> Ver más </router-link>
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
.item {
  list-style: none;
  display: flex;
  align-items: center;
  margin-top: 24px;
}

.item:first-of-type {
  margin-top: 0;
}

.item--info {
  display: flex;
  flex: 0 0 70%;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.item--link {
  flex: 0 0 30%;
}

.title {
  font-size: 24px;
}

.date {
  font-size: 12px;
}

.description {
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
