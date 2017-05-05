const images = require('ido/images')

images.copy('./images/**/*.jpg', './build/images', {
  // relative to ./build/images
  manifest: 'manifest.json'
})
.then(() => {
  console.log('images done')
})
.catch((err) => {
  console.log('images error', err, err.stack)
})
