<template>
  <div class="container">
    <div class="row">

    <appStock v-for="s in stocks" :key="s.id" :stock="s"></appStock>
    </div>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'
  import Stock from './Stock'

  export default {
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio'
      })
    },
    components: {
      appStock: Stock
    }
  }
</script>

<style scoped>

</style>