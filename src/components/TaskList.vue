<script setup>
import { storeToRefs } from "pinia";
import { useTaskStore } from "../stores/task";
import TaskListItem from "./TaskListItem.vue";

const taskStore = useTaskStore();
const { paginatedTasks } = storeToRefs(taskStore); // storeToRefs lets tasks keep reactivity:

const handleToggleIsCompleted = (taskId) => {
  taskStore.toggleIsCompleted(taskId);
};
const handleDeleteTask = (taskId) => {
  taskStore.deleteTask(taskId);
};
</script>

<template>
  <ul class="task-list" v-if="paginatedTasks.length > 0">
    <li v-for="task in paginatedTasks" :key="task.id">
      <TaskListItem :task="task" @toggle-status="handleToggleIsCompleted" @delete="handleDeleteTask" />
    </li>
  </ul>
  <div v-else class="no-task-card">No task yet. Please add one...</div>
</template>

<style scoped>
.task-list {
  list-style: none;
  padding-left: 0;
}

li:not(:nth-child(1)) {
  margin-block-start: 12px;
}

.no-task-card {
  text-align: center;
  padding: 24px;
  margin-block: 24px;
  border: 1px solid var(--darker-shadow);
  border-radius: 16px;
}

@media only screen and (min-width: 960px) {
  li {
    margin-inline: 32px;
  }
  .no-task-card {
    margin-inline: 32px;
  }
}
</style>
