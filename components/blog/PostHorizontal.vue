<template>
<div>
	<h1>{{title}}</h1>
</div>
</template>

<script>
export default {
	props : [
		'title', //'summerized', 'tags',
		// 'category', 'image', 'comments_count',
		// 'create_time', 'update_time'
	]
}
</script>