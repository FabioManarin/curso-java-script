const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const apenasMulheres = funcionario => funcionario.genero === 'F'
const apenasChinesas = funcionario => funcionario.pais === 'China'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    const func = funcionarios
        .filter(apenasChinesas)
        .filter(apenasMulheres)
        .reduce(menorSalario)

    console.log(func)
})