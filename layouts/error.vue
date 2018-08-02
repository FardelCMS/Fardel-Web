<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container">
      	<center>
        <h1 class="title">
          Something went wrong
        </h1>
        <br>
        <h2 class="subtitle">
	        <h1>error : {{error.statusCode}}</h1>
	        <h1 v-if="error.statusCode === 404">Page Not found</h1>
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
    return {title: "Error "}
  },
}
</script>