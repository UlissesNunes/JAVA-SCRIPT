function TabuadaN() {
    const numero = document.getElementById('cx1')
    const tab = document.querySelector('select#Tab')
    if (numero.value.length == 0) {
        alert('erro verifique os dados e tente novamente')
    } else {
       let n = Number(numero.value)
       tab.innerHTML = ''
       for(let c = 1 ; c <= 10 ; c++ ) {
       let itemT = document.createElement('option')
       itemT.text = `${n} x ${c} = ${n*c}`
    
       tab.appendChild(itemT)
       }
    }





}