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

  data() {
    return {
      stocks: [
        {id:1, name: "BMW", price: 110},
        {id:2, name: "Google", price: 250},
        {id:3, name: "Apple", price: 300},
        {id:4, name: "Twitter", price: 200}
      ]
    }
  },
  components: {
    appStock: Stock
  }
}
</script>

<style scoped>

</style>