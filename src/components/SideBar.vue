<template>
  <div
    class="lg:static lg:flex flex-col w-full lg:h-auto sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2.1/12 2xl:w-2/12 bg-white pt-8 px-6 justify-between border-r z-20"
    :class="showSidebar ? 'fixed h-full' : 'hidden'"
  >
    <div class="flex flex-col">
      <div class="flex justify-between text-gray-800">
        <button class="lg:hidden" @click="dismissSidebar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <slot name="links" />
    </div>
  </div>
</template>

<script>
import { show_sidebar, toggle_sidebar } from "@/store/title";
export default {
  name: "SideBar",
  computed: {
    showSidebar() {
      return show_sidebar.value;
    },
  },
  methods: {
    dismissSidebar() {
      toggle_sidebar("dismiss");
    },
  },
};
</script>
