import { FC } from "react";
import { Outlet } from "react-router-dom";

import { useAppSelector } from "../store/hooks";

import styles from "./Layout.module.css";
import { ILayout } from "./Layout.typings";

const Layout: FC<ILayout> = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);

  return (
    <div className={styles.root}>
      {isAuth && <h1>Header</h1>}
      <Outlet />
    </div>
  );
};

export default Layout;
