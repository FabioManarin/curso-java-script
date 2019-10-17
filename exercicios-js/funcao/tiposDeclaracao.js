console.log(soma(3,4))
// function declaration
function soma(x,y) { // dessa forma é possível chamar a função antes de declara-la
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3,4))

//named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3,4))