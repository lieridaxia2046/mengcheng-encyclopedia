<script setup>
defineProps({
  title: { type: String, required: true },
  sealText: { type: String, default: '' }
})
</script>

<template>
  <div class="section-banner">
    <div class="banner-line"></div>
    <div class="banner-content">
      <h2 class="banner-title display-md">{{ title }}</h2>
      <span v-if="sealText" class="banner-seal caption">{{ sealText }}</span>
    </div>
    <div class="banner-line"></div>
  </div>
</template>

<style scoped>
.section-banner {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  margin-bottom: var(--space-xxl);
}

.banner-line {
  flex: 1;
  height: 1px;
  background: var(--banner-line-color, var(--color-hairline));
}

.banner-content {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-shrink: 0;
}

.banner-title {
  margin: 0;
  white-space: nowrap;
  color: var(--banner-color, var(--color-ink));
}

.banner-seal {
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 2px 10px;
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-pill);
}

@media (max-width: 767px) {
  .section-banner { gap: var(--space-sm); }
  .banner-content { flex-direction: column; gap: var(--space-xs); }
}
</style>
