const nome = 'André'
const concatenacao = 'Olá ' + nome + '!'
const template =  `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// Expressões...
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase() // Meio que uma função lambda
console.log(`Ei... ${up('cuidado')}!`)