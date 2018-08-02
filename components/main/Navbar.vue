<template>
<div>
  <nav class="navbar is-transparent is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="/images/logo.png" alt="Fardel" width="50">
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
          <a class="navbar-item" v-if="!$auth.loggedIn" href="/auth/login/">
            Login/Register
          </a>
          <div v-if="$auth.loggedIn" class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <span v-if="$auth.user.first_name"> {{$auth.user.first_name}} </span>
              <span v-else> {{$auth.user.email}} </span>
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href='/auth/profile'>Profile</a>
              <a class="navbar-item" v-on:click="doLogout">Logout</a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable"
              v-on:mouseover.once="getBlogCategories()">
            <a class="navbar-link" href="/blog/">
              Magazine
            </a>
            <div class="navbar-dropdown is-boxed">
              <a v-if="!showBlogCategories" class="button is-loading unset-border">Loading</a>
              <a v-for="category in blogCategories" class="navbar-item" v-bind:href="'/blog/categories/'+ category.name + '/'" v-bind:key="category.id">
                {{category.name}}
              </a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a  href="/shop/" class="navbar-link">
              <span>Shop</span>
            </a>
            <div class="navbar-dropdown is-boxed">
              <a v-for="cat in shopCategories" v-bind:key="cat.id"
              class="navbar-item" v-bind:href='"/shop/categories/" + cat.name + "/"'>
                {{cat.name}}
              </a>
            </div>
          </div>
          <a class="navbar-item" href="/about-us/">
            About Us
          </a>
          <a class="navbar-item" href="/contact-us/">
            Contact Us
          </a>
        </div>
        <div class="navbar-end">
          <shopping-cart></shopping-cart>
        </div>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
import ShoppingCart from "~/components/shop/ShoppingCart"
var blog = require("~/modules/blog")
var shop = require("~/modules/shop")
var auth = require("~/modules/auth")

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
  components: {
    ShoppingCart
  },
  created() {
    this.getBlogCategories()
    this.getShopCategories()
  },
  mounted() {
    var myStorage = window.localStorage
    this.isAuthenticated = myStorage.getItem("authenticated")
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
    },
    doLogout: function(event) {
      this.$root.$cookiz.remove("cart_token")
      this.$store.commit("cart/setToken", null)
      this.$auth.logout().then(promis => {
        if (this.$route.name == "index") {
          window.location.reload(false)
        }
      })
    }
  }
}
</script>