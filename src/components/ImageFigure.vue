<script setup>
defineProps({
  caption: { type: String, default: '' }
})
</script>

<template>
  <figure class="image-figure">
    <div class="image-placeholder">
      <slot>
        <div class="placeholder-text">图片区域</div>
      </slot>
    </div>
    <figcaption v-if="caption" class="figure-caption caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.image-figure {
  margin: var(--space-xl) 0;
}

.image-placeholder {
  background: var(--color-surface-card);
  border-radius: var(--radius-lg);
  min-height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-hairline);
  overflow: hidden;
}

.image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.placeholder-text {
  color: var(--color-muted-soft);
  font-size: var(--text-body-sm);
}

.figure-caption {
  margin-top: var(--space-xs);
  text-align: center;
}
</style>
