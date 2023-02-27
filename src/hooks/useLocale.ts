import i18n from "../utils/i18n/index";

import useAppSelector from "./redux/useAppSelector";

const useLocale = (keySet: object) => {
  const { language } = useAppSelector((store) => store.localeReducer);

  return i18n(keySet, language);
};

export default useLocale;
