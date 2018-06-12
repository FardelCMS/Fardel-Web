<template>
<div class="column">
  <a v-bind:href="'/shop/product/'+ product.id + '-' + product.name + '/'">
    <div class="product-tile tile is-parent">
      <article class="tile is-child box">
        <figure class="image">
          <img v-bind:src="product.image ? product.image : '/images/no-image-available.png'">
        </figure>
        <div class='info'>
          <p class="title is-5">{{product.name}}</p>
          <p class="subtitle">{{product.price}} تومان</p>
        </div>
      </article>
    </div>
  </a>
</div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style type="text/css">
</style>