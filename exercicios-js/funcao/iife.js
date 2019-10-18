// IIFE -> Expressão de função imediatamente invocada

(function() {
    console.log('Será executado na hora')
    console.log('Foge do escopo mais abrangente!!')
})() //Os () invoca a função e não toca o escopo global