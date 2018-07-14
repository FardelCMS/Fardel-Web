module.exports = {
  router : {middleware: ['cart']},  
  build: {
    vendor: ['vue-notifications']
  },
  plugins: [
    { src: '~/plugins/vue-notifications', ssr: false },
  ],
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
    { src: 'node_modules/bulma-extensions/bulma-carousel/dist/css/bulma-carousel.min.css', lang: 'css' }
  ],
  loading: {
    color: "#d686ff",
    height: '4px'
  },
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