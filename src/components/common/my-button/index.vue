<template>
  <button
    :class="`${outlined ? outlinedButtonClass : buttonClass} ${sizeClass} ${
      outlined ? borderClass : ''
    }`"
    class="app-button tw-w-full"
    :disabled="disabled"
    :type="type"
    @click="onClickButton"
  >
    <div class="tw-flex tw-items-center tw-justify-center">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    color: {
      type: String,
      default: "primary",
    },
    colorText: {
      type: String,
      default: "primary",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    iconColor: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      isLoading: this.loading,
    };
  },

  computed: {
    buttonClass() {
      let className = "";
      switch (this.color) {
        case "primary":
          className =
            "tw-bg-primary tw-text-white tw-rounded-sm tw-capitalize tw-font-bold tw-border tw-border-solid tw-border-primary hover:tw-bg-primary-dark active:tw-bg-primary-medium disabled:tw-bg-grey-200 disabled:tw-border-grey-200 hover:tw-border-primary-dark";
          break;
        case "secondary":
          className =
            "tw-bg-secondary tw-text-white tw-rounded-sm tw-capitalize tw-font-bold tw-border tw-border-solid tw-border-secondary hover:tw-bg-secondary-dark active:tw-bg-secondary disabled:tw-bg-grey-200 disabled:tw-border-grey-200 hover:tw-border-secondary-dark";
          break;
        case "white":
          className =
            "tw-bg-white tw-text-secondary tw-rounded-sm tw-capitalize tw-font-bold tw-border tw-border-solid hover:tw-bg-input-bg disabled:tw-bg-white disabled:tw-text-secondary-extra-light";
          break;
        default:
          className = "tw-bg-primary tw-text-white hover:tw-bg-primary-dark";
          break;
      }

      return className;
    },

    outlinedButtonClass() {
      let className = "";
      switch (this.color) {
        case "primary":
          className =
            "tw-bg-white tw-text-primary tw-rounded-sm tw-capitalize tw-font-bold tw-border-primary tw-border tw-border-solid hover:tw-bg-primary-smoke active:tw-bg-primary-extra-light disabled:tw-bg-white";
          break;
        case "secondary":
          className =
            "tw-bg-grey-50 tw-text-secondary tw-rounded-sm tw-capitalize tw-font-bold tw-border tw-border-solid tw-border-secondary hover:tw-bg-grey-100 active:tw-bg-grey-200 disabled:tw-bg-white";
          break;
        default:
          className = "tw-bg-primary tw-text-white hover:tw-bg-primary-dark";
          break;
      }

      return className;
    },

    sizeClass() {
      let className = "";
      switch (this.size) {
        case "large":
          className = "tw-px-5 tw-py-2.5";
          break;
        case "medium":
          className = "tw-px-4 tw-py-2 tw-text-sm";
          break;
        case "small":
          className = "tw-px-3.5 tw-py-1.5 tw-text-sm";
          break;
        default:
          className = "tw-px-5 tw-py-2.5";
          break;
      }

      return className;
    },
    borderClass() {
      let className = "";
      switch (this.color) {
        case "primary":
          className = `${
            !this.disabled
              ? "tw-border-primary"
              : "tw-border-secondary-extra-light tw-text-secondary-extra-light"
          }  tw-border tw-border-solid`;
          break;
        case "secondary":
          className = `${
            !this.disabled
              ? "tw-border-secondary"
              : "tw-border-secondary-extra-light tw-text-secondary-extra-light"
          } tw-border tw-border-solid`;
          break;
        default:
          break;
      }
      return className;
    },
  },

  watch: {
    loading(isLoading) {
      this.isLoading = isLoading;
    },
  },
  methods: {
    onClickButton() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.app-button {
  -webkit-appearance: unset !important;
}
</style>
