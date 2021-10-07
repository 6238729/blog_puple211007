module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/elfinos/'
    : '/',
    outputDir: 'docs'
}