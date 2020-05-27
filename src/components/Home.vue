<template>
 <div>
  <h1>Trade or View your Portfolio</h1>
  <h6>You may Save or Load your Data</h6>
  <h6>Click on 'End Day' to begin a New Day</h6>
  <hr>
  <p>Your Current Founds are: {{ funds | currency }}</p>
 </div>


</template>

<script>
export default {
  computed: {
    funds(){
      return this.$store.getters.funds
    }
  }
}
</script>

<style scoped>

</style>