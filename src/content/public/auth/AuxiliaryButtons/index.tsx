import styles from "../../../../styles/auth.module.css/auth.module.css";
import ThemeModePerformer from "../../../../components/ThemeModePerformer";
import LocalizationPerformer from "../../../../components/LocalizationPerformer";

const AuxiliaryButtons = () => {
  return (
    <div className={styles.buttons}>
      <ThemeModePerformer />
      <LocalizationPerformer />
    </div>
  );
};

export default AuxiliaryButtons;
