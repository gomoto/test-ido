const npm = require('ido/npm')

npm.bundle('./package.json', './build/vendor.js', {
  rev: false,
  uglify: false,
  sourcemaps: true
})
.then(() => {
  console.log('npm done')
})
.catch((err) => {
  console.log('npm error', err)
})
