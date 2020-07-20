function ehUtil(dia) {
    switch (dia) {
        case 6:
        case 5:
        case 4:
        case 3:
        case 2:
            return 'Dia útil'
            break;
        
        case 7:
        case 1:
            return 'Fim de semana'
            break;
        default:
            return 'Dia inválido'
            break;
    }
}

console.log(ehUtil(8));