<template>
<nav class="navbar is-transparent is-fixed-top">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="" alt="Fardel" width="112" height="28">
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
          Home
        </a>
        <a class="navbar-item" href="/auth/login/">
          Login
        </a>
        <a class="navbar-item" href="/panel/login/">
          Panel
        </a>
        <div class="navbar-item has-dropdown is-hoverable"
            v-on:mouseover.once="getBlogCategories()">
          <a class="navbar-link" href="/blog/">
            Blog
          </a>
          <div class="navbar-dropdown is-boxed">
            <a v-for="category in blogCategories" class="navbar-item" href="#">
              {{category.name}}
            </a>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable"
            v-on:mouseover.once="getShopCategories()">
          <a class="navbar-link" href="/shop/">
            Shop
          </a>
          <div class="navbar-dropdown is-boxed">
            <a v-for="category in shopCategories" class="navbar-item" href="#">
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

export default {
  data() {
    return {
      showNav: false,
      blogCategories: [],
      shopCategories: []
    }
  },
  methods: {
    getBlogCategories: function() {
      var categories = blog.getCategories(this.$root).then(data => {
          this.blogCategories = data
        }
      )
    },
    getShopCategories: function() {
    //   var categories = ecommerce.getCategories(this.$root).then(data => {
    //       this.shopCategories = data
    //     }
    //   )
    }
  }
}
</script>