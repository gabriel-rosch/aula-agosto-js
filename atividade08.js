// 8 Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: 
// ótimo: 3
// bom: 2 
// regular: 1
//  Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
// a média das idades das pessoas que responderam ótimo;
// a quantidade de pessoas que responderam regular;
// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

let pesquisas = [1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,]
let idades = [10,60,30,20,23,10,60,30,20,23,10,60,30,20,23]

let totalIdadeOtimo = 0;
let respotaOtimo = 0

let respotaRegular = 0

let respotaBom = 0



//Soma todos os valores do array
for (let i = 0; i < pesquisas.length; i++) {
    const pesquisa = pesquisas[i];
    if(pesquisa == 1) {
        respotaRegular++
    }
    if(pesquisa == 2) {
        respotaBom++
    }
    if(pesquisa == 3) {
        totalIdadeOtimo += idades[i] 
        respotaOtimo++
    }
}

const mediaOtimo = totalIdadeOtimo / respotaOtimo;

//alert(`A média de pessoas que responderam ótimo é: ${mediaOtimo}`)
//alert(`O numero de pessoas que responderam regular é: ${respotaRegular}`)

let porcentagemBom = (respotaBom*100)/pesquisas.length
alert(`A porcentagem de pessoas que responderam bom é: ${porcentagemBom.toFixed(0)}%`)