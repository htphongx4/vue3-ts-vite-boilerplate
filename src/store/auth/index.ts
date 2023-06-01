import { defineStore } from "pinia";
import state from "./state";
import { getUser } from "@/api/auth/auth";
import { IUser } from "@/types/user.types";

const useAuthStore = defineStore({
  id: "auth",
  state,
  actions: {
    async getUserInfo(userId: string | number) {
      try {
        const user = await getUser(userId);

        if (user) {
          this.userInfo = user;
          return Promise.resolve(user);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    },
    updateUser(user: IUser) {
      this.userInfo = user;
    },
  },
  getters: {
    loggedIn: ({ userInfo }) => !!userInfo.id,
  },
});

export default useAuthStore;
