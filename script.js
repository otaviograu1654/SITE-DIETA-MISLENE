let currentStep = 1;
const answers = {};

function showStep(step) {
  document.querySelectorAll('.step').forEach((div) => {
    div.classList.remove('active');
  });
  document.getElementById(`step-${step}`).classList.add('active');

  // Limpa os campos de resposta
  if (step === 8) {
    document.querySelectorAll('input[name="frequencia"]').forEach((input) => {
      input.addEventListener("change", function () {
        const detalhes = document.getElementById("detalhes-atividade");
        if (this.value === "nao") {
          detalhes.style.display = "none";
        } else {
          detalhes.style.display = "block";
        }
      });
    });
  }
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

function getSelectedFrutas() {
  const selected = Array.from(document.querySelectorAll('input[name="frutas"]:checked'))
    .map((checkbox) => checkbox.value); // Coleta os valores dos checkboxes marcados
  if (selected.length === 0) {
    alert('Por favor, selecione pelo menos uma fruta antes de continuar.');
    return null; // Retorna null se nenhum checkbox estiver marcado
  }
  return selected.join(', '); // Retorna os valores como uma string separada por vírgulas
}

function getSelectedLegumes() {
  const selected = Array.from(document.querySelectorAll('input[name="legumes"]:checked'))
    .map((checkbox) => checkbox.value); // Coleta os valores dos checkboxes marcados
  if (selected.length === 0) {
    alert('Por favor, selecione pelo menos um legume antes de continuar.');
    return null; // Retorna null se nenhum checkbox estiver marcado
  }
  return selected.join(', '); // Retorna os valores como uma string separada por vírgulas
}

document.querySelectorAll('input[name="frequencia"]').forEach((input) => {
  input.addEventListener("change", function () {
    const detalhes = document.getElementById("detalhes-atividade");
    if (this.value === "nao") {
      detalhes.style.display = "none";
    } else {
      detalhes.style.display = "block";
    }
  });
});

function getAtividadeFisica() {
  const frequencia = document.querySelector('input[name="frequencia"]:checked');
  if (!frequencia) {
    alert('Por favor, selecione a frequência de atividade física.');
    return null;
  }
  let atividade = { frequencia: frequencia.value };

  if (frequencia.value !== "nao") {
    const horario = document.querySelector('input[name="horario"]:checked');
    const intensidade = document.querySelector('input[name="intensidade"]:checked');
    if (!horario || !intensidade) {
      alert('Por favor, selecione o horário e a intensidade da atividade.');
      return null;
    }
    atividade.horario = horario.value;
    atividade.intensidade = intensidade.value;
  }
  return atividade;
}

function getSelectedCondicoes() {
  const selected = Array.from(document.querySelectorAll('input[name="condicoes"]:checked'))
    .map((checkbox) => checkbox.value); // Coleta os valores dos checkboxes marcados
  if (selected.length === 0) {
    alert('Por favor, selecione pelo menos uma condição antes de continuar.');
    return null; // Retorna null se nenhum checkbox estiver marcado
  }
  return selected.join(', '); // Retorna os valores como uma string separada por vírgulas
}

 //validação da senha
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    const senha = document.getElementById('senha').value;
    const confirma = document.getElementById('confirmaSenha').value;

    if (senha.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres.');
      e.preventDefault();
      return;
    }
    if (senha !== confirma) {
      alert('As senhas não coincidem.');
      e.preventDefault();
      return;
    }
  });
});


  function toggleMenu() {
    const menu = document.getElementById("perfilMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }

  // Fecha o menu se clicar fora
  window.addEventListener("click", function(e) {
    const menu = document.getElementById("perfilMenu");
    const avatar = document.querySelector(".avatar");

    if (!menu.contains(e.target) && e.target !== avatar) {
      menu.style.display = "none";
    }
  });
