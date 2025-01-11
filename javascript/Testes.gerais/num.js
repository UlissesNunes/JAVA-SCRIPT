
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
        window.alert('Valor encontrado.')
    } else {
        window.alert('Valor inválido ou já mencionado na lista, insira outro.')
    }
}