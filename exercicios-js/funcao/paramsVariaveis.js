function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i] //Array interno de uma função, ou seja, uma função pode ter nenhum parametro, mas se mesmo assim for passado parametros para ela, é possível recuperar pela palavra reservada arguments.
    }
    return soma
}

//Aguments é um array interno de uma função;

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "teste"))
console.log(soma('a', 'b', 'c'))