function teste1(num) {
    if (num > 7)
        console.log(num)
        console.log('Final') // essa linha não está associada ao if; vai ser exec. em todos os casos
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); {     // cuidado com o ';', não usar com estrut. de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)