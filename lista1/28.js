let vetor = [2, 4, 7, 9, 10]
let pares = 0
let impares = 0

for (let i in vetor) {
    if (vetor[i] % 2 == 0) {
        pares += 1
    }
    else {
        impares += 1
    }
}

console.log(`No vetor há ${pares} números pares e ${impares} números ímpares.`);