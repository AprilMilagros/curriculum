// Declaración de variables globales
var nombre, edad, curso;

// Definición de la clase Persona
class Persona {
  constructor(_nombre, _edad) {
    nombre = _nombre;
    edad = _edad;
  }

  // Método de la clase Persona que retorna un saludo con los valores de 'nombre' y 'edad'
  saludar() {
    return 'Hola, mi nombre es ' + nombre + ' y tengo ' + edad + ' años.';
  }
}

// Definición de la clase Estudiante que hereda de la clase Persona
class Estudiante extends Persona {
  constructor(_nombre, _edad, _curso) {
    super(_nombre, _edad);
    curso = _curso;
  }

  // Método de la clase Estudiante que retorna una frase indicando el nombre y el curso del estudiante
  estudiar() {
    return nombre + ' está estudiando el curso de ' + curso;
  }
}

// Función que muestra un menú interactivo
function mostrarMenu() {
  // Se solicita al usuario que ingrese una opción mediante un cuadro de diálogo
  var opcion = prompt(
    "Seleccione una opción:\n" +
      "1. Ingresar información del estuante.\n" +
      "2. Saludo de la persona.\n" +
      "3. Estudios de la persona.\n" +
      "4. Salir.\n" +
      "Ingrese el número de la opción:"
  );

  switch (opcion) {
    case "1":
      ingresarInformacion(); // Llama a la función para ingresar información del estudiante
      break;
    case "2":
      mostrarSaludo(); // Llama a la función para mostrar el saludo
      break;
    case "3":
      mostrarEstudios();  // Llama a la función para mostrar los estudios
      break;
    case "4":
        window.close(); // Cierra la ventana del navegador
        return;
    default:
      alert("Opción inválida. Seleccione otra opción.");
      mostrarMenu();
      break;
  }
}

// Variable local para almacenar la instancia de Estudiante
let estudiante;

// Función para ingresar información del estudiante
  function ingresarInformacion() {
    var nombre = prompt("Ingrese el nombre de la persona:");
    var edad = parseInt(prompt("Ingrese la edad de la persona en años:"));
    var curso = prompt("Ingrese la asignatura que esta cursando la persona:");
  
    estudiante = new Estudiante(nombre, edad,curso);
    alert("Información del estudiante almacenada exitosamente.");
  
    mostrarMenu();
  }

  // Función para mostrar el saludo de la persona
  function mostrarSaludo() {
    if (estudiante) {
      var informacion = estudiante.saludar();
      alert(informacion);
      mostrarMenu();
    } else {
      alert("No se ha ingresado información de una persona. Por favor, seleccione la opción 1 para ingresar información.");
      mostrarMenu();
    }
  }

  // Función para mostrar los estudios de la persona
  function mostrarEstudios() {
    if (estudiante) {
      var informacion = estudiante.estudiar();
      alert(informacion);
      mostrarMenu();
    } else {
      alert("No se ha ingresado información de una persona. Por favor, seleccione la opción 1 para ingresar información.");
      mostrarMenu();
    }
  }

  // Ejecuta el menú
  mostrarMenu();
  
  