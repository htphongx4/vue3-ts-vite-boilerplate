import { IUser } from "@/types/user.types";

interface IAuthState {
  userInfo: IUser;
}

export default (): IAuthState => ({
  userInfo: {} as IUser,
});
