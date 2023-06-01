<template>
  <div class="tw-w-full tw-mb-3">
    <div v-if="labelInput" class="tw-mb-1 tw-font-bold">
      {{ labelInput }}
      <span :class="requiredField" class="tw-text-primary">*</span>
    </div>
    <div class="wrapper-input">
      <input
        type="text"
        :value="modelValue"
        @input="handleInput"
        :placeholder="placeholderInput"
        :required="requiredField"
        class="charger-input"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  labelInput: {
    type: String,
    default: "",
  },
  requiredField: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
  placeholderInput: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["update:modelValue"]);
const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChargerInput",
});
</script>
<style lang="scss" scoped>
.wrapper-input {
    border: 1px solid #ced4da;
    border-radius: 4px;
  position: relative;
  padding: 8px;
  height: 40px;
}
.charger-input {
  position: absolute;
  color: #3c4858;
  background-color: transparent;
  width: 100%;
  &:focus {
    outline: none;
  }
}
</style>
