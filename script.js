resultado = document.getElementById('resultado')
historico = document.getElementById('historico')
desativo = document.querySelectorAll('.desativo')
cont = 0
m = 0
function fixedTOP(){
    window.open("https://luizdevfelipe.github.io/calc/", '_blank', 'width=360px, height=570px')
}

function fundoAtivo(x){    
    if(m==1){ document.querySelector(`li#${x}.desativo`).style.background = '#353535' }
}

function fundoDesativo(x){    
    if(m==1){ document.querySelector(`li#${x}.desativo`).style.background = '' }
}

function calculadora(x){
    // colocar virgula no valor conforme a quantidade de casas decimais    
    // arrumar botão CE e o botão que apaga somente o último caractere

    if (resultado.innerText == '0'){
        resultado.innerHTML = ''
    }

    if (x == 'apagar'){
        resultado.innerHTML = 0
    } 

    if(x == 'm+'){
        macro = resultado.innerHTML        
        desativo.forEach(document => {
        document.style.color = 'white';
        })
        m = 1
    } 
    
    if (x == 'mc' && m == 1){
        desativo.forEach(document => {
        document.style.color = '';
        })
        desativo.forEach(document => {
        document.style.background = '';
        })
        historico.innerHTML = ''
        macro = 0
        m = 0
    }

    if(x == 'mr' && m == 1){
        resultado.innerHTML = macro
    } else if(x == 'mr' && rasultado.innerHTML == 0){
        resultado.innerHTML = 0
    }
    else if (x == 'deletar'){
        resultado.innerHTML = 0
        historico.innerHTML = ''

    } else if(['+', '*', '=', '-', '/', 'pot', 'raiz', '+-', 'm+', 'mc', 'apagar', 'deletar'].includes(x)){
        resultado.innerHTML += ''    
    } 
    else if(cont == 1){
        resultado.innerHTML = '' + x
        cont = 0
    }else if(cont == 2){
        resultado.innerHTML = '' + x
        historico.innerHTML = ''
        cont = 0
    }
    
     else {    
        resultado.style.fontSize = '2.5em'
        if (resultado.innerHTML.length < 16){
             resultado.innerHTML += x      
        }
          
        if(resultado.innerHTML.length == 16){
           resultado.style.fontSize = '2.2em'            
        }    
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
    if (x == 'pot'){
        historico.innerHTML =  `sqrt(${resultado.innerHTML})`
        n1 = Number(resultado.innerHTML)
        resultado.innerHTML = n1 ** 2        
        operacao = 'pot'
        cont = 1
    }

    if (x == 'raiz'){
        historico.innerHTML =  `&#x221A;(${resultado.innerHTML})`
        n1 = Number(resultado.innerHTML)
        resultado.innerHTML = n1 ** (1/2)
        operacao = 'raiz'
        cont = 1
    }

    if(x == '+-'){        
        n1 = Number(resultado.innerHTML)
        resultado.innerHTML = n1 * -1        
        cont = 1
    }


    if (x == '='){
        n2 = Number(resultado.innerHTML)
        if (operacao == 'soma'){
            historico.innerHTML += n2 + ' ='
            varResult = n1 + n2
            cont = 2
        }
        if (operacao == 'sub'){
            historico.innerHTML += n2 + ' ='
            varResult = n1 - n2
            cont = 2
        }
        if (operacao == 'mult'){
            historico.innerHTML += n2 + ' ='
            varResult = n1 * n2
            cont = 2
        }
        if (operacao == 'div'){
            historico.innerHTML += n2 + ' ='
            varResult = n1 / n2
            cont = 2
        }        

        if(operacao == 'pot' || operacao == 'raiz'){            
            if (cont == 1){
                historico.innerHTML += ' ='
                cont = 2  
            }                                    
        }        
        
        if(String(varResult).length > 16){            
            resultado.style.fontSize = '1.6em'
            resultado.innerHTML = varResult
        }
        else{
            resultado.innerHTML = varResult
        }
    }

    
}