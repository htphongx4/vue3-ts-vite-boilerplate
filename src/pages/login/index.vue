<template>
  <AuthTemplate>
    <div class="tw-text-center">
      <img
        class="tw-mx-auto tw-w-48"
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
        alt="logo"
      />
      <h4 class="tw-text-xl tw-font-semibold tw-mt-1 tw-mb-12 tw-pb-1">
        <p>username: kminchelle</p>
        <p>password: 0lelplR</p>
      </h4>
    </div>
    <form @submit.prevent="onLogin">
      <div class="tw-mb-6">
        <MyInput
          v-model="username"
          placeholder="Username"
          @keyup.enter="onLogin"
        />
        <p class="tw-text-red-500 tw-text-sm tw-mt-0.5">{{ usernameError }}</p>
      </div>
      <div>
        <MyInput
          v-model="password"
          placeholder="Password"
          type="password"
          @keyup.enter="onLogin"
        />
        <p class="tw-text-red-500 tw-text-sm tw-mt-0.5">{{ passwordError }}</p>
      </div>

      <div class="tw-text-red-500 tw-pt-1 tw-text-center">
        {{ (signInError as IError)?.message }}
      </div>
      <div class="tw-text-center tw-pt-1 tw-pb-1 tw-mt-6">
        <button
          class="
            tw-w-full
            tw-flex
            tw-font-bold
            tw-items-center
            tw-justify-center
            tw-rounded-lg
            tw-bg-blue-500
            tw-px-5
            tw-py-2.5
            tw-text-center
            tw-text-sm
            tw-text-white
            hover:tw-bg-blue-400
            focus:tw-outline-none focus:tw-ring-4 focus:tw-ring-blue-300
          "
          size="large"
          type="submit"
          :loading="isSignInLoading"
          :disabled="isSignInLoading"
        >
          Log in
        </button>
      </div>
      <div class="tw-flex tw-justify-end tw-mb-12">
        <router-link
          class="tw-text-blue-500 tw-underline tw-text-sm"
          to="/forgot-password"
        >
          Forgot password?
        </router-link>
      </div>
      <div class="tw-flex tw-items-center tw-justify-between tw-pb-6">
        <p class="tw-mb-0 tw-mr-2 tw-text-info tw-text-sm">
          Don't have an account?
        </p>
        <router-link
          to="/register"
          class="
            tw-flex
            tw-font-bold
            tw-items-center
            tw-justify-center
            tw-rounded-lg
            tw-bg-gray-400
            tw-px-5
            tw-py-2.5
            tw-text-center
            tw-text-sm
            tw-text-white
            hover:tw-bg-blue-400
            focus:tw-outline-none focus:tw-ring-4 focus:tw-ring-blue-300
          "
        >
          <button>Register</button>
        </router-link>
      </div>
    </form>
  </AuthTemplate>
</template>

<script lang="ts" setup>
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import AuthTemplate from "@modules/auth/AuthTemplate.vue";
import MyInput from "@/components/common/my-input/index.vue";
import { useAuth } from "@/composables/useAuth";
import { IError } from "@/types/error.types";

export interface LoginForm {
  username: string;
  password: string;
}

const { isSignInLoading, signInError, signIn } = useAuth();

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const { handleSubmit } = useForm<LoginForm>({ validationSchema });
const { value: username, errorMessage: usernameError } =
  useField<string>("username");
const { value: password, errorMessage: passwordError } =
  useField<string>("password");

const onLogin = handleSubmit(async (values) => {
  signIn(values);
});
</script>

<style></style>
