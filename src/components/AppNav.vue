<script setup>
import { ref } from 'vue'

defineProps({
  currentPage: { type: String, default: 'home' }
})

const base = import.meta.env.BASE_URL
const navItems = [
  { id: 'home', label: '首页', path: base },
  { id: 'history', label: '历史沿革', path: base + 'history.html' },
  { id: 'geography', label: '地理环境', path: base + 'geography.html' },
  { id: 'culture', label: '文化传承', path: base + 'culture.html' },
  { id: 'tourism', label: '旅游景点', path: base + 'tourism.html' },
  { id: 'cuisine', label: '美食特产', path: base + 'cuisine.html' },
  { id: 'economy', label: '经济发展', path: base + 'economy.html' },
  { id: 'admin', label: '行政区划', path: base + 'admin.html' }
]

const menuOpen = ref(false)
</script>

<template>
  <nav class="app-nav">
    <div class="nav-inner">
      <a :href="base" class="nav-brand">
        <span class="brand-mark">蒙</span>
        <span class="brand-text">蒙城百科</span>
      </a>
      <button class="nav-toggle" @click="menuOpen = !menuOpen" :aria-label="menuOpen ? '关闭菜单' : '打开菜单'">
        <span></span><span></span><span></span>
      </button>
      <div class="nav-links" :class="{ open: menuOpen }">
        <a v-for="item in navItems"
           :key="item.id"
           :href="item.path"
           :class="{ active: currentPage === item.id }"
           @click="menuOpen = false">
          {{ item.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.app-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(251, 248, 242, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-hairline);
  height: 68px;
  display: flex;
  align-items: center;
}

.nav-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  width: 100%;
  padding: 0 var(--space-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-lg);
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
  padding-right: var(--space-xl);
  border-right: 1px solid var(--color-hairline);
}

.brand-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background: var(--color-primary);
  color: var(--color-on-primary);
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -1px;
}

.brand-text {
  font-family: var(--font-display);
  font-size: 19px;
  font-weight: 600;
  color: var(--color-ink);
  letter-spacing: 0.5px;
}

.nav-links {
  display: flex;
  gap: var(--space-sm);
  align-items: center;
}

.nav-links a {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 400;
  color: var(--color-body);
  padding: 8px 16px;
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: color 0.2s, background 0.2s;
  white-space: nowrap;
  letter-spacing: 0.5px;
}

.nav-links a:hover {
  color: var(--color-ink);
  background: var(--color-surface-card);
  text-decoration: none;
}

.nav-links a.active {
  color: var(--color-primary);
  font-weight: 500;
  background: rgba(196, 73, 58, 0.08);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
}

.nav-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--color-ink);
  border-radius: 2px;
  transition: transform 0.2s, opacity 0.2s;
}

@media (max-width: 767px) {
  .app-nav { height: 56px; }
  .nav-toggle { display: flex; }
  .nav-brand { padding-right: 0; border-right: none; }
  .nav-inner { justify-content: space-between; }
  .nav-links {
    display: none;
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    background: rgba(251, 248, 242, 0.97);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    flex-direction: column;
    padding: var(--space-sm) var(--space-md);
    border-bottom: 1px solid var(--color-hairline);
    gap: 2px;
  }
  .nav-links.open { display: flex; }
  .nav-links a { padding: 12px var(--space-md); border-radius: var(--radius-md); font-size: 15px; }
}
</style>
