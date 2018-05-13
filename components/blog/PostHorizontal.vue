<template>
<section class="hero">
  <div class="hero-body">
    <h2 class="title">{{post.title}}</h2>
      <div class="box">
        <div class="columns">
          <div class="column">
            <div class="row">
              <img style="height:300px" v-bind:src="post.image">
            </div>
            <div class="tags">
              <a class="tag is-medium is-info" v-for="tag in post.tags">{{tag.name}}</a>
            </div>
          </div>
          <div class="column post-box">
            <div class="row">
              <p>{{post.summarized}}</p>
            </div>
            <div class="readmore-wrapper">
              <a href="#"><span class="tag is-medium">Read More</span></a>
            </div>
            <div v-if="post.category" class="category-wrapper">
              <div class="control">
                <div class="tags has-addons">
                  <span class="tag is-medium is-info">دسته بندی</span>
                  <a href="#" class="tag is-medium is-primary">{{post.category.name}}</a>
                </div>
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