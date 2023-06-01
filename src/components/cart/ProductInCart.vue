<template>
  <div
    class="
      tw-justify-between tw-mb-6 tw-rounded-lg tw-bg-white tw-p-6 tw-shadow-md
      sm:tw-flex sm:tw-justify-start
    "
  >
    <img
      :src="product.title"
      alt="product-image"
      class="tw-w-full tw-rounded-lg sm:tw-w-40"
    />
    <div class="sm:tw-ml-4 sm:tw-flex sm:tw-w-full sm:tw-justify-between">
      <div class="tw-mt-5 sm:tw-mt-0">
        <h2 class="tw-text-lg tw-font-bold tw-text-gray-900">
          {{ product.title }}
        </h2>
        <p class="tw-mt-1 tw-text-xs tw-text-gray-700">{{ formatMoney(product.price) }} / item</p>
      </div>
      <div
        class="
          tw-mt-4 tw-flex tw-justify-between
          sm:tw-space-y-6 sm:tw-mt-0 sm:tw-block sm:tw-space-x-6
        "
      >
        <div class="tw-flex tw-items-center tw-border-gray-100">
          <span
            class="
              tw-cursor-pointer
              tw-rounded-l
              tw-bg-gray-100
              tw-py-1
              tw-px-3.5
              tw-duration-100
              hover:tw-bg-blue-500 hover:tw-text-blue-50
            "
          >
            -
          </span>
          <input
            class="
              tw-h-8
              tw-w-8
              tw-border
              tw-bg-white
              tw-text-center
              tw-text-xs
              tw-outline-none
            "
            type="number"
            :value="product.quantity"
            min="1"
          />
          <span
            class="
              tw-cursor-pointer
              tw-rounded-r
              tw-bg-gray-100
              tw-py-1
              tw-px-3
              tw-duration-100
              hover:tw-bg-blue-500 hover:tw-text-blue-50
            "
          >
            +
          </span>
        </div>
        <div class="tw-flex tw-items-center tw-space-x-4">
          <p class="tw-text-sm">{{ formatMoney(product.total) }}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="
              tw-h-5 tw-w-5 tw-cursor-pointer tw-duration-150
              hover:tw-text-red-500
            "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IProductCart } from "@/types/cart.types";
import { formatMoney } from "@/utils/functions";

const { product } = defineProps<{ product: IProductCart }>();
</script>
