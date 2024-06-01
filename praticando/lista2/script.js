document.getElementById('productForm').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores dos inputs
    const description = document.getElementById('productDescription').value;
    const code = document.getElementById('productCode').value;

    // Cria um novo elemento de lista
    const li = document.createElement('li');
    li.textContent = `Descrição: ${description}, Código: ${code}`;

    // Adiciona o novo elemento à lista
    document.getElementById('productList').appendChild(li);

    // Limpa os campos do formulário
    document.getElementById('productDescription').value = '';
    document.getElementById('productCode').value = '';
});
