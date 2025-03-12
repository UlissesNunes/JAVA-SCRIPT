module.exports = n => n * n
console.log(module.exports(56))
// module.exports é um objeto que contém as informações sobre o módulo atual
// podemos exportar funções, objetos, strings, números, etc
// para exportar algo, basta atribuir o valor a module.exports
// o valor exportado será importado em outro arquivo
//ele é importado com o require