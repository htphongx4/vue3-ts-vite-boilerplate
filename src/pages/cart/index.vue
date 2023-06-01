<template>
  <Container>
    <div class="tw-h-screen tw-pt-4">
      <h1 class="tw-mb-10 tw-text-center tw-text-2xl tw-font-bold">
        Cart Items
      </h1>
      <div
        class="
          tw-mx-auto tw-justify-center tw-px-6
          md:tw-flex md:tw-space-x-6
          xl:tw-px-0
        "
      >
        <div class="tw-rounded-lg md:tw-w-2/3">
          <ProductInCart
            v-for="(product, index) in cart?.products"
            :key="product.id"
            :product="product"
          />
        </div>
        <!-- Sub total -->
        <div
          v-if="cart"
          class="
            tw-mt-6
            tw-h-full
            tw-rounded-lg
            tw-border
            tw-bg-white
            tw-p-6
            tw-shadow-md
            md:tw-mt-0 md:tw-w-1/3
          "
        >
          <div class="tw-mb-2 tw-flex tw-justify-between">
            <p class="tw-text-gray-700">Subtotal</p>
            <p class="tw-text-gray-700">
              {{ formatMoney(cart?.total as number) }}
            </p>
          </div>
          <div class="tw-flex tw-justify-between">
            <p class="tw-text-gray-700">Discount Price</p>
            <p class="tw-text-red-600">
              {{ formatMoney(Number(cart?.total - cart?.discountedTotal)) }}
            </p>
          </div>
          <hr class="tw-my-4" />
          <div class="tw-flex tw-justify-between">
            <p class="tw-text-lg tw-font-bold">Total</p>
            <div class="">
              <p class="tw-mb-1 tw-text-lg tw-font-bold tw-text-right">
                {{ formatMoney(Number(cart?.discountedTotal)) }}
              </p>
              <p class="tw-text-sm tw-text-gray-700">including VAT</p>
            </div>
          </div>
          <button
            class="
              tw-mt-6
              tw-w-full
              tw-rounded-md
              tw-bg-blue-500
              tw-py-1.5
              tw-font-medium
              tw-text-blue-50
              hover:tw-bg-blue-600
            "
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/base/Container.vue";
import ProductInCart from "@/components/cart/ProductInCart.vue";
import useAuthStore from "@/store/auth";
import { useGetUserCarts } from "@/api/products/query";
import { storeToRefs } from "pinia";
import { formatMoney } from "@/utils/functions";

const { userInfo, loggedIn } = storeToRefs(useAuthStore());
const { data: cart } = useGetUserCarts(userInfo.value.id);
</script>
