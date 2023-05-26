<script setup>
import NewTaskBanner from "./components/NewTaskBanner.vue";
import Pagination from "./components/Pagination.vue";
import TaskList from "./components/TaskList.vue";
</script>

<template>
  <div class="container">
    <header>
      <h1>🗒️Task List</h1>
      <NewTaskBanner />
    </header>

    <main>
      <TaskList />
      <Pagination />
    </main>
  </div>
</template>

<style scoped>
.container {
  /* background-color: #cacaca; */
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 1rem;
}

@media only screen and (min-width: 960px) {
  .container {
    margin-top: 64px;
    border-radius: 1rem;
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    background: var(--base-color);
    box-shadow: 12px 12px 24px var(--darker-shadow), -12px -12px 24px var(--lighter-shadow);
  }
}

h1 {
  letter-spacing: 0.1em;
  text-align: center;
  text-transform: uppercase;
  margin-block-start: 24px;
  margin-block-end: 24px;
}
</style>
