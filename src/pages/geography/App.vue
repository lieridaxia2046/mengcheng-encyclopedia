<script setup>
import AppNav from '../../components/AppNav.vue'
import AppFooter from '../../components/AppFooter.vue'
import HeroSection from '../../components/HeroSection.vue'
import InfoCard from '../../components/InfoCard.vue'
import DarkCard from '../../components/DarkCard.vue'
import SectionBanner from '../../components/SectionBanner.vue'
import BackToTop from '../../components/BackToTop.vue'
import { overview, rivers, resources } from '../../data/geography.js'
import { useScrollReveal } from '../../composables/useScrollReveal.js'

useScrollReveal()
</script>

<template>
  <AppNav current-page="geography" />
  <main>
    <HeroSection
      title="地理环境"
      subtitle="蒙城地处淮北平原中部，涡河穿境而过。暖温带半湿润季风气候赋予这里四季分明的自然禀赋，丰饶的土地下蕴藏着优质的煤炭资源。"
    />

    <section class="section scroll-reveal">
      <div class="page-container">
        <SectionBanner title="位置与地形" />
        <div class="card-grid-2">
          <InfoCard title="地理位置" icon="📍">
            <p>{{ overview.location }}</p>
            <p style="margin-top:8px">{{ overview.coordinates }}</p>
            <p style="margin-top:8px">{{ overview.neighbors }}</p>
          </InfoCard>
          <InfoCard title="面积与地形" icon="⛰️">
            <p>总面积：{{ overview.area }}</p>
            <p style="margin-top:8px">{{ overview.terrain }}</p>
          </InfoCard>
        </div>
      </div>
    </section>

    <section class="section-dark scroll-reveal">
      <div class="page-container">
        <SectionBanner title="气候特征" />
        <DarkCard>
          <p style="font-size:18px;line-height:1.8;color:var(--color-on-dark)">
            {{ overview.climate }}
          </p>
          <div class="season-grid">
            <div class="season-item">
              <span class="season-icon">🌸</span>
              <span class="season-name">春季</span>
              <span class="season-desc">气温回升快，多风少雨</span>
            </div>
            <div class="season-item">
              <span class="season-icon">☀️</span>
              <span class="season-name">夏季</span>
              <span class="season-desc">高温多雨，雨热同期</span>
            </div>
            <div class="season-item">
              <span class="season-icon">🍂</span>
              <span class="season-name">秋季</span>
              <span class="season-desc">秋高气爽，降温明显</span>
            </div>
            <div class="season-item">
              <span class="season-icon">❄️</span>
              <span class="season-name">冬季</span>
              <span class="season-desc">寒冷干燥，偶有降雪</span>
            </div>
          </div>
        </DarkCard>
      </div>
    </section>

    <section class="section scroll-reveal">
      <div class="page-container">
        <SectionBanner title="四大水系" seal-text="淮河" />
        <div class="card-grid-2">
          <InfoCard v-for="r in rivers" :key="r.name" :title="r.name">
            <p>{{ r.description }}</p>
          </InfoCard>
        </div>
        <p style="margin-top:8px;text-align:center" class="caption">以上河流均属淮河水系</p>
      </div>
    </section>

    <section class="section-alt scroll-reveal">
      <div class="page-container">
        <SectionBanner title="矿产资源" seal-text="资源" />
        <div class="card-grid-2">
          <InfoCard v-for="r in resources" :key="r.name" :title="r.name">
            <p>{{ r.detail }}</p>
          </InfoCard>
        </div>
      </div>
    </section>
  </main>
  <AppFooter />
  <BackToTop />
</template>

<style scoped>
.season-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
  margin-top: var(--space-xl);
  text-align: center;
}
.season-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.season-icon {
  font-size: 28px;
}
.season-name {
  font-family: var(--font-display);
  font-size: var(--text-title);
  color: var(--color-on-dark);
}
.season-desc {
  font-size: var(--text-body-sm);
  color: var(--color-on-dark-soft);
}
@media (max-width: 767px) {
  .season-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
