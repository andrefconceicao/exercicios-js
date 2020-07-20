let vetorInteiro = [1, 5, 6, 8]
let vetorString = ['As', 'Aventuras', 'de', 'Tintin']
let vetorDouble = [1.23, 4.65, 8.33]

console.log(vetorInteiro.concat(vetorString).concat(vetorDouble));
// console.log(vetorInteiro + vetorString + vetorDouble);

function concatenar(...args) {
    let resultado = []

    for (i in arguments) {
        resultado = resultado.concat(arguments[i])
    }

    return resultado
}

console.log(concatenar(vetorInteiro, vetorString, vetorDouble));