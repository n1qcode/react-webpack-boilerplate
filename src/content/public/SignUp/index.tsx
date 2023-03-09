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

import useSignUp from "./useSignUp";

const SignUp: FC = () => {
  const {
    t,
    schema,
    showPassword,
    showPasswordConfirm,
    handleClickShowPasswordConfirm,
    handleClickShowPassword,
    handleMouseDownPassword,
    onSubmit,
    backToLoginHandler,
  } = useSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType<typeof schema>>({
    resolver: yupResolver(schema),
  });

  return (
    <div className={styles.root}>
      <h1>{t("join")}</h1>
      <form className={styles.formContent} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label={t("name")}
          variant="outlined"
          {...register("login")}
          error={!!errors.login}
          helperText={t(errors.login?.message ?? "")}
        />
        <TextField
          label={"Email"}
          variant="outlined"
          {...register("email")}
          error={!!errors.email}
          helperText={t(errors.email?.message ?? "")}
        />
        <FormControl variant="outlined">
          <InputLabel
            error={!!errors.signupPassword}
            htmlFor="outlined-adornment-signupPassword"
          >
            {t("password")}
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-signupPassword"
            type={showPassword ? "text" : "password"}
            {...register("signupPassword")}
            error={!!errors.signupPassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle signupPassword visibility"
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
          {errors.signupPassword && (
            <FormHelperText
              error={!!errors.signupPassword}
              id="signupPassword-helper-text"
            >
              {t(errors.signupPassword?.message ?? "")}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel
            error={!!errors.confirmPassword}
            htmlFor="outlined-adornment-confirmPassword"
          >
            {t("confirmPassword")}
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-confirmPassword"
            type={showPasswordConfirm ? "text" : "password"}
            {...register("confirmPassword")}
            error={!!errors.confirmPassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle confirmPassword visibility"
                  onClick={handleClickShowPasswordConfirm}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={t("confirmPassword")}
          />
          {errors.confirmPassword && (
            <FormHelperText
              error={!!errors.confirmPassword}
              id="confirmPassword-helper-text"
            >
              {t(errors.confirmPassword?.message ?? "")}
            </FormHelperText>
          )}
        </FormControl>
        <Button variant={"contained"} type="submit">
          {t("signup")}
        </Button>
        <Button
          variant={"contained"}
          type="button"
          onClick={backToLoginHandler}
        >
          {t("backToLogin")}
        </Button>
      </form>
      <LocalizationPerformer />
    </div>
  );
};

export default SignUp;
