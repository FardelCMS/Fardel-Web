module.exports = {
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  head: {
    titleTemplate: '%s - خورجین',
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
}