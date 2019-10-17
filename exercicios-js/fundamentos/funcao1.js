// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) 
imprimirSoma(2, 3, 4, 5, 6, 7, 8) // Ele pega os 2 primeiros números e ignora o resto
imprimirSoma() // Não da erro

// Função com retorno
function soma(a, b = 1) { // Caso não passe nada para o b, ele será atribuido 1
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())