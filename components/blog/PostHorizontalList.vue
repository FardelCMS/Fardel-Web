<template>
<div>
	<post-horizontal v-for="post in posts" v-bind:post="post"></post-horizontal>
</div>
</template>

<script>
import PostHorizontal from "./PostHorizontal.vue"

export default {
	props: ['posts'],
  components: {
		PostHorizontal,
  },
}
</script>