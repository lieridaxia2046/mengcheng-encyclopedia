<script setup>
defineProps({
  title: { type: String, default: '' }
})
</script>

<template>
  <article class="dark-card">
    <h3 v-if="title" class="dark-card-title display-sm">{{ title }}</h3>
    <div class="dark-card-body">
      <slot />
    </div>
  </article>
</template>

<style scoped>
.dark-card {
  background: var(--color-surface-dark);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  color: var(--color-on-dark);
  --table-hover-bg: rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
}

.dark-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
}

.dark-card-title {
  color: var(--color-on-dark);
  margin-bottom: var(--space-md);
  position: relative;
  z-index: 1;
}

.dark-card-body {
  position: relative;
  z-index: 1;
}
</style>
