function charsIguais(string1, string2) {
    let strUp1 = string1.toUpperCase()
    let strUp2 = string2.toUpperCase()

    let estaContidoIda = false
    let estaContidoVolta = false

    for (let i in strUp1) {
        estaContidoIda = false
        for (let j in strUp2) {
            if (strUp2.charAt(j) == strUp1.charAt(i)) {
                estaContidoIda = true
                break;
            }
        }
        if (!estaContidoIda) {
            return estaContidoIda
        }
    }


    for (let i in strUp2) {
        estaContidoVolta = false
        for (let j in strUp1) {
            if (strUp1.charAt(j) == strUp2.charAt(i)) {
                estaContidoVolta = true
                break;
            }
        }
        if (!estaContidoVolta) {
            return estaContidoVolta
        }
    }
    
    return estaContidoIda 
}

console.log(charsIguais('abc', 'abcs'));