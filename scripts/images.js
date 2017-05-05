const image = require('ido/image')

image.copy('./images/**/*.jpg', './build/images', {
  manifest: './build/images/image-manifest.json'
})
.then(() => {
  console.log('images done')
})
.catch((err) => {
  console.log('images error', err, err.stack)
})
