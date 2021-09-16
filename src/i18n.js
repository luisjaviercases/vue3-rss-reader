import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "en",
  messages: {
    en: require("./locales/en.json"),
    es: require("./locales/es.json"),
  },
});

export default i18n;
