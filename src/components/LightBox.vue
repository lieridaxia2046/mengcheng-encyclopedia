<script setup>
import { ref } from 'vue'

defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' }
})

const open = ref(false)
</script>

<template>
  <div class="lightbox-trigger" @click="open = true">
    <slot />
    <span class="lightbox-hint">点击放大</span>
  </div>
  <Teleport to="body">
    <div v-if="open" class="lightbox-overlay" @click.self="open = false">
      <button class="lightbox-close" @click="open = false" aria-label="关闭">&times;</button>
      <img class="lightbox-img" :src="src" :alt="alt" />
    </div>
  </Teleport>
</template>

<style scoped>
.lightbox-trigger {
  position: relative;
  cursor: zoom-in;
}
.lightbox-hint {
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: 12px;
  color: #fff;
  background: rgba(0,0,0,0.5);
  padding: 2px 8px;
  border-radius: 4px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
}
.lightbox-trigger:hover .lightbox-hint {
  opacity: 1;
}
</style>

<style>
.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0,0,0,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  cursor: zoom-out;
}
.lightbox-close {
  position: absolute;
  top: 16px;
  right: 24px;
  font-size: 36px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1;
  z-index: 10000;
}
.lightbox-img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.4);
}
</style>
