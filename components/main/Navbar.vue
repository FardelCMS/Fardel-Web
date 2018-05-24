<template>
<nav class="navbar is-transparent is-fixed-top">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="" alt="خورجین" width="112" height="28">
      </a>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample" aria-expanded="false" v-on:click="showNav = !showNav">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="nav-togger" class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
      <div class="navbar-start">
        <a class="navbar-item" href="/">
          خانه
        </a>
        <a class="navbar-item" href="/auth/login/">
          ورود
        </a>
        <a class="navbar-item" href="/panel/login/">
          پنل مدیریت
        </a>
        <div class="navbar-item has-dropdown is-hoverable"
            v-on:mouseover.once="getBlogCategories()">
          <a class="navbar-link" href="/blog/">
            مجله
          </a>
          <div class="navbar-dropdown is-boxed">
            <a v-if="!showBlogCategories" class="button is-loading unset-border">Loading</a>
            <a v-for="category in blogCategories" class="navbar-item" v-bind:href="'/blog/categories/'+ category.name + '/'">
              {{category.name}}
            </a>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable"
            v-on:mouseover.once="getShopCategories()">
          <a class="navbar-link" href="/shop/">
            فروشگاه
          </a>
          <div class="navbar-dropdown is-boxed">
            <a v-if="!showShopCategories" class="button is-loading unset-border">Loading</a>
            <a v-for="category in shopCategories" class="navbar-item" v-bind:href="'/shop/categories/'+ category.name + '/'" >
              {{category.name}}
            </a>
          </div>
        </div>
      </div>
      <div class="navbar-end">
      </div>
    </div>
  </div>
</nav>
</template>

<script>
var blog = require("~/modules/blog")
var shop = require("~/modules/shop")

export default {
  data() {
    return {
      showNav: false,
      blogCategories: null,
      shopCategories: [],
      showBlogCategories: false,
      showShopCategories: false,
    }
  },
  methods: {
    getBlogCategories: function() {
      var categories = blog.getCategories(this.$root).then(data => {
          this.blogCategories = data
          this.showBlogCategories = true
        }
      )
    },
    getShopCategories: function() {
      var categories = shop.getCategories(this.$root).then(data => {
          this.shopCategories = data
          this.showShopCategories = true
        }
      )
    }
  }
}
</script>