<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/task";
import IconSave from "./icons/IconSave.vue";

const taskStore = useTaskStore();

const taskTitle = ref(null);
const taskDueDate = ref(null);

const handleSubmit = () => {
  if (taskTitle.value == "" || taskTitle.value == undefined) return;
  const newTask = {
    id: crypto.randomUUID(),
    title: taskTitle.value,
    isCompleted: false,
    dueDate: taskDueDate.value,
  };

  taskStore.addTask(newTask);
  resetNewTask();
};
const resetNewTask = () => {
  taskTitle.value = "";
  taskDueDate.value = null;
};
</script>

<template>
  <section>
    <form @submit.prevent="handleSubmit">
      <div class="input__container">
        <label for="task-title">Task title</label>
        <input type="text" id="task-title" placeholder="Enter title here..." v-model="taskTitle" autocomplete="off" />
      </div>
      <div class="input__container">
        <label for="due-date">Due date</label>
        <input type="date" id="due-date" v-model="taskDueDate" autocomplete="off" />
      </div>
      <button class="button__save" type="submit" :disabled="!taskTitle">
        <IconSave />
        <span class="button__save--text">Save</span>
      </button>
    </form>
  </section>
</template>

<style scoped>
section {
  margin-bottom: 52px;
}

form {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

form .input__container:nth-child(2) {
  margin-block-start: 8px;
}

label {
  padding-inline: 0.7rem;
  padding-block: 0.5rem;
}

input {
  padding: 0.75rem;
}

button {
  padding-inline: 1rem;
  padding-block: 0.8rem;
  align-self: end;
}

button:not(:disabled):active {
  box-shadow: inset 5px 5px 10px var(--darker-shadow), inset -5px -5px 10px var(--lighter-shadow);
}

.input__container {
  display: flex;
  flex-direction: column;
}

.button__save {
  display: flex;
  width: 100%;
  margin-block-start: 48px;
}

.button__save--text {
  margin-inline-start: 0.75rem;
}

@media only screen and (min-width: 480px) {
  form {
    flex-direction: row;
    gap: 1rem;
  }

  form .input__container:nth-child(2) {
    margin-block-start: 0;
  }

  .button__save {
    margin-block-start: 0;
    width: unset;
  }

  .button__save--text {
    display: none;
  }
}
</style>
