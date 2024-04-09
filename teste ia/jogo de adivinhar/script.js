// Gera um número aleatório entre 1 e 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Função para verificar o palpite do usuário
function checkGuess() {
  // Pega o palpite do usuário
  var guess = parseInt(document.getElementById('guess').value);

  // Verifica se o palpite é válido
  if (isNaN(guess) || guess < 1 || guess > 100) {
    setMessage('Por favor, digite um número válido entre 1 e 100.');
    return;
  }

  // Verifica se o palpite é correto, muito alto ou muito baixo
  if (guess === randomNumber) {
    setMessage('Parabéns! Você acertou o número.');
  } else if (guess < randomNumber) {
    setMessage('O número é maior. Tente novamente.');
  } else {
    setMessage('O número é menor. Tente novamente.');
  }
}

// Função para exibir mensagens para o usuário
function setMessage(message) {
  document.getElementById('message').textContent = message;
}