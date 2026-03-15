'use strict'

function removerClasses() {
    const resultado = document.getElementById('resultado')
    resultado.classList.remove("apto", "nao-apto")
}

function avaliar() {
    const tempo = document.getElementById('numero')
    const resultado = document.getElementById('resultado')

    if (tempo.value <= 14){   //valor na caixinha//
        resultado.textContent = "Apto"  //div, pegar o valor dentro da div//
        removerClasses()
        resultado.classList.add("apto") //add de adicionar//
    }
    else {
        resultado.textContent = "Não apto"
        removerClasses()
        resultado.classList.add("nao-apto")
    }


    //console.log ("Teste")//
}