const html = require('ido/html')

html.bundle('./index.html', './build/index.html', {
  inject: {
    special: {
      globs: ['./scripts/*'],
      cwd: './scripts'
    }
  },
  revManifestPaths: ['./build/images/manifest.json']
})
.then(() => {
  console.log('html done')
})
.catch((err) => {
  console.log('html error', err, err.stack)
})
