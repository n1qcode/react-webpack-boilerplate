import { Button } from "@mui/material";
import { useEffect } from "react";

import useAppDispatch from "../../hooks/redux/useAppDispatch";
import { useLazyLogoutQuery } from "../../store/api/auth.api";
import { logout } from "../../store/slices/auth/auth.slice";
import useTranslation from "../../hooks/useTranslation";
import LocalizationPerformer from "../../components/LocalizationPerformer";

import styles from "./Header.module.css";
import * as keySet from "./HeadBar.i18n";

const Header = () => {
  const dispatch = useAppDispatch();
  const t = useTranslation(keySet);

  const [logoutRequest, { data: logoutRequestData }] = useLazyLogoutQuery();

  useEffect(() => {
    if (!logoutRequestData) return;
  }, [logoutRequestData]);

  const logoutHandler = () => {
    logoutRequest(null);
    // TODO move following code to useEffect after connected auth api
    dispatch(logout());
  };

  return (
    <div className={styles.root}>
      <h1>{t("title")}</h1>
      <div className={styles.buttons}>
        <LocalizationPerformer />
        <Button onClick={logoutHandler}>{t("logout")}</Button>
      </div>
    </div>
  );
};

export default Header;
