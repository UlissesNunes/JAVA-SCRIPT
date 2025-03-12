const path = require('path')
console.log(path.join(__dirname, 'teste.js'))
// path.join é uma função do módulo path que une caminhos de arquivos
// __dirname é uma constante do node que retorna o diretório atual
// 'teste.js' é o arquivo que queremos unir ao diretório atual
// o console.log vai mostrar o caminho completo do arquivo teste.js