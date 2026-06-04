<script setup>
import AppNav from '../../components/AppNav.vue'
import AppFooter from '../../components/AppFooter.vue'
import HeroSection from '../../components/HeroSection.vue'
import InfoCard from '../../components/InfoCard.vue'
import SectionBanner from '../../components/SectionBanner.vue'
import BackToTop from '../../components/BackToTop.vue'
import { government, streets, towns, townships } from '../../data/admin.js'
import { useScrollReveal } from '../../composables/useScrollReveal.js'

useScrollReveal()
</script>

<template>
  <AppNav current-page="admin" />
  <main>
    <HeroSection
      title="行政区划"
      subtitle="蒙城县下辖 3 个街道、12 个镇、2 个乡。县政府驻城关街道周元西路 168 号。"
    />

    <section class="section scroll-reveal">
      <div class="page-container">
        <div class="card-grid-2">
          <InfoCard title="政府信息" icon="🏛️">
            <p>政府驻地：{{ government.seat }}</p>
            <p style="margin-top:4px">电话区号：{{ government.phoneCode }}</p>
            <p style="margin-top:4px">车牌代码：{{ government.licensePlate }}</p>
          </InfoCard>
          <InfoCard title="行政区划总数" icon="📋">
            <p>共 17 个乡镇级行政区</p>
            <p style="margin-top:4px">3 个街道 + 12 个镇 + 2 个乡</p>
          </InfoCard>
        </div>
      </div>
    </section>

    <section class="section scroll-reveal">
      <div class="page-container">
        <SectionBanner title="3 个街道" seal-text="街道" />
        <div class="card-grid">
          <InfoCard v-for="s in streets" :key="s.name" :title="s.name">
            <p>{{ s.note || '街道办事处' }}</p>
          </InfoCard>
        </div>
      </div>
    </section>

    <section class="section-alt scroll-reveal">
      <div class="page-container">
        <SectionBanner title="12 个镇" seal-text="镇" />
        <div class="card-grid">
          <InfoCard v-for="t in towns" :key="t.name" :title="t.name">
            <p>{{ t.note || (t.name + '人民政府') }}</p>
            <a v-if="t.link" :href="t.link" class="town-link">查看详情 →</a>
          </InfoCard>
        </div>
      </div>
    </section>

    <section class="section scroll-reveal">
      <div class="page-container">
        <SectionBanner title="2 个乡" seal-text="乡" />
        <div class="card-grid-2">
          <InfoCard v-for="t in townships" :key="t.name" :title="t.name">
            <p>{{ t.note || (t.name + '人民政府') }}</p>
          </InfoCard>
        </div>
      </div>
    </section>
  </main>
  <AppFooter />
  <BackToTop />
</template>

<style scoped>
.town-link {
  display: inline-block;
  margin-top: var(--space-sm);
  font-size: var(--text-body-sm);
  color: var(--color-primary);
  text-decoration: none;
}
.town-link:hover {
  color: var(--color-primary-active);
  text-decoration: underline;
}
</style>
