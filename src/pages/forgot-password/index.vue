<script setup lang="ts">
import AuthTemplate from "@modules/auth/AuthTemplate.vue";
</script>

<template>
  <AuthTemplate> ForgotPassword </AuthTemplate>
</template>

<style></style>

<route lang="yaml">
name: Forgot Password Page
meta:
  requiresAuth: false
  layout: "default"
</route>
