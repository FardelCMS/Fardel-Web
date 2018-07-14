<template>
<section class="section">
  <h2 class="title">{{post.title}}</h2>
  <div class="box">
    <div class="columns">
      <div class="column">
        <div class="row">
          <a v-bind:href="'/blog/'+post.id+'/'+post.title+'/'"><img style="height:300px" v-bind:src="post.image"></a>
        </div>
        <div class="tags">
          <a class="tag is-medium is-info" v-for="tag in post.tags" v-bind:key="tag.id">{{tag.name}}</a>
        </div>
      </div>
      <div class="column post-box">
        <div class="row">
          <p>{{post.summarized}}</p>
        </div>
        <div class="columns">
          <div class="column readmore-wrapper">
            <a href="#"><a v-bind:href="'/blog/'+post.id+'/'+post.title+'/'" class="tag is-medium">بیشتر بخوانید</a></a>
          </div>
          <div v-if="post.category" class="column category-wrapper">
            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-medium is-info">دسته بندی</span>
                <a v-bind:href="'/blog/categories/'+post.category.name+'/'" class="tag is-medium is-primary">{{post.category.name}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  props : [
    'post',
  ]
}
</script>