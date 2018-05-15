<template>
<div class="container">
	<div class="columns">
		<div class="column is-three-quarters">
      <section class="section">
          <h3 class="title is-2">آخرین نوشته ها</h3>
					<post-horizontal-list v-bind:posts="posts"></post-horizontal-list>
      </section>
      <section class="section">
        <pagination v-bind:pages="pages" v-bind:currentPage="currentPage"></pagination>        
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
import Pagination from "~/components/Pagination.vue"
var blog = require("~/modules/blog")


export default {
  watchQuery: ['page','per_page'],
  components: {
  	PostHorizontalList,
    FeaturedPostList,
    Pagination
  },
  head: {
    title: "مجله"
  },

  async asyncData (app) {
    let perPage = app.route.query.per_page || 10
    let currentPage = parseInt(app.route.query.page) || 1

    let data = await blog.getPosts(app, currentPage, perPage)
  	let featured_posts = await blog.getFeaturedPosts(app)
    data = Object.assign({}, data, featured_posts);
    data['currentPage'] = currentPage
  	return data
  }
}
</script>