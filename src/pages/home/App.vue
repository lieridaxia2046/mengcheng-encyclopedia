<script setup>
import AppNav from '../../components/AppNav.vue'
import AppFooter from '../../components/AppFooter.vue'
import HeroSection from '../../components/HeroSection.vue'
import InfoCard from '../../components/InfoCard.vue'
import DarkCard from '../../components/DarkCard.vue'
import SectionBanner from '../../components/SectionBanner.vue'
import AnimatedCounter from '../../components/AnimatedCounter.vue'
import TabSwitcher from '../../components/TabSwitcher.vue'
import LightBox from '../../components/LightBox.vue'
import BackToTop from '../../components/BackToTop.vue'
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal.js'

useScrollReveal()

const activeTab = ref('explore')
const base = import.meta.env.BASE_URL

const infoCards = [
  { title: '历史沿革', icon: '📜', desc: '从尉迟寺遗址到千年古县，跨越 4500 年的文明脉络。', link: base + 'history.html' },
  { title: '地理环境', icon: '🌏', desc: '淮北平原中部，涡河之畔，暖温带半湿润季风气候。', link: base + 'geography.html' },
  { title: '文化传承', icon: '🎭', desc: '庄子故里，楹联之乡，非遗剪纸与万佛塔辉映千年文脉。', link: base + 'culture.html' },
  { title: '旅游景点', icon: '🏯', desc: '庄子祠、万佛塔、博物馆……年接待游客超 900 万人次。', link: base + 'tourism.html' },
  { title: '美食特产', icon: '🍜', desc: '油酥烧饼、九龙贡面、五洲牛肉干，地道皖北风味。', link: base + 'cuisine.html' },
  { title: '经济发展', icon: '📊', desc: 'GDP 577.7 亿元，三大主导产业驱动皖北崛起。', link: base + 'economy.html' }
]

const quickFacts = [
  { label: '所属地区', value: '安徽省亳州市', num: null },
  { label: '面积', value: '2,091 平方公里', num: 2091, suffix: ' 平方公里' },
  { label: '常住人口', value: '106.1 万人（2024）', num: 106.1, suffix: ' 万人', decimals: 1 },
  { label: 'GDP', value: '577.7 亿元（2025）', num: 577.7, suffix: ' 亿元', decimals: 1 },
  { label: '古称', value: '山桑、漆园、涡阳、淝水', num: null },
  { label: '定名时间', value: '唐天宝元年（742 年）', num: null }
]

const highlights = [
  { title: '4500 年文明史', body: '尉迟寺遗址被誉为"中华原始第一村"，是大汶口文化晚期的重要聚落遗址，出土了大量珍贵文物，见证了淮北地区远古先民的定居生活。' },
  { title: '庄子故里', body: '蒙城是道家学派创始人之一庄子的故里。城内庄子祠为国家 AAA 级景区，每年举办庄子文化周，"逍遥蒙城"已成为核心文化 IP。' },
  { title: '皖北崛起新星', body: '2025 年 GDP 达 577.7 亿元，十四五期间连跨两个百亿台阶。汽车装备、食品加工、新型建材三大主导产业蓬勃发展。' }
]

const heroImage = { src: base + 'images/蒙城县地图-政区版.jpg', alt: '蒙城县政区图', source: '蒙城县人民政府' }
</script>

<template>
  <AppNav current-page="home" />
  <main>
    <HeroSection
      title="蒙城县百科全书"
      subtitle="庄子故里 · 千年古县 · 逍遥蒙城 — 全方位了解蒙城历史文化与风土人情"
      :badges="['千年古县', '庄子故里', '楹联之乡']"
    />

    <section class="section scroll-reveal">
      <div class="page-container">
        <SectionBanner title="探索蒙城" seal-text="导航" />
        <div class="hero-map-wrap">
          <LightBox :src="heroImage.src" :alt="heroImage.alt">
            <img class="hero-map-img" :src="heroImage.src" :alt="heroImage.alt" />
          </LightBox>
          <p class="hero-map-caption caption">图片来源：{{ heroImage.source }}</p>
        </div>
        <div class="card-grid">
          <InfoCard v-for="card in infoCards" :key="card.title" :title="card.title" :icon="card.icon">
            <p>{{ card.desc }}</p>
            <a :href="card.link" class="card-link">了解更多 →</a>
          </InfoCard>
        </div>
      </div>
    </section>

    <section class="section-dark scroll-reveal">
      <div class="page-container">
        <SectionBanner title="蒙城名片" seal-text="概览" />
        <DarkCard>
          <div class="facts-grid">
            <div v-for="f in quickFacts" :key="f.label" class="fact-item">
              <span v-if="f.num" class="fact-value">
                <AnimatedCounter :target="f.num" :suffix="f.suffix" :decimals="f.decimals || 0" />
              </span>
              <span v-else class="fact-value">{{ f.value }}</span>
              <span class="fact-label caption">{{ f.label }}</span>
            </div>
          </div>
        </DarkCard>
      </div>
    </section>

    <section class="section scroll-reveal">
      <div class="page-container">
        <SectionBanner title="蒙城概览" seal-text="亮点" />
        <TabSwitcher
          :tabs="[
            { id: 'explore', label: '快速了解' },
            { id: 'admin', label: '行政区划' }
          ]"
          v-model="activeTab"
        />
        <div v-show="activeTab === 'explore'">
          <div class="card-grid">
            <InfoCard v-for="h in highlights" :key="h.title" :title="h.title">
              <p>{{ h.body }}</p>
            </InfoCard>
          </div>
        </div>
        <div v-show="activeTab === 'admin'">
          <div class="card-grid-2">
            <InfoCard title="3 个街道" icon="🏙️">
              <p>城关街道（县政府驻地）、漆园街道、庄周街道</p>
            </InfoCard>
            <InfoCard title="12 镇 · 2 乡" icon="🏘️">
              <p>双涧镇、小涧镇、坛城镇、许疃镇、板桥集镇、马集镇、岳坊镇、立仓镇、楚村镇、乐土镇、三义镇、篱笆镇；王集乡、小辛集乡</p>
            </InfoCard>
          </div>
          <p style="text-align:center;margin-top:var(--space-lg)">
            <a :href="base + 'admin.html'" class="body-text">查看完整行政区划 →</a>
          </p>
        </div>
      </div>
    </section>
  </main>
  <AppFooter />
  <BackToTop />
</template>

<style scoped>
.card-link {
  display: inline-block;
  margin-top: var(--space-md);
  font-size: var(--text-body-sm);
  color: var(--color-primary);
  text-decoration: none;
}

.facts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
  text-align: center;
}

.fact-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.fact-value {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 400;
  color: var(--color-on-dark);
}

.fact-label {
  color: var(--color-on-dark-soft);
}

.hero-map-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--space-xl);
}
.hero-map-img {
  max-height: 520px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-hairline);
}
.hero-map-caption {
  margin-top: var(--space-xs);
  text-align: center;
}

@media (max-width: 767px) {
  .hero-map-img { max-height: 360px; }
  .facts-grid { grid-template-columns: repeat(2, 1fr); gap: var(--space-lg); }
  .fact-value { font-size: 18px; }
}
</style>
