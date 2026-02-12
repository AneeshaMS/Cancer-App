import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';
import en from './en.json';

const i18n = new I18n({ en });
i18n.defaultLocale = 'en';
i18n.locale = Localization.getLocales()[0]?.languageTag ?? 'en';
i18n.enableFallback = true;

export const t = (key: string, options?: Record<string, unknown>): string =>
  i18n.t(key, options);

export const setLocale = (locale: string): void => {
  i18n.locale = locale;
};

export { i18n };
