// json é um formato de dados, o mais usado para a interoperabilidade entre sistemas

const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj)) // {"a":1,"b":2,"c":3}

// console.log(JSON.parse("{ a: 1, b: b, c: 3 }")) // Erro
// console.log(JSON.parse("{ 'a': 1, 'b': 'b', 'c': 3 }")) // Erro
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // { a: 1, b: 2, c: 3 }
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }')) // valor numerico, string, lista, valor boleano e objeto
