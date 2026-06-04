<script setup>
import { ref, nextTick, watch } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  defaultOpen: { type: Boolean, default: false }
})

const isOpen = ref(props.defaultOpen)
const bodyRef = ref(null)
const bodyStyle = ref({ maxHeight: '0px' })

function toggle() {
  isOpen.value = !isOpen.value
}

watch(isOpen, async (open) => {
  const el = bodyRef.value
  if (!el) return
  if (open) {
    bodyStyle.value = { maxHeight: '0px', overflow: 'hidden' }
    await nextTick()
    const h = el.scrollHeight
    bodyStyle.value = { maxHeight: h + 'px', overflow: 'hidden' }
    const onEnd = () => {
      bodyStyle.value = { maxHeight: 'none', overflow: 'visible' }
      el.removeEventListener('transitionend', onEnd)
    }
    el.addEventListener('transitionend', onEnd)
  } else {
    const h = el.scrollHeight
    bodyStyle.value = { maxHeight: h + 'px', overflow: 'hidden' }
    await nextTick()
    el.offsetHeight // force reflow
    bodyStyle.value = { maxHeight: '0px', overflow: 'hidden' }
  }
}, { immediate: true })
</script>

<template>
  <div class="collapsible" :class="{ open: isOpen }">
    <button class="collapsible-header" @click="toggle" :aria-expanded="isOpen">
      <span class="collapsible-title">{{ title }}</span>
      <span class="collapsible-chevron">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </button>
    <div ref="bodyRef" class="collapsible-body" :style="bodyStyle">
      <div class="collapsible-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.collapsible {
  border: 1px solid var(--color-hairline);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.collapsible-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--space-md) var(--space-lg);
  background: var(--color-surface-card);
  border: none;
  cursor: pointer;
  font-family: var(--font-display);
  font-size: var(--text-title);
  font-weight: 500;
  color: var(--color-ink);
  text-align: left;
  transition: background 0.2s;
}

.collapsible-header:hover {
  background: var(--color-surface-cream-strong);
}

.collapsible-chevron {
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  color: var(--color-muted);
  flex-shrink: 0;
}

.collapsible.open .collapsible-chevron {
  transform: rotate(180deg);
}

.collapsible-body {
  transition: max-height 0.35s ease;
}

.collapsible-content {
  padding: var(--space-md) var(--space-lg) var(--space-lg);
}
</style>
