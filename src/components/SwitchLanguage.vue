<template>
  <div class="switch-language">
    <span class="switch-language__title">
      {{ $t("switchLanguage.select") }}
    </span>
    <select class="switch-language__selector" v-model="$i18n.locale">
      <option v-for="lang in langs" :key="'lang-' + lang" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  setup() {
    const langs = ["en", "es"];

    return {
      langs,
    };
  },
};
</script>

<style scoped>
.switch-language {
  display: flex;
  align-items: center;
}

.switch-language__title {
  margin-right: 0.75em;
}

.switch-language__selector {
  width: 4em;
  height: 1.75em;
  font-size: 0.75em;
}
</style>
