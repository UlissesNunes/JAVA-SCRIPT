const Flag = require('./exports');
console.log(Flag.getFlag('--name'));
console.log(Flag.getFlag('--greeting'));
console.log(Flag.getFlag('--age'));
// A função getFlag recebe uma string como argumento e retorna o valor da flag correspondente
// Se a flag não for encontrada, a função retorna null
// O valor da flag é o argumento que vem logo após a flag
// O valor da flag é retornado como uma string
// Apartir dissom podemos acessar os argumentos de linha de comando


