<script setup>
import SealBadge from './SealBadge.vue'

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  badges: { type: Array, default: () => [] }
})
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title display-xl">{{ title }}</h1>
      <p v-if="subtitle" class="hero-subtitle body-text">{{ subtitle }}</p>
      <div v-if="badges.length" class="hero-badges">
        <SealBadge v-for="b in badges" :key="b" :text="b" />
      </div>
    </div>
    <div class="hero-ornament">
      <div class="ornament-line"></div>
      <div class="ornament-diamond"></div>
      <div class="ornament-line"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 80px 0 64px;
  text-align: center;
  background: var(--color-canvas);
}

.hero-content {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

.hero-title {
  margin-bottom: var(--space-lg);
}

.hero-subtitle {
  max-width: 640px;
  margin: 0 auto var(--space-xl);
  font-size: 18px;
}

.hero-badges {
  display: flex;
  gap: var(--space-lg);
  justify-content: center;
  flex-wrap: wrap;
}

.hero-ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  margin-top: var(--space-xxl);
}

.ornament-line {
  width: 48px;
  height: 1px;
  background: var(--color-hairline);
}

.ornament-diamond {
  width: 8px;
  height: 8px;
  background: var(--color-primary);
  transform: rotate(45deg);
}
</style>
