const ido = require('ido')

ido.process.spawnSingleton('docker logs -f fullstack_db_1')

setTimeout(() => {
  console.log('CHANGING IT UP')
  ido.process.spawnSingleton('docker logs -f fullstack_db_1')
}, 3000)
