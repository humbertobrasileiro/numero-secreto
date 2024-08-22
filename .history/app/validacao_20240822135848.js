function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute

  if (Number.isNaN(numero)) {
    console.log('valor inválido')
  }
}