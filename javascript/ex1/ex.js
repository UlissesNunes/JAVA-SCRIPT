

function Enviar() {
  
    var iidade = document.querySelector("input#iidade")
    var res = document.querySelector("div#res")

    var idade = (iidade.value)
    if (idade <=15) {
        res.innerHTML= ` Você tem ${idade} anos, não vota ainda` 
} else if(idade >=16) {
    res.innerHTML = `Você tem ${idade} anos , Seu voto é opcional`
}  if(idade >= 18){
res.innerHTML= `Você tem ${idade} anos , seu voto é obrigatorio`
} if(idade >=65) {
    res.innerHTML = `Você tem ${idade} anos , Seu voto é opcional`
}
}