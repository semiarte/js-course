function recogeDatos(evento) {
  evento.preventDefault();

  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var fechaActual = new Date();
  var year = fechaActual.getFullYear();
  var edad = year - fecha;
  var bienvenida = document.querySelector("#bienvenida");
  var saludo;
  var mensajeEdad;

  if (nombre == "" || fecha == "") {
    alert("Por favor, completa los dos campos");
    return false;
  } else if (edad > 33) {
    mensajeEdad = "viejuno";
  } else if (edad < 33) {
    mensajeEdad = "jovenzuelo";
  } else {
    mensajeEdad = "la edad de Cristo";
  }

  var saludo =
    "<p>Hola" +
    " " +
    nombre +
    " " +
    "tienes " +
    edad +
    " " +
    "años de edad," +
    " " +
    "<strong>" +
    mensajeEdad +
    "</strong></p>";

  bienvenida.innerHTML = saludo;

  // EJERCICIO: declara las variables necesarias (puedes necesitar
  // más de una) para componer el mensaje de bienvenida

  // EJERCICIO: crea un condicional que dé un mensaje u otro en
  // función de la edad

  // BONUS: si quieres, puedes comprobar si alguno de los campos
  // está vacío y modificar el mensaje de bienvenida para pedir
  // Que se rellene

  // EJERCICIO: Realiza la composición del mensaje final y cárgalo
  // en la variable que hayas preparado

  // EJERCICIO: Añade el mensaje final como contenido HTML del
  // nodo que hemos cargado en la variable bienvenida
}

var miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);
