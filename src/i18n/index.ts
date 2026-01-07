import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from './translations';

const savedLanguage = typeof window !== 'undefined' 
  ? localStorage.getItem('lux-language') || 'fr'
  : 'fr';

i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: savedLanguage,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
