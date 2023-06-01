<template>
  <button @click="back">ProfilE - Back</button>
</template>

<script setup lang="ts">
const router = useRouter();
const back = () => {
  router.back();
};
</script>
