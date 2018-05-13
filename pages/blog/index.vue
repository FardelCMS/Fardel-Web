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
				<section class="section">
          <h4 class="title is-3">نوشته های برگزیده</h4>
        </section>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import PostHorizontalList from "~/components/blog/PostHorizontalList.vue"
var blog = require("~/modules/blog")


export default {
  watchQuery: ['page','per_page'],
  components: {
  	PostHorizontalList,
  },
  head: {
    title: "Blog"
  },

  async asyncData (app) {
  	let data = await blog.getPosts(app)
  	return data
  }
}
</script>