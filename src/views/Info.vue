<template>
  <Header />
  <GoBackButton />
  {{ state.element.title }}
  {{ state.element.pubDate }}
  {{ parseContent(state.element.description) }}
</template>

<script>
import store from "../store";
import { useParseHTML } from "@/hooks/parseHTML";
import GoBackButton from "@/components/GoBackButton.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    GoBackButton,
    Header,
  },
  setup() {
    const { parseContent } = useParseHTML();

    return {
      state: store.state,
      parseContent,
    };
  },
};
</script>
