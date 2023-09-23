var calculoFatorial=require('./fatorial')
var readline=require('readline')
var entradaDados=readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

entradaDados.question('Digite o valor: ',function(fatorialUsuario){
    fatorial=fatorialUsuario
    console.log(calculoFatorial.calcularFatorial(fatorial))
    entradaDados.close()
})