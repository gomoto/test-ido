const scss = require('ido/scss')

scss.bundle('./src/index.scss', './build/index.css', { rev: false, sourcemaps: false })
.then(() => {
  console.log('scss done')
})
