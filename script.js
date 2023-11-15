resultado = document.getElementById('resultado')
historico = document.getElementById('historico')
desativo = document.querySelectorAll('.desativo')
cont = 0 // para funcionar historico e outros
m = 0 // para funcionar os botões de macro
function fixedTOP() {       
    window.open("https://luizdevfelipe.github.io/calc/fixed.html", '_blank', 'width=360px, height=430px')
}

function fundoAtivo(x) {
    if (m == 1) { document.querySelector(`li#${x}.desativo`).style.background = '#353535' }
}

function fundoDesativo(x) {
    if (m == 1) { document.querySelector(`li#${x}.desativo`).style.background = '' }
}

function calculadora(x) {
    // colocar virgula no valor conforme a quantidade de casas decimais    
    if (resultado.innerText == '0') {
        resultado.innerHTML = ''
    }

    if (x == 'apagar') {
        resultado.innerHTML = 0
    }

    if (x == 'm+') {
        macro = resultado.innerHTML
        desativo.forEach(document => {
            document.style.color = 'white';
        })
        m = 1
    }

    if (x == 'mc' && m == 1) {
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

    if (x == 'mr' && m == 1) {
        resultado.innerHTML = macro
    } else if (x == 'mr' && resultado.innerHTML == 0) {
        resultado.innerHTML = 0
    }
    else if (x == 'deletar') {
        resultado.innerHTML = 0
        historico.innerHTML = ''

    } else if (['+', '*', '=', '-', '/', 'pot', 'raiz', '+-', 'm+', 'mc', 'apagar', 'deletar', '1x', '.', 'porcent', 'del'].includes(x)) {    // não digita os valores de x passados no visor
        if (resultado.innerHTML == 0) {
            resultado.innerHTML = 0
        } else {
            resultado.innerHTML += ''
        }

        resultado.innerHTML += ''
    }
    else if (cont == 1) {  // permite digitar o próximo número após uma operação
        resultado.innerHTML = '' + x
        cont = 0
    } else if (cont == 2) {
        resultado.innerHTML = '' + x
        historico.innerHTML = ''
        cont = 0
    }

    else {
        resultado.style.fontSize = '2.5em'
        if (resultado.innerHTML.length < 21) {
            resultado.innerHTML += x
        }

        if (resultado.innerHTML.length > 14) {
            resultado.style.fontSize = '2.1em'
        }

        if (resultado.innerHTML.length > 17) {
            resultado.style.fontSize = '1.7em'
        }
    }

    // Definindo a operação e atribuindo valor a n1
    if (x == '+') {
        n1 = Number(resultado.innerHTML.replaceAll(',',''))
        historico.innerHTML = String(n1) + ' + '
                
        operacao = 'soma'
        cont = 1
    }
    if (x == '-') {        
        n1 = Number(resultado.innerHTML.replaceAll(',',''))
        historico.innerHTML = String(n1) + ' - '
        operacao = 'sub'
        cont = 1
    }
    if (x == '*') {        
        n1 = Number(resultado.innerHTML.replaceAll(',',''))
        historico.innerHTML = String(n1) + ' x '
        operacao = 'mult'
        cont = 1
    }
    if (x == '/') {        
        n1 = Number(resultado.innerHTML.replaceAll(',',''))
        historico.innerHTML = String(n1) + ' &#x00F7; '
        operacao = 'div'
        cont = 1
    }
    if (x == 'pot') {        
        operacao = 'pot'
        cont = 1
        calcResult()
    }
    if (x == 'raiz') {        
        operacao = 'raiz'
        cont = 1
        calcResult()
    }
    if (x == '+-') {
        n1 = Number(resultado.innerHTML.replaceAll(',',''))
        resultado.innerHTML = n1 * -1
        cont = 1
    }
    if (x == '1x') {
        operacao = '1x'
        cont = 1
        calcResult()
    }

    if (x == 'del') {
        if (resultado.innerHTML.length == 1) {
            resultado.innerHTML = 0
        } else {
            lista = []
            novoValor = ''
            for (idx = 0; idx < resultado.innerHTML.length; idx++) {
                lista[idx] = resultado.innerHTML.charAt(idx)
            }
            lista.pop()
            for (itens in lista) {
                novoValor += lista[itens]
            }
            resultado.innerHTML = novoValor
        }
    }

    if (x == '.') {
        resultado.innerHTML += '.'
    }
    if (x == 'porcent') {
        resultado.innerHTML = Number(resultado.innerHTML.replaceAll(',','')) / 100
    }

    
}

// Calculando o Resultado
function calcResult() {
    if (cont != 2){
        n2 = Number(resultado.innerHTML.replaceAll(',',''))
    }
    
    if (operacao == 'soma') {
        if(cont == 2){           
            n1 = Number(resultado.innerHTML.replaceAll(',',''))
            historico.innerHTML = `${n1} + ${n2} =`                
        } else{
            historico.innerHTML += n2 + ' ='
        }
        varResult = n1 + n2
        cont = 2
    }
    if (operacao == 'sub') {               
        if(cont == 2){           
            n1 = Number(resultado.innerHTML.replaceAll(',',''))
            historico.innerHTML = `${n1} - ${n2} =`                
        } else{
            historico.innerHTML += n2 + ' ='
        }
        varResult = n1 - n2
        cont = 2
    }
    if (operacao == 'mult') {
        if(cont == 2){           
            n1 = Number(resultado.innerHTML.replaceAll(',',''))
            historico.innerHTML = `${n1} x ${n2} =`                
        } else{
            historico.innerHTML += n2 + ' ='
        }
        varResult = n1 * n2
        cont = 2
    }
    if (operacao == 'div') {
        if(cont == 2){           
            n1 = Number(resultado.innerHTML.replaceAll(',',''))
            historico.innerHTML = `${n1} &#x00F7; ${n2} =`                
        } else{
            historico.innerHTML += n2 + ' ='
        }
        varResult = n1 / n2
        cont = 2
    }
    if(operacao == 'pot'){
        n1 = Number(resultado.innerHTML.replaceAll(',',''))
        historico.innerHTML = `sqrt(${String(n1)})`        
        varResult = n1 ** 2
    }
    if(operacao == 'raiz'){
        n1 = Number(resultado.innerHTML.replaceAll(',',''))
        historico.innerHTML = `&#x221A;(${String(n1)})`        
        varResult = n1 ** (1 / 2)
    }
    if(operacao == '1x'){
        n1 = Number(resultado.innerHTML.replaceAll(',',''))
        historico.innerHTML = `1/(${String(n1)})`        
        varResult = 1 / n1
    }
    if (operacao == 'pot' || operacao == 'raiz') {
        if (cont == 1) {
            historico.innerHTML += ' ='
            cont = 2
        }
    }

    if (String(varResult).length >= 15) {
        resultado.style.fontSize = '1.6em'
        resultado.innerHTML = varResult
    }
    else {
        resultado.innerHTML = varResult
    }
}