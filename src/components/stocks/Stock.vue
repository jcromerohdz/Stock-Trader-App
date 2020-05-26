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
          />

          <div class="pull-right">
            <!-- <div class="input-group-text" id="btnGroupAddon" disabled>@</div>
            <span class="input-group-text alert-success" 
            id="basic-addon2"
            @click="buyStock"
            :disabled="quantity <= 0 || !Number.isInteger(quantity)">
            Buy
            </span> -->
            <button type="button" 
              class="btn btn-success"
              @click="buyStock"
              :disabled="quantity <= 0"
              >
              Buy
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
  methods: {
    buyStock(){
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      console.log(order)
      this.$store.dispatch('buyStock', order)
      this.quantity = 0
    }
  }
};
</script>

<style scoped>
#box {
  padding: 15px;
}
</style>
