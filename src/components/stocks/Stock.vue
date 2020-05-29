<template>
  <div class="col col-sm-6 col-md-4">
    <div class="card mb-3">
      <div class="card-header alert-success">{{stock.name}} (Price: {{stock.price}})</div>
      <div class="card-body">
        <div class="input-group mb-3">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            aria-label="Quantity"
            aria-describedby="basic-addon2"
            v-model="quantity"
            :class="{danger: insufficientFunds}"
          />

          <div class="pull-right">
            <button type="button" 
              class="btn btn-success"
              @click="buyStock"
              :disabled="quantity <= 0 || insufficientFunds"
              >
              {{ insufficientFunds ? 'No Funds' : 'Buy'}}
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      text: "",
      quantity: 0
    };
  },
  computed: {
    funds(){
      return this.$store.getters.funds
    },
    insufficientFunds(){
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock(){
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: parseInt(this.quantity, 10)
      }
      console.log(order)
      this.$store.dispatch('buyStock', order)
      this.quantity = 0
    }
  }
};
</script>

<style scoped>
 .danger {
   border: 1px solid red;
 }
</style>
