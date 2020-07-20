function menorEMaior(vetor) {
    let menor = vetor[0]
    let maior = vetor [0]

    for (i in vetor){
        if(vetor[i] > maior) {
            maior = vetor[i]
        }
        else if (vetor[i] < menor) {
            menor = vetor[i]
        }
    }

    return `Menor número no vetor: ${menor}.\nMaior número no vetor: ${maior}.`
}

let vetor = [2, 1, 3, 5, 4, -2, 10, 6]
console.log(menorEMaior(vetor));