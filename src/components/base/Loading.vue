<template>
  <div v-if="isLoading" class="app-loading tw-flex tw-justify-center tw-items-center">
    <div class="tw-w-12 tw-h-12 tw-border-4 tw-border-dashed tw-rounded-full tw-animate-spin dark:tw-border-violet-400"></div>
  </div>
</template>

<script lang="ts" setup>
import useStore from "@/store";
import { storeToRefs } from "pinia";

const { isLoading } = storeToRefs(useStore());
</script>

<style lang="scss" scoped>
.app-loading {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.4;
  z-index: 999999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: 2s all;

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .text {
      color: #fbae17;
      display: inline-block;
      margin-left: 5px;
    }

    .bounceball {
      position: relative;
      display: inline-block;
      height: 37px;
      width: 15px;
      &:before {
        position: absolute;
        content: "";
        display: block;
        top: 0;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #fbae17;
        transform-origin: 50%;
        animation: bounce 500ms alternate infinite ease;
      }
    }
  }
}

@keyframes bounce {
  0% {
    top: 30px;
    height: 5px;
    border-radius: 60px 60px 20px 20px;
    transform: scaleX(2);
  }
  35% {
    height: 15px;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0;
  }
}
</style>
