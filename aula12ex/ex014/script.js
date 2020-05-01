function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto}.`
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'Manha.png'
        document.body.style.background = '#f5b576'
    }
    else if (hora >= 12 && hora <= 18){
        // BOA TARDE
        img.src = 'Tarde.png'
        document.body.style.background = '#fff069'
    }
    else{
        //BOA NOITE
        img.src = 'Noite.png'
        document.body.style.background = '#28273d'
    }
}