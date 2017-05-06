const typescript = require('ido/typescript')

// typescript.transpile('./src/**/*.ts', './build', {
//   tsconfig: './src/tsconfig.json'
// })
// typescript.concatenate('./src/**/*.ts', './build/bundle.js', {
//   tsconfig: './src/tsconfig.json'
// })
typescript.bundle('./src/index.ts', './build/index.js', {
  external: ['mod-a', 'mod-b'],
  minify: true,
  rev: true,
  sourcemaps: true,
  tsconfig: './src/tsconfig.json'
})
.then((metadata) => {
  console.log('typescript done', metadata)
})
.catch((err) => {
  console.log('typescript error', err, err.stack)
})
