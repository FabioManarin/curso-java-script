function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}
//Essa é uma forma de o this nunca variar, independente de quem o chama, pois foi atribuido a uma constante
//Outra forma é utilizar o bind
new Pessoa
