function tela() {
const res= document.querySelector('div#res')

let num = [ 3,9,75,56,55,353]
for(let pos = 0 ; pos < num.length ; pos++  ) 
res.innerHTML +=`indice é    ${pos}   e o valor dele é     ${num[pos]}`


}