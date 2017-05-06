const image = require('ido/image')

image.copy('./images/**/*.jpg', './build/images', {
  rev: false
})
.then((manifest) => {
  console.log('images done', manifest)
})
.catch((err) => {
  console.log('images error', err, err.stack)
})
