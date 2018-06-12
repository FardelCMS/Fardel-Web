<template>
<article v-bind:class="'notification notif columns is-'+type">
  <button v-on:click="close" type="button" class="delete"></button>
  <div class="media">
    <div class="media-content">
      {{content}}
    </div>
  </div>
</article>
</template>

<script>
export default {
  props: ['content', 'type'],
  methods: {
    close: function(event) {
      event.target.parentNode.remove()
      this.$store.commit("notif/removeNotif", {type:this.type, content:this.content})
    }
  }
}
</script>

<style>
.notif {
  margin-top:10px;
}
</style>