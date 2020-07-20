function tipoTriangulo(a, b, c) {
    if (a == b) {
        if (b == c) {
            return 'Triângulo Equilátero'
        }
        else {
            return 'Triângulo Isósceles'
        }
    }
    else if (a == c) {
        return 'Triângulo Isósceles'
    }
    else if (b == c) {
        return 'Triângulo Isósceles'
    }
    else {
        return 'Triângulo Escaleno'
    }
}

console.log(tipoTriangulo(5, 5, 5));