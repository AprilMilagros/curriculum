// Función para calcular la potencia de un número de forma recursiva
function potenciaRecurcion(base, potencia) {
  if (potencia === 0) {
    return 1;
  } else {
    return base * potenciaRecurcion(base, potencia - 1);
  }
}

// Función para calcular la potencia de un número utilizando un bucle "for"
function potenciaFor(base, potencia) {
  let resultado = 1;
  for (let i = 0; i < potencia; i++) {
    resultado *= base;
  }
  return resultado;
}

// Función para mostrar el menú y procesar las opciones
function mostrarMenu() {
  var option = prompt(
    "Selecciona una opción:\n" +
    "1. Calcular potencia con FOR\n" +
    "2. Calcular potencia con Recursión"
  );

  switch (option) {
    case "1":
      var base = prompt("Introduce la base");
      var potencia = prompt("Introduce la potencia");
      var res = potenciaFor(Number(base), Number(potencia));
      alert("El resultado de la potencia es: " + res);
      mostrarMenu();
      break;
    case "2":
      var base = prompt("Introduce la base");
      var potencia = prompt("Introduce la potencia");
      var res = potenciaRecurcion(Number(base), Number(potencia));
      alert("El resultado de la potencia es: " + res);
      mostrarMenu();
      break;
    default:
      alert("Opción inválida");
      mostrarMenu();
      break;
  }
}

// Llamamos a la función mostrarMenu para comenzar el programa
mostrarMenu();