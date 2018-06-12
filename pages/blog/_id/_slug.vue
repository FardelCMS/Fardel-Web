<template>
<div class="container">
  <div class="columns">
    <div class="column is-three-quarters">
      <section class="section">
        <img class="image" v-bind:src="post.image">
      </section>
      <div class="hero">
        <div class="hero-body">
          <h1 class="title">{{post.title}}</h1>
        </div>
      </div>
      <div v-html="post.content" class="section">
      </div>
    </div>
    <div class="column">
      <section v-if="featuredPosts" class="section">
        <h4 class="title is-3">Featured Posts</h4>
        <featured-post-list v-bind:posts="featuredPosts"></featured-post-list>
      </section>
    </div>
  </div>
</div>
</template>

<script>
import FeaturedPostList from "~/components/blog/FeaturedPostList.vue"
import {getPost, getFeaturedPosts} from "~/modules/blog"

export default {
  head() {
    return {title: this.$data.post.title}
  },
  components: {
    FeaturedPostList,
  },

  async asyncData(app) {
    let data = await getPost(app)
    let featured_posts = await getFeaturedPosts(app)
    data = Object.assign({}, data, featured_posts)
    return data
  }
}
</script>