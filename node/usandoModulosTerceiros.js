const _ = require('lodash') // procura o index.js da pasta lodash do node_modules
setInterval(() => console.log(_.random(5, 10)), 2000)

// npm i -g nodemon
// odemon usandoModulosTerceiros.js