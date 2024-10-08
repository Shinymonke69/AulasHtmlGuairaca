function calculadora(a, b, oper) {
    if (oper === 'soma') {
        return a + b;
    }
    if (oper === 'subtração') {
        return a - b;
    }
    if (oper === 'multiplicação') {
        return a * b;
    }
    if (oper === 'divisão') {
        return a / b;
    }
    return 'Operação inválida';
}

console.log(calculadora(10, 5, 'soma'));
console.log(calculadora(10, 5, 'subtração'));
console.log(calculadora(10, 5, 'multiplicação'));
console.log(calculadora(10, 5, 'divisão'));