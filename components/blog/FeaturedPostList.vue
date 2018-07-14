<template>
<div>
  <div class="card" v-for="post in posts" v-bind:key="post.id">
    <a v-bind:href="'/blog/'+ post.id + '/' + post.title + '/'">
      <div class="card-image">
        <figure class="image">
          <img v-bind:src="post.image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <h3 class="title">{{post.title}}</h3>
          <p>{{post.summarized}}</p>
        </div>
      </div>
    </a>
  </div>
</div>
</template>

<script>
export default {
  props: ['posts']
}
</script>