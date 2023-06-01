<template>
  <div class="tw-min-h-screen">
    <Header />

    <div class="tw-w-full bg-body tw-flex">
      <div class="tw-px-6 tw-py-4 tw-w-full">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DashboardLayout",
});
</script>

<script lang="ts" setup>
import Header from "@components/base/Header.vue";
import Container from "@/components/base/Container.vue";
</script>

<style scoped></style>
