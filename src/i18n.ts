import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationFR from '../locales/fr/translation.json';
import translationEN from '../locales/en/translation.json';
import translationJP from '../locales/ja/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: translationFR },
      en: { translation: translationEN },
      ja: { translation: translationJP }
    },
    lng: 'fr', // Langue par défaut
    fallbackLng: 'fr', // Langue de secours si l'anglais est incomplet
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;