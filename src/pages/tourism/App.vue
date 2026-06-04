<script setup>
import AppNav from '../../components/AppNav.vue'
import AppFooter from '../../components/AppFooter.vue'
import HeroSection from '../../components/HeroSection.vue'
import InfoCard from '../../components/InfoCard.vue'
import DarkCard from '../../components/DarkCard.vue'
import SectionBanner from '../../components/SectionBanner.vue'
import AnimatedCounter from '../../components/AnimatedCounter.vue'
import TabSwitcher from '../../components/TabSwitcher.vue'
import BackToTop from '../../components/BackToTop.vue'
import { ref, computed } from 'vue'
import { stats, attractions } from '../../data/tourism.js'
import { useScrollReveal } from '../../composables/useScrollReveal.js'

useScrollReveal()

const featured = attractions.filter(a => a.featured)
const categories = [...new Set(attractions.map(a => a.category))]
const activeCategory = ref('all')
const categoryTabs = [
  { id: 'all', label: '全部景点' },
  ...categories.map(c => ({ id: c, label: c }))
]
const filtered = computed(() =>
  activeCategory.value === 'all'
    ? attractions.filter(a => !a.featured)
    : attractions.filter(a => !a.featured && a.category === activeCategory.value)
)
</script>

<template>
  <AppNav current-page="tourism" />
  <main>
    <HeroSection
      title="旅游景点"
      subtitle="蒙城，一座宜游之城。2024 年接待游客超 900 万人次，旅游收入突破 75 亿元。从千年古塔到红色记忆，从庄子祠到特色民宿，蒙城之旅是一场穿越古今的文化漫游。"
    />

    <section class="section-dark scroll-reveal">
      <div class="page-container">
        <SectionBanner title="旅游数据" seal-text="2024" />
        <DarkCard>
          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-num"><AnimatedCounter :target="902" suffix=" 万人次" /></span>
              <span class="stat-label caption">年接待游客</span>
            </div>
            <div class="stat-item">
              <span class="stat-num"><AnimatedCounter :target="40.89" suffix="%" :decimals="2" /></span>
              <span class="stat-label caption">同比增长</span>
            </div>
            <div class="stat-item">
              <span class="stat-num"><AnimatedCounter :target="75.1" suffix=" 亿元" :decimals="1" /></span>
              <span class="stat-label caption">旅游收入</span>
            </div>
            <div class="stat-item">
              <span class="stat-num"><AnimatedCounter :target="52.05" suffix="%" :decimals="2" /></span>
              <span class="stat-label caption">收入增长</span>
            </div>
          </div>
        </DarkCard>
      </div>
    </section>

    <section class="section scroll-reveal">
      <div class="page-container">
        <SectionBanner title="必游景点" seal-text="精选" />
        <div class="featured-grid">
          <article v-for="a in featured" :key="a.name" class="featured-card">
            <div class="featured-image">
              <img v-if="a.image" :src="a.image.src" :alt="a.image.alt" />
              <p v-if="a.image" class="featured-source caption">图片来源：{{ a.image.source }}</p>
            </div>
            <div class="featured-body">
              <div class="featured-tags">
                <span v-if="a.level" class="tag tag-level">{{ a.level }}</span>
                <span v-if="a.type" class="tag">{{ a.type }}</span>
              </div>
              <h3 class="featured-title display-sm">{{ a.name }}</h3>
              <p class="featured-desc">{{ a.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section-alt scroll-reveal">
      <div class="page-container">
        <SectionBanner title="更多景点" seal-text="全部" />
        <TabSwitcher :tabs="categoryTabs" v-model="activeCategory" />
        <div class="compact-grid">
          <article v-for="a in filtered" :key="a.name" class="compact-card">
            <div class="compact-thumb">
              <img v-if="a.image" :src="a.image.src" :alt="a.image.alt" />
            </div>
            <div class="compact-info">
              <h4 class="compact-title">{{ a.name }}</h4>
              <div class="compact-tags">
                <span v-if="a.type" class="tag tag-sm">{{ a.type }}</span>
                <span v-if="a.level" class="tag tag-sm tag-level">{{ a.level }}</span>
              </div>
              <p class="compact-desc">{{ a.description }}</p>
              <p v-if="a.image" class="compact-source caption">图片来源：{{ a.image.source }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section scroll-reveal">
      <div class="page-container">
        <SectionBanner title="四季推荐" seal-text="攻略" />
        <div class="card-grid-2">
          <InfoCard title="春季（3—5月）" icon="🌸">
            <p>春暖花开，适合游览庄子祠、北淝河国家湿地公园，感受"逍遥蒙城"的春日气息。推荐参加庄子文化周系列活动。</p>
          </InfoCard>
          <InfoCard title="夏季（6—8月）" icon="☀️">
            <p>板桥无籽西瓜上市季节，可品尝地道蒙城水果。傍晚漫步涡河滨河公园，凉风习习，是消暑好去处。</p>
          </InfoCard>
          <InfoCard title="秋季（9—11月）" icon="🍂">
            <p>秋高气爽，最佳旅游季节。适合参观万佛塔、博物馆等文化景点，也可前往狼山登高揽胜。</p>
          </InfoCard>
          <InfoCard title="冬季（12—2月）" icon="❄️">
            <p>品尝蒙城特色美食——油酥烧饼配糁汤，暖身又暖心。参观板桥集战斗纪念馆，缅怀革命先烈。</p>
          </InfoCard>
        </div>
      </div>
    </section>
  </main>
  <AppFooter />
  <BackToTop />
</template>

<style scoped>
/* === Stats === */
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-xl); text-align: center; }
.stat-item { display: flex; flex-direction: column; gap: var(--space-xs); }
.stat-num { font-family: var(--font-display); font-size: 28px; font-weight: 400; color: var(--color-on-dark); }
.stat-label { color: var(--color-on-dark-soft); }

/* === Tags === */
.attraction-tags { display: flex; gap: var(--space-xs); margin-bottom: var(--space-sm); flex-wrap: wrap; }
.tag { font-size: var(--text-caption); color: var(--color-muted); background: var(--color-canvas); padding: 2px 10px; border-radius: var(--radius-pill); border: 1px solid var(--color-hairline); }
.tag-sm { font-size: 13px; padding: 1px 8px; }
.tag-level { color: var(--color-primary); border-color: var(--color-primary); }

/* === Featured Grid: 3 cards, image left + text right === */
.featured-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}
.featured-card {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: var(--space-xl);
  background: var(--color-surface-card);
  border-radius: var(--radius-xl);
  overflow: hidden;
}
.featured-card:nth-child(even) {
  direction: rtl;
}
.featured-card:nth-child(even) > * {
  direction: ltr;
}
.featured-image {
  display: flex;
  flex-direction: column;
  background: var(--color-surface-cream-strong);
}
.featured-image img {
  width: 100%;
  max-height: 320px;
  object-fit: contain;
  display: block;
}
.featured-source {
  padding: var(--space-xs) var(--space-sm);
  text-align: center;
  margin: 0;
}
.featured-body {
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-sm);
}
.featured-tags {
  display: flex;
  gap: var(--space-xs);
  flex-wrap: wrap;
}
.featured-title {
  margin: 0;
}
.featured-desc {
  font-size: var(--text-body-sm);
  color: var(--color-body);
  line-height: 1.75;
}

