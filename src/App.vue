<template>
  <div id="app" class="container">
    <appHeader></appHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch('initStocks')
  }
}
</script>

<style>
  body {
    padding: 30px;
  }
</style>
