<script setup>
const base = import.meta.env.BASE_URL
</script>

<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="footer-mark">蒙</span>
        <div>
          <p class="footer-title">蒙城县百科全书</p>
          <p class="footer-sub">庄子故里 · 千年古县</p>
        </div>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h4>内容板块</h4>
          <a :href="base + 'history.html'">历史沿革</a>
          <a :href="base + 'geography.html'">地理环境</a>
          <a :href="base + 'culture.html'">文化传承</a>
          <a :href="base + 'tourism.html'">旅游景点</a>
        </div>
        <div class="footer-col">
          <h4>更多</h4>
          <a :href="base + 'cuisine.html'">美食特产</a>
          <a :href="base + 'economy.html'">经济发展</a>
          <a :href="base + 'admin.html'">行政区划</a>
          <a :href="base">返回首页</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>资料来源：百度百科、蒙城县政府官网、澎湃新闻、安徽日报等</p>
      <p>© 2026 蒙城县百科全书 · 非商业用途</p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: var(--color-surface-dark);
  color: var(--color-on-dark-soft);
  padding: 64px 0 0;
}

.footer-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-lg);
  display: flex;
  justify-content: space-between;
  gap: var(--space-xxl);
}

.footer-brand {
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
}

.footer-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-pill);
  background: var(--color-primary);
  color: var(--color-on-primary);
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 500;
  flex-shrink: 0;
}

.footer-title {
  font-family: var(--font-display);
  font-size: var(--text-title);
  color: var(--color-on-dark);
  margin-bottom: 4px;
}

.footer-sub {
  font-size: var(--text-body-sm);
  color: var(--color-on-dark-soft);
}

.footer-links {
  display: flex;
  gap: var(--space-xxl);
}

.footer-col h4 {
  font-family: var(--font-body);
  font-size: var(--text-body-sm);
  font-weight: 500;
  color: var(--color-on-dark);
  margin-bottom: var(--space-sm);
}

.footer-col a {
  display: block;
  font-size: var(--text-body-sm);
  color: var(--color-on-dark-soft);
  margin-bottom: 6px;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-col a:hover {
  color: var(--color-on-dark);
  text-decoration: none;
}

.footer-bottom {
  max-width: var(--max-width);
  margin: var(--space-xxl) auto 0;
  padding: var(--space-lg);
  border-top: 1px solid rgba(255,255,255,0.08);
}

.footer-bottom p {
  font-size: var(--text-caption);
  color: var(--color-on-dark-soft);
  margin-bottom: 4px;
}

@media (max-width: 767px) {
  .footer-inner { flex-direction: column; gap: var(--space-xl); }
  .footer-links { flex-direction: column; gap: var(--space-lg); }
}
</style>
