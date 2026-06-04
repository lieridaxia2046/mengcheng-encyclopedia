<script setup>
import AppNav from '../../components/AppNav.vue'
import AppFooter from '../../components/AppFooter.vue'
import HeroSection from '../../components/HeroSection.vue'
import InfoCard from '../../components/InfoCard.vue'
import DarkCard from '../../components/DarkCard.vue'
import SectionBanner from '../../components/SectionBanner.vue'
import DataTable from '../../components/DataTable.vue'
import AnimatedCounter from '../../components/AnimatedCounter.vue'
import BackToTop from '../../components/BackToTop.vue'
import { gdpData, industryStructure, pillarIndustries, finance, outlook } from '../../data/economy.js'
import { useScrollReveal } from '../../composables/useScrollReveal.js'

useScrollReveal()
</script>

<template>
  <AppNav current-page="economy" />
  <main>
    <HeroSection
      title="经济发展"
      subtitle="2025 年 GDP 达 577.7 亿元，十四五期间连跨两个百亿台阶。汽车装备、食品加工、新型建材三大主导产业驱动皖北振兴。"
    />

    <section class="section scroll-reveal">
      <div class="page-container">
        <SectionBanner title="GDP 增长趋势" seal-text="数据" />
        <DataTable :headers="gdpData.headers" :rows="gdpData.rows" caption='"十四五"期间 GDP 连跨两个百亿台阶，年均增长 6.2%，全省位次升至第 13 位。' />
      </div>
    </section>

    <section class="section-alt scroll-reveal">
      <div class="page-container">
        <SectionBanner title="产业结构（2025 年）" seal-text="结构" />
        <DataTable :headers="industryStructure.headers" :rows="industryStructure.rows" />
      </div>
    </section>

    <section class="section-dark scroll-reveal">
      <div class="page-container">
        <SectionBanner title="主导产业" seal-text="支柱" />
        <div class="card-grid-2">
          <DarkCard v-for="p in pillarIndustries" :key="p.name" :title="p.name">
            <p v-if="p.output" style="color:var(--color-on-dark);margin-bottom:4px">2024 年产值：{{ p.output }}</p>
            <p v-if="p.note" style="color:var(--color-on-dark-soft)">{{ p.note }}</p>
          </DarkCard>
        </div>
      </div>
    </section>

    <section class="section scroll-reveal">
      <div class="page-container">
        <SectionBanner title="财政与居民收入" seal-text="民生" />
        <div class="card-grid">
          <InfoCard title="一般公共预算收入">
            <p class="big-num"><AnimatedCounter :target="30.12" suffix=" 亿元" :decimals="2" /></p>
            <p class="sub-text">2024 年</p>
          </InfoCard>
          <InfoCard title="城镇常住居民人均可支配收入">
            <p class="big-num"><AnimatedCounter :target="43907" suffix=" 元" /></p>
            <p class="sub-text">2024 年</p>
          </InfoCard>
          <InfoCard title="农村常住居民人均可支配收入">
            <p class="big-num"><AnimatedCounter :target="21311" suffix=" 元" /></p>
            <p class="sub-text">2024 年</p>
          </InfoCard>
        </div>
      </div>
    </section>

    <section class="section-alt scroll-reveal">
      <div class="page-container">
        <SectionBanner title="2026 年展望" seal-text="目标" />
        <InfoCard title="十五五开局之年">
          <p><strong>目标：</strong>{{ outlook.target }}</p>
          <p style="margin-top:8px"><strong>定位：</strong>{{ outlook.positioning }}</p>
          <ul class="priority-list">
            <li v-for="p in outlook.priorities" :key="p">{{ p }}</li>
          </ul>
        </InfoCard>
      </div>
    </section>
  </main>
  <AppFooter />
  <BackToTop />
</template>

<style scoped>
.big-num { font-family: var(--font-display); font-size: 24px; font-weight: 400; color: var(--color-ink); }
.sub-text { font-size: var(--text-body-sm); color: var(--color-muted); margin-top: 4px; }
.priority-list { margin-top: var(--space-sm); padding-left: 20px; }
.priority-list li { font-size: var(--text-body); color: var(--color-body); padding: 4px 0; }
</style>
