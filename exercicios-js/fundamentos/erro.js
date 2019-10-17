function tratarErroELancar(erro) {
    //throw new Error('Ocorreu um erro...')
    //throw 10
    //throw true
    //throw 'Mensagem'
    throw {
        nome: erro.name,
        msg: erro.mensage,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase(), '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final...')
    }
}

const obj = { nome: 'Fabio'}
imprimirNomeGritado(obj)