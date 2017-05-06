const file = require('ido/file')

file.copy('./some-file', './build', {
  rev: true
})
.then((manifest) => {
  console.log('files done', manifest)
})
.catch((err) => {
  console.log('files error', err, err.stack)
})
