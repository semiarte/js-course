function actualizaContador() {
  var movimientosTexto;
  movimientos++;
  movimientosTexto = movimientos;

  if (movimientos > niveles[nivelActual].movimientosMax) {
    gameOver();
    return;
  }

  if (movimientos < niveles[nivelActual].movimientosMax) {
    puntuacion = niveles[nivelActual].movimientosMax - movimientos;
    selector.innerHTML = puntuacion;
  }

  if (movimientos < 10) {
    movimientosTexto = "0" + movimientos;
  }
  document.querySelector("#mov").innerText = movimientosTexto;

}

function maxContador() {
  var movimientosMaxTexto = niveles[nivelActual].movimientosMax;
  if (movimientosMaxTexto < 10) {
    movimientosMaxTexto = "0" + movimientosMaxTexto;
  }
  document.querySelector("#mov-total").innerText = movimientosMaxTexto;
}