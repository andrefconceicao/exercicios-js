function aumento(plano, salarioAtual) {
    plano = plano.toUpperCase()

    switch (plano) {
        case 'A':
            return (salarioAtual*1.1).toFixed(2)
            break;

        case 'B':
            return (salarioAtual*1.15).toFixed(2)
            break;

        case 'C':
            return (salarioAtual*1.2).toFixed(2)
            break;
    
        default:
            return 'Plano inválido.'
            break;
    }
}

console.log(aumento('b', 1400));