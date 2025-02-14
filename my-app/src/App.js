
import './App.css'

import TiguanVW from './componentes/TiguanVW'

import Dados from './componentes/Dados'

import EventoOnclick from './componentes/EventoOnclick'




function App() {
 
  const name = {
    name: 'Ulisses' 
  }
  const som = (a,b)=> {
    return a + b

  }

  const nome = "mari"
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
     <Dados nome={nome} idade={21} status="casada com Ulisses" profissão={profissão} salario={salario} localidade={localidade}/>

    <EventoOnclick/>

    </>
  )
}

export default App;
