<script setup>
import AppNav from '../../components/AppNav.vue'
import AppFooter from '../../components/AppFooter.vue'
import HeroSection from '../../components/HeroSection.vue'
import InfoCard from '../../components/InfoCard.vue'
import DarkCard from '../../components/DarkCard.vue'
import SectionBanner from '../../components/SectionBanner.vue'
import TabSwitcher from '../../components/TabSwitcher.vue'
import BackToTop from '../../components/BackToTop.vue'
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal.js'
import { categories, highlights } from '../../data/cuisine.js'

useScrollReveal()

const activeCategory = ref('all')
const categoryTabs = [
  { id: 'all', label: '全部分类' },
  ...categories.map(c => ({ id: c.name, label: c.name }))
]

const filteredCategories = ref(categories)
function filterCategory(id) {
  activeCategory.value = id
  if (id === 'all') {
    filteredCategories.value = categories
  } else {
    filteredCategories.value = categories.filter(c => c.name === id)
  }
}
</script>

<template>
  <AppNav current-page="cuisine" />
  <main>
    <HeroSection
      title="美食特产"
      subtitle="从 150 年历史的油酥烧饼到全国知名的五洲牛肉干，从狼山黑陶到蒙蝉蜕药材，蒙城的物产承载着这片土地的丰厚与灵动。"
    />

    <section class="section-dark scroll-reveal">
      <div class="page-container">
        <SectionBanner title="招牌特产" seal-text="精选" />
        <div class="card-grid-2">
          <DarkCard v-for="h in highlights" :key="h.name" :title="h.name">
            <p style="color:var(--color-on-dark-soft)">{{ h.detail }}</p>
          </DarkCard>
        </div>
      </div>
    </section>

    <section class="section scroll-reveal">
      <div class="page-container">
        <SectionBanner title="特产分类" seal-text="目录" />
        <TabSwitcher
          :tabs="categoryTabs"
          v-model="activeCategory"
          @update:model-value="filterCategory"
        />
        <div class="card-grid">
          <InfoCard v-for="cat in filteredCategories" :key="cat.name" :title="cat.name">
            <ul class="item-list">
              <li v-for="item in cat.items" :key="item">{{ item }}</li>
            </ul>
          </InfoCard>
        </div>
      </div>
    </section>
  </main>
  <AppFooter />
  <BackToTop />
</template>

<style scoped>
.item-list { list-style: none; padding: 0; }
.item-list li { font-size: var(--text-body-sm); color: var(--color-body); padding: 4px 0; padding-left: 14px; position: relative; }
.item-list li::before { content: '·'; color: var(--color-primary); font-weight: bold; position: absolute; left: 0; }
</style>
