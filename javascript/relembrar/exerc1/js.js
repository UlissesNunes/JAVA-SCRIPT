
function carregar() {
    const base = document.querySelector('div#base')
    var foto = document.querySelector('div#imagem')
    var horario = document.querySelector('h1#horarios')
    const data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    var milisegund = data.getMilliseconds()
    //var hora = 
    base.innerHTML = `Agora são ${hora} horas ${minuto} minutos e ${segundo} segundos e ${milisegund} milisegundos`
    if (hora >= 1 && hora < 12) {
        //bom dia
        horarios.innerHTML = 'Bom dia..'
        foto.innerHTML = '<img src="imagens/pexels-mateusz-17606731.jpg" alt="imagem" id="imagem">'
        document.body.style.background='#e9974b'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
         horarios.innerHTML = 'Boa tarde..'
        foto.innerHTML = '<img src="imagens/pexels-tomfisk-18851813.jpg"alt="imagem" id="imagem">'

        document.body.style.background='#a08efb'
    } else {

         horarios.innerHTML = 'Boa noite..'

        foto.innerHTML = '<img src="imagens/pexels-city2forest-26151144.jpg"alt="imagem" id="imagem">'

        document.body.style.background='#032119'
        //boa noite
    } 
}



