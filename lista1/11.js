function ehBissexto(ano) {
    if (ano % 100 == 0) {
        if (ano % 400 == 0) {
            console.log('Bissexto.');
            return true
        }
        else {
            console.log('Não Bissexto.');
            return false
        }
    }
    else {
        if (ano % 4 == 0) {
            console.log('Bissexto.');
            return true
        }
        else {
            console.log('Não Bissexto.')
            return false
        }
    }
}

console.log(ehBissexto(2000));