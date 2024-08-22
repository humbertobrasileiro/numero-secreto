window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = 'pt-br'
recognition.start()

const speechRecognitionList = new SpeechGrammarList()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
  console.log(e)
}