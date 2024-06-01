
document.getElementById('btn').addEventListener('click', function(event){
    event.preventDefault(); // Evita o envio do formulário
    const produto = document.getElementById('Produto').value
    const ean = document.getElementById('ean').value
    
    
    // Cria um novo elemento de lista
    const li = document.createElement('li');
    li.textContent = `Descrição do Produto: ${produto}<br>Codigo do Produto: ${ean}`

    // Adiciona o novo elemento à lista
    document.getElementById('registrado').appendChild('li')

     // Limpa os campos do formulário
     document.getElementById('Produto').value =''
     document.getElementById('ean').value = ''

})
    
