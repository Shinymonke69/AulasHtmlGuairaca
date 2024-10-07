// Função simples (Declarativa)
function saudacao() {
    return console.log("Olá Mundo!");
}

// Função com Parâmetros
function soma (valorA, valorB) {
    const totalSoma = valorA + valorB;
    return console.log(totalSoma);
}

// Função Anônima
const multiplicar = function (valorA, valorB) {
    const total = valorA * valorB;
    return console.log(total);
}

// Arrow Function
const dividir = (a, b) => a / b;

// Função com valor padrão de parametro
function exponencial(base, expoente = 2) {
    const exp = base ** expoente;
    return console.log(exp);
}

// Função de Callback
function inicializarAplicacao() {
    saudacao();
    soma(11, 5);
    multiplicar(3, 8);
    exponencial(5);
    console.log(dividir(10, 2));
}

inicializarAplicacao();