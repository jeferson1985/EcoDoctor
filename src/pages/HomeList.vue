<template>
  <div class="bg-gray-100">
    <div class="flex min-h-screen">
      <SideBar>
        <template #links>
          <div class="flex flex-col space-y-8 mt-12">
            <SideBarLink
              v-for="(link, index) in links"
              :key="index"
              :icon="link.icon"
              :text="link.text"
              :link="link.to"
            />
          </div>
        </template>
      </SideBar>
      <div class="flex flex-col w-full px-6">
        <TitleBar />
        <div class="h-full">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBar from "@/components/TitleBar.vue";
import SideBar from "@/components/SideBar.vue";
import SideBarLink from "@/components/SideBarLink.vue";
import { title } from "@/store/title";

export default {
  name: "HomeList",
  components: {
    TitleBar,
    SideBar,
    SideBarLink,
  },
  mounted() {
    title.value = `ToDoList`;
  },
  computed: {
    links() {
      return [
        {
          icon: "home",
          text: "Home",
          to: "/",
        },
        {
          icon: "addtask",
          text: "Adicionar tarefa",
          to: "/tasks-form",
        },
        {
          icon: "list",
          text: "Lista de Tarefas",
          to: "/tasks-list",
        },
      ];
    },
  },
};
</script>
