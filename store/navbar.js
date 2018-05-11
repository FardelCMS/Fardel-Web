export const state = () => ({
  blog_categories: [],
  shop_categories: [],
})

export const mutations = {  
  setShopCategories(state, categories) {
    state.shop_categories = categories
  },
  setBlogCategories(state, categories) {
    state.blog_categories = categories
  }
}