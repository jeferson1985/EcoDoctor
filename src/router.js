import { createRouter, createWebHistory } from "vue-router";
import HomeList from "@/pages/HomeList.vue";
import TasksForm from "@/pages/TasksForm.vue";
import TasksList from "@/pages/TasksList.vue";
import TasksDetail from "@/pages/TasksDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home-list",
      component: HomeList,
      children: [
        {
          path: "/tasks-form",
          name: "tasks-form",
          component: TasksForm,
        },
        {
          path: "/tasks-list",
          name: "tasks-list",
          component: TasksList,
        },
        {
          path: "/tasks-detail",
          name: "tasks-detail",
          component: TasksDetail,
        },
      ],
    },
  ],
});

export default router;
