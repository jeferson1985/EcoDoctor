<template>
  <div class="min-h-48 flex items-center">
    <div class="w-full">
      <h2 class="text-center text-blue-400 font-bold text-2xl uppercase mb-2">
        Adicionar tarefa
      </h2>
      <div
        class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2 font-bold text-gray-600"
      >
        <form @submit.prevent="addTask">
          <div class="mb-2">
            <label for="titulo" class="flex mb-2">Título</label>
            <input
              v-model="titulo"
              type="text"
              id="titulo"
              name="titulo"
              placeholder="Título"
              class="border border-gray-300 shadow p-3 w-full rounded-md"
            />
          </div>

          <div class="flex flex-col mb-5">
            <label for="" class="flex">Descrição</label>
            <textarea
              v-model="descricao"
              name="descricao"
              id="descricao"
              cols="30"
              rows="10"
              class="border border-gray-300 shadow p-3 w-full rounded-md"
            ></textarea>
          </div>

          <button
            class="block w-full bg-blue-500 text-white hover:bg-blue-800 font-bold p-4 rounded-lg"
          >
            Criar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { title } from "@/store/title";
import { mapActions } from "vuex";

export default {
  name: "TasksFrom",
  data: () => ({
    titulo: "",
    descricao: "",
    concluido: false,
  }),
  mounted() {
    title.value = `Adicionar tarefa`;
  },
  methods: {
    ...mapActions(["createTask"]),
    addTask() {
      const task = {
        titulo: this.titulo,
        descricao: this.descricao,
      };
      this.createTask(task);
      this.$router.push(`/tasks-list`);
      this.titulo = "";
      this.descricao = "";
    },
  },
};
</script>
