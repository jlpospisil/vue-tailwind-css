module.exports = {
  devServer: {
    proxy: 'http://localhost:8000',
  },
  configureWebpack: {
    plugins: [],
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js');
    // config.resolve.alias.set('@', path.join(__dirname, 'src'));
  },
};
