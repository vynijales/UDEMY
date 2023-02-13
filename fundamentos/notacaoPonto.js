console.log(Math.ceil(6.1)) // arrendoda para o topo

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome // recebe nome por parametro, atribui this.nome esse nome e ficará público 
    this.exec = function() {
        console.log(this.nome)
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()