<template>
	<div>
		<main-navbar/>
		<main-cart/>
		<nuxt/>
		<main-footer/>
	</div>
</template>
<script>
import MainFooter from '~/components/main/Footer.vue'
import MainNavbar from '~/components/main/Navbar.vue'
import MainCart from '~/components/main/Cart.vue'

export default {
  head: {
    bodyAttrs: {
      dir: 'rtl'
    },
    htmlAttrs: {
      class: "has-navbar-fixed-top"
    }
  },
  components: {
    MainFooter,
    MainNavbar,
    MainCart
  }
}
</script>