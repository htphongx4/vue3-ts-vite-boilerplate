import { UseQueryOptions, useMutation, useQuery } from "vue-query";
import { getUser, login } from "./auth";
import { ILoginBody } from "@/types/auth.types";

export const loginMutation = (options?: UseQueryOptions) => {
  return useMutation({
    mutationFn: (body: ILoginBody) => login(body),
  });
};
