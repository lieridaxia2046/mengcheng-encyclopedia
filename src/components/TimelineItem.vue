<script setup>
defineProps({
  period: { type: String, required: true },
  year: { type: [Number, String], default: null }
})
</script>

<template>
  <div class="timeline-item">
    <div class="timeline-marker">
      <div class="timeline-dot"></div>
    </div>
    <div class="timeline-content">
      <div class="timeline-head">
        <span class="timeline-period title">{{ period }}</span>
        <span v-if="year" class="timeline-year caption">{{ year }}</span>
      </div>
      <div class="timeline-body body-text">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-item {
  display: flex;
  gap: var(--space-lg);
  padding-bottom: var(--space-lg);
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6px;
  position: relative;
}

.timeline-marker::after {
  content: '';
  width: 1px;
  flex: 1;
  background: var(--color-hairline);
  position: absolute;
  top: 18px;
  bottom: -24px;
}

.timeline-item:last-child .timeline-marker::after {
  display: none;
}

.timeline-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-primary);
  flex-shrink: 0;
}

.timeline-head {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  margin-bottom: var(--space-xs);
}

.timeline-period {
  color: var(--color-ink);
}

.timeline-year {
  color: var(--color-muted-soft);
}

.timeline-body {
  color: var(--color-body);
}

@media (max-width: 767px) {
  .timeline-item { gap: var(--space-md); }
}
</style>
