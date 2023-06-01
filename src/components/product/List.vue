<script setup lang="ts">
import { useListProductsInfiniteQuery } from "@/api/products/query";
import { Waypoint } from "vue-waypoint";
import ProductItem from "./ProductItem.vue";

const router = useRouter();
const {
  data,
  fetchNextPage,
  hasNextPage,
  isFetching,
  isFetchingNextPage,
  isLoading,
  isSuccess,
} = useListProductsInfiniteQuery();

const onLoadMore = () => {
  if (!isFetchingNextPage.value) {
    fetchNextPage.value();
  }
};

const goProfile = () => {
  router.push("/profile");
};
</script>

<template>
  <div class="tw-container tw-mx-auto">
    <span v-if="isLoading">Loading...</span>
    <div v-else>
      <span v-if="isFetching && !isFetchingNextPage">Fetching...</span>

      <div
        v-for="(productsGroup, index) in data?.pages"
        :key="index"
        class="products-group"
      >
        <div
          class="tw-px-6 tw-py-3 tw-bg-gray-100 tw-gap-10"
          v-for="product in productsGroup.products"
          :key="product.id"
          @click="goProfile"
        >
          <ProductItem :product="product" />
        </div>
      </div>

      <Waypoint :active="hasNextPage && isSuccess" @change="onLoadMore">
        <div>
          <div
            role="status"
            class="
              tw-max-w-sm
              tw-p-4
              tw-border
              tw-border-gray-200
              tw-rounded
              tw-shadow
              tw-animate-pulse
              md:tw-p-6
              dark:tw-border-gray-700
            "
          >
            <div class="tw-flex tw-items-center tw-mt-4 tw-space-x-3">
              <svg
                class="tw-text-gray-200 tw-w-14 tw-h-14 dark:tw-text-gray-700"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div>
                <div
                  class="
                    tw-h-2.5 tw-bg-gray-200 tw-rounded-full
                    dark:tw-bg-gray-700
                    tw-w-32 tw-mb-2
                  "
                ></div>
                <div
                  class="
                    tw-w-48 tw-h-2 tw-bg-gray-200 tw-rounded-full
                    dark:tw-bg-gray-700
                  "
                ></div>
              </div>
            </div>
            <span class="tw-sr-only">Loading...</span>
          </div>
        </div>
      </Waypoint>
    </div>
  </div>
</template>
