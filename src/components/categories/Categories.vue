<template>
  <div class="tw-grid tw-grid-cols-4 tw-gap-5">
    <div v-for="category in categories" :key="category">
      <RouterLink :to="`/${category}`">
        <div
          class="
            tw-px-4
            tw-py-12
            tw-rounded-sm
            tw-border-success
            tw-border-2
            tw-cursor-pointer
            tw-text-center
            tw-capitalize
            tw-bg-slate-400
            tw-font-bold
          "
          :style="{backgroundColor: stc(category)}"
        >
          {{ category?.replaceAll("-", " ") }}
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import stc from 'string-to-color'
import { useProductsCategories } from "@/api/products/query";

const { data: categories } = useProductsCategories();
</script>
