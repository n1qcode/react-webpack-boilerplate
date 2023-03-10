import i18n from "../utils/i18n/index";
import { selectLanguage } from "../store/slices/locale/selectors";

import useAppSelector from "./redux/useAppSelector";

const useTranslation = (keySet: object) => {
  const language = useAppSelector(selectLanguage);

  return i18n(keySet, language);
};

export default useTranslation;
