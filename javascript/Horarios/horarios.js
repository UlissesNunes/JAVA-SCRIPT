

function carregar() {
var container = document.querySelector('div#container')
var foto = document.getElementById('fotos')
var data = new Date()
var horas = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()
container.innerHTML = `Agora são ${horas} horas ${minutos} minutos e ${segundos} segundos `


if(horas >= 0 || horas >= 12) {
    
    foto.src = 'foto-manha.jpg.jpg'
    document.body.style.backgroundColor = '#e3c800' ;
} 
 else if (horas >=13){

   
    img.src = 'foto-tarde.jpg.jpg'
    body.style.backgroundColor = '#000' ;

}



}