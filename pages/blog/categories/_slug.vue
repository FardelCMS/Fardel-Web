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
import PostHorizontalList from "~/components/blog/PostHorizontalList.vue"
import {getPostsByCategories} from "~/modules/blog"

export default {
  components: {
  	PostHorizontalList,
  },
  head() {
    return {title: "نوشته های دسته بندی " + this.$route.params.slug}
  },

  async asyncData (app) {
  	let data = await getPostsByCategories(app, app.params.slug)
  	return data
  }
}
</script>