// 1.  Faça um programa que entre com 
//três números, faça a média aritmética 
//e mostre o resultado. 


const numeros = [10,20,30]

let total = 0;

//Soma todos os valores do array
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    total = total + numero;
}

const media = total / numeros.length;

alert(`A média entre os numeros é ${media}`)

