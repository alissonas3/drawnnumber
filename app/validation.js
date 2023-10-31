function verificaNumero(palpite) {
    
    const numero = +palpite

    if(numeroInvalido(numero)) {
        console.log('Valor inválido!')
    }

    if(numeroForaDoIntervalo(numero)) {
        console.log(`Valor inválido! O numero precisa estar entre ${menorValor} e ${maiorValor}.`)
    }

}

function numeroInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForaDoIntervalo(numero) {
    return numero < menorValor || numero > maiorValor
}