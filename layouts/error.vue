<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container">
      	<center>
        <h1 class="title">
          خطایی رخ داده
        </h1>
        <br>
        <h2 class="subtitle">
	        <h1>خطای : {{error.statusCode}}</h1>
	        <h1 v-if="error.statusCode === 404">این صفحه موجود نیست ؟</h1>
        </h2>
        </center>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['error'],
  transition: 'page',
  head() {
    return {title: "خطا "}
  },
}
</script>