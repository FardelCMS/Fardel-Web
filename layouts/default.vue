<template>
  <div>
    <main-navbar/>
    <notification-box/>
    <nuxt/>
    <main-footer/>
  </div>
</template>
<script>
import MainFooter from '~/components/main/Footer.vue'
import MainNavbar from '~/components/main/Navbar.vue'
import NotificationBox from '~/components/main/NotificationBox.vue'

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
    NotificationBox,
  }
}
</script>