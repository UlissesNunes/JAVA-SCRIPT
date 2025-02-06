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

/*
 MAP()
///////////////////////////////////////////////////////////////////////////////////////////////

const numersS = [12,2, 280]
const numersMULTI = numersS.map(cavalo => cavalo * 5 )

console.log(numersMULTI)

//////// DE FAHREIMHEIT PARA CELSIUS //////////// c = (f - 32) * 5 / 9  //////////


const faheiheint = [0,54,6]
const celsius = faheiheint.map(faheiheint => (faheiheint - 32) * 5 /9)
console.log('De fahenheit para Celsius : ' + celsius) 



//////////// DE CELSIUS PARA FAHRENHEIT //////// f = c * 9 / 5 + 32  //////////////////

const Celsius = [2,23,5]
const fahrenheit = Celsius.map(Celsius => (Celsius * 9) / 5 + 32)
console.log('De celsius para fahrenheit : ' + fahrenheit)


///////////// DE KELVIN PARA FAHRENHEIT //////////// f = (k - 273,15) * 9 / 5 + 32 ////////

const Kelvin = [12,32,4,6,7]
const fahrenheitNOVO = Kelvin.map(kelvin => (kelvin -273,15) * 9 / 5 + 32)
console.log('De kelvin para fahenheit : ' + fahrenheitNOVO )

/////////////// DE FAHREINHEIT PARA KELVIN ////////// k = (f - 32) * 9 / 5 + 273,15 /////////

const fahreinheitNOVISSIMO = [34,54,1,2,5]
const kelvinNOVO = fahreinheitNOVISSIMO.map(fahreinheitNOVISSIMO => (fahreinheitNOVISSIMO - 32) * 5 / 9 + 273,15)
console.log('De faheinheit para kelvin : ' + kelvinNOVO)

///////////// DE CELSIUS  PARA KELVIN //////////// k = c + 273,15  ///////////////

const UltimoCelsius = [2,8,4,22]
const UltimoKelvin = UltimoCelsius.map(UltimoCelsius => (UltimoCelsius +  273,15))
console.log('De celsius para kelvin : ' + UltimoKelvin)

//////////////// DE KELVIN PARA CELSIUS //////// c = k - 273,15 //////////////

const AcabouKelvin = [25,10,11,8]
const AcabouCelsius = AcabouKelvin.map(AcabouKelvin => (AcabouKelvin - 273,15))
console.log('De kelvin para celsius : ' + AcabouCelsius) */




//////  FILTER()  //////////


/* const shopping = [
  {nome: 'Tenis' , preco:499.87},
  {nome: 'Camisa' , preco:235.90},
  {nome: 'Calca', preco:189.99} ,
  {nome: 'bone' , preco: 109.97}
]
const Produto = shopping.filter(shopping => shopping.preco < 200)

console.log(Produto)
console.log(shopping) */


const num = [2,4,88,27,4,5,3,2,16 ]
const semRepetir = num.filter((atualArray , index , numArray) => numArray.indexOf(atualArray) === index)
console.log(semRepetir)


const nume = [23,3,4,1,11,2]
const dobrar = nume.map((dobrar) => dobrar *2 )
console.log(dobrar)




const produtos1 = [
  {lojaA: 'playstation 5' , preco: 6000.90} ,
  {lojaB: 'xbox One' , preco: 4343.90} ,
  {lojaC: 'Nitendo' , preco: 1989.89} 

]

const promocao1 = produtos.filter(produtos =>  produtos.preco + 100)
console.log(` ${promocao}`)


