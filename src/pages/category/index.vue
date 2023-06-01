<template>
  <Container>
    <article class="tw-prose tw-max-w-full tw-my-4">
      <h2 class="tw-text-center tw-capitalize">
        {{ categoryId }}
      </h2>
    </article>
    <div class="category tw-grid tw-grid-cols-4 tw-gap-5 tw-pt-10">
      <div v-for="product in data?.products" :key="product.id">
        <ProductItem :product="product" />
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { useGetProductsByCategory } from "@/api/products/query";
import Container from "@/components/base/Container.vue";
import ProductItem from "@/components/product/ProductItem.vue";

const {
  params: { categoryId },
} = useRoute();

const { data } = useGetProductsByCategory(categoryId as string);
</script>
