function criarProduto(nome, preco) { // Função factory retorna um objeto ou uma função
    return {
        nome,
        preco,
        desconto: 10
    }
}

console.log(criarProduto('Arroz', 30))