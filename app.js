/*****************************************************************************************
 * Objetivo: Realizar o cálculo da média escolar de um aluno
 * Data: 09/08/2023
 * Autor: Maria Luiza Gomes de Almeida
 * Versão: 2.0
 ****************************************************************************************/
var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('--------------------- DIÁRIO DE ALUNOS -------------------------')
entradaDados.question('Digite o nome do(a) aluno(a): ', function(nomeAluno){
    var nome = nomeAluno

    entradaDados.question('Digite seu curso: ', function(cursoAluno){
        var curso = cursoAluno

        entradaDados.question('Digite a disciplina: ', function(disciplinaCurso){
            var disciplina = disciplinaCurso

            entradaDados.question('Insira a nota do 1° trimestre: ', function(primeiraNota){
                var notaUm = primeiraNota.replace(',' , '.')

                entradaDados.question('Insira a nota do 2° trimestre: ', function(segundaNota){
                    var notaDois = segundaNota.replace(',' , '.')
    
                    entradaDados.question('Insira a nota do 3° trimestre: ', function(terceiraNota){
                        var notaTres = terceiraNota.replace(',' , '.')
        
                        entradaDados.question('Insira a nota do 4° trimestre: ', function(quartaNota){
                            var notaQuatro = quartaNota.replace(',' , '.')

                            if(notaUm == '' || notaDois == '' || notaTres == '' || notaQuatro == ''){
                                console.log('ERRO: Todas as notas devem ser preenchidas!')
                            }else if(isNaN(notaUm) || isNaN(notaDois) || isNaN(notaTres) || isNaN(notaQuatro)){
                                console.log('ERRO: É obrigatório a entrada de dados somente com números!')
                            }else if(notaUm < 0 || notaUm > 10 || notaDois < 0 || notaDois > 10 || notaTres < 0 || notaTres > 10 || notaQuatro < 0 || notaQuatro > 10) {
                                console.log('ERROR: As notas inseridas precisam estar entre o intervalo de 0 e 10!')
                            }else{
                                let media = (Number(notaUm) + Number(notaDois) + Number(notaTres) + Number(notaQuatro))/4
                                
                                let statusAluno
                                if(media < 5 ){
                                    statusAluno =  'REPROVADO'
                                } else if(media >= 5 && media < 7){
                                    statusAluno =  'EXAME'
                                } else{
                                    statusAluno =  'APROVADO'
                                }

                                console.log('------------- BOLETIM ESCOLAR ----------------')
                                console.log(`Aluno: ${nome}`)
                                console.log(`Curso: ${curso}`)
                                console.log(`Disciplina: ${disciplina}`)
                                console.log(`Notas de cada trimestre: |${notaUm}| |${notaDois}| |${notaTres}| |${notaQuatro}|`)
                                console.log(`Média Final: ${media.toFixed(1)}`)
                                console.log(`Status do Aluno:  ${statusAluno}`)
                            }
            
                            entradaDados.close()
                        })
                    })
                })
            })
        })
    })
})