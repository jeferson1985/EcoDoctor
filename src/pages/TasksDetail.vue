<template>
  <div class="flex flex-col bg-white rounded-lg">
    <h1 class="flex px-8 py-4 font-bold">Título</h1>
    <div class="flex px-8">
      <h1>{{ selectedTask.titulo }}</h1>
    </div>
    <h1 class="flex px-8 py-4 font-bold">Descrição</h1>
    <div class="flex px-8">
      <h1>{{ selectedTask.descricao }}</h1>
    </div>
    <h1 class="flex px-8 py-4 font-bold">Situação</h1>
    <div class="flex px-8 py-4">
      <h1>{{ selectedTask.concluido ? "Concluído" : "Aguardando" }}</h1>
    </div>
  </div>
</template>

<script>
import { title } from "@/store/title";
import { mapState } from "vuex";

export default {
  name: "TasksDetail",
  mounted() {
    title.value = `Detalhe tarefa`;
  },
  computed: {
    ...mapState(["selectedTask"]),
  },
};
</script>
