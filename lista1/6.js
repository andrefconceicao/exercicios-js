function montanteSimples(capInicial, txJuros, tempoAplicacao) {
    return (capInicial * (1 + txJuros * tempoAplicacao)).toFixed(2)
}

function montanteCompostos(capInicial, txJuros, tempoAplicacao) {
    return (capInicial * ((1+txJuros) ** tempoAplicacao)).toFixed(2)
}

console.log(montanteSimples(3000, 0.1, 10));
console.log(montanteCompostos(3000, 0.1, 10));