function quantosNoIntervalo(vetor) {
    let dentro = 0
    let fora = 0

    for (i in vetor) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            dentro += 1
        }
        else {
            fora += 1
        }
    }

    return `No vetor há ${dentro} números dentro do intervalo e ${fora} fora.`
}

let vetor = [1, 4, 7, 10, 13, 15, 19, 21, 24]
console.log(quantosNoIntervalo(vetor));