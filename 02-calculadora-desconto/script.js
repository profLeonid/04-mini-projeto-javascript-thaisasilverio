'use strict'

function calcularDesconto (){

    const precoOriginal = Number(document.getElementById('precoOriginal').value)
    const desconto = Number(document.getElementById('desconto').value)
    const resultado = document.getElementById('resultado')

    const valorDesconto = precoOriginal * (desconto / 100)
    const precoFinal = precoOriginal - valorDesconto

    resultado.textContent = 
    `Você economizou R$ ${valorDesconto.toFixed(2)} | Preço final: R$ ${precoFinal.toFixed(2)}`

    resultado.classList.remove('cinco','cinco-dez','maiorDez')

    if (desconto <= 5){
        resultado.classList.add('cinco')
    }
    else if (desconto <= 10){
        resultado.classList.add('cinco-dez')
    }
    else{
        resultado.classList.add('maiorDez')
    }
}





//function calcularDesconto (){
   // const precoOriginal = document.getElementById('precoOriginal')
    //const desconto = document.getElementById('desconto')
    //const resultado = document.getElementById('resultado')

   // resultado = (precoOriginal * desconto)/100

   // if (desconto.value <= 5){
  //     resultado.textContent = resultado
   // }
   // if (condition) {
   //     desconto
  //  } else {
        
   // }
//}

