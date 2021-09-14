<template>
  <div class="language-container">
    <span class="language-container--title">
      {{ $t("switchLanguage.select") }}
    </span>
    <select class="language-container--selector" v-model="$i18n.locale">
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

<style>
.language-container {
  display: flex;
  align-items: center;
}

.language-container--title {
  margin-right: 12px;
}

.language-container--selector {
  width: 70px;
  height: 25px;
  font-size: 18px;
}
</style>
