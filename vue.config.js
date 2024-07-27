const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_URL || 'http://localhost:1337',
        changeOrigin: true,
      },
    },
  },
  transpileDependencies: true
})
