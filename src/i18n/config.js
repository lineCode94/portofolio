import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import arTranslations from './locales/ar.json';

// Detect language from localStorage or browser
const savedLanguage = localStorage.getItem('app-language') || 'en';
const savedDirection = localStorage.getItem('app-direction') || 'ltr';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ar: { translation: arTranslations },
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    ns: ['translation'],
    defaultNS: 'translation',
  });

// Set initial direction
document.documentElement.dir = savedDirection;
document.documentElement.lang = savedLanguage;

export default i18n;
