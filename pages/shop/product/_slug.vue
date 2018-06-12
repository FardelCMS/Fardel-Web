<template>
<div class="container">
  <div class="section">
    <div class="content">
      <div class="columns tile box">
        <div class="column">
          <div v-if="product.images.length > 1" class='carousel carousel-animated carousel-animate-fade'>
            <div class='carousel-container'>
              <div v-for="image in product.images" class='carousel-item has-background'>
                <img v-bind:src="image"/>
              </div>
            </div>
            <div class="carousel-navigation">
              <div class="carousel-nav-left">
                <b-icon icon="arrow-right-bold"></b-icon>
              </div>
              <div class="carousel-nav-right">
                <b-icon icon="arrow-left-bold"></b-icon>
              </div>
            </div>
          </div>
          <div v-if="product.images.length <= 1">
            <img v-bind:src="product.images[0]"/>
          </div>

        </div>
        <div class="column is-half">
          <div class="hero">
            <div class="hero-body">
              <div>
                <h1 class="title">
                  {{product.name}}
                </h1>
                <div class="content">
                  <p>Price : <span class="price">{{product.price}}</span> $</p>
                  <p v-for="attr in product.attributes">{{attr.name}} : {{attr.value}}</p>
                  <div v-for="attr in product.variant_attributes">
                    <h2 class="title is-4">{{attr.name}}</h2>
                    <div class="buttons">
                      <button v-bind:class="{'is-primary': choosed[attr.name] == value}" v-on:click="selectVariant" v-bind:data-variant="attr.name" class="button " v-for="value in attr.choices">{{value}}</button>
                    </div>
                  </div>
                  <br>
                  <b-field v-if="product.product_type.is_file_required" class="file">
                    <b-upload v-model="files">
                      <a class="button is-primary">
                        <b-icon icon="upload"></b-icon>
                        <span>Choose a file</span>
                      </a>
                    </b-upload>
                    <span class="file-name"
                      v-if="files && files.length">
                      {{ files[0].name }}
                    </span>
                  </b-field>
                  <br>
                  <input v-bind:value="product.id" type="hidden" ref="productID">
                  <b-field>
                    <b-input placeholder="تعداد"
                      type="number"
                      min="1"
                      v-model="orderCount"
                      style="width:100px">
                    </b-input>
                    <button v-on:click="addToCart"
                      class="button is-info"
                      v-bind:class="{'is-loading':isLoading}">
                      Add To Cart
                    </button>
                  </b-field>
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
          <p v-html="product.description"></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import bulmaCarousel from '~/node_modules/bulma-extensions/bulma-carousel/dist/bulma-carousel.min.js';
import {getProduct, addToCartApi, addToCartWithFileApi} from "~/modules/shop"

export default {
  head() {
    return {title: this.product.name + " - shop"}
  },
  data() {
    return {
      'files':[],
      // 'choosed':{},
      "selected_variant": null,
      "orderCount":0,
      "isLoading": false,
    }
  },
  mounted() {
    var carousels = bulmaCarousel.attach();
  },
  methods: {
    selectVariant(event) {
      this.choosed[event.target.dataset.variant] = event.target.innerText
    },
    addToCart(event) {
      this.isLoading = true
      if (this.orderCount < 1) {        
        this.$store.commit("notif/addNotif", {'type':"danger", "content":"Please enter the count."})
        this.isLoading = false
      } else if (this.selected_variant != null) {
        if (this.product.product_type.is_file_required) {
          this.addToCartWithFile(event).catch(error => {
            this.isLoading = false
          })
        } else {
          addToCartApi(this.$root, this.$refs.productID.value, this.orderCount).then(response => {
            this.$store.commit("notif/addNotif", {'type':"success", "content":"Product added to the cart."})
            this.$store.dispatch("cart/reloadCart", this.$root)
          }).catch(error => {
            this.isLoading = false
          })
        }
      }
    },
    addToCartWithFile(event) {
      if (this.files[0] != undefined) {
        var file = this.files[0]
        var variant_id = this.selected_variant.id
        var count = this.orderCount

        addToCartWithFileApi(this.$root, variant_id, count, file).then(resp => {
          this.$store.commit("notif/addNotif",
            {'type':"success", "content":"Product added to the cart."})
          this.$store.dispatch("cart/reloadCart", this.$root)
          this.isLoading = false
        }).catch(error => {
          console.log(error)
          this.$store.commit("notif/addNotif",
            {"type":"danger", "content": error.response.data.message})
          this.isLoading = false
        })
      } else {
        this.$store.commit("notif/addNotif", {"type":"danger", "content":"Please enter the file for the product."})
          this.isLoading = false
      }
    }
  },
  async asyncData(app) {
    let id = app.params.slug.split('-', 1)[0]
    let data = await getProduct(app, id)
    var choosed = {}

    if (data.product.product_type.has_variants) {
      for (var i = data.product.variant_attributes.length - 1; i >= 0; i--) {
        choosed[data.product.variant_attributes[i].name] = null
      }
      data.choosed = choosed
    } else {
      data.selected_variant = data.product.variants[0]
    }
    return data
  }
}
</script>