function trocaElementos(a, b) {
    if (a.length == b.length) {
        for (i in a) {
            a[i] = a[i] + b[i]
            b[i] = a[i] - b[i]
            a[i] = a[i] - b[i]
        }
        
        return 'Vetor A: ' + a + '.\nVetor B: ' + b + '.'
    }
    else {
        return 'Vetores de tamanhos diferentes'
    }
}

a = [1, 2, 4]
b = [3, 5, 6]
console.log(trocaElementos(a, b));