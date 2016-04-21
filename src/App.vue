<template>
  <div id="app">
    <hero-section></hero-section>
    <waterfall-view></waterfall-view>
  </div>
</template>

<script>
import WaterfallView from './components/WaterfallView'
import HeroSection from './components/HeroSection'

export default {
  components: {
    HeroSection,
    WaterfallView
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, "Helvetica Neue", "Arial", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, san-serif;
  background: #f8f8f8;
}
</style>
