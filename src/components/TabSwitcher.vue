<script setup>
const props = defineProps({
  tabs: { type: Array, required: true },
  modelValue: { type: String, required: true }
})

const emit = defineEmits(['update:modelValue'])

function select(id) {
  emit('update:modelValue', id)
}
</script>

<template>
  <div class="tab-switcher">
    <div class="tab-headers">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="tab-header"
        :class="{ active: modelValue === tab.id }"
        @click="select(tab.id)"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="tab-panels">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.tab-headers {
  display: flex;
  gap: var(--space-xs);
  margin-bottom: var(--space-lg);
  flex-wrap: wrap;
}

.tab-header {
  font-family: var(--font-body);
  font-size: var(--text-body-sm);
  font-weight: 400;
  color: var(--color-muted);
  padding: 8px 20px;
  border: 1px solid var(--color-hairline);
  border-radius: var(--radius-pill);
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.tab-header:hover {
  color: var(--color-ink);
  border-color: var(--color-muted);
}

.tab-header.active {
  color: var(--color-on-primary);
  background: var(--color-primary);
  border-color: var(--color-primary);
}
</style>
