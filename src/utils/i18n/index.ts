import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "./i18n.contants";

const _i18n = (keyset) => {
  return (word: string) => {
    if (!window.lang) {
      console.warn("window.lang is not defined.");
    }

    const language = window.lang || DEFAULT_LANGUAGE;
    const dictionary = keyset[language];

    if (!dictionary) {
      console.warn(`Keyset with language '${language}' is not defined`);
      return word;
    }

    if (!dictionary[word]) {
      console.warn(`Keyset with language '${language}' hasn't key '${word}'`);
      return word;
    }
    return dictionary[word];
  };
};

const i18n = (keyset: object) => {
  const _keyset = {};

  for (const key in keyset) {
    if (SUPPORTED_LANGUAGES.includes(key)) {
      _keyset[key] = { ...keyset[key] };
    }
  }

  return _i18n(_keyset);
};

export default i18n;
