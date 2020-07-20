function mediaPonderada(cod, n1, n2, n3) {
    if (cod < 0) {
        return 'Erro: código de aluno inválido.'
    }

    let total = 0

    if (n1 > n2){
        if (n1 > n3) {
            n1 *= 4
            n2 *= 3
            n3 *= 3
        }
        else {
            n3 *= 4
            n1 *= 3
            n2 *= 3
        }
    }
    else {
        if (n2 > n3) {
            n2 *= 4
            n1 *= 3
            n3 *= 3
        }
        else {
            n3 *= 4
            n1 *= 3
            n2 *= 3
        }
    }

    total = (n1 + n2 + n3)/10

    console.log(`Aluno ${cod}:`);
    console.log('Nota 1: ' + n1);
    console.log('Nota 2: ' + n2);
    console.log('Nota 3: ' + n3);
    console.log('Média calculada: ' + total);

    if(total >= 5){
        return 'APROVADO'
    }
    else {
        return 'REPROVADO'
    }
}

console.log(mediaPonderada(-2, 3, 4, 5));