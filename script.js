var globalConditions = {
  escondido: false,
}
var oldGlobalConditions = {};

function estaAparecendo() {
  return globalConditions.escondido;
}

function estaEscondido() {
  return !globalConditions.escondido;
}

function toggleCondition() {
  console.log('Trocando condição!')
  globalConditions.escondido = !globalConditions.escondido
  // applyCdsIf()
}

function applyCdsIf() {
  const elements = document.querySelectorAll('[cds-if]');
  elements.forEach((element) => {
    const cdsIfValue = element.attributes['cds-if'].value;
  
    if (!window[cdsIfValue]()) {
      element.setAttribute('hidden', '');
    } else {
      element.removeAttribute('hidden')
    }
  })
}

window.onload = () => {
  setInterval(() => {
    const hasAGlobalConditionChanged = Object
      .entries(globalConditions)
      .some(([key, value]) => oldGlobalConditions[key] !== value);
    oldGlobalConditions = { ...globalConditions };
    if (hasAGlobalConditionChanged) {
      applyCdsIf();
    }
  }, 100)
}
