<template>
  <Container>
    <section class="tw-text-gray-700 body-font tw-overflow-hidden tw-bg-white">
      <div class="tw-px-5 tw-py-10">
        <div class="tw-mx-auto tw-flex tw-flex-wrap">
          <div
            class="
              lg:tw-w-5/12
              tw-w-full
              tw-object-cover
              tw-object-center
              tw-rounded
              tw-border
              tw-border-gray-200
              tw-bg-black
            "
          >
            <Swiper :images="product?.images ?? []" />
          </div>

          <div
            class="
              lg:tw-w-7/12
              tw-w-full
              lg:tw-pl-10 lg:tw-py-6
              tw-mt-6
              lg:tw-mt-0
            "
          >
            <h2
              class="
                tw-text-sm
                title-font
                tw-text-gray-500 tw-tracking-widest tw-capitalize
              "
            >
              {{ product?.brand }}
            </h2>
            <h1
              class="
                tw-text-gray-900 tw-text-3xl
                title-font
                tw-font-medium tw-mb-1 tw-capitalize
              "
            >
              {{ product?.title }}
            </h1>
            <div class="tw-flex tw-mb-4">
              <span class="tw-flex tw-items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="tw-w-4 tw-h-4 tw-text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="tw-w-4 tw-h-4 tw-text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="tw-w-4 tw-h-4 tw-text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="tw-w-4 tw-h-4 tw-text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="tw-w-4 tw-h-4 tw-text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                <span class="tw-text-gray-600 tw-ml-3">
                  {{ product?.rating }} Stars
                </span>
              </span>
              <span
                class="
                  tw-flex
                  tw-ml-3
                  tw-pl-3
                  tw-py-2
                  tw-border-l-2
                  tw-border-gray-200
                "
              >
                <a class="tw-text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="tw-w-5 tw-h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                    ></path>
                  </svg>
                </a>
                <a class="tw-ml-2 tw-text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="tw-w-5 tw-h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                    ></path>
                  </svg>
                </a>
                <a class="tw-ml-2 tw-text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="tw-w-5 tw-h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                    ></path>
                  </svg>
                </a>
              </span>
            </div>
            <p class="tw-leading-relaxed tw-mb-4">
              {{ product?.description }}
            </p>

            <div class="tw-flex tw-items-center">
              <div class="tw-flex tw-items-end tw-mb-2">
                <p
                  class="
                    tw-text-2xl tw-font-bold
                    text-slate-900
                    tw-mr-4 tw-text-red-500
                  "
                >
                  {{ formatMoney(product?.price ?? 0) }}
                </p>
                <p
                  class="
                    title-font
                    tw-font-medium
                    tw-text-lg
                    tw-text-gray-900
                    tw-line-through
                    tw-mb-1
                  "
                >
                  {{ formatMoney(realPrice ?? 0) }}
                </p>
              </div>

              <button
                class="
                  tw-flex
                  tw-ml-auto
                  tw-text-white
                  tw-bg-red-500
                  tw-border-0
                  tw-py-2
                  tw-px-6
                  focus:tw-outline-none
                  hover:tw-bg-red-600
                  tw-rounded
                "
              >
                Add to Cart
              </button>
              <button
                class="
                  tw-rounded-full
                  tw-w-10
                  tw-h-10
                  tw-bg-gray-200
                  tw-p-0
                  tw-border-0
                  tw-inline-flex
                  tw-items-center
                  tw-justify-center
                  tw-text-gray-500
                  tw-ml-4
                "
              >
                <HeartIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Container>
</template>

<script lang="ts" setup>
import { useGetProductDetails } from "@/api/products/query";
import Container from "@/components/base/Container.vue";
import Swiper from "@/components/base/Swiper.vue";
import { formatMoney } from "@/utils/functions";
import HeartIcon from "@/assets/svg/heart.svg?component";

const {
  params: { productId },
} = useRoute();

const { data: product } = useGetProductDetails(productId as string);

const realPrice = computed(() => {
  if (!product.value) return null;

  const discountPercentagePrice =
    (product.value?.price * product.value.discountPercentage) / 100;

  return +(product.value.price + discountPercentagePrice).toFixed(0);
});
</script>
