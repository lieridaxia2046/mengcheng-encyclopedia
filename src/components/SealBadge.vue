<script setup>
defineProps({
  text: { type: String, required: true }
})
</script>

<template>
  <span class="seal-badge">{{ text }}</span>
</template>

<style scoped>
.seal-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border-radius: var(--radius-pill);
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  font-family: var(--font-display);
  font-size: var(--text-caption);
  font-weight: 500;
  line-height: 1.3;
  text-align: center;
  transform: rotate(-8deg);
  letter-spacing: 1px;
  user-select: none;
  flex-shrink: 0;
}
</style>
