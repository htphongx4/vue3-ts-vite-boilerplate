<template>
  <Container>
    <article class="tw-prose tw-max-w-full tw-my-10">
      <h2 class="tw-text-center">Products Categories</h2>
    </article>

    <Categories />
  </Container>
</template>

<script lang="ts" setup>
import Categories from "@/components/categories/Categories.vue";
import Container from "@/components/base/Container.vue";
</script>
