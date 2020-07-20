function quantoCobrar(mes, anuidade) {
    let total = anuidade

    for(let i = mes; i>1; i--){
        total *= 1.05
    }

    return total.toFixed(2)
}

console.log(quantoCobrar(5, 200));