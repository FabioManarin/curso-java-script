const prod1 = {} // Representa um objeto de forma literal, objeto vazio
prod1.nome = 'Celular Ultra Mega' // Objeto em js pode ser criado dinamicamente, cria vazio e depois pode atribuir valores para ele
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 // Evitar atributos com espaços

console.log(prod1)

const prod2 = { // Outra forma de criar um objeto em js
    nome: 'Camisa polo',
    preco: 79.90
}

console.log(prod2)
