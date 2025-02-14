function Dados({nome , idade , status , profissão , salario , localidade}) {
   
    return(
        <div>
            <h3>Bem vindo(a) , {nome} !</h3>
            <p><strong>Seus dados</strong></p>
            <p><strong>nome :</strong> {nome}</p> 
            <p><strong>idade : </strong>{idade}</p> 
            <p><strong>status :</strong> {status}</p> 
            <p><strong>profissão: </strong>o : {profissão}</p> 
            <p><strong>salario : </strong>{salario}</p> 
            <p><strong>localidade :</strong> {localidade}</p> 
            
        </div>
    )
}

export default Dados