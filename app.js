/*****************************************************************************************
 * Objetivo: Realizar o cálculo da média escolar de um aluno
 * Data: 09/08/2023
 * Autor: Maria Luiza Gomes de Almeida
 * Verão: 1.0
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
                var notaUm = primeiraNota

                entradaDados.question('Insira a nota do 2° trimestre: ', function(segundaNota){
                    var notaDois = segundaNota
    
                    entradaDados.question('Insira a nota do 3° trimestre: ', function(terceiraNota){
                        var notaTres = terceiraNota
        
                        entradaDados.question('Insira a nota do 4° trimestre: ', function(quartaNota){
                            var notaQuatro = quartaNota

                            if(notaUm == '' || notaDois == '' || notaTres == '' || notaQuatro == ''){
                                console.log('ERRO: Todas as notas devem ser preenchidas!')
                            } else{

                                var media = (Number(notaUm) + Number(notaDois) + Number(notaTres) + Number(notaQuatro))/4
                                
                                console.log('------------- BOLETIM ESCOLAR ----------------')
                                console.log(`Aluno: ${nome}`)
                                console.log(`Curso: ${curso}`)
                                console.log(`Disciplina: ${disciplina}`)
                                console.log(`Notas de cada trimestre: |${notaUm}| |${notaDois}| |${notaTres}| |${notaQuatro}|`)
                                console.log(`Média Final: ${media}`)
                            }
            
                            entradaDados.close()
                        })
                    })
                })
            })
        })
    })
})