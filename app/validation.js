function verificaNumero(palpite) {

    const numero = +palpite     // Converte o valor do parametro de 'string' para um inteiro.

    if (numeroInvalido(numero)) {

        if (palpite.toUpperCase() === "FIM DE JOGO") {
            document.body.innerHTML = `
                <h2 class="color-game-over">GAME OVER</h2>
                <p>Pressione o botão para jogar novamente</p>
                <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`
            document.body.style.backgroundColor = "black";
        } else {
            elementoMensagem.innerHTML += `<div>Valor inválido!</div>`
        }

        return
    }

    if (numeroForaDoIntervalo(numero)) {
        elementoMensagem.innerHTML += `<div>Valor inválido! O numero precisa estar entre ${menorValor} e ${maiorValor}.</div>`
        return
    }

    if (numero < numeroAleatorio) {
        elementoMensagem.innerHTML += `<div>O número sorteado é maior <i class="fa-solid fa-arrow-up"></i></div>`
    } else
        if (numero > numeroAleatorio) {
            elementoMensagem.innerHTML += `<div>O número sorteado é menor <i class="fa-solid fa-arrow-down"></i></div>`
        }
        else {
            document.body.innerHTML = `
            <h2>Parabéns!</h2>
            <h3>Você acertou o número secreto que era ${numeroAleatorio}!</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
         `
        }

}

function numeroInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForaDoIntervalo(numero) {
    return numero < menorValor || numero > maiorValor
}

document.body.addEventListener('click', e => {

    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
