<script setup>
defineProps({
  title: { type: String, required: true },
  icon: { type: String, default: '' }
})
</script>

<template>
  <article class="info-card">
    <span v-if="icon" class="info-card-icon">{{ icon }}</span>
    <h3 class="info-card-title title">{{ title }}</h3>
    <div class="info-card-body body-text">
      <slot />
    </div>
  </article>
</template>

<style scoped>
.info-card {
  background: var(--color-surface-card);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
}

.info-card-icon {
  display: block;
  font-size: 28px;
  margin-bottom: var(--space-md);
}

.info-card-title {
  margin-bottom: var(--space-sm);
}

.info-card-body {
  color: var(--color-body);
}
</style>
