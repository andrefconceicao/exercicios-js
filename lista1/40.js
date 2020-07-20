function conceituar(notas) {
    let elementoAtual = 0
    let conceitos = []
    for (i in notas) {
        elementoAtual = notas[i].toFixed(1)
        if (elementoAtual >= 0 && elementoAtual <= 4.9) {
            conceitos.push('D')
        }
        else if (elementoAtual >= 5 && elementoAtual <= 6.9) {
            conceitos.push('C')
        }
        else if (elementoAtual >= 7 && elementoAtual <= 8.9) {
            conceitos.push('B')
        }
        else if (elementoAtual >= 9 && elementoAtual <= 10) {
            conceitos.push('A')
        }
        else {
            conceitos.push('Nota inválida')
        }
    }

    return conceitos
}

let classeA = [4.65, 5.66, 6.98, 6.93, 10, 11]
console.log(conceituar(classeA));