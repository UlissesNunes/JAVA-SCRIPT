
import './App.css'

import TiguanVW from './componentes/TiguanVW'

import Dados from './componentes/Dados'




function App() {

  const name = {
    name: 'Ulisses' 
  }
  const som = (a,b)=> {
    return a + b

  }

  const nome = "mari"
  const idade = 21
  const status = "casada com Ulisses"
  const profissão = "professora"
  const salario = 3650
  const localidade = "camaçari"
  return (
    <>
   
  <h1> Olá {name.name}! SOU o React</h1>
   <p><img src='./logo192.png' alt=''></img></p>
     <p> o resultado da soma é {som(2,4)}</p>
     <TiguanVW nome= "Ulisses"/>
     <TiguanVW nome={nome}/>
     <Dados nome={nome} idade={idade} status={status} profissão={profissão} salario={salario} localidade={localidade}/>
    </>
  )
}

export default App;
