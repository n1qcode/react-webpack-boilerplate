import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import useAppSelector from "../../hooks/redux/useAppSelector";
import { selectTheme } from "../../store/slices/theme/selectors";
import Button from "../Button";
import { ThemeEnum } from "../../store/slices/theme/theme.enums";
import useAppDispatch from "../../hooks/redux/useAppDispatch";
import { toggleTheme } from "../../store/slices/theme/theme.slice";

const ThemeModePerformer = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const ThemeToggleIcon =
    theme === ThemeEnum.LIGHT ? <DarkModeIcon /> : <LightModeIcon />;

  const themeToggleHandler = () => {
    if (theme === ThemeEnum.LIGHT) dispatch(toggleTheme(ThemeEnum.DARK));
    if (theme === ThemeEnum.DARK) dispatch(toggleTheme(ThemeEnum.LIGHT));
  };

  return <Button onClick={themeToggleHandler}>{ThemeToggleIcon}</Button>;
};

export default ThemeModePerformer;
