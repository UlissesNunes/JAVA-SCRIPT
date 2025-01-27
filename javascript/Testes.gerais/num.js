
const numForm = document.querySelector('input#Fnum')
const listaSelect = document.querySelector('select#Fcx')
const res = document.querySelector('div#res')
const valores = []

function ForNum(n) { //VALIDAÇÃO PARA SE FOR UM NUMERO
    if (Number(n) >= 1 && Number(n) <= 150) {
        return true 
    } else {
        return false
    }
}

function ForLista(n , l) { /* SE PROCURARMOS OS NUMEROS E ELE FOR ENCONTRADO NA LISTA (-1 significa não encontrado, tudo ao contrario dele é algo que já foi encontrado.) */
if(l.indexOf(Number(n)) != -1) { 
  return true

} else {
    return false
}
} 


function enviarNum() { /* SE FOR NUMERO ELE RECEBE O NUMFORM.VALUE , E SE NAO ESTIVER NA LISTA ELE RECEBE TBM NUMFORM.VALUE E OS VALORES (A LISTA) SENÃO, CASO O NUMERO JÁ ESTIVER NA LISTA ESTÁ DESCARTADO E TEM QUE MOSTRAR O ERRO (O NUMERO SO PODE APARECER UMA VEZ). */
    if(ForNum(numForm.value) && !ForLista(numForm.value , valores)) {
        valores.push(Number(numForm.value))
        let item = document.createElement('option')
        item.text = ` ${numForm.value} foi adicionado`
        listaSelect.appendChild(item)
        

    } else {
        window.alert('Valor inválido ou já mencionado na lista, insira outro.')
    }
    numForm.value = ''
    numForm.focus() //Simplesmente deixa a caixa com o foco automatico

    /*  numForm.value com sttring vazia significa que irá apagar a caixa toda vez que concluir a ação anterior, ou seja toda vez que adicionar um numero ele vai reniciar a caixa para readiciar outro valor.  */
}


function finalizarSelecao() {
    if(valores.length == 0) {
        window.alert('Impossível continuar com a lista vazia, adicione valores para continuar.')
    } else {
        let totalNum = valores.length


        res.innerHTML = ''
        res.innerHTML += `<p class = "p" >Ao todo foram ${totalNum} número(s) informado(s) </p>`
        res.innerHTML += `<p class = "p" >${ADICIONE}</p>`
        //APENAS ADICIONE OS OUTROS VALORES.
  
    }

}



