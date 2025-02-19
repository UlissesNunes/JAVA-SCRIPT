function buscarUsuario() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ id: 1, nome: 'João' });
      }, 2000);
    });
  }
  
  function buscarPedidos(userId) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(['Pedido 1', 'Pedido 28878787', 'Pedido 3']);
      }, 2000);
    });
  }
  
  // Uso com .then()
  buscarUsuario()
    .then(usuario => {
      console.log('Usuário:', usuario);
      return buscarPedidos(usuario.id);
    })
    .then(pedidos => {
      console.log('Pedidos:', pedidos);
    })
    .catch(erro => {
      console.error('Erro:', erro);
    });
  
  console.log('Carregando...'); // Este log aparece antes dos resultados porque o código é assíncrono.
  