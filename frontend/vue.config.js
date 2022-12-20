const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,

	outputDir: 'dist',
	publicPath: '/',
	assetsDir: 'static',

	pages: {
		index: {
			entry: 'src/pages/main.js',
			template: 'public/index.html',
			title: 'Index Page',
		},
	},
});
