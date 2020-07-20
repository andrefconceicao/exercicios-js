function quantosNegativos(vetor) {
    let total = 0

    for (i in vetor){
        if(vetor[i] < 0) {
            total += 1
        }
    }

    return `Total de negativos no vetor: ${total}.`
}

let vetor = [-2, 3, 5, 7, -7, -0.23]
console.log(quantosNegativos(vetor));