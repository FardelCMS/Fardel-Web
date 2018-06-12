<template>
<div class="container">
	<div class="columns">
		<div class="column is-three-quarters">
      <section class="section">
          <h3 class="title is-2">Newest Posts</h3>
					<post-horizontal-list v-bind:posts="posts"></post-horizontal-list>
      </section>
      <section class="section">
        <pagination v-bind:pages="pages" v-bind:currentPage="currentPage"></pagination>        
      </section>
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
import PostHorizontalList from "~/components/blog/PostHorizontalList.vue"
import FeaturedPostList from "~/components/blog/FeaturedPostList.vue"
import Pagination from "~/components/Pagination.vue"
import {getPostsByCategories, getFeaturedPosts} from "~/modules/blog"

export default {
  components: {
  	PostHorizontalList,
    FeaturedPostList,
    Pagination
  },
  head() {
    return {title: "Posts of category " + this.$route.params.slug}
  },

  async asyncData (app) {
  	let data = await getPostsByCategories(app, app.params.slug)
    let featured_posts = await getFeaturedPosts(app, app.params.slug)
    data = Object.assign({}, data, featured_posts);
  	return data
  }
}
</script>