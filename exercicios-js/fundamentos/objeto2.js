console.log(typeof Object) // Isso é uma função
console.log(typeof new Object) // Isso é um objeto

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} //Es 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())