console.log('01)', '1' == 1) // Dois iguais compara os valores, sendo assim esse é true
console.log('02)', '1' === 1) // Aqui ele leva em consideração o tipo, e da false porque é uma string e um numero
console.log('03)', '3' != 3) // Aqui da false porque ele compara apenas os valores
console.log('04)', '3' !== 3)  // true pq ele compra também os tipos

console.log('05)', 3 < 2) 
console.log('06)', 3 > 2) 
console.log('07)', 3 <= 2) 
console.log('08)', 3 >= 2) 

const d1 = new Date(0) // Esse 0 é considerado a data de referencia do JS, 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 === d2) // Três iguais significa que é estritamente igual, compara tudo, até os tipos.
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('10)', undefined === null)