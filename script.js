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
window.addEventListener("click", function (e) {
  const menu = document.getElementById("perfilMenu");
  const avatar = document.querySelector(".avatar");

  if (!menu.contains(e.target) && e.target !== avatar) {
    menu.style.display = "none";
  }
});


function mostrarCategoria(nome) {
  // Esconde todas as categorias
  document.querySelectorAll('.grid-carbs').forEach(function (div) {
    div.style.display = 'none';
  });
  // Mostra apenas a categoria escolhida
  var selecionada = document.getElementById(nome);
  if (selecionada) {
    selecionada.style.display = 'grid';
  }
}

/* pagina usernutricionista */
// Função para quando o usuário clicar em um nutricionista
function selecionarNutri(nome) {
  // Preenche o campo de texto com o nome do nutricionista escolhido
  document.getElementById('nutriSelecionada').value = nome;
}

// Função que será chamada quando o formulário for enviado
function enviarMensagem(event) {
  event.preventDefault(); // Impede que a página recarregue ao enviar o formulário

  // Pega os valores preenchidos nos campos
  const nutricionista = document.getElementById('nutriSelecionada').value;
  const mensagem = document.getElementById('mensagem').value;

  // Validação simples: verifica se os dois campos estão preenchidos
  if (nutricionista && mensagem) {
    // Mostra um alerta de sucesso
    alert(`Sua mensagem para ${nutricionista} foi enviada com sucesso!`);

    // Limpa o formulário
    document.getElementById('nutriSelecionada').value = '';
    document.getElementById('mensagem').value = '';
  } else {
    // Se faltar algum campo, avisa o usuário
    alert('Por favor, selecione um nutricionista e escreva uma mensagem.');
  }
}

function abrirDia(event, id) {
      const aba = event.target;
      const container = aba.closest('.historico-conteudo');

      const todasAbas = container.querySelectorAll('.aba-dia');
      const todosConteudos = container.querySelectorAll('.conteudo-dia');

      todasAbas.forEach(btn => btn.classList.remove('ativo'));
      todosConteudos.forEach(div => div.classList.remove('ativo'));

      aba.classList.add('ativo');
      document.getElementById(id).classList.add('ativo');
    }
    /*pagina progresso*/
    // Gráfico de Pizza da Página Progresso
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('graficoPizza');
  if (canvas) {
    const ctx = canvas.getContext('2d');

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Massa Magra', 'Gordura Corporal'],
        datasets: [{
          data: [86, 14],  // Exemplo: 86% massa magra, 14% gordura
          backgroundColor: ['#81C784', '#E57373'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 10,
              font: {
                size: 15
              }
            }
          }
        }
      }
    });
  }
});

/* Gráfico de Barras*/ 
document.addEventListener('DOMContentLoaded', function() {
  const canvasBarras = document.getElementById('graficoBarras');
  if (canvasBarras) {
    const ctxBarras = canvasBarras.getContext('2d');

    const semanas = ['Semana 1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
    const pesos = [80, 79.5, 79, 78.8, 78.5, 78, 77.8, 77.5, 77.2, 77, 76.8, 76.5, 76.3, 76, 75.8, 75.5];

    const cores = semanas.map((semana, index) => {
      // Destaca com cor mais escura nas semanas de fechamento de mês (4ª, 8ª, 12ª, 16ª semana)
      if ((index + 1) % 4 === 0) {
        return '#66BB6A';  // Verde escuro (mês completo)
      } else {
        return '#C8E6C9';  // Verde claro (semanas normais)
      }
    });

    new Chart(ctxBarras, {
      type: 'bar',
      data: {
        labels: semanas,
        datasets: [{
          label: 'Peso (kg)',
          data: pesos,
          backgroundColor: cores,
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        scales: {
          y: {
            beginAtZero: false
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
});
// Função para mostrar as linhas extras da tabela ao clicar no botão "Ver mais"
function mostrarMais() {
  // Seleciona todas as linhas que têm a classe "linha-extra" (a partir da semana 6)
  const linhasExtras = document.querySelectorAll('.linha-extra');

  // Mostra cada linha extra (remove display:none)
  linhasExtras.forEach(linha => {
    linha.style.display = 'table-row';
  });

  // Esconde o botão após mostrar as linhas extras
  const botao = document.querySelector('button[onclick="mostrarMais()"]');
  if (botao) {
    botao.style.display = 'none';
  }
}

// Ao carregar a página, esconde as linhas extras
window.addEventListener('DOMContentLoaded', () => {
  const linhasExtras = document.querySelectorAll('.linha-extra');
  linhasExtras.forEach(linha => {
    linha.style.display = 'none';
  });
});
