<template>
  <AuthTemplate> Register </AuthTemplate>
</template>

<script setup lang="ts">
import AuthTemplate from "@modules/auth/AuthTemplate.vue";
</script>

<style></style>

<route lang="yaml">
name: Register Page
meta:
  requiresAuth: false
  layout: "default"
</route>
