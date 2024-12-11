function Verificar() {
    var vel = document.querySelector('input#vel')
    var res = document.querySelector('div#res')
    var veloc = Number (vel.value)
    res.innerHTML=`A velocidade do carro é de ${veloc} km/h`
   res.innerHTML+= '<p>Dirija sempre com o cinto de segurança!</p>'
    if (veloc > 60) {
        res.innerHTML += `<p>Sua velocidade está acima da permitida na via, Você foi <strong>MULTADO</strong></p>`
    
    }
       
    
}