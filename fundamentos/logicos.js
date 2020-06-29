function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho2 != trabalho2
    const saudavel = !comprarSorvete // operador unário

    /*  Forma mais direta de retornar um objeto que contém os nomes finais de
     * chave/valor
     */
    return { comprarSorvete, comprarTv50, comprarTv32, saudavel } 
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, false))