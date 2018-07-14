<template>
	<div>
    <div class="content">
      <div class="content-inside">
    		<main-navbar/>
    		<nuxt/>
      </div>
    </div>
		<main-footer/>
	</div>
</template>
<script>
import MainFooter from '~/components/main/Footer.vue'
import MainNavbar from '~/components/main/Navbar.vue'

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
  }
}
</script>