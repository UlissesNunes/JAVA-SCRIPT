
import './App.css';

import NewComponent from './componentes/NewComponent'




function App() {

  const name = {
    name: 'Ulisses' 
  }
  const som = (a,b)=> {
    return a + b

  }
  return (
    <div>
    
    
  <h1> Olá {name.name}! React / World</h1>
   <p><img src='./logo192.png' alt=''></img></p>
     <p>Meu primeiro código em junção do react..
     </p>
     <p> o resultado da soma é {som(2,4)}</p>
    <NewComponent/>
    
    </div>
  )
}

export default App;
