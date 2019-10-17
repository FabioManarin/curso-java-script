const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!' 
//Template string, função nova do js.
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)