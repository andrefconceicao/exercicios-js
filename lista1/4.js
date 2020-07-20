function div(dividendo, divisor) {
    return {
        resultado: Math.floor(dividendo/divisor),
        resto: dividendo%divisor
    }
}

console.log(div(10, 3));