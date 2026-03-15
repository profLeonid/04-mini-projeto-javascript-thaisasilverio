'use strict'

function calcularMedia(){

const nota1 = Number(document.getElementById('nota1').value)
const nota2 = Number(document.getElementById('nota2').value)
const nota3 = Number(document.getElementById('nota3').value)

const resultado = document.getElementById('resultado')

const media = (nota1 + nota2 + nota3) / 3

let situacao = ''

resultado.classList.remove('aprovado','recuperacao','reprovado')

if(media >= 7){
    situacao = "Aprovado"
    resultado.classList.add('aprovado')
}
else if(media >= 5){
    situacao = "Recuperação"
    resultado.classList.add('recuperacao')
}
else{
    situacao = "Reprovado"
    resultado.classList.add('reprovado')
}

resultado.textContent = `Média: ${media.toFixed(1)} - ${situacao}`

}