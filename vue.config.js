module.exports = {
  devServer: {
    disableHostCheck: true,
    public: 'uc-vue.lvh.me'
  },
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-'
    }
  }
}
