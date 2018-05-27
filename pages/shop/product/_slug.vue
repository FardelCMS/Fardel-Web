<template>
<div class="container">
  <div class="section">
    <div class="content">
      <div class="columns tile box">
        <div class="column">
          <div class='carousel carousel-animated carousel-animate-fade'>
            <div class='carousel-container'>
              <div v-for="image in images" class='carousel-item has-background'>
                <img class="is-background" v-bind:src="image" alt="" width="640" height="310" />
              </div>
            </div>
            <div class="carousel-navigation">
              <div class="carousel-nav-left">
                <ion-icon name="arrow-forward" size="large"></ion-icon>
              </div>
              <div class="carousel-nav-right">
                <ion-icon name="arrow-back" size="large"></ion-icon>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-half">
          <div class="hero">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">
                  {{name}}
                </h1>
                <div class="subtitle content">
                  <p>قیمت‌ : <span class="price">{{price}}</span> تومان</p>
                  <p v-for="attr in attributes">{{attr.name}} : {{attr.value}}</p>
                  <div v-for="attr in variant_attributes">
                    <h2 class="title is-4">{{attr.name}}</h2>
                    <div class="buttons">
                      <button v-bind:class="{'is-primary': choosed[attr.name] == value}" v-on:click="selectVariant" v-bind:data-variant="attr.name" class="button " v-for="value in attr.choices">{{value}}</button>
                    </div>
                  </div>
                  <br>
                  <button class="button is-info">به سبد خرید اضافه کن</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="content">
      <div class="columns box">
        <div class="tile is-child">
          <p class="title">توضیحات</p>
          <p v-html="description"></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import bulmaCarousel from '~/node_modules/bulma-extensions/bulma-carousel/dist/bulma-carousel.min.js';
import {getProduct} from "~/modules/shop"

export default {
  head() {
    return {title: this.name + " - فروشگاه"}
  },
  mounted() {
    var carousels = bulmaCarousel.attach();
  },
  methods: {
    selectVariant(event) {
      console.log(event.target)
      this.choosed[event.target.dataset.variant] = event.target.innerText
    }
  },
  async asyncData(app) {
    let id = app.params.slug.split('-', 1)[0]
    let data = await getProduct(app, id)

    data.choosed = {}
    for (var i = data.variant_attributes.length - 1; i >= 0; i--) {
      data.choosed[data.variant_attributes[i].name] = null
    }
    return data
  }
}
</script>