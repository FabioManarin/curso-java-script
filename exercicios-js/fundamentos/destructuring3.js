function rand({min = 0, max = 1000}) { // Passa o objeto e esse conceito de destructuring pega os valores do mesmo ja atribuindo as variaveis
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
//console.log(rand()) da erro porque a função espera um objeto para retirar os valores através do conceito de destructuring