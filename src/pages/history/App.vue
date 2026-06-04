<script setup>
import AppNav from '../../components/AppNav.vue'
import AppFooter from '../../components/AppFooter.vue'
import HeroSection from '../../components/HeroSection.vue'
import InfoCard from '../../components/InfoCard.vue'
import SectionBanner from '../../components/SectionBanner.vue'
import TimelineItem from '../../components/TimelineItem.vue'
import CollapsibleSection from '../../components/CollapsibleSection.vue'
import BackToTop from '../../components/BackToTop.vue'
import { meta, timeline, keyFacts } from '../../data/history.js'
import { useScrollReveal } from '../../composables/useScrollReveal.js'

useScrollReveal()

function getFirstSentence(text) {
  const match = text.match(/[^。！？]+[。！？]/)
  return match ? match[0] : text.slice(0, 60) + '……'
}
</script>

<template>
  <AppNav current-page="history" />
  <main>
    <HeroSection
      title="历史沿革"
      subtitle="蒙城，一座被联合国地名专家组评定为「千年古县」的城市。从尉迟寺遗址的第一缕炊烟，到唐天宝元年正式定名，绵延四千五百年的文明在这里生根、生长。"
      :badges="['千年古县', '历史文化名城']"
    />

    <section class="section scroll-reveal">
      <div class="page-container">
        <SectionBanner title="历史脉络" seal-text="编年" />
        <div class="timeline">
          <TimelineItem v-for="item in timeline" :key="item.period" :period="item.period">
            <figure v-if="item.image" class="timeline-fig">
              <img :src="item.image.src" :alt="item.image.alt" />
              <figcaption class="caption">图片来源：{{ item.image.source }}</figcaption>
            </figure>
            <CollapsibleSection :title="getFirstSentence(item.body)" :default-open="false">
              <p>{{ item.body }}</p>
            </CollapsibleSection>
          </TimelineItem>
        </div>
      </div>
    </section>

    <section class="section-alt scroll-reveal">
      <div class="page-container">
        <SectionBanner title="关键史实" seal-text="数据" />
        <div class="card-grid-2">
          <InfoCard v-for="f in keyFacts" :key="f.label" :title="f.label">
            <p>{{ f.value }}</p>
          </InfoCard>
        </div>
      </div>
    </section>

    <section class="section scroll-reveal">
      <div class="page-container">
        <SectionBanner title="相关名人" seal-text="人物" />
        <div class="card-grid-2">
          <InfoCard title="庄子" icon="📜">
            <p>道家学派创始人之一，蒙城是其故里。著有《庄子》（《南华经》），主张"逍遥""齐物"，对中国哲学影响深远。</p>
            <a href="/culture.html" class="card-link">了解更多 →</a>
          </InfoCard>
          <InfoCard title="嵇康" icon="🎵">
            <p>"竹林七贤"之一，相传出生于蒙城一带。精通音律，善弹琴赋诗，以不屈于司马氏政权而被后世景仰。</p>
            <a href="/culture.html" class="card-link">了解更多 →</a>
          </InfoCard>
        </div>
      </div>
    </section>
  </main>
  <AppFooter />
  <BackToTop />
</template>

<style scoped>
.timeline {
  max-width: 760px;
  margin: 0 auto;
}
.card-link {
  display: inline-block;
  margin-top: var(--space-sm);
  font-size: var(--text-body-sm);
  color: var(--color-primary);
  text-decoration: none;
}
.timeline-fig {
  margin: 0 0 var(--space-md) 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--color-hairline);
  background: var(--color-surface-cream-strong);
}
.timeline-fig img {
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  display: block;
}
.timeline-fig figcaption {
  padding: var(--space-xs) var(--space-sm);
  text-align: center;
  background: var(--color-surface-card);
}
</style>
