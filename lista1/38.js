function imprimeImparesEntre(inicio = 0, fim = 100) {
    if (inicio > fim) {
        let aux = inicio
        inicio = fim
        fim = aux
    }
    
    let i = 0
    let vetorFinal = []
    for (i = inicio; i <= fim; i++) {
        if (i % 2 == 1) {
            vetorFinal.push(i)
        }
    }

    return `Ímpares entre ${inicio} e ${fim}: ` + vetorFinal
}

console.log(imprimeImparesEntre(40, 23));