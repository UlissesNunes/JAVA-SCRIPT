
function TiguanVW() {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2 style={{ color: '#000' }}>INCLUINDO MAIS OUTRO</h2>
        <input 
          type="text" 
          id="text" 
          placeholder="Digite algo..." 
          style={{
            flex : 'auto' ,
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginRight: '10px',
            width: '200px',
          }}
        />
        <button 
          style={{
            flex : 'auto' ,
            padding: '10px 15px',
            backgroundColor: '#000',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '13px',
          }}
          onClick={() => alert('Enviado!')}
        >
          Enviar
        </button>
      </div> 
    )
  }
  
  export default TiguanVW;