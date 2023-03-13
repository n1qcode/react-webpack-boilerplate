import { FC, lazy } from "react";
import { Outlet } from "react-router-dom";
import cn from "classnames";

import useAppSelector from "../hooks/redux/useAppSelector";
import { selectIsAuth } from "../store/slices/auth/selectors";
import { ThemeEnum } from "../store/slices/theme/theme.enums";
import { selectTheme } from "../store/slices/theme/selectors";

import styles from "./Layout.module.css";
import { ILayout } from "./Layout.typings";

const Header = lazy(() => import("../layout/Header"));

const Layout: FC<ILayout> = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const theme = useAppSelector(selectTheme);

  return (
    <div
      className={cn(styles.root, {
        [styles.light]: theme === ThemeEnum.LIGHT,
        [styles.dark]: theme === ThemeEnum.DARK,
      })}
    >
      {isAuth && <Header />}
      <Outlet />
    </div>
  );
};

export default Layout;
