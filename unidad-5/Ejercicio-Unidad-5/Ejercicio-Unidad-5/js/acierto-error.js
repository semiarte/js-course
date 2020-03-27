function acierto(lasTarjetas) {
  lasTarjetas.forEach(function (elemento) {
    elemento.classList.add('acertada');
  });

  var aciertos = document.querySelector("#contador-aciertos");
  contAciertos++;
  aciertos.innerHTML = contAciertos;
  // EJERCICIO: añade la clase acertada a cada una de las tarjetas
  // que recibimos como argumento desde la función comparar()
}

function error(lasTarjetas) {
  lasTarjetas.forEach(function (elemento) {
    elemento.classList.add('error');
  });

  setTimeout(function () {
    lasTarjetas.forEach(function (elemento) {
      elemento.classList.remove('descubierta');
      elemento.classList.remove('error');
    });
  }, 1000);

  var errores = document.querySelector("#contador-errores");
  contErrores++;
  errores.innerHTML = contErrores;
  // EJERCICIO: añade la clase error a cada una de las tarjetas
  // que recibimos como argumento desde la función comparar()
  // EJERCICIO: quita las clases de descubierta y error, dentro de
  // un Timeout de 1000 ms
}

//BONUS: crea una variable global que haga un recuento de aciertos
// y errores o de los movimientos realizados. Cada vez que haya un
// cambio, se puede hacer un console.log() del contador