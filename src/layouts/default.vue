<template>
  <div class="default-layout">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DefaultLayout",
});
</script>

<style scoped></style>
