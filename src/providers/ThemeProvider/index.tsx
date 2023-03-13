import { FC, useEffect } from "react";

import useAppDispatch from "../../hooks/redux/useAppDispatch";
import { LocalStorageEnum } from "../../enums/localStorage.enums";
import { ThemeEnum } from "../../store/slices/theme/theme.enums";
import { toggleTheme } from "../../store/slices/theme/theme.slice";
import { DEFAULT_THEME } from "../../store/slices/theme/theme.constants";

import { IThemeProvider } from "./ThemeProvider.typings";

const ThemeProvider: FC<IThemeProvider> = (props) => {
  const { children } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const theme =
      (localStorage.getItem(LocalStorageEnum.THEME) as ThemeEnum) ??
      DEFAULT_THEME;
    dispatch(toggleTheme(theme));
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;
