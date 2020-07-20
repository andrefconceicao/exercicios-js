function calcularConta(cod, qtd) {
    let contaRS = 0
    let contaCTS = 0
    let contaEXT = 0
    let stringValor = ''
    switch (cod) {
        case 100:
            contaEXT = qtd * 3;
            break;
    
        case 200:
            contaEXT = qtd * 4;
            break;

        case 300:
            contaEXT = qtd * 5.5;
            break;

        case 400:
            contaEXT = qtd * 7.5;
            break;

        case 500:
            contaEXT = qtd * 3.5;
            break;

        case 600:
            contaEXT = qtd * 2.8
            break;

        default:
            return 'Produto não existente.'
            break;
    }

    contaRS = Math.trunc(contaEXT);
    stringValor = contaEXT.toFixed(2).toString()
    contaCTS = stringValor.substring(stringValor.length - 2)

    return 'R$'+ contaRS + ',' + contaCTS
}

console.log(calcularConta(300, 1));