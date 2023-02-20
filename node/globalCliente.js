require('./global')
console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!' // Não é possível mudar, pois foi criado através do método freeze
console.log(MinhaApp.nome)