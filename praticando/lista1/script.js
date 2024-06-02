// selecionando o doculmento
const produtoInputs = document.querySelector('.produto');
const codigoInputs = document.querySelector('.codigo');
const criarLista = document.querySelector('#res')
const btn = document.getElementById('btn');

// função

btn.addEventListener("click", (e)=> {
    e.preventDefault();
    const inputValueP = produtoInputs.value;
    const inputValueC = codigoInputs.value
    const li = document.createElement('li')
    

    if(inputValueP && inputValueC){
       li.innerHTML += `Descrição do Produto: ${inputValueP}<br> Codigo do Produto: ${inputValueC}<br><hr>`
       document.getElementById('res').appendChild(li);
       criarLista.style.display = "block";    
    } else {
        alert('nada para registrar')
    }
})