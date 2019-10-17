const valores = [7.7, 8.9, 6.3, 9.2] // Declaração literal
console.log(valores[0], valores[3])
console.log(valores[4]) // Ao acessar um elemento de array que não existe o js não da erro

valores[4] = 10
console.log(valores.length)
valores.push({id: 3}, false, null, 'teste') // O array aceita qualquer tipo de dados, push adiciona elementos no array
console.log(valores)

console.log(valores.pop()) // Deleta o último elemento do array
delete valores[0] // Deleta o elemento na posição desejada
console.log(valores)

console.log(typeof valores) // Array é um objeto