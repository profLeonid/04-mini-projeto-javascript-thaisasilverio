'use strict'

function calcularIMC(){

const nome = document.getElementById('nome').value
const altura = Number(document.getElementById('altura').value)
const peso = Number(document.getElementById('peso').value)

const resultado = document.getElementById('resultado')

const imc = peso / (altura * altura)

let classificacao = ''

resultado.classList.remove(
'abaixo',
'normal',
'sobrepeso',
'obesidade1',
'obesidade2',
'obesidade3'
)

if(imc < 18.5){
    classificacao = "Abaixo do peso"
    resultado.classList.add('abaixo')
}
else if(imc < 25){
    classificacao = "Peso normal"
    resultado.classList.add('normal')
}
else if(imc < 30){
    classificacao = "Sobrepeso"
    resultado.classList.add('sobrepeso')
}
else if(imc < 35){
    classificacao = "Obesidade grau I"
    resultado.classList.add('obesidade1')
}
else if(imc < 40){
    classificacao = "Obesidade grau II"
    resultado.classList.add('obesidade2')
}
else{
    classificacao = "Obesidade grau III"
    resultado.classList.add('obesidade3')
}

resultado.textContent =
`${nome}, seu IMC é ${imc.toFixed(1)} - ${classificacao}`

}