<template>
  <div class="flex flex-col space-y-2">
    <div
      v-for="(item, index) in tasks"
      :key="item"
      :class="[
        item.concluido ? 'bg-blue-300' : 'bg-gray-200',
        'rounded-md w-full flex flex-col gap-2 justify-between flex-wrap px-6 py-6',
      ]"
    >
      <input
        v-model="item.concluido"
        @change="checkTask(index)"
        id="default-checkbox"
        type="checkbox"
        value=""
        class="w-4 h-4 text-blue-600"
      />
      <ul class="flex flex-col">
        <span class="flex font-bold">Título</span>
        <li class="flex">{{ item.titulo }}</li>
        <span class="flex font-bold">Situação</span>
        <li class="flex">{{ item.concluido ? "Concluído" : "Aguardando" }}</li>
      </ul>
      <div class="flex justify-end gap-4 w-full mb-2 text-white">
        <button
          @click="goTo(_, index)"
          class="px-4 xl:px-12 py-2 bg-blue-500 hover:bg-blue-800 font-bold rounded-lg"
        >
          Detahes
        </button>
        <button
          @click="deleteTask(index)"
          class="px-4 xl:px-12 py-2 bg-yellow-300 hover:bg-yellow-500 font-bold rounded-lg"
        >
          Excluir
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { title } from "@/store/title";
import { mapMutations, mapActions, mapState } from "vuex";

export default {
  name: "TasksList",
  data: () => ({
    concluido: false,
    tasks: [],
  }),
  created() {
    this.$store.commit("uploadTasks");
  },
  mounted() {
    title.value = `Lista de tarefas`;
    this.tasks = this.$store.state.tasks;
  },
  computed: {
    ...mapState(["tasks"]),
  },
  methods: {
    ...mapMutations(["removeTask"]),
    ...mapActions(["setSelectedTask"]),
    checkTask(index) {
      this.$store.commit("checkTasks", index);
    },
    deleteTask(index) {
      this.removeTask(index);
    },
    goTo(_, index) {
      const item = this.tasks[index];
      this.setSelectedTask(item);
      this.$router.push(`/tasks-detail`);
    },
  },
};
</script>
