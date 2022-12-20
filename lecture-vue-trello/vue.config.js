const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  outputDir: 'dist',
  publicPath: '/',
  assetsDir: 'static',
  
  pages: {
    index: {
        entry: 'src/pages/main.js', // entry for the page
        template: 'public/index.html', // output as dist
        title: 'Index Page',

    }
}
})
