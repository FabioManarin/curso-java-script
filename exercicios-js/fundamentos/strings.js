const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Se não existe, retorna um valor vazio
console.log(escola.charCodeAt(3)) // Valor do caracter na tabela asc
console.log(escola.indexOf('3')) // Retorna o que está na terceira posição da string

console.log(escola.substring(1)) 
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) // Concatena varias strings
console.log(escola.replace(3, 'e')) // Troca o número 3 pela letra e;

console.log('Ana,Maria,Pedro'.split(',')) // Gera um array separando cada posição pela virgula