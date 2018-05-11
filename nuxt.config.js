module.exports = {
  modules: [
    '~/modules/auth',
    '~/modules/blog',
    '~/modules/shop',
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
  ],
  plugins: [
    '~/plugins/axios.js'
  ],
}