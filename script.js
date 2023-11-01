resultado = document.getElementById('resultado')
historico = document.getElementById('historico')
cont = 0

function calculadora(x){
    // 15 é o máximo de caracteres que cabe no visor com a fonte padrão
    // colocar virgula no valor conforme a quantidade de casas decimais    
    // fazer os cálculos funcionarem, x / * + - = por enquanto
    // arrumar botão CE e o botão que apaga somente o último caractere

    if (resultado.innerText == '0'){
        resultado.innerHTML = ''
    }

    if (x == 'apagar'){
        resultado.innerHTML = 0
    } 
    else if (x == 'deletar'){
        resultado.innerHTML = 0
        historico.innerHTML = ''
    } else if(x == '+' || x == '*' || x == '=' || x == '-' || x == '/'){
        resultado.innerHTML += ''
    } else if(cont == 1){
        resultado.innerHTML = '' + x
        cont = 0
    }else if(cont == 2){
        resultado.innerHTML = '' + x
        historico.innerHTML = ''
        cont = 0
    }
     else {    
        resultado.innerHTML += x         
    }    
    
    if (x == '+'){
        historico.innerHTML = resultado.innerHTML + ' + '
        n1 = Number(resultado.innerHTML)
        operacao = 'soma'
        cont = 1
    }
    if (x == '-'){
        historico.innerHTML = resultado.innerHTML + ' - '
        n1 = Number(resultado.innerHTML)
        operacao = 'sub'
        cont = 1
    }
    if (x == '*'){
        historico.innerHTML = resultado.innerHTML + ' x '
        n1 = Number(resultado.innerHTML)
        operacao = 'mult'
        cont = 1
    }
    if (x == '/'){
        historico.innerHTML = resultado.innerHTML + ' / '
        n1 = Number(resultado.innerHTML)
        operacao = 'div'
        cont = 1
    }


    if (x == '='){
        n2 = Number(resultado.innerHTML)
        if (operacao == 'soma'){
            historico.innerHTML += n2 + ' ='
            resultado.innerHTML = n1 + n2
            cont = 2
        }
        if (operacao == 'sub'){
            historico.innerHTML += n2 + ' ='
            resultado.innerHTML = n1 - n2
            cont = 2
        }
        if (operacao == 'mult'){
            historico.innerHTML += n2 + ' ='
            resultado.innerHTML = n1 * n2
            cont = 2
        }
        if (operacao == 'div'){
            historico.innerHTML += n2 + ' ='
            resultado.innerHTML = n1 / n2
            cont = 2
        }
    }

    
}