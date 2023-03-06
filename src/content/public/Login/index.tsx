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

import useAppDispatch from "../../../hooks/redux/useAppDispatch";
import { useLoginMutation } from "../../../store/api/auth.api";
import { login } from "../../../store/slices/auth/auth.slice";
import useTranslation from "../../../hooks/useTranslation";
import LocalizationPerformer from "../../../components/LocalizationPerformer";
import { PublicRoutes, RouteNames } from "../../../routes/routes.enum";
import styles from "../../../styles/auth.module.css/auth.module.css";

import * as keySet from "./Login.i18n";

const schema = yup
  .object({
    login: yup.string().required("Login is required field"),
    password: yup
      .string()
      .required("Password is required field")
      .min(8, "Password must be at least 8 characters long"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const router = useNavigate();
  const t = useTranslation(keySet);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [loginRequest, { data: loginRequestData }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (!loginRequestData) return;
    console.log("loginRequestData --- ", loginRequestData);
  }, [loginRequestData]);

  const onSubmit = (data: FormData) => {
    console.log(data);
    loginRequest({ login: "", password: "" });
    // TODO move following code to useEffect after connected auth api
    dispatch(login({ isAuth: true }));
  };

  const signUpHandler = () =>
    router(`${RouteNames.ROOT}${PublicRoutes.SIGNUP}`);

  return (
    <div className={styles.root}>
      <h1>{t("greeting")}</h1>
      <form className={styles.formContent} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label={t("name")}
          variant="outlined"
          {...register("login")}
          error={!!errors.login}
          helperText={errors.login?.message}
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
              {errors.password?.message}
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
