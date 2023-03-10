type RoleType = "guest" | "user" | "admin";

export interface IUser {
  role: RoleType;
  login?: string;
}

export interface IAuth {
  isAuth: boolean;
  user: IUser;
}
