<template>
  <div class="container">
    <div class="row">

    <appStock v-for="s in stocks" :key="s.id" :stock="s"></appStock>
    </div>
  </div>

</template>

<script>
import Stock from './Stock'

export default {
  components: {
    appStock: Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
}
</script>

<style scoped>

</style>