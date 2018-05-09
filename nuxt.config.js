module.exports = {
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '~/modules/auth',
  ],
  head: {
    titleTemplate: '%s - SiteName',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  },
  env: {
    baseApiUrl: 'http://localhost:5000'
  },
  css: [
    'bulma',
    '@/assets/css/custom.scss',
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api/': 'http://127.0.0.1:5000',
  }
}