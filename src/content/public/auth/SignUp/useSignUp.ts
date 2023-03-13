import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import * as yup from "yup";

import { useSignupMutation } from "../../../../store/api/auth.api";
import useTranslation from "../../../../hooks/useTranslation";
import { PublicRoutes } from "../../../../routes/routes.enum";
import { FormDataType } from "../../../../typings/forms.typings";

import * as keySet from "./SignUp.i18n";

const useSignUp = () => {
  const router = useNavigate();
  const t = useTranslation(keySet);

  const [signUpRequest, { data: signUpRequestData }] = useSignupMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const schema = yup
    .object({
      login: yup.string().required("validationErrorLogin"),
      email: yup
        .string()
        .required("validationErrorEmail")
        .email("validationErrorEmailValid"),
      signupPassword: yup
        .string()
        .required("validationErrorPassword")
        .min(8, "validationErrorPasswordLength")
        .matches(/[a-z]/, "validationErrorPasswordLower")
        .matches(/[A-Z]/, "validationErrorPasswordUpper")
        .matches(/\d/, "validationErrorPasswordNumeric")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "validationErrorPasswordSpecial"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("signupPassword")], "validationErrorPasswordConfirm"),
    })
    .required();

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

  const onSubmit = (data: FormDataType<typeof schema>) => {
    console.log(data);
    signUpRequest({ login: "", password: "", email: "" });
  };

  const backToLoginHandler = () => router(PublicRoutes.LOGIN);

  return {
    t,
    schema,
    showPassword,
    showPasswordConfirm,
    handleClickShowPassword,
    handleClickShowPasswordConfirm,
    handleMouseDownPassword,
    backToLoginHandler,
    onSubmit,
  };
};

export default useSignUp;
