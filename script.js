resultado = document.getElementById('resultado')
historico = document.getElementById('historico')
desativo = document.querySelectorAll('.desativo')
cont = 0
m = 0
function fixedTOP() {
    window.open("https://luizdevfelipe.github.io/calc/", '_blank', 'width=360px, height=570px')
}

function fundoAtivo(x) {
    if (m == 1) { document.querySelector(`li#${x}.desativo`).style.background = '#353535' }
}

function fundoDesativo(x) {
    if (m == 1) { document.querySelector(`li#${x}.desativo`).style.background = '' }
}

function calculadora(x) {
    // colocar virgula no valor conforme a quantidade de casas decimais    
    // arrumar o limite de caracteres no visor
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
        if (resultado.innerHTML.length < 16) {
            resultado.innerHTML += x
        }

        if (resultado.innerHTML.length == 16) {
            resultado.style.fontSize = '2.2em'
        }
    }

    // Definindo a operação e atribuindo valor a n1
    if (x == '+') {
        historico.innerHTML = resultado.innerHTML + ' + '
        n1 = Number(resultado.innerHTML)
        operacao = 'soma'
        cont = 1
    }
    if (x == '-') {
        historico.innerHTML = resultado.innerHTML + ' - '
        n1 = Number(resultado.innerHTML)
        operacao = 'sub'
        cont = 1
    }
    if (x == '*') {
        historico.innerHTML = resultado.innerHTML + ' x '
        n1 = Number(resultado.innerHTML)
        operacao = 'mult'
        cont = 1
    }
    if (x == '/') {
        historico.innerHTML = resultado.innerHTML + ' &#x00F7; '
        n1 = Number(resultado.innerHTML)
        operacao = 'div'
        cont = 1
    }
    if (x == 'pot') {
        historico.innerHTML = `sqrt(${resultado.innerHTML})`
        n1 = Number(resultado.innerHTML)
        resultado.innerHTML = n1 ** 2
        operacao = 'pot'
        cont = 1
    }
    if (x == 'raiz') {
        historico.innerHTML = `&#x221A;(${resultado.innerHTML})`
        n1 = Number(resultado.innerHTML)
        resultado.innerHTML = n1 ** (1 / 2)
        operacao = 'raiz'
        cont = 1
    }
    if (x == '+-') {
        n1 = Number(resultado.innerHTML)
        resultado.innerHTML = n1 * -1
        cont = 1
    }
    if (x == '1x') {
        historico.innerHTML = `1/(${resultado.innerHTML})`
        n1 = Number(resultado.innerHTML)
        resultado.innerHTML = 1 / n1
        cont = 1
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
        resultado.innerHTML = Number(resultado.innerHTML) / 100
    }

    // Calculando o Resultado
    if (x == '=') {
        n2 = Number(resultado.innerHTML)
        if (operacao == 'soma') {
            historico.innerHTML += n2 + ' ='
            varResult = n1 + n2
            cont = 2
        }
        if (operacao == 'sub') {
            historico.innerHTML += n2 + ' ='
            varResult = n1 - n2
            cont = 2
        }
        if (operacao == 'mult') {
            historico.innerHTML += n2 + ' ='
            varResult = n1 * n2
            cont = 2
        }
        if (operacao == 'div') {
            historico.innerHTML += n2 + ' ='
            varResult = n1 / n2
            cont = 2
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
}