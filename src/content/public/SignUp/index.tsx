import React, { FC, useEffect, useState } from "react";
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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import { useSignupMutation } from "../../../store/api/auth.api";
import useTranslation from "../../../hooks/useTranslation";
import LocalizationPerformer from "../../../components/LocalizationPerformer";
import { PublicRoutes, RouteNames } from "../../../routes/routes.enum";
import styles from "../../../styles/auth.module.css/auth.module.css";

import * as keySet from "./SignUp.i18n";

const schema = yup
  .object({
    login: yup.string().required("Login is required field"),
    email: yup.string().required("Email is required field").email(),
    signupPassword: yup
      .string()
      .required()
      .min(8, "Password must be at least 8 characters long")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/\d/, "Password must contain at least one numeric digit")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("signupPassword")], "Passwords must match"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const SignUp: FC = () => {
  const router = useNavigate();
  const t = useTranslation(keySet);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [signUpRequest, { data: signUpRequestData }] = useSignupMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordConfirm = () =>
    setShowPasswordConfirm((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (!signUpRequestData) return;
    console.log("signUpRequestData --- ", signUpRequestData);
    router(PublicRoutes.LOGIN);
  }, [signUpRequestData]);

  const onSubmit = (data: FormData) => {
    console.log(data);
    signUpRequest({ login: "", password: "", email: "" });
  };

  const backToLoginHandler = () =>
    router(`${RouteNames.ROOT}${PublicRoutes.LOGIN}`);

  return (
    <div className={styles.root}>
      <h1>{t("join")}</h1>
      <form className={styles.formContent} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label={t("name")}
          variant="outlined"
          {...register("login")}
          error={!!errors.login}
          helperText={errors.login?.message}
        />
        <TextField
          label={"Email"}
          variant="outlined"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
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
              {errors.signupPassword?.message}
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
              {errors.confirmPassword?.message}
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
