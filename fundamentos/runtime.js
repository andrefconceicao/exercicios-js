let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.a)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// l14: mesma coisa que fazer module.exports = { e: 456, f: false, g: 'teste' }

// criando uma variável maluca: global, sem var e let (EVITAR)
abc = 3
console.log(global.abc)