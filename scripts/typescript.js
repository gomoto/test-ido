const typescript = require('ido/typescript')

// typescript.transpile('./src/**/*.ts', './build', {
//   tsconfig: './src/tsconfig.json'
// })
// typescript.concatenate('./src/**/*.ts', './build/bundle.js', {
//   tsconfig: './src/tsconfig.json'
// })
typescript.bundle('./src/index.ts', './build/index.js', {
  external: ['mod-a', 'mod-b'],
  tsconfig: './src/tsconfig.json'
})
.then(() => {
  console.log('typescript done')
})
.catch((err) => {
  console.log('typescript error', err)
})
