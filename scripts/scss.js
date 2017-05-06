const scss = require('ido/scss')

scss.bundle('./src/index.scss', './build/index.css', {
  rev: true,
  sourcemaps: true
})
.then((metadata) => {
  console.log('scss done', metadata)
})
.catch((err) => {
  console.log('scss error', err, err.stack)
})
