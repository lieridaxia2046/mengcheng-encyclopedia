<script setup>
defineProps({
  text: { type: String, required: true },
  source: { type: String, default: '' },
  attribution: { type: String, default: '' }
})
</script>

<template>
  <blockquote class="quote-block">
    <p class="quote-text">"{{ text }}"</p>
    <footer v-if="source || attribution" class="quote-footer caption">
      <span v-if="attribution">— {{ attribution }}</span>
      <cite v-if="source">{{ source }}</cite>
    </footer>
  </blockquote>
</template>

<style scoped>
.quote-block {
  border-left: 3px solid var(--color-primary);
  padding: var(--space-lg) var(--space-xl);
  margin: var(--space-xl) 0;
  background: var(--color-surface-card);
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
}

.quote-text {
  font-family: var(--font-quote);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  color: var(--color-ink);
  margin-bottom: var(--space-sm);
}

.quote-footer {
  color: var(--color-muted);
}

.quote-footer cite {
  font-style: normal;
  margin-left: var(--space-xs);
}
</style>
