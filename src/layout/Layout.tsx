import { FC } from "react";
import { Outlet } from "react-router-dom";

import useAppSelector from "../hooks/redux/useAppSelector";
import { selectIsAuth } from "../store/slices/auth/selectors";

import styles from "./Layout.module.css";
import { ILayout } from "./Layout.typings";
import Header from "./Header";

const Layout: FC<ILayout> = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <div className={styles.root}>
      {isAuth && <Header />}
      <Outlet />
    </div>
  );
};

export default Layout;
