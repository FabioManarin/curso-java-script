// Função em JS é First-Class Object (Citizens)
// Higher-order funtion - função de alta ordem

//Criar função de forma literal
function fun1() { // Função sempre retorna algo, Se não retornar nada, ela retorna undefined por padrão
    
}

// Armazenar em uma variável
const fun2 = function () {

}

// Armazenar em um array
const array = [ function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {
    return 'Opa'
}
console.log(obj.falar())

// Passar função como parametro
function run (fun) {
    fun()
}
run(function () {
    console.log('Executando...')
})

// uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2,3)(4) // Chama a função soma, essa função retorna outra função, onde é passado o parametro no segundo parenteses
const cincoMais = soma(2,3)
cincoMais(4)