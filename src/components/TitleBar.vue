<template>
  <div class="flex justify-between items-center pt-10 px-3 lg:px-4 pb-5">
    <div class="flex gap-4 items-center">
      <button class="lg:hidden" @click="toggleSidebar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <h2 class="text-xl md:text-2xl xl:text-3xl">{{ title }}</h2>
    </div>
  </div>
</template>

<script>
import { title, toggle_sidebar } from "@/store/title";
export default {
  name: "TitleBar",
  computed: {
    title() {
      return title.value;
    },
  },
  methods: {
    toggleSidebar() {
      toggle_sidebar();
    },
  },
};
</script>
