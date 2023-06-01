<template>
  <input
    v-bind="$attrs"
    v-model="value"
    class="
      tw-bg-gray-50 tw-border
      border-gray-300
      tw-text-gray-900
      tw-text-sm
      tw-rounded-lg
      tw-focus:ring-blue-500
      tw-focus:border-blue-500
      tw-block
      tw-w-full
      tw-p-2.5
      tw-dark:bg-gray-700
      tw-dark:border-gray-600
      tw-dark:placeholder-gray-400
      tw-dark:text-white
      tw-dark:focus:ring-blue-500
      tw-dark:focus:border-blue-500
    "
  />
</template>

<script lang="ts" setup>
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
const $attrs = useAttrs();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
