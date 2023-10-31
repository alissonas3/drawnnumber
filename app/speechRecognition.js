window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const elementoMensagem = document.getElementById('mensagemId');

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {

  palpite = e.results[0][0].transcript;

  palpiteNaTela(palpite)

  verificaNumero(palpite)

}


function palpiteNaTela(palpite) {
  elementoMensagem.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${palpite}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())
