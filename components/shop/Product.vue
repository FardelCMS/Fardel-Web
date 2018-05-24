<template>
<div class="column">
  <div class="card product-box">
    <div class="card-image">
      <figure class="image is-4by3">
        <img v-bind:src="product.image ? product.image : '/images/no-image-available.png'">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <p class="title is-4">{{product.name}}</p>
        </div>
        <div class="media-content">
          <p class="subtitle is-6">{{product.price}} تومان</p>
        </div>
      </div>

    <!--   <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div> -->
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style type="text/css">
.product-box {
  max-width:300px;
}
</style>