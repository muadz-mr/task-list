<script setup>
import IconCheckCircle from "../components/icons/IconCheckCircle.vue";
import IconCircle from "../components/icons/IconCircle.vue";
import IconDelete from "../components/icons/IconDelete.vue";

defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["toggleStatus", "delete"]);
</script>

<template>
  <div class="task">
    <button class="task__action-button--toggle-status" type="button" @click.stop="emit('toggleStatus', task.id)">
      <IconCheckCircle v-if="task.isCompleted" />
      <IconCircle v-else />
    </button>
    <div class="task__item">
      <p class="task__title">{{ task.title }}</p>
      <p class="task__due-date">{{ task.dueDate ? task.dueDate : "N/A" }}</p>
    </div>
    <button class="task__action-button--delete" type="button" @click.stop="emit('delete', task.id)"><IconDelete /></button>
  </div>
</template>

<style scoped>
.task {
  display: flex;
  padding: 12px;
  border: 1px solid var(--darker-shadow);
  border-radius: 16px;
}

.task__item {
  margin-inline-start: 1rem;
}

.task__due-date {
  font-size: 0.7rem;
  color: var(--darker-base-color);
}

button:active {
  box-shadow: inset 5px 5px 10px var(--darker-shadow), inset -5px -5px 10px var(--lighter-shadow);
}

.task__action-button--toggle-status {
  padding: 0.5rem;
}

.task__action-button--delete {
  justify-self: end;
  margin-left: auto;
  padding: 0.5rem;
}
</style>
