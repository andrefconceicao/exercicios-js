function seVendemos(fruta) {
    switch (fruta) {
        case 'maçã':
            return 'Não vendemos essa fruta aqui'
            break;

        case 'kiwi':
            return 'Estamos com escassez de kiwi'
            break;
        
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
            break;

        default:
            return 'Erro: fruta inválida'
            break;
    }
}

console.log(seVendemos('melancia'));