import { useTranslation } from 'react-i18next';
import { useLocalStorage } from '@mantine/hooks';

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useLocalStorage({
    key: 'app-language',
    defaultValue: 'en',
  });

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  const getCurrentLanguage = () => currentLanguage;

  const getAvailableLanguages = () => [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'dk', name: 'Dansk', flag: '🇩🇰' },
  ];

  return {
    currentLanguage: getCurrentLanguage(),
    changeLanguage,
    getAvailableLanguages,
  };
}; 