var calculoImc=require('./imc')
var readline=require('readline')
var entradaDados=readline.createInterface({

    input: process.stdin,
    output: process.stdout

})
entradaDados.question('Digite o seu peso em kg: ',function(pesoUsuario){
    let peso=pesoUsuario
    entradaDados.question('Digite a sua altura em cm: ',function(alturaUsuario){
        let altura=alturaUsuario
        console.log(calculoImc.calcularImc(peso,altura))
        entradaDados.close()
    })
})