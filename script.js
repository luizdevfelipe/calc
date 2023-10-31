resultado = document.getElementById('resultado')

function valor(x){
    // 15 é o máximo de caracteres que cabe no visor com a fonte padrão
    // arrumar botão CE e botão que apaga somente o último caractere
    // fazer os cálculos funcionarem, x / * + - = por enquanto
    // colocar virgula no valor conforme a quantidade de casas decimais
    // fazer o histórico '3x3' funcionar

    if (resultado.innerText == '0'){
        resultado.innerHTML = ''
    }

    if (x == 'apagar'){
        resultado.innerHTML = 0
    } else {    
        resultado.innerHTML += x             
    }
    
}