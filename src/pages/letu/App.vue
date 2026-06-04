<script setup>
import AppNav from '../../components/AppNav.vue'
import AppFooter from '../../components/AppFooter.vue'
import HeroSection from '../../components/HeroSection.vue'
import InfoCard from '../../components/InfoCard.vue'
import DarkCard from '../../components/DarkCard.vue'
import SectionBanner from '../../components/SectionBanner.vue'
import ImageFigure from '../../components/ImageFigure.vue'
import BackToTop from '../../components/BackToTop.vue'
import { overview, features, development } from '../../data/letu.js'
import { useScrollReveal } from '../../composables/useScrollReveal.js'

useScrollReveal()
</script>

<template>
  <AppNav current-page="letu" />
  <main>
    <HeroSection
      title="乐土镇"
      subtitle="安居乐业之土，蒙城中部重镇。这里地势平坦、土壤肥沃，是蒙城县重要的粮食生产基地，也是一片充满生机与希望的热土。"
      :badges="['农业重镇', '乐土人家']"
    />

    <section class="section scroll-reveal">
      <div class="page-container">
        <SectionBanner title="镇情概况" seal-text="概况" />
        <ImageFigure v-if="overview.image" :caption="'图片来源：' + overview.image.source">
          <img :src="overview.image.src" :alt="overview.image.alt" />
        </ImageFigure>
        <div class="card-grid-2">
          <InfoCard title="基本信息" icon="📍">
            <p><strong>位置：</strong>{{ overview.location }}</p>
            <p style="margin-top:6px"><strong>面积：</strong>{{ overview.area }}</p>
            <p style="margin-top:6px"><strong>人口：</strong>{{ overview.population }}</p>
            <p style="margin-top:6px"><strong>下辖：</strong>{{ overview.villages }}</p>
          </InfoCard>
          <InfoCard title="地名由来" icon="📖">
            <p>{{ overview.nameOrigin }}</p>
          </InfoCard>
        </div>
      </div>
    </section>

    <section class="section-dark scroll-reveal">
      <div class="page-container">
        <SectionBanner title="自然环境" seal-text="地理" />
        <div class="card-grid-2">
          <DarkCard title="地形土壤">
            <p style="color:var(--color-on-dark-soft)">{{ overview.terrain }}</p>
          </DarkCard>
          <DarkCard title="气候特征">
            <p style="color:var(--color-on-dark-soft)">{{ overview.climate }}</p>
          </DarkCard>
        </div>
      </div>
    </section>

    <section class="section-alt scroll-reveal">
      <div class="page-container">
        <SectionBanner title="特色与资源" seal-text="产业" />
        <div class="card-grid-2">
          <InfoCard v-for="f in features" :key="f.title" :title="f.title" :icon="f.icon">
            <p>{{ f.body }}</p>
          </InfoCard>
        </div>
      </div>
    </section>

    <section class="section scroll-reveal">
      <div class="page-container">
        <SectionBanner title="发展与民生" seal-text="振兴" />
        <div class="card-grid">
          <InfoCard v-for="d in development" :key="d.title" :title="d.title">
            <p>{{ d.body }}</p>
          </InfoCard>
        </div>
      </div>
    </section>
  </main>
  <AppFooter />
  <BackToTop />
</template>

<style scoped>
:deep(.image-placeholder) {
  background: #d6cfc3;
  border-color: #b8b0a0;
}
</style>
