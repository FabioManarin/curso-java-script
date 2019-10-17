let valor // Não inicializado, então ao imprimir esse valor pode se ver que ele é undefined
console.log(valor)

valor = null // Ausência de valor, está inicializada porém está vazia
console.log(valor)
//console.log(valor.toString()) // Da erro porque não pode acessar uma variável nula

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar atribuir undefined, sempre usar null para objetos e 0 para números

console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null  // Sem preço
console.log(!!produto.preco)
console.log(produto)
