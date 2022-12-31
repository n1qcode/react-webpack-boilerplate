type IRole = "user" | "admin";

export interface IAuth {
  isAuth: boolean;
  role: IRole;
}
