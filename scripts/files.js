const file = require('ido/file')

file.copy('./some-file', './build', {
})
.then(() => {
  console.log('files done')
})
.catch((err) => {
  console.log('files error', err, err.stack)
})