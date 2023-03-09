import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import * as yup from "yup";

import { useLoginMutation } from "../../../store/api/auth.api";
import { login } from "../../../store/slices/auth/auth.slice";
import { PublicRoutes, RouteNames } from "../../../routes/routes.enum";
import useAppDispatch from "../../../hooks/redux/useAppDispatch";
import { FormDataType } from "../../../typings/forms.typings";
import useTranslation from "../../../hooks/useTranslation";

import * as keySet from "./Login.i18n";

const useLogin = () => {
  const t = useTranslation(keySet);
  const dispatch = useAppDispatch();
  const router = useNavigate();

  const schema = yup
    .object({
      login: yup.string().required("validationErrorLogin"),
      password: yup
        .string()
        .required("validationErrorPassword")
        .min(8, "validationErrorPasswordLength"),
    })
    .required();

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

  const onSubmit = (data: FormDataType<typeof schema>) => {
    console.log(data);
    loginRequest({ login: "", password: "" });
    // TODO move following code to useEffect after connected auth api
    dispatch(login({ isAuth: true }));
  };

  const signUpHandler = () =>
    router(`${RouteNames.ROOT}${PublicRoutes.SIGNUP}`);

  return {
    t,
    schema,
    showPassword,
    onSubmit,
    signUpHandler,
    handleClickShowPassword,
    handleMouseDownPassword,
  };
};

export default useLogin;
