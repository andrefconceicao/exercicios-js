const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d

// d++: post-fixed

// ++d: pre-fixed

// d += 1: in-fixed

// a = -a: '-' é op. unário

const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2

console.log(soma, subtracao, multiplicacao, -divisao, modulo)