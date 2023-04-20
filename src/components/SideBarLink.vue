<template>
  <a
    class="flex text-lg font-bold space-x-4 hover:text-blue-600 cursor-pointer"
    :class="selected ? 'text-blue-600' : 'text-gray-800'"
    @click="goTo"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 -2 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        :d="path"
      />
    </svg>
    <span>{{ text }}</span>
  </a>
</template>

<script>
import { toggle_sidebar } from "@/store/title";
export default {
  name: "SidebarLink",
  props: {
    icon: { type: String, default: "home" },
    text: { type: String, default: "addtask" },
    link: { type: String, default: "#" },
  },
  data: () => ({
    selected: false,
  }),
  computed: {
    path() {
      const path = {
        home: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
        addtask:
          "M22,5.18L10.59,16.6l-4.24-4.24l1.41-1.41l2.83,2.83l10-10L22,5.18z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8 c1.57,0,3.04,0.46,4.28,1.25l1.45-1.45C16.1,2.67,14.13,2,12,2C6.48,2,2,6.48,2,12s4.48,10,10,10c1.73,0,3.36-0.44,4.78-1.22 l-1.5-1.5C14.28,19.74,13.17,20,12,20z M19,15h-3v2h3v3h2v-3h3v-2h-3v-3h-2V15z",
        list: "M14,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M10.94,18L7.4,14.46l1.41-1.41 l2.12,2.12l4.24-4.24l1.41,1.41L10.94,18z M13,9V3.5L18.5,9H13z",
      };
      return path[this.icon];
    },
  },
  methods: {
    goTo() {
      this.$router.push(this.link);
      toggle_sidebar("dismiss");
    },
  },
};
</script>
