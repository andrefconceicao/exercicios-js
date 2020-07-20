function quantasNotas(valor) {
    let n100 = 0
    let n50 = 0
    let n10 = 0
    let n5 = 0
    let n1 = 0

    n100 = Math.trunc(valor/100)
    n50 = Math.trunc((valor%100)/50)
    n10 = Math.trunc((valor%50)/10)
    n5 = Math.trunc((valor%10)/5)
    n1 = Math.trunc(valor%5)

    if (n100) {
        console.log(`${n100} nota(s) de R$ 100.`);
    }
    if (n50) {
        console.log(`${n50} nota(s) de R$ 50.`);
    }
    if (n10) {
        console.log(`${n10} nota(s) de R$ 10.`);
    }
    if (n5) {
        console.log(`${n5} nota(s) de R$ 5.`);
    }
    if (n1) {
        console.log(`${n1} nota(s) de R$ 1.`);
    }

    return ''
}

console.log(quantasNotas(18));