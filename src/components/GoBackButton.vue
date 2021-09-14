<template>
  <button class="button--go-back" @click="$router.back()">
    {{ $t("goBackComponent.back") }}
  </button>
</template>

<style scoped>
.button--go-back {
  margin-bottom: 0.5em;
}
</style>
