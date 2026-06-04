<script setup>
defineProps({
  headers: { type: Array, required: true },
  rows: { type: Array, required: true },
  caption: { type: String, default: '' }
})
</script>

<template>
  <div class="table-wrapper">
    <table class="data-table">
      <caption v-if="caption" class="caption">{{ caption }}</caption>
      <thead>
        <tr>
          <th v-for="h in headers" :key="h">{{ h }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in rows" :key="i">
          <td v-for="(cell, j) in row" :key="j">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-wrapper {
  overflow-x: auto;
  margin: var(--space-lg) 0;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--text-body);
}

.data-table caption {
  text-align: left;
  margin-bottom: var(--space-sm);
}

.data-table th {
  font-family: var(--font-display);
  font-size: var(--text-body-sm);
  font-weight: 500;
  color: var(--color-ink);
  text-align: left;
  padding: 12px var(--space-md);
  border-bottom: 2px solid var(--color-hairline);
  background: var(--color-surface-card);
  white-space: nowrap;
}

.data-table td {
  padding: 10px var(--space-md);
  border-bottom: 1px solid var(--color-hairline);
  color: inherit;
}

.data-table tbody tr:hover {
  background: var(--table-hover-bg, var(--color-surface-card));
}
</style>
