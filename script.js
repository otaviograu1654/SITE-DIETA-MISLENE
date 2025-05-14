let currentStep = 1;
const answers = {};

function showStep(step) {
    document.querySelectorAll('.step').forEach((div) => {
        div.classList.remove('active');
    });
    document.getElementById(`step-${step}`).classList.add('active');
}

function nextStep(current, value) {
  if (!value) {
    return; // Interrompe se o valor for inválido
  }
  answers[`step${current}`] = value; // Salva a resposta do passo atual
  currentStep++;
  if (document.getElementById(`step-${currentStep}`)) {
    showStep(currentStep); // Mostra o próximo passo
  } else {
    alert('Formulário completo! Respostas:\n' + JSON.stringify(answers, null, 2));
    // Aqui você pode redirecionar ou enviar os dados
  }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

function getSelectedCarbs() {
    const selected = Array.from(document.querySelectorAll('input[name="carboidratos"]:checked'))
        .map((checkbox) => checkbox.value); // Coleta os valores dos checkboxes marcados
    if (selected.length === 0) {
        alert('Por favor, selecione pelo menos um carboidrato antes de continuar.');
        return null; // Retorna null se nenhum checkbox estiver marcado
    }
    return selected.join(', '); // Retorna os valores como uma string separada por vírgulas
}

function getSelectedProteins() {
  const selected = Array.from(document.querySelectorAll('input[name="proteinas"]:checked'))
    .map((checkbox) => checkbox.value); // Coleta os valores dos checkboxes marcados
  if (selected.length === 0) {
    alert('Por favor, selecione pelo menos uma proteína antes de continuar.');
    return null; // Retorna null se nenhum checkbox estiver marcado
  }
  return selected.join(', '); // Retorna os valores como uma string separada por vírgulas
}