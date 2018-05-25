<template>
<div class="container">
  <div class="section">
    <div class="content">
      <div class="columns">
        <div class="column">
          <div class='carousel carousel-animated carousel-animate-fade'>
            <div class='carousel-container'>
              <div class='carousel-item has-background is-active'>
                <img class="is-background" src="https://wikiki.github.io/images/merry-christmas.jpg" alt="" width="640" height="310" />
                <div class="title">Merry Christmas</div>
              </div>
              <div class='carousel-item has-background'>
                <img class="is-background" src="https://wikiki.github.io/images/singer.jpg" alt="" width="640" height="310" />
                <div class="title">Original Gift: Offer a song with <a href="https://lasongbox.com" target="_blank">La Song Box</a></div>
              </div>
              <div class='carousel-item has-background'>
                <img class="is-background" src="https://wikiki.github.io/images/sushi.jpg" alt="" width="640" height="310" />
                <div class="title">Sushi time</div>
              </div>
              <div class='carousel-item has-background'>
                <img class="is-background" src="https://wikiki.github.io/images/life.jpg" alt="" width="640" height="310" />
                <div class="title">Life</div>
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
                      <button class="button" v-for="value in attr.choices">{{value}}</button>
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
      <h1 class="title">توضیحات</h1>
      <p v-html="description" class="subtitle"></p>
    </div>
  </div>
</div>
</template>

<script>
import bulmaCarousel from '~/node_modules/bulma-extensions/bulma-carousel/dist/bulma-carousel.min.js';
import {getProduct} from "~/modules/shop"

export default {
  // components: {
  //   bulmaCarousel,
  // },
  head() {
    return {title: this.name + " - فروشگاه"}
  },
  mounted() {
    var carousels = bulmaCarousel.attach();
  },
  async asyncData(app) {
    let id = app.params.slug.split('-', 1)[0]
    let data = await getProduct(app, id)
    return data
  }
}
</script>