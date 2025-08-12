import { Menu, Button, Group, Text } from '@mantine/core';
import { useLanguage } from '@hooks/useLanguage.hook';
import { useTranslateComponent } from '@hooks/useTranslate.hook';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { currentLanguage, changeLanguage, getAvailableLanguages } = useLanguage();
  const { t } = useTranslation();
  
  // Translate
  const useTranslate = (key: string, context?: { [key: string]: any }, i18Key?: boolean) =>
    useTranslateComponent(`components.language_switcher.${key}`, { ...context }, i18Key);

  const languages = getAvailableLanguages().map(lang => ({
    ...lang,
    name: t(`languages.${lang.code}`, { defaultValue: lang.name })
  }));
  
  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <Menu shadow="md" width={200} transitionProps={{ transition: "fade-down", duration: 150 }}>
      <Menu.Target>
        <Button variant="subtle" size="sm" leftSection={<FontAwesomeIcon icon={faGlobe} />}>
          {currentLang?.flag} {currentLang?.code.toUpperCase()}
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>{useTranslate('title')}</Menu.Label>
        {languages.map((language) => (
          <Menu.Item
            key={language.code}
            leftSection={<Text size="lg">{language.flag}</Text>}
            onClick={() => changeLanguage(language.code)}
            data-active={language.code === currentLanguage}
          >
            <Group justify="space-between">
              <Text>{language.name}</Text>
              {language.code === currentLanguage && (
                <Text size="xs" c="dimmed">✓</Text>
              )}
            </Group>
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
} 