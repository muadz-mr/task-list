<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useTaskStore } from "../stores/task";

const taskStore = useTaskStore();
const { pagination, pages } = storeToRefs(taskStore);

const page = ref(1);

const handleGoToPage = (e) => {
  pagination.value.currentPage = e.target.value;
};
const handleGoPrevious = () => {
  if (pagination.value.currentPage <= 1) return;
  pagination.value.currentPage--;
};
const handleGoNext = () => {
  if (pagination.value.currentPage >= pagination.value.totalPage) return;
  pagination.value.currentPage++;
};
</script>

<template>
  <div class="pagination">
    <button class="pagination__button--previous" type="button" @click.stop="handleGoPrevious" :disabled="pagination.currentPage <= 1">Previous</button>
    {{ page }}
    <form>
      <select class="pagination__select" v-model="pagination.currentPage" @change="handleGoToPage" :disabled="pages.length < 1">
        <option v-for="page in pages" :key="page" :value="page">{{ page }}</option>
      </select>
    </form>
    <button class="pagination__button--next" type="button" @click.stop="handleGoNext" :disabled="pagination.currentPage === pagination.totalPage">Next</button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  padding: 16px 0;
}
.pagination form {
  display: flex;
}

.pagination__select {
  min-width: 100px;
  border: none;
  color: #10414b;
}

button:not(:disabled):active {
  box-shadow: inset 5px 5px 10px var(--darker-shadow), inset -5px -5px 10px var(--lighter-shadow);
}
</style>
