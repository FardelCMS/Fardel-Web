<template>
	<div class="container">
		<div class="columns">
			<div class="column is-three-quarters">
        <section class="section">
            <h3 class="title is-2">آخرین نوشته ها</h3>
  					<post-horizontal-list v-bind:posts="posts"></post-horizontal-list>
        </section>
			</div>
			<div class="column">
				<section v-if="featuredPosts" class="section">
          <h4 class="title is-3">نوشته های برگزیده</h4>
          <featured-post-list v-bind:posts="featuredPosts"></featured-post-list>
        </section>
			</div>
		</div>
	</div>
</template>

<script>
import PostHorizontalList from "~/components/blog/PostHorizontalList.vue"
import FeaturedPostList from "~/components/blog/FeaturedPostList.vue"
var blog = require("~/modules/blog")


export default {
  watchQuery: ['page','per_page'],
  components: {
  	PostHorizontalList,
    FeaturedPostList,
  },
  head: {
    title: "مجله"
  },

  async asyncData (app) {
    let data = await blog.getPosts(app)
  	let featured_posts = await blog.getFeaturedPosts(app)
    data = Object.assign({}, data, featured_posts);
  	return data
  }
}
</script>