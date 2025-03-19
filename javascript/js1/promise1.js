

// Promises são objetos que representam a eventual conclusão ou falha de uma operação assíncrona.
// Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona.
// Uma Promise é um objeto retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função.
//a promise tem 3 estados: pendente, resolvida e rejeitada

const usuario = (uber) => uber;

const uber = usuario( false );

const promise = new Promise((accept, reject) => {
  if (uber === true) {
    return accept('Seu uber foi aceito, portanto já está a caminho');
  } else {
    reject('Seu uber foi recusado, estamos procurando outro motorista mais proximo');
  }
});

promise
  .then((message) => console.log(message))
  .catch((message) => console.log(message))
  .finally(() => console.log('Fique atento ao seu aplicativo'));

  

