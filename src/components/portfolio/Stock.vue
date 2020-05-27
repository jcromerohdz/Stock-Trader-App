
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
            :class="{danger: insufficientQuantity}"
          />

          <div class="pull-right">
            <button type="button" 
              class="btn btn-success"
              @click="sellStock"
              :disabled="insufficientQuantity || quantity <= 0"
              >
              {{ insufficientQuantity ? 'Not enough' : 'Sell'}}
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
  computed: {
    insufficientQuantity(){
      return this.quantity > this.stock.quantity
    }
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
.danger {
   border: 1px solid red;
 }
</style>
