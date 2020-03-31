function finalizar() {
  if (nivelActual < niveles.length - 1) {
    document.querySelector("#subeNivel").classList.add("visible");
  } else {
    document.querySelector("#endGame").classList.add("visible");
    puntuacionFinal = niveles[2].movimientosMax - movimientos;
    lastScore.innerHTML = puntuacionFinal;
  }
}
