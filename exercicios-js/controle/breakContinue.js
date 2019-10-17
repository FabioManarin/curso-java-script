const nums = [1,2,3,4,5,6,7,8,9,10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: //Rótulo do for, é dado um nome para o for
for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3){
            break externo // nesse caso ele vai parar o laço de fora
        }
        console.log(`Par ${a},${b}`)
    }
}//Não se utiliza