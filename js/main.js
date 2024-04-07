const calcImcBtnField = document.querySelector('#calc-imc-btn')
const alturaField = document.querySelector('input[name=altura]')
const pesoField = document.querySelector('input[name=peso]')
const warningField = document.querySelector('#warning')
const imcField = document.querySelector('#imc')
const transitionTime = 400

function bmiResult(peso, altura, sexo) {
    const imc = peso/altura ** 2

    if (sexo === 'feminino')
        if (imc < 19.1)
            return 'Abaixo do Peso'
        else if (imc < 25.8)
            return 'Peso Normal'
        else if (imc < 27.3)
            return 'Pouco Acima do Peso'
        else if (imc < 32.3)
            return 'Acima do Peso Ideal'
        else
            return 'Obeso'
    else 
        if (imc < 20.7)
            return 'Abaixo do Peso'
        else if (imc < 26.4)
            return 'Peso Normal'
        else if (imc < 27.8)
            return 'Pouco Acima do Peso'
        else if (imc < 31.1)
            return 'Acima do Peso'
        else
            return 'Obeso' 
}

function validValues(altura, peso) {
    return !(isNaN(altura) || altura == 0 || isNaN(peso) || peso == 0)
}

function calculadoraDeIMC() {
    let altura = alturaField.value.replace(',','.')
    let peso = pesoField.value.replace(',', '.')
    let sexo = document.querySelector('input[name=sexo]:checked').value
    let resultado = ''
  
    if (validValues(altura, peso)) {
      resultado = bmiResult(peso, altura, sexo)
      hideWarningMessage()
      showBorder(resultado)
    } else {
      showWarningMessage()
      hideBorder()
    }
  
    imcField.value = resultado
}

function showBorder(resultado) {
    setTimeout(function () {
      imcField.className = `form-control form-control-lg ${border[resultado]}`
    }, transitionTime)
  }
  
  function hideBorder() {
    setTimeout(function () {
      imcField.className = 'form-control form-control-lg'
    }, transitionTime)
  }
  
  function showWarningMessage() {
    warningField.innerHTML = warningMessage
  }
  
  function hideWarningMessage() {
    warningField.innerHTML = ''
    imcField.className = 'form-control form-control-lg text-black'
  }
  
// evetns
  calcImcBtnField.addEventListener('click', function(event) {
    event.preventDefault()
    calculadoraDeIMC()
  })
  
  document.body.addEventListener('keydown', function(event) {
    if(event.key == "Enter"){
      event.preventDefault()
      calculadoraDeIMC()
    }
  })