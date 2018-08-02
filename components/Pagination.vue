<template>
<nav class="pagination" role="navigation" aria-label="pagination">
  <a v-bind:href="prevEnabled ? $route.path + '?page=' + (currentPage - 1) : false" class="pagination-previous" :disabled="!prevEnabled">Prev Page</a>
  <a v-bind:href="$route.path + '?page=' + (currentPage + 1)" class="pagination-next" :disabled="!nextEnabled">Next page</a>
  <ul class="pagination-list">
    <li>
      <a v-bind:href="$route.path + '?page=' + 1" class="pagination-link" aria-label="Goto page 1"  :aria-current="currentPage === 1 ? 'page' : false" v-bind:class="{'is-current':currentPage === 1}">1</a>
    </li>

    <li v-if="currentPage > 6">
      <span class="pagination-ellipsis">&hellip;</span>
    </li>

    <li v-for="pageNumber in pageNumbers" v-bind:key="pageNumber">
      <a v-bind:href="$route.path + '?page=' + pageNumber" class="pagination-link" v-bind:class="{'is-current':currentPage === pageNumber}" v-bind:aria-label="'Page ' + pageNumber" :aria-current="currentPage === pageNumber ? 'page' : false">{{pageNumber}}</a>
    </li>

    <li v-if="currentPage < pages - 5">
      <span class="pagination-ellipsis">&hellip;</span>
    </li>

    <li v-if="pages > 1">
      <a v-bind:href="$route.path + '?page=' + pages" class="pagination-link" v-bind:aria-label="'Page ' + pages" :aria-current="currentPage === pages ? 'page' : false" v-bind:class="{'is-current':currentPage === pages}">{{pages}}</a>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  props: ['pages', 'currentPage'],
  data(app) {
    let currentPage = this.$props.currentPage
    let pages = this.$props.pages

    var prevEnabled = true
    var nextEnabled = true
    if (currentPage == 1) {
      prevEnabled = false
    }
    if (pages === currentPage) {
      nextEnabled = false
    }

    var pageNumbers = []
    let lowEnd = currentPage - 6 < 1 ? 2 : currentPage - 4
    let highEnd = currentPage + 6 > pages ? pages - 1  : currentPage + 4
    for (var i = lowEnd; i <= highEnd; i++){
      pageNumbers.push(i)
    }

    return {
      nextEnabled: nextEnabled,
      prevEnabled: prevEnabled,
      pageNumbers: pageNumbers
    }
  }
}
</script>