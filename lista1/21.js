function quantoCobrar(idade) {
    let total = 100
    if (idade < 10) {
        total += 80
    }
    else if (idade <= 30) {
        total += 50
    }
    else if (idade <= 60) {
        total += 95
    }
    else {
        total += 130
    }

    return total
}

console.log(quantoCobrar(130));