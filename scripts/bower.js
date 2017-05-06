const bower = require('ido/bower')

bower.concatenate('./bower.json', './bower_components', './build/vendor.js', {
  rev: true,
  minify: false,
  sourcemaps: true
})
.then((manifest) => {
  console.log('bower done', manifest)
})
.catch((err) => {
  console.log('bower error', err, err.stack)
})
