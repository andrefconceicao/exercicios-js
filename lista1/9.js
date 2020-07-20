function retornaConceito(nota) {
    if (nota >= 38) {
        if (nota % 5 >= 3) {
            nota = nota + (5 - nota%5)
        }

        return nota
    }
    else {
        return nota
    }
}

console.log(retornaConceito(38));