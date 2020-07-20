function ajeita(v) {
    let valor = v.toFixed(2)
    valor = valor.toString(2)

    return 'R$' + Math.trunc(valor) + ',' + valor.substring(2)
}

console.log(ajeita(0.1+0.2));