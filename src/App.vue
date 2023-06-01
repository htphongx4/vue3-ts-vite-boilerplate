<template>
  <div class="my-app">
    <router-view />
    <LoadingVue />
  </div>
</template>

<script lang="ts" setup>
import LoadingVue from "@/components/base/Loading.vue";
</script>
