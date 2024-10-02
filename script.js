// 1. Verificação de Maioridade
let idade = prompt("Digite sua idade:");

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

// 2. Par ou Ímpar
function veri_poi(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

let num_poi = prompt("Digite um número para verificar se é Par ou Ímpar:");
console.log(veri_poi(num_poi));

// 3. Verificação de Número Positivo, Negativo ou Zero
let num_pn = prompt("Digite um número:");

if (num_pn > 0) {
    console.log("Número positivo");
} else if (num_pn < 0) {
    console.log("Número negativo");
} else {
    console.log("Zero");
}

// 4. Tabuada
function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

let num_tab = prompt("Digite um número para ver a tabuada:");
tabuada(num_tab);
