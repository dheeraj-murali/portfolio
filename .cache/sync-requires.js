const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Dheeraj/Documents/GitHub/portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Dheeraj/Documents/GitHub/portfolio/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Dheeraj/Documents/GitHub/portfolio/src/pages/index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/Dheeraj/Documents/GitHub/portfolio/src/templates/blog-post.js")))
}

