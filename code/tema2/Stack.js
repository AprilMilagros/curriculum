// Define la clase Stack
class Stack {
  constructor() {
    this.data = [];
  }

  // Agrega un elemento a la parte superior de la pila
  push(_data) {
    this.data.push(_data);
  }

  // Busca el elemento superior de la pila sin quitarlo.
  peek() {
    if (this.isEmpty()) {
      return "La pila está vacía";
    }
    return this.data[this.data.length - 1];
  }

  // Retira y devuelve el elemento superior de la pila
  pop() {
    if (this.isEmpty()) {
      return "La pila está vacía";
    }
    return this.data.pop();
  }

  // Comprueba si la pila está vacía
  isEmpty() {
    return this.data.length === 0;
  }

  // Devuelve el número de elementos en la pila.
  size() {
    return this.data.length;
  }

  // Elimina todos los elementos de la pila.
  clear() {
    this.data = [];
  }

  // Muestra los elementos de la pila.
  print() {
    if (this.isEmpty()) {
      return "La pila está vacía";
    } else {
      let elements = this.data.slice().reverse();
      return "Elementos de la pila:\n" + elements.join("\n");
    }
  }
}

// Define el menú
function menu() {
  const pila = new Stack(); // Se crea una nueva instancia de la clase Stack para representar la pila

  while (true) {
    // Se inicia un bucle while que se ejecutará continuamente
    const opcion = prompt(
      // Se solicita al usuario que seleccione una opción mediante un cuadro de diálogo
      "Selecciona una opción:\n" +
        "1. Insertar elemento en la cima de la pila\n" +
        "2. Buscar elemento de la cima de la pila\n" +
        "3. Eliminar elemento de la cima de la pila\n" +
        "4. Comprobar si la pila está vacía\n" +
        "5. Mostrar el número de elementos de la pila\n" +
        "6. Eliminar todos los elementos de la pila\n" +
        "7. Mostrar elementos de la pila\n" +
        "8. Salir"
    );

    switch (opcion) {
      case "1":
        const data = prompt("Ingresa el dato a registrar en la pila:");
        pila.push(data);
        break;
      case "2":
        const resultPeek = pila.peek();
        alert("Resultado de la búsqueda: " + resultPeek);
        break;
      case "3":
        const resultPop = pila.pop();
        alert("Resultado de la eliminación: " + resultPop);
        break;
      case "4":
        const resultEmpty = pila.isEmpty();
        alert("Resultado del estado de la pila: " + resultEmpty);
        break;
      case "5":
        const resultSize = pila.size();
        alert("Resultado del tamaño de la pila: " + resultSize);
        break;
      case "6":
        pila.clear();
        alert("Los datos se han borrado");
        break;
      case "7":
        const resultPrint = pila.print();
        alert(resultPrint);
        break;
      case "8":
        return;
      default:
        alert("Opción inválida. Intenta nuevamente.");
        break;
    }
  }
}

// Ejecuta el menú
menu();