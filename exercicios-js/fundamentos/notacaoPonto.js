console.log(Math.ceil(6.1))
const obj1 = {}
obj1.nome = 'Bola'
obj1['nome'] = 'Bola2' //linha 3 e 4 fazem a mesma coisa

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome // A palavra this faz com o que o atributo nome da função fique visivel fora da mesma, seja público
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()
