import { FC, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

import useAppDispatch from "../../../hooks/redux/useAppDispatch";
import { useLoginMutation } from "../../../store/api/auth.api";
import { login } from "../../../store/slices/auth/auth.slice";
import useLocale from "../../../hooks/useLocale";
import LocalizationPerformer from "../../../components/LocalizationPerformer";

import styles from "./Login.module.css";
import * as keySet from "./Login.i18n";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

const Login: FC = () => {
  const dispatch = useAppDispatch();

  const t = useLocale(keySet);

  const { register, handleSubmit } = useForm<IFormInput>();

  const [loginRequest, { data: loginRequestData }] = useLoginMutation();

  useEffect(() => {
    if (!loginRequestData) return;
  }, [loginRequestData]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    loginRequest({ login: "", password: "" });
    // TODO move following code to useEffect after connected auth api
    dispatch(login({ isAuth: true }));
  };

  return (
    <div className={styles.root}>
      <h1>Welcome!</h1>
      <form className={styles.formContent} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          required={true}
          label={t("name")}
          variant="outlined"
          {...register("firstName", { required: true, maxLength: 20 })}
        />
        <TextField
          required={true}
          label={t("password")}
          variant="outlined"
          {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
        />
        <Button variant={"contained"} type="submit">
          {t("login")}
        </Button>
        <Button type={"button"} variant={"contained"}>
          {t("signup")}
        </Button>
      </form>
      <LocalizationPerformer />
    </div>
  );
};

export default Login;
