function calc(x, op, y) {
    switch (op) {
        case '+':
            return x+y
            break;
        
        case '-':
            return x-y
            break;

        case '*':
            return x*y
            break;

        case '/':
            return x/y
            break;
        
        default:
            return 'Operação inválida'
            break;
    }
}

console.log(calc(3, '%', 4));