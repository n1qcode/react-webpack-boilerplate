import { FC } from "react";

import { useAppDispatch } from "../../store/hooks";
import { authSlice } from "../../store/slices/auth/auth.slice";

const Login: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Login page</h1>
      <button
        onClick={() => dispatch(authSlice.actions.login({ isAuth: true }))}
      >
        Авторизоваться
      </button>
    </div>
  );
};

export default Login;
