//////  PROGRAMAÇÃO FUNCIONAL  ////////

// Função pura
const calc  = (n , b) => n * b
console.log(calc(1,4))

// Função impura 
const calc2 = (n , b) => n * b + Math.random()//é impura porque puxa o Math.random sem ter sido chamado nos parametros da função calc2
console.log(calc2(1,4))

// IMUTABILIDADE
const obj = {nome: 'João'}
function mudaNome(obj){
    const copia = {...obj}
    copia.nome = 'Maria'
    return copia
}
console.log(obj)
console.log(mudaNome(obj))

/*
  O operador spread (...obj) cria um novo objeto independente.
  Não alteramos o original (obj), mantendo a imutabilidade.
  Esse método é muito usado em React e programação funcional para manter a previsibilidade do código.
  */


  // FUNÇÕES FIRST-CLASS
  const funcao = () => console.log('uso de first-class')
    const funcao2 = funcao
    funcao2()

    const animal = () => console.log("Rinoceronte ! uso de first-class") 
    const runfunction = fn => fn()
    runfunction(animal)


    // FUNÇÕES HIGHER-ORDER
    const funcao3 = () => console.log('uso de highter-order')        
    const funcao4 = (funcao3) => funcao3()
    funcao4(funcao3)
