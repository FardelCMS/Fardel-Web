module.exports = {
  router : {middleware: ['cart']},
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth',
    ['nuxt-buefy', { materialDesignIcons: false }],
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
  ],
  head: {
    titleTemplate: '%s - Fardel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  },
  css: [
    'bulma',
    '@/assets/css/custom.scss',
    { src: 'bulma-extensions/bulma-carousel/dist/bulma-carousel.min.css', lang: 'css' }
  ],
  axios: {
    baseURL: "http://localhost:5000",
    browserBaseURL: "http://localhost",
  },
  auth: {
    redirect: {
      login: '/auth/login',
      logout: false,
    },
    strategies: {
      local: {
        endpoints: {
          login: { propertyName: 'access_token', url: '/api/auth/login/', method: 'post'},
          logout: { url: '/api/auth/logout/', method: 'post' },
          user: { url: '/api/auth/profile/', method: 'get', propertyName: 'user' }
        }
      },
    }
  }
}
