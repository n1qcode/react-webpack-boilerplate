import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "./i18n.contants";
import { LanguageType } from "./i18n.typings";

const _i18n = (keySet, lang) => {
  return (key: string) => {
    if (!lang) {
      console.warn("lang is not defined.");
    }

    const language = lang || DEFAULT_LANGUAGE;
    const dictionary = keySet[language];

    if (!dictionary) {
      console.warn(`keySet with language '${language}' is not defined`);
      return key;
    }

    if (!dictionary[key]) {
      console.warn(`keySet with language '${language}' hasn't key '${key}'`);
      return key;
    }
    return dictionary[key];
  };
};

const i18n = (keySet: object, lang) => {
  const _keySet = {};

  for (const key in keySet) {
    if (SUPPORTED_LANGUAGES.includes(key as LanguageType)) {
      _keySet[key] = { ...keySet[key] };
    }
  }

  return _i18n(_keySet, lang);
};

export default i18n;
