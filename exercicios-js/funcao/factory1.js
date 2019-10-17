// Factory simples
// Função que retorna um objeto, por isso que se chama fabrica, pois ela fabrica objetos
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silvia'
    }
}

console.log(criarPessoa())