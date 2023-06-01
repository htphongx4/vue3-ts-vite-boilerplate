<template>
  <div
    class="sidebar tw-h-screen tw-transition-all tw-p-2"
    :class="{
      'width-260': isCollapse,
      'width-72': !isCollapse,
    }"
  >
    <div
      class="sidebar__item-list tw-pl-0"
      :class="{ 'tw-text-center': !isCollapse }"
    >
      <router-link
        v-for="item in items"
        :key="item.title"
        :to="item.to || '/dashboard'"
        class="nav-item tw-py-3 tw-my-1 tw-cursor-pointer tw-flex tw-items-center"
        :class="{
          'tw-justify-center': !isCollapse,
          'tw-px-4 tw-justify-start': isCollapse,
        }"
      >
        <component
          :is="item.icon"
          :color="activeRoute(item.to) ? '#fff' : '#6F7592'"
        />
        <span class="tw-ml-4" v-if="isCollapse">{{ item.title }}</span>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { storeToRefs } from "pinia";
import ChargerIcon from "@components/icons/ChargerIcon.vue";

export default defineComponent({
  name: "Sidebar",
});
</script>

<script setup lang="ts">
import useStore from "@/store";
const route = useRoute();

const { isCollapse } = storeToRefs(useStore());

const items = computed(() => [
  { title: "First Item", icon: ChargerIcon, to: "/charger-list" },
]);

const activeRoute = (item: string) => {
  return route.path.includes(item);
};
</script>

<style lang="scss" scoped>
.sidebar {
  transition: 0.4s;
  background-color: #f9fafc;

  &__item-list {
    .nav-item {
      svg {
        min-width: 24px;
      }
    }
    .is-active {
      background-color: #3c4858;
      color: #fff;
      border-radius: 6px;
      text-decoration: none;

      &:hover {
        svg {
          color: white;
        }
      }
    }
  }
}

.width-72 {
  width: 72px;
}

.width-260 {
  width: 260px;
}
</style>
