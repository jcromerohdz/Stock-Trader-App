<template>
<div id="header">
  <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand :to="'/'">Stock Trader</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="'/portfolio'">Portfolio</b-nav-item>
        <b-nav-item :to="'/stocks'">Stocks</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="endDay">End Day</b-nav-item>
        <b-nav-item-dropdown text="Save & Load" right>
          <b-dropdown-item href="#">Save Data</b-dropdown-item>
          <b-dropdown-item href="#">Load Data</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item ><strong>Founds: {{ funds|currency }} </strong> </b-nav-item>
        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed:{
    funds(){
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions([
      'randomizeStocks'
    ]),
    endDay() {
     this.randomizeStocks() 
    }
  }
}
</script>

<style scoped>
 #header{
   padding-bottom: 10px;
 }
</style>