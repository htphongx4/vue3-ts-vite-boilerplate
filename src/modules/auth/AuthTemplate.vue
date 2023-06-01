<template>
  <section
    class="tw-h-full gradient-form tw-bg-gray-200 md:tw-h-screen tw-bg-grey-100"
  >
    <div class="container tw-py-12 tw-px-6 tw-h-full">
      <div
        class="
          tw-flex tw-justify-center tw-items-center tw-flex-wrap tw-h-full
          g-6
          tw-text-gray-800
        "
      >
        <div class="xl:tw-w-8/12">
          <div class="tw-block tw-bg-white tw-shadow-lg tw-rounded-lg">
            <div class="lg:tw-flex lg:tw-flex-wrap g-0">
              <div class="lg:tw-w-6/12 tw-px-4 md:tw-px-0">
                <div class="md:tw-p-12 md:tw-mx-2">
                  <slot />
                </div>
              </div>
              <div
                class="
                  lg:tw-w-6/12
                  tw-flex tw-items-center
                  lg:tw-rounded-r-lg
                  tw-rounded-b-lg
                  lg:tw-rounded-bl-none
                "
                :style="{ background: bg }"
              >
                <div
                  class="tw-text-white tw-px-4 tw-py-6 md:tw-p-12 md:tw-mx-6"
                >
                  <h4 class="tw-text-xl tw-font-semibold tw-mb-6">
                    We are more than just a company
                  </h4>
                  <p class="tw-text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Login",
  computed: {
    bg() {
      return `linear-gradient(to right,#ee7724,#d8363a,#dd3675,#b44593)`;
    },
  },
});
</script>

<style></style>
