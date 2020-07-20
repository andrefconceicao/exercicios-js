function multiplicaTodosPor(vetor, num) {
    let resultado = []
    for (let i in vetor) {
        resultado.push(vetor[i] * num)
    }

    return resultado
}

function multiplicaMaioresQue5Por(vetor, num) {
    let resultado = []
    for (let i in vetor) {
        if (vetor[i] > 5) {
            resultado.push(vetor[i] * num)
        }
        else {
            resultado.push(vetor[i])
        }
    }

    return resultado
}

let vetor = [2, 4, 6, 8]
console.log(multiplicaTodosPor(vetor, 5), multiplicaMaioresQue5Por(vetor, 5));