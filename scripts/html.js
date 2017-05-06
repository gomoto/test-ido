const html = require('ido/html')

html.bundle('./index.html', './build/index.html', {
  inject: {
    special: {
      globs: ['./scripts/*'],
      cwd: './scripts'
    }
  },
  manifests: [{
    'pup.jpg': 'pup-12345.jpg',
    'vendor.js': 'vendor-67890.js'
  }]
})
.then(() => {
  console.log('html done')
})
.catch((err) => {
  console.log('html error', err, err.stack)
})
