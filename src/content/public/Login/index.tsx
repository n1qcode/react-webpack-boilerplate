import { FC } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { yupResolver } from "@hookform/resolvers/yup";

import LocalizationPerformer from "../../../components/LocalizationPerformer";
import styles from "../../../styles/auth.module.css/auth.module.css";
import { FormDataType } from "../../../typings/forms.typings";

import useLogin from "./useLogin";

const Login: FC = () => {
  const {
    t,
    schema,
    showPassword,
    onSubmit,
    signUpHandler,
    handleClickShowPassword,
    handleMouseDownPassword,
  } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType<typeof schema>>({
    resolver: yupResolver(schema),
  });

  return (
    <div className={styles.root}>
      <h1>{t("greeting")}</h1>
      <form className={styles.formContent} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label={t("name")}
          variant="outlined"
          {...register("login")}
          error={!!errors.login}
          helperText={t(errors.login?.message ?? "")}
        />
        <FormControl variant="outlined">
          <InputLabel
            error={!!errors.password}
            htmlFor="outlined-adornment-password"
          >
            {t("password")}
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            error={!!errors.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {errors.password && (
            <FormHelperText error={!!errors.password} id="password-helper-text">
              {t(errors.password?.message ?? "")}
            </FormHelperText>
          )}
        </FormControl>
        <Button variant={"contained"} type="submit">
          {t("login")}
        </Button>
        <Button type={"button"} variant={"contained"} onClick={signUpHandler}>
          {t("signup")}
        </Button>
      </form>
      <LocalizationPerformer />
    </div>
  );
};

export default Login;
