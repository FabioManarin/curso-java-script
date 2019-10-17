// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa // Pega do objeto pessoa os valores nome e idade
console.log(nome, idade)

const {nome: n, idade: i } = pessoa // Pega do objeto pessoa os atributos nome e idade atribuindo para as novas variaveis n e i
console.log(n, i)

const {sobrenome, bemHumorada = true } = pessoa // Caso não tenha o atributo bemHumorada ele receberá true por padrão.
console.log(sobrenome, bemHumorada)

const { endereco : {logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

//const { conta: { ag, num } } = pessoa 
//console.log(ag, num) // Da erro
