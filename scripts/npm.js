const npm = require('ido/npm')

npm.bundle('./package.json', './build/vendor.js', {
  manifest: './build/vendor-manifest.json',
  rev: true,
  uglify: false,
  sourcemaps: true
})
.then(() => {
  console.log('npm done')
})
.catch((err) => {
  console.log('npm error', err)
})
