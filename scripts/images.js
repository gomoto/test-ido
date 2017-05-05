const image = require('ido/image')

image.copy('./images/**/*.jpg', './build/images', {
  // relative to ./build/images
  manifest: 'image-manifest.json'
})
.then(() => {
  console.log('images done')
})
.catch((err) => {
  console.log('images error', err, err.stack)
})
