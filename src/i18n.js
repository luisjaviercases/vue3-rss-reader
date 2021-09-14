import { createI18n } from "vue-i18n";

const messages = {
  en: {
    goBackComponent: {
      back: "Go back",
    },
    switchLanguage: {
      select: "Select language",
    },
    header: {
      title: "RSS Reader",
    },
    listItem: {
      viewMore: "View more",
    },
    searchInput: {
      placeholder: "Search...",
      description: "Filter by title: ",
    },
    elementList: {
      info: "Click to change: ",
      orderTitle: "Sorted by date ",
      ascending: "ascending",
      descending: "descending",
      loading: "Loading...",
    },
  },
  es: {
    goBackComponent: {
      back: "Atrás",
    },
    switchLanguage: {
      select: "Seleccionar idioma",
    },
    header: {
      title: "Lector RSS",
    },
    listItem: {
      viewMore: "Ver más",
    },
    searchInput: {
      placeholder: "Buscar...",
      description: "Filtrar por título: ",
    },
    elementList: {
      info: "Click para cambiar: ",
      orderTitle: "Ordenado ",
      ascending: "ascendentemente",
      descending: "descendentemente",
      loading: "Cargando...",
    },
  },
};

const i18n = createI18n({
  locale: "en",
  messages,
});

export default i18n;
