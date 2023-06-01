import { loginMutation } from "@/api/auth/query";
import { $axios, setToken } from "@/plugins/axios";
import useAuthStore from "@/store/auth";
import { ACCESS_TOKEN_KEY, USER_ID } from "@/utils/constants";
import { storeToRefs } from "pinia";
import { useStorage } from "@vueuse/core";

export const useAuth = () => {
  const router = useRouter();
  const { start, finish } = useLoading();
  const { getUserInfo: fetchUser, updateUser } = useAuthStore();
  const { loggedIn, userInfo: user } = storeToRefs(useAuthStore());
  const accessToken = useStorage(ACCESS_TOKEN_KEY, "");
  const userId = useStorage(USER_ID, "");

  const {
    data: loginData,
    isLoading: isSignInLoading,
    error: signInError,
    mutateAsync,
  } = loginMutation();

  const signIn = async (values: { username: string; password: string }) => {
    const { password, username } = values;
    start();
    try {
      await mutateAsync({
        password,
        username,
      });

      if (loginData && loginData.value) {
        accessToken.value = loginData.value?.token;
        userId.value = String(loginData.value?.id);
        setToken($axios, loginData.value?.token, "Bearer");
        router.push("/");
      }
    } finally {
      finish();
    }
  };

  const signOut = () => {
    accessToken.value = null;
    userId.value = null;
    setToken($axios, undefined, "Bearer");
    router.push("/login");
  };

  return {
    loggedIn,
    user,
    isSignInLoading,
    signInError,
    fetchUser,
    signIn,
    signOut,
    updateUser,
  };
};
