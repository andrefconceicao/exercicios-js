function calculaTempo(menor, maior, taxaDaMenor, taxaDaMaior) {
    let tempo = 0
    while (menor < maior){
        menor += taxaDaMenor
        maior += taxaDaMaior
        tempo++
    }

    return tempo
}

function menorTempo(a1, tx1, a2, tx2) {
    let tempo

    if (a1 > a2) {
        console.log('A criança 2 é menor.');

        if (tx1 >= tx2) {
            return 'A criança 2 nunca ultrapassará a criança 1.'
        }
        else {
            tempo = calculaTempo(a1, a2, tx1, tx2)
        }
    }
    else if (a2 > a1) {
        console.log('A criança 1 é menor.');

        if (tx1 <= tx2) {
            return 'A criança 1 nunca ultrapassará a criança 2.'
        }
        else {
            tempo = calculaTempo(a1, a2, tx1, tx2)
        }
    }
    else {
        return 'Não existe criança maior.'
    }

    return `A criança menor ultrapassará a criança maior em ${tempo} ano(s).`
}

console.log(menorTempo(123, 12, 165, 5));