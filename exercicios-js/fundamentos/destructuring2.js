const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // Jogando os valores do array para dentro das variaveis definidas. As virgulas vazias ignoram o elemento. Lembrando que as variaveis antes do = são apenas variaveis e não um array
console.log(n1, n3, n5, n6)

const [, [, nota] ] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

