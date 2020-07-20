function progA(n, a1, r) {
    let soma = 0
    let nx = []
    let natual = 0

    for (let i = 0; i<n; i++) {
        natual = a1 + r*i
        nx.push(natual)
        soma += natual
    }

    return ('Elementos: ' + nx + '.\nSoma: ' + soma);
}

function progG(n, a1, r) {
    let soma = 0
    let nx = []
    let natual = 0

    for (let i = 0; i<n; i++) {
        natual = a1 + r**i
        nx.push(natual)
        soma += natual
    }

    return ('Elementos: ' + nx + '.\nSoma: ' + soma);
}

console.log(progA(5, 1, 3))
console.log(progG(5, 1, 3))