import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      chat: 'Chat',
      typeMessage: 'Type a message...',
      send: 'Send',
      error: 'Error',
      microphoneAccessDenied: 'Microphone access was denied',
    },
  },
  es: {
    translation: {
      chat: 'Chat',
      typeMessage: 'Escribe un mensaje...',
      send: 'Enviar',
      error: 'Error',
      microphoneAccessDenied: 'Se denegó el acceso al micrófono',
    },
  },
  fr: {
    translation: {
      chat: 'Chat',
      typeMessage: 'Écrivez un message...',
      send: 'Envoyer',
      error: 'Erreur',
      microphoneAccessDenied: "L'accès au microphone a été refusé",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;