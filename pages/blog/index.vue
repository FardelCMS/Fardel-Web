<template>
	<div class="container">
		<div class="columns">
			<div class="column is-three-quarters">
					<post-horizontal-list v-bind:posts="posts"></post-horizontal-list>
			</div>
			<div class="column">
				asd
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import Blog from "~/modules/blog"
import PostHorizontalList from "~/components/blog/PostHorizontalList.vue"

export default {
  watchQuery: ['page','per_page'],
  components: {
  	PostHorizontalList,
  },
  head: {
    title: "Blog"
  },

  data: {
  	kir: 'asdsad'
  },

  async asyncData (context) {
  	var data = Blog().getPosts(context)
  	console.log(data)
  	return data
  }
}
</script>