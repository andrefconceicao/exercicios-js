// Estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(soma1());
console.log(soma1(3));
console.log(soma1(1, 2, 3));
console.log(soma1(0, 0, 0));

// Estratégias 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1     // !== estritamente diferente
    b = 1 in arguments ? b : 1      // existe o índice 1 no vetor de argumentos?
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log('\n');
console.log(soma2());
console.log(soma2(3));
console.log(soma2(1, 2, 3));
console.log(soma2(0, 0, 0));

// Valor padrão do ES 2015 - preferir
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log('\n');
console.log(soma3());
console.log(soma3(3));
console.log(soma3(1, 2, 3));
console.log(soma3(0, 0, 0));