import { CircularProgress } from "@mui/material";

import styles from "./GlobalLoader.module.css";

const GlobalLoader = () => {
  return (
    <div className={styles.root}>
      <CircularProgress />
    </div>
  );
};

export default GlobalLoader;
