const bower = require('ido/bower')

bower.concatenate('./bower.json', './bower_components', './build/vendor.js', {
  manifest: './build/bower-manifest.json',
  rev: true,
  uglify: false,
  sourcemaps: true
})
.then(() => {
  console.log('bower done')
})
.catch((err) => {
  console.log('bower error', err, err.stack)
})
