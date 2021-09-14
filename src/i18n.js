import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    goBackComponent: {
      back: 'Go back'
    },
    switchLanguage: {
      select: 'Select language'
    },
    header: {
      title: 'RSS Reader'
    },
  },
  es: {
    goBackComponent: {
      back: 'Atrás'
    },
    switchLanguage: {
      select: 'Seleccionar idioma'
    },
    header: {
      title: 'Lector RSS'
    },
  }
}
const i18n = createI18n({
  locale: 'en',
  messages
})

export default i18n