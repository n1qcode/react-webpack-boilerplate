import { UserRolesEnum } from "./auth.enums";

export interface IUser {
  role: UserRolesEnum;
  login?: string;
}

export interface IAuth {
  isAuth: boolean;
  user: IUser;
}
