var calculo=require('./parOuImpar')
var readline=require('readline')
var entradaDados=readline.createInterface({

    input: process.stdin,
    output: process.stdout
    
})
entradaDados.question('Digite o valor inicial: ',function(valorInicialUsuario){
    valorInicial=valorInicialUsuario
    entradaDados.question('Digite o valor final: ',function(valorFinalUsuario){
        valorFinal=valorFinalUsuario
        entradaDados.question('Digite 1 para ver apenas os números pares, 2 para ver apenas os números ímpares ou 3 para ver ambos: ',function(escolhaUsuario){
            escolha=escolhaUsuario
            console.log(calculo.calcularParesOuImpares(valorInicial,valorFinal,escolha))
            entradaDados.close()
        })
    })
})