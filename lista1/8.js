function recordes(pontuacoes) {
    let totalRecordes = 0
    let recorde = pontuacoes[0]
    let menor = pontuacoes[0]
    let indexMenor = pontuacoes[0]

    for (let index = 1; index < pontuacoes.length; index++) {
        if (pontuacoes[index] > recorde) {
            recorde = pontuacoes[index]
            totalRecordes += 1
        }
        else if(pontuacoes[index] < menor) {
            menor = pontuacoes[index]
            indexMenor = index + 1
        }
    }

    const resultado = [totalRecordes, indexMenor]

    return resultado
}

const ex1 = [10, 20, 20, 8, 25, 3, 0, 30, 1]

console.log(recordes(ex1));