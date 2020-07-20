function mediaAritmetica(vetor) {
    let soma = 0
    let media = 0

    for (i in vetor){
        soma += vetor[i]
    }

    media = (soma/vetor.length).toFixed(2)
    return media
}

let vetor = [1, 2, 4]
console.log(mediaAritmetica(vetor));