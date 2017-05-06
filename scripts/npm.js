const npm = require('ido/npm')

npm.bundle('./package.json', './build/vendor.js', {
  rev: true,
  minify: false,
  sourcemaps: true
})
.then((manifest) => {
  console.log('npm done', manifest)
})
.catch((err) => {
  console.log('npm error', err)
})
