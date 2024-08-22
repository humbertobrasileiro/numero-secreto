const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
  const chute = e.results[0][0].transcript

  if (chute == 'NATAN') {
    exibeChuteNaTela('Ele é gay')
  } else if (chute == 'HUMBERTO') {
    exibeChuteNaTela('Ele é lindo e maravilhoso')
  } else {
    exibeChuteNaTela(chute);
  }

  exibeChuteNaTela(chute)
}

function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
  `
}