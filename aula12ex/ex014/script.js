function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12){
        // bom dia
        document.body.style.background = "*cb865e" // muda a cor de fundo
        img.src= 'manha.png'
    } else if(hora >=12 && hora <= 18){
        // bora tarde
        document.body.style.background = '#f6b285'
        img.src = 'tarde.png'
    }else{
        // boa noite
        document.body.style.background = '#382a48'
        img.src = 'noite.png'
    }
        
    
}
