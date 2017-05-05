const scss = require('ido/scss')

scss.bundle('./src/index.scss', './build/index.css', {
  manifest: './build/scss-manifest.json',
  rev: true,
  sourcemaps: false
})
.then(() => {
  console.log('scss done')
})
.catch((err) => {
  console.log('scss error', err, err.stack)
})
