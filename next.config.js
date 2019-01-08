const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
module.exports = withSass({
  sassLoaderOptions: {
    includePaths: [
      'node_modules/uswds/dist/scss/'
    ]
  }
})