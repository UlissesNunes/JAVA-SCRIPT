
function ContarN() {
    const inicio = document.getElementById('cx1');
    const meio = document.getElementById('cx2');
    const fim = document.getElementById('cx3');
    const res = document.getElementById('res');

    if (inicio.value.length == 0 || meio.value.length == 0 || fim.value.length == 0) {
        alert('ERRO! VERIFIQUE OS DADOS.');
    } else {
        res.innerHTML = 'Contando...<br>'
        let i1 = Number(inicio.value);
        let me2 = Number(meio.value);
        let fi3 = Number(fim.value);

        if (me2 <= 0) {
            alert('Passo inválido! Considerando passo 1.');
            me2 = 1;
        }

        if (i1 < fi3) {
            // Contagem crescente
            for (let c = i1; c <= fi3; c += me2) {
                res.innerHTML += `${c} \u{1f449} `;
            }
        } 
        
         else {
            // Contagem decrescente
            for (let c = i1; c >= fi3; c -= me2) {
                res.innerHTML += `${c} \u{1f449} `;
            }
        }

        res.innerHTML += '\u{1f3c1}'; // Adiciona símbolo de fim
    }
}