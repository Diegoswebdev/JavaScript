function generateTable() {
    var number = parseInt(document.getElementById('number').value);
    var table = document.getElementById('table');
    
    // Limpa a tabela antes de adicionar uma nova
    table.innerHTML = '';
    
    // Verifica se o número está entre 1 e 10
    if (number < 1 || number > 1000 || isNaN(number)) {
      alert('Por favor, escolha um número entre 1 e 1000.');
      return;
    }
    
    // Cria a tabela de multiplicação
    var tableHTML = '<h2>Tabuada do ' + number + '</h2><table>';
    for (var i = 1; i <= 10; i++) {
      tableHTML += '<tr><td>' + number + ' x ' + i + ' = </td><td>' + (number * i) + '</td></tr>';
    }
    tableHTML += '</table>'
    
    // Adiciona a tabela ao elemento 'table'
    table.innerHTML = tableHTML;
    
  }