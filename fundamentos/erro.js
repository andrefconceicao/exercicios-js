function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch (e) {
        tratarErroELancar(e)
    }
    finally { // sempre vai ser executado
        console.log('Final')
    }
}

const obj = { name: 'andré' }
imprimirNomeGritado(obj)

const obj2 = { nome: 'andré' }
imprimirNomeGritado(obj2)