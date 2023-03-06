import useTranslation from "../../../hooks/useTranslation";

import * as keySet from "./Start.i18n";
import styles from "./Start.module.css";

const Start = () => {
  const t = useTranslation(keySet);

  return (
    <div className={styles.root}>
      <h1>{t("start")}</h1>
    </div>
  );
};

export default Start;
