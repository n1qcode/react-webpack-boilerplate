type IRole = "guest" | "user" | "admin";

export interface IAuth {
  isAuth: boolean;
  role: IRole;
}
