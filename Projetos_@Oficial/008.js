//()  ()  ()

console.log('')
// 0 = PAR
// 1 = IMPAR

console.log(`Sistema PAR ou IMPAR`)
console.log(`////////////////////`)

//DIGITE UM VALOR NUMERICO!
var num = 38
var rest = num % 2
if(rest === 0){
    console.log(`Numero Escolhido ( ${num} )`)
    console.log(`Seu numero é PAR!( ${num} )`)
    console.log(``)
    console.log(`Lista de Numeros [PARES] apartir do seu Numero!`)

     rest = 0
        while( num <= 100){
            console.log(`NUMERO PAR: ${num}`)
            num += 2 // soma de 2 em 2
        }

}else{
    console.log(`Numero Escolhido ( ${num} )`)
    console.log(`Seu numero é IMPAR!( ${num} )`)
    console.log(``)
    console.log(`Lista de Numeros [IMPAS] apartir do seu Numero!`)

     rest = 1
        while(num <= 100){
            console.log(`NUMERO IMPAR: ${num}`)
            num += 2 // soma de 2 em 2
        }

}

console.log('')
/*


*/