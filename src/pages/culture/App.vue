<script setup>
import AppNav from '../../components/AppNav.vue'
import AppFooter from '../../components/AppFooter.vue'
import HeroSection from '../../components/HeroSection.vue'
import InfoCard from '../../components/InfoCard.vue'
import DarkCard from '../../components/DarkCard.vue'
import SectionBanner from '../../components/SectionBanner.vue'
import DataTable from '../../components/DataTable.vue'
import QuoteBlock from '../../components/QuoteBlock.vue'
import TabSwitcher from '../../components/TabSwitcher.vue'

import BackToTop from '../../components/BackToTop.vue'
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal.js'
import { highlights, heritage, intangible, honors, dialect, zhuangziQuote } from '../../data/culture.js'
import { people } from '../../data/people.js'

useScrollReveal()

const heritageHeaders = ['名称', '年代', '类型', '保护级别', '备注']
const heritageRows = heritage.map(h => [h.name, h.period || '—', h.type, h.level || '—', h.note || ''])

const honorItems = honors
const activeTab = ref('heritage')
</script>

<template>
  <AppNav current-page="culture" />
  <main>
    <HeroSection
      title="文化传承"
      subtitle="逍遥蒙城，庄子故里。千年文脉在这里流淌，从新石器时代的尉迟寺到宋代的万佛塔，从非遗剪纸到中国楹联之乡，文化是蒙城最深厚的底色。"
      :badges="['庄子故里', '楹联之乡']"
    />

    <section class="section scroll-reveal">
      <div class="page-container">
        <SectionBanner title="庄子故里" seal-text="逍遥" />
        <div class="card-grid-2">
          <InfoCard v-for="h in highlights" :key="h.title" :title="h.title">
            <p>{{ h.body }}</p>
          </InfoCard>
        </div>
        <QuoteBlock :text="zhuangziQuote.text" :source="zhuangziQuote.source" />
      </div>
    </section>

    <section class="section-dark scroll-reveal">
      <div class="page-container">
        <SectionBanner title="文物古迹" seal-text="遗产" />
        <DarkCard>
          <DataTable :headers="heritageHeaders" :rows="heritageRows" />
        </DarkCard>
      </div>
    </section>

    <section class="section scroll-reveal">
      <div class="page-container">
        <SectionBanner title="文化遗产" seal-text="传承" />
        <TabSwitcher
          :tabs="[
            { id: 'heritage', label: '非物质文化遗产' },
            { id: 'honors', label: '文化荣誉' },
            { id: 'people', label: '名人风采' }
          ]"
          v-model="activeTab"
        />
        <div v-show="activeTab === 'heritage'">
          <div class="card-grid">
            <InfoCard v-for="item in intangible" :key="item" :title="item">
              <p>蒙城县代表性非物质文化遗产项目</p>
            </InfoCard>
          </div>
        </div>
        <div v-show="activeTab === 'honors'">
          <div class="card-grid-2">
            <InfoCard title="方言" icon="🗣️">
              <p>{{ dialect.body }}</p>
            </InfoCard>
            <InfoCard title="文化荣誉" icon="🏅">
              <ul class="honor-list">
                <li v-for="h in honorItems" :key="h">{{ h }}</li>
              </ul>
            </InfoCard>
          </div>
        </div>
        <div v-show="activeTab === 'people'">
          <div class="people-grid">
            <div v-for="p in people" :key="p.name" class="people-card">
              <div class="people-header">
                <span class="people-icon">{{ p.identity === '哲学家、文学家' ? '📜' : p.identity === '思想家、音乐家、文学家' ? '🎵' : p.identity === '军事将领' ? '⚔️' : p.identity === '农民起义领袖' ? '🏴' : '🎖️' }}</span>
                <div>
                  <h3 class="people-name">{{ p.name }}</h3>
                  <span class="people-meta">{{ p.era }} · {{ p.title }}</span>
                </div>
              </div>
              <p class="people-desc">{{ p.description }}</p>
              <blockquote v-if="p.quote" class="people-quote">
                <p>"{{ p.quote.text }}"</p>
                <footer>— {{ p.quote.source }}</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <AppFooter />
  <BackToTop />
</template>

<style scoped>
.honor-list {
  list-style: none;
  padding: 0;
}
.honor-list li {
  font-size: var(--text-body-sm);
  color: var(--color-body);
  padding: 4px 0;
  padding-left: 16px;
  position: relative;
}
.honor-list li::before {
  content: '◆';
  font-size: 6px;
  color: var(--color-primary);
  position: absolute;
  left: 0;
  top: 8px;
}
.people-era {
  font-size: var(--text-body-sm);
  color: var(--color-muted);
  margin-bottom: var(--space-xs);
}
.people-quote {
  margin-top: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  border-left: 3px solid var(--color-primary);
  background: var(--color-surface-card);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  font-family: var(--font-quote);
  font-size: 16px;
  color: var(--color-muted);
  line-height: 1.8;
}
.people-quote footer {
  margin-top: 4px;
  font-size: 14px;
  color: var(--color-muted-soft);
}
.people-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
}
.people-card {
  background: var(--color-surface-card);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  border: 1px solid var(--color-hairline);
}
.people-header {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-sm);
}
.people-icon {
  font-size: 28px;
  flex-shrink: 0;
}
.people-name {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 500;
  color: var(--color-ink);
  margin: 0;
}
.people-meta {
  font-size: var(--text-caption);
  color: var(--color-muted);
}
.people-desc {
  font-size: var(--text-body-sm);
  color: var(--color-body);
  line-height: 1.7;
}
@media (max-width: 767px) {
  .people-grid { grid-template-columns: 1fr; }
}
</style>
