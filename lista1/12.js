function fatorial(x) {
    let resultado = x

    for (let i = x-1; i > 0; i--) {
        resultado *= i
    }

    return resultado
}

console.log(fatorial(5));