/* === Compact Grid: horizontal cards === */
.compact-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-top: var(--space-lg);
}
.compact-card {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--space-lg);
  background: var(--color-surface-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow 0.2s;
}
.compact-card:hover {
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}
.compact-thumb {
  width: 100%;
  height: 100%;
  min-height: 110px;
  overflow: hidden;
  background: var(--color-surface-cream-strong);
  display: flex;
  align-items: center;
}
.compact-thumb img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
.compact-info {
  padding: var(--space-md) var(--space-lg) var(--space-md) 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.compact-title {
  font-family: var(--font-display);
  font-size: var(--text-title);
  font-weight: 500;
  color: var(--color-ink);
}
.compact-tags {
  display: flex;
  gap: var(--space-xs);
  flex-wrap: wrap;
}
.compact-desc {
  font-size: var(--text-body-sm);
  color: var(--color-body);
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.compact-source {
  margin-top: auto;
  padding-top: 4px;
}

/* === Responsive === */
@media (max-width: 1023px) {
  .featured-card { grid-template-columns: 1fr; }
  .featured-card:nth-child(even) { direction: ltr; }
  .featured-image { min-height: 220px; }
}
@media (max-width: 767px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); gap: var(--space-lg); }
  .stat-num { font-size: 22px; }
  .compact-card { grid-template-columns: 140px 1fr; gap: var(--space-md); }
  .compact-info { padding: var(--space-sm) var(--space-md) var(--space-sm) 0; }
}
</style>
