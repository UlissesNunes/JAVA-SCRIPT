
// cd /c/Users/Ulisses/Documents/estudos/JAVA-SCRIPT/javascript/node


//console.log(__dirname);
//diz a respeito do repositorio local nesse caso é o "node"





//Também podemos usar o "pwd" que é um comando do terminal que mostra o diretório atual




// console.log(__filename);
// Ainda fala a pasta mas se refere ao repositório "node" e + o arquivo local





//console.log(global)
// O global é um objeto que está disponível em qualquer lugar do código
// Ele é um objeto global do node que contém várias propriedades e métodos






//console.log(require('path'))
// require é uma função que importa módulos do node para o arquivo
//require faz parte do sistema de módulos do node
// path é um módulo do node que lida com caminhos de arquivos
// e o path é como se fosse um objeto que tem várias funções





//console.log(process)
// process é um objeto global do node que fornece informações sobre o processo em execução



console.log(process.argv)
// argv é uma propriedade do objeto process que retorna uma matriz com os argumentos de linha de comando
console.log(` Seus goleiros favoritos são o ${process.argv[2]} , ${process.argv[3]} e o ${process.argv[4]}`)


//console.log(process.env)
// env é uma propriedade do objeto process que retorna um objeto com as variáveis de ambiente




//console.log(process.cpuUsage())
// process é um objeto global do node que fornece informações sobre o processo em execução
// cpuUsage é um método do objeto process que retorna um objeto com informações sobre o uso da CPU




// console.log(process.cwd())
// cwd é um método do objeto process que retorna o diretório de trabalho atual do processo
// cwd significa current working directory

// console.log(process.memoryUsage())
// memoryUsage é um método do objeto process que retorna um objeto com informações sobre o uso de memória

// para criar modulos no node é necessário usar o module.exports
// module.exports é um objeto que contém as propriedades que serão exportadas do módulo
// module.exports = {nome: 'Ulisses'}
// module.exports.nome = 'Ulisses'
// module.exports.idade = 23
// module.exports.soma = (a, b) => a + b
// module.exports = function soma(a, b) {
//     return a + b
// }
// isso é um módulo e faz com que o objeto seja exportado para outros arquivos 
// e para importar esse módulo é necessário usar o require
// const modulo = require('./modulo')
// console.log(modulo.nome)
// console.log(modulo.idade)
// console.log(modulo.soma(2, 3))
// console.log(modulo(2, 3))

//sendo assim o require é uma função que importa módulos do node para o arquivo e de suma importância para o desenvolvimento de aplicações em node.js 
// e o module.exports é um objeto que contém as propriedades que serão exportadas do módulo e é necessário para exportar objetos, funções e variáveis de um módulo para outros arquivos





