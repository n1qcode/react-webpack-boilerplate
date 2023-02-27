import { FC, useEffect } from "react";

import { DEFAULT_LANGUAGE } from "../../utils/i18n/i18n.contants";
import { toggleLanguage } from "../../store/slices/locale/locale.slice";
import useAppDispatch from "../../hooks/redux/useAppDispatch";

import { ILocaleProvider } from "./LocaleProvider.typings";

const LocaleProvider: FC<ILocaleProvider> = (props) => {
  const { children } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) dispatch(toggleLanguage(storedLanguage));
    else dispatch(toggleLanguage(DEFAULT_LANGUAGE));
  }, []);

  return <>{children}</>;
};

export default LocaleProvider;
