<template>
<section class="section">
  <div class="container">
    <h1 class='title'>Order details</h1>
    <p>status :‌ 
      <span>{{order.status}}</span>
    </p>
    <p>Price : {{order.total}}</p>
    <p>Count : {{order.quantity}}</p>
    <p>Is shipping required : 
      <span v-if="order.is_shipping_required">Yes</span>
      <span v-else>No</span>
    </p>
    <table>
      <thead>
        <tr>
          <td>Product name</td>
          <td>Count</td>
          <td>Attached File</td>
          <td>Total Price</td>
          <td>Is shipping required</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="line in order.lines" v-bind:key="line.id">
          <td>{{line.variant.product.name}} {{line.variant.name}}</td>
          <td>{{line.quantity}}</td>
          <td><a v-if="line.data.file" v-bind:href="line.data.file">File</a></td>
          <td>{{line.total}}</td>
          <td>
            <span v-if="line.is_shipping_required">Yes</span>
            <span v-else>No</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
</template>

<script>
import {getOrderApi} from "~/modules/shop"

export default {
  async asyncData(context) {
    let orderId = parseInt(context.params.slug)
    let data = getOrderApi(context, orderId)
    return data
  }
}
</script>
