//Letra Auto

const maquina3 = document.getElementById('maquina-escribir3')

const maquinaEscribir3 = (text = '', tiempo = 200, tiempoBorrado = 50, etiqueta = '') => {
  let arrayCaracteres = text.split('');
  etiqueta.innerHTML = '';
  let i = 0;
  let escribir;

  function escribirTexto() {
    etiqueta.innerHTML += arrayCaracteres[i];
    i++;

    if (i === arrayCaracteres.length) {
      clearInterval(escribir);

      setTimeout(() => {
        borrar = setInterval(borrarTexto, tiempoBorrado);
      }, 500);
    }
  }

  function borrarTexto() {
    etiqueta.innerHTML = text.substring(0, i);

    if (i === 0) {
      clearInterval(borrar);
      i = 0;

      setTimeout(() => {
        escribir = setInterval(escribirTexto, tiempo);
      }, 500);
    } else {
      i--;
    }
  }

  escribir = setInterval(escribirTexto, tiempo);
};

maquinaEscribir3("Luis M. Santos Rivera", 100, 50, maquina3);