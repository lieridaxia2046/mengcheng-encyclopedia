<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  target: { type: [Number, String], required: true },
  suffix: { type: String, default: '' },
  prefix: { type: String, default: '' },
  duration: { type: Number, default: 2000 },
  decimals: { type: Number, default: 0 }
})

const display = ref('0')
const elRef = ref(null)
let observer = null
let hasAnimated = false

function parseTarget() {
  const str = String(props.target)
  const match = str.match(/[\d.]+/)
  return match ? parseFloat(match[0]) : 0
}

function animate() {
  if (hasAnimated) return
  hasAnimated = true
  const targetVal = parseTarget()
  const startTime = performance.now()

  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / props.duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    const current = targetVal * eased

    if (props.decimals > 0) {
      display.value = props.prefix + current.toFixed(props.decimals) + props.suffix
    } else {
      display.value = props.prefix + Math.round(current).toLocaleString() + props.suffix
    }

    if (progress < 1) {
      requestAnimationFrame(update)
    } else {
      if (props.decimals > 0) {
        display.value = props.prefix + targetVal.toFixed(props.decimals) + props.suffix
      } else {
        display.value = props.prefix + targetVal.toLocaleString() + props.suffix
      }
    }
  }

  requestAnimationFrame(update)
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate()
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.3 }
  )
  if (elRef.value) observer.observe(elRef.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <span ref="elRef" class="animated-counter">{{ display }}</span>
</template>
