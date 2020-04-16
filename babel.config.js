module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Crazyweb/'
    : '/',
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
