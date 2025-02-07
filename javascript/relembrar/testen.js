const soma = (a, b) => a / b 
  const resultado = soma(72, 15 )
  console.log("Resultado da soma:", resultado) 

  const hj = (c, d) => c + d
  const a = hj(5 , 9 )
  console.log("Resultado da conta:", a)


  const sobra = (o , z) => {
    const divisaoS = 10 % 6
    console.log("Resultado da conta:", + divisaoS)
    
  }
sobra(10,6)



//////////////// MAP ()  //////////////////////
const nume = [23,3,4]
const dobrar = nume.map((dobrar) => dobrar *2 )
console.log(dobrar)


const numersS = [23,3,4]
const numersMULTI = numersS.map(cavalo => cavalo * 5 )

console.log(numersMULTI)




//////// DE FAHREIMHEIT PARA CELSIUS //////////// c = (f - 32) * 5 / 9  //////////


const faheiheint = [23,3,4]
const celsius = faheiheint.map(faheiheint => (faheiheint - 32) * 5 /9)
console.log('De fahenheit para Celsius : ' + celsius) 



//////////// DE CELSIUS PARA FAHRENHEIT //////// f = c * 9 / 5 + 32  //////////////////

const Celsius = [23,3,4]
const fahrenheit = Celsius.map(Celsius => (Celsius * 9) / 5 + 32)
console.log('De celsius para fahrenheit : ' + fahrenheit)


///////////// DE KELVIN PARA FAHRENHEIT //////////// f = (k - 273,15) * 9 / 5 + 32 ////////

const Kelvin = [23,3,4]
const fahrenheitNOVO = Kelvin.map(kelvin => (kelvin -273,15) * 9 / 5 + 32)
console.log('De kelvin para fahenheit : ' + fahrenheitNOVO )

/////////////// DE FAHREINHEIT PARA KELVIN ////////// k = (f - 32) * 9 / 5 + 273,15 /////////

const fahreinheitNOVISSIMO = [23,3,4]
const kelvinNOVO = fahreinheitNOVISSIMO.map(fahreinheitNOVISSIMO => (fahreinheitNOVISSIMO - 32) * 5 / 9 + 273,15)
console.log('De faheinheit para kelvin : ' + kelvinNOVO)

///////////// DE CELSIUS  PARA KELVIN //////////// k = c + 273,15  ///////////////

const UltimoCelsius = [23,3,4]
const UltimoKelvin = UltimoCelsius.map(UltimoCelsius => (UltimoCelsius +  273,15))
console.log('De celsius para kelvin : ' + UltimoKelvin)

//////////////// DE KELVIN PARA CELSIUS //////// c = k - 273,15 //////////////

const AcabouKelvin = [23,3,4]
const AcabouCelsius = AcabouKelvin.map(AcabouKelvin => (AcabouKelvin - 273,15))
console.log('De kelvin para celsius : ' + AcabouCelsius) 






//////  FILTER()  //////////


const shopping = [
  {nome: 'Tenis' , preco:499.87},
  {nome: 'Camisa' , preco:135.90},
  {nome: 'Calca', preco:189.99} ,
  {nome: 'bone' , preco: 109.97}
]
const Produto = shopping.filter(shopping => shopping.preco < 200)

console.log(Produto)



const num = [2,4,88,27,4,5,3,2,16,16,37,27 ]
const semRepetir = num.filter((atualArray , index , numArray) => numArray.indexOf(atualArray) === index)
console.log(semRepetir)










///////  REDUCE()  ///////////



const jogadores = [
{nome: "Neymar" , Títulos: 28 } ,
{ nome: "Messi" , Títulos: 41} ,
{ nome: "CristianoRonaldo" , Títulos: 55},
{nome: "ThomasMuller" , Títulos: 32},
{nome: "Neuer" , Títulos: 31}


]


const Títulos = jogadores.reduce( (jogadoresArray , TítulosArrayAtual) => jogadoresArray + TítulosArrayAtual.Títulos , 0)
console.log(Títulos)




///////  EVERY() ////////////////////////

// verificar se todos os nomes já faleceram.
//  Se EVERY(todos) tiverem um ano de falecimento menor do que o ANO ATUAL(2025) significa que sim todos os nomes já faleceram = TRUE , caso tenha algum que ainda está vivo ou vai falecer posteriormente, sairia no terminal = FALSE

const falecimento = [
  {nome: "Pele" , anoFalecimento: 2024 } ,
  {nome: "Maradona" , anoFalecimento: 2024 } ,
  {nome: "Beckenbauer" , anoFalecimento: 2024} ,
  {nome: "Gerd MÜller" , anoFalecimento: 2023} ,
  {nome: "FFGG" , anoFalecimento: 2021}
]

console.log(falecimento.every((ArrayFalecimento) => ArrayFalecimento.anoFalecimento < 2025 ) )




////////   SOME()  ///////////////////////////



