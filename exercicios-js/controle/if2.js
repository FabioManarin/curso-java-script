function teste1(num) {
    if(num > 7)
        console.log(num) //Quando não te chaves no if, ele considera apenas a primeira linha após o if

    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7)
        ;    
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)