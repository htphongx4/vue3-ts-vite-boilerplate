<template>
  <div
    class="
      tw-relative
      tw-flex
      tw-w-full
      tw-max-w-xs
      tw-flex-col
      tw-overflow-hidden
      tw-rounded-lg
      tw-border
      tw-border-grey-50
      tw-bg-white
      tw-shadow-md
    "
  >
    <RouterLink :to="`/p/${product.id}`">
      <img
        class="tw-object-cover tw-h-52 tw-w-full"
        :src="product.thumbnail"
        alt="product image"
      />
      <span
        class="
          tw-absolute
          tw-top-0
          tw-left-0
          tw-m-2
          tw-rounded-full
          tw-bg-black
          tw-px-2
          tw-text-center
          tw-text-sm
          tw-font-medium
          tw-text-white
        "
      >
        {{ product.discountPercentage }}% OFF
      </span>
    </RouterLink>
    <div class="tw-mt-4 tw-px-5 tw-pb-5">
      <RouterLink :to="`/p/${product.id}`">
        <h5
          class="
            tw-text-lg tw-tracking-tight
            text-slate-900
            tw-h-16 tw-capitalize
          "
        >
          {{ product.title }}
        </h5>
      </RouterLink>
      <div class="tw-mt-2 tw-mb-5">
        <div class="tw-flex tw-items-end tw-mb-2">
          <p
            class="
              tw-text-xl tw-font-bold
              text-slate-900
              tw-mr-4 tw-text-red-500
            "
          >
            {{ formatMoney(product.price) }}
          </p>
          <p
            class="
              tw-text-sm
              text-slate-900
              tw-line-through tw-mb-2 tw-font-bold
            "
          >
            {{ formatMoney(realPrice) }}
          </p>
        </div>
        <div class="tw-flex tw-items-center">
          <svg
            aria-hidden="true"
            class="tw-h-5 tw-w-5 tw-text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            class="tw-h-5 tw-w-5 tw-text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            class="tw-h-5 tw-w-5 tw-text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            class="tw-h-5 tw-w-5 tw-text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            class="tw-h-5 tw-w-5 tw-text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <span
            class="
              tw-mr-2
              tw-ml-3
              tw-rounded
              tw-bg-yellow-200
              tw-px-2.5
              tw-py-0.5
              tw-text-xs
              tw-font-semibold
            "
          >
            {{ product.rating }}
          </span>
        </div>
      </div>
      <button
        href="#"
        class="
          tw-w-full
          tw-flex
          tw-font-bold
          tw-items-center
          tw-justify-center
          tw-rounded-lg
          tw-bg-slate-900
          tw-px-5
          tw-py-2.5
          tw-text-center
          tw-text-sm
          tw-text-white
          hover:tw-bg-gray-700
          focus:tw-outline-none focus:tw-ring-4 focus:tw-ring-blue-300
        "
        @click="onAddToCart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="tw-mr-2 tw-h-6 tw-w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Add to cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAddProductToCartMutation } from "@/api/products/query";
import { IProduct } from "@/types/product.types";
import { formatMoney } from "@/utils/functions";

const { product } = defineProps<{ product: IProduct }>();
const { user } = useAuth();

const { data, mutate } = useAddProductToCartMutation();

const realPrice = computed(() => {
  const discountPercentagePrice =
    (product.price * product.discountPercentage) / 100;

  return +(product.price + discountPercentagePrice).toFixed(0);
});

const onAddToCart = () => {
  mutate({
    userId: +user.value.id,
    products: [
      {
        id: product.id,
        quantity: 3,
      },
    ],
  });
};
</script>
