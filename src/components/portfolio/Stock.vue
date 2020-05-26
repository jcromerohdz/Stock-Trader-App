
<template>
  <div class="col col-sm-6 col-md-4">
    <div class="card mb-3">
      <div class="card-header alert-info">{{stock.name}} (Price: {{stock.price}}) | Quantity: {{stock.quantity}}</div>
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
              @click="sellStock"
              :disabled="quantity <= 0"
              >
              Sell
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';  
export default {
  props: ['stock'],
  data() {
    return {
      text: "",
      quantity: 0
    };
  },
  methods: {
    ...mapActions({
        placeSellOrder: 'sellStock'
    }),
    sellStock(){
        
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }
        this.placeSellOrder(order)
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
