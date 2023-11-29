// Define la clase Queue
class Queue {
  constructor() {
    this.data = [];
  }

  // Agrega un elemento al final de la cola
  enqueue(_data) {
    this.data.push(_data);
  }

  // Devuelve el elemento frontal de la cola sin eliminarlo.
  front() {
    if (this.isEmpty()) {
      return "La cola esta vacia";
    }
    return this.data[0];
  }

  // Elimina y devuelve el elemento frontal de la cola.
  dequeue() {
    if (this.isEmpty()) {
      return "La cola esta vacia";
    }
    return this.data.shift();
  }

  
  // Comprobar si la cola está vacía.
  isEmpty() {
    return this.data.length === 0;
  }

  // Devuelve el número de elementos en la cola.
  size() {
    return this.data.length;
  }

  // Elimina todos los elementos de la cola.
  clear() {
    this.data = [];
  }

  // Muestra los elementos de la pila.
  print() {
    let items = ""
    items += this.data.join('\n -> \n') 
    items += " null"
    alert(items)
  }
}

// Define el menú
function menu() {
  const cola = new Queue();

  while (true) {
    const opcion = prompt(
      "Selecciona una opción:\n" +
      "1. Insertar elemento al final de la cola\n" +
      "2. Buscar elemento frontal de la cola\n" +
      "3. Eliminar elemento frontal de la cola\n" +
      "4. Comprobar si la cola está vacía\n" +
      "5. Mostrar el número de elementos de la cola\n" +
      "6. Eliminar todos los elementos de la cola\n" +
      "7. Mostrar elementos de la cola\n" +
      "8. Salir"
    );

    switch (opcion) {
      case "1":
        const dat = prompt("Ingresa el dato a registrar en la cola:");
        cola.enqueue(dat);
        break;
      case "2":
        const resultPeek = cola.front();
        alert("Resultado de la búsqueda: " + resultPeek);
        break;
      case "3":
        const resultPop = cola.dequeue();
        alert("Resultado de la eliminación: " + resultPop);
        break;
      case "4":
        const resultEmpty = cola.isEmpty();
        alert("Resultado del estado de la cola: " + resultEmpty);
        break;
      case "5":
        const resultSize = cola.size();
        alert("Resultado del tamaño de la cola: " + resultSize);
        break;
      case "6":
        cola.clear();
        alert("Los datos se han borrado");
        break;
      case "7":
        cola.print();
        break;
      case "8":
        window.close()
        return; // Salir del menú
      default:
        alert("Opción inválida. Intenta nuevamente.");
        break;
    }
  }
}

// Ejecuta el menú
menu();