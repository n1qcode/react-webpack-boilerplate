import { FC, useEffect } from "react";

import { DEFAULT_LANGUAGE } from "../../utils/i18n/i18n.contants";
import { toggleLanguage } from "../../store/slices/locale/locale.slice";
import useAppDispatch from "../../hooks/redux/useAppDispatch";
import { LocalStorageEnum } from "../../enums/localStorage.enums";
import { LanguageEnum } from "../../utils/i18n/i18n.enums";

import { ILocaleProvider } from "./LocaleProvider.typings";

const LocaleProvider: FC<ILocaleProvider> = (props) => {
  const { children } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const language =
      (localStorage.getItem(LocalStorageEnum.LANGUAGE) as LanguageEnum) ??
      DEFAULT_LANGUAGE;
    dispatch(toggleLanguage(language));
  }, []);

  return <>{children}</>;
};

export default LocaleProvider;
