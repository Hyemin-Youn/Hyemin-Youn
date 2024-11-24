const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : './'
  //publicPath: process.env.NODE_ENV === 'production' ? '/이곳에 경로를 적으시오./' : '/'
};

export const API_KEY = 'VUE_APP_API_KEY';
export const BASE_URL = 'https://api.themoviedb.org/3';
