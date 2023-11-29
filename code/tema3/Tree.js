// Definición de la clase Nodo
class Nodo {
  constructor(valor) {
  this.valor = valor
  this.izquierda = null
  this.derecha = null
  }
  }
  
  // Definición de la clase Árbol
  class Arbol {
  constructor() {
  this.raiz = null
  }
  
  // Función para agregar un dato al árbol
  agregarDato(valor) {
    const nodo = new Nodo(valor)
  
    if (this.raiz === null) {
      this.raiz = nodo
      alert("Nodo agregado como raíz del árbol.")
    } else {
      this.agregarNodo(this.raiz, nodo)
    }
  }
  
  //Función para agregar un nodo (Izquierda <-- raiza --> Derecha) al árbol
  agregarNodo(nodoPadre, nodoNuevo) {
    if (nodoNuevo.valor < nodoPadre.valor) {
      if (nodoPadre.izquierda === null) {
        nodoPadre.izquierda = nodoNuevo;
        alert("Nodo agregado a la izquierda.")
      } else {
        this.agregarNodo(nodoPadre.izquierda, nodoNuevo)
      }
    } else {
      if (nodoPadre.derecha === null) {
        nodoPadre.derecha = nodoNuevo;
        alert("Nodo agregado a la derecha.")
      } else {
        this.agregarNodo(nodoPadre.derecha, nodoNuevo)
      }
    }
  }
  
  // Función para buscar un dato en el árbol
  buscarDato(valor) {
    const encontrado = this.buscarNodo(this.raiz, valor)
    if (encontrado) {
      alert("Nodo encontrado en el árbol.");
    } else {
      alert("Nodo no encontrado en el árbol.");
    }
  }
  
  //Función para busacar nodo en el árbol
  buscarNodo(nodo, valor) {
    if (nodo === null) {
      return false
    }
  
    if (valor === nodo.valor) {
      return true;
    } else if (valor < nodo.valor) {
      return this.buscarNodo(nodo.izquierda, valor)
    } else {
      return this.buscarNodo(nodo.derecha, valor)
    }
  }
  
  // Función para eliminar un dato y nodo del árbol
  eliminarDatoNodo(valor) {
    if (this.raiz === null) {
      alert("El árbol está vacío.")
      return;
    }
  
    let encontrado = false
    let nodoPadre = null
    let nodoActual = this.raiz
  
    while (nodoActual !== null) {
      if (valor === nodoActual.valor) {
        encontrado = true
        break;
      } else if (valor < nodoActual.valor) {
        nodoPadre = nodoActual
        nodoActual = nodoActual.izquierda
      } else {
        nodoPadre = nodoActual
        nodoActual = nodoActual.derecha
      }
    }
  
    if (!encontrado) {
      alert("Nodo no encontrado en el árbol.")
      return
    }
  
    if (nodoActual.izquierda === null && nodoActual.derecha === null) {
      if (nodoPadre === null) {
        this.raiz = null
      } else if (nodoActual === nodoPadre.izquierda) {
        nodoPadre.izquierda = null
      } else {
        nodoPadre.derecha = null
      }
      alert("Nodo eliminado del árbol.")
    } else if (nodoActual.izquierda === null) {
      if (nodoPadre === null) {
        this.raiz = nodoActual.derecha;
      } else if (nodoActual === nodoPadre.izquierda) {
        nodoPadre.izquierda = nodoActual.derecha;
      } else {
        nodoPadre.derecha = nodoActual.derecha;
      }
      alert("Nodo eliminado del árbol.");
    } else if (nodoActual.derecha === null) {
      if (nodoPadre === null) {
        this.raiz = nodoActual.izquierda;
      } else if (nodoActual === nodoPadre.izquierda) {
        nodoPadre.izquierda = nodoActual.izquierda;
      } else {
        nodoPadre.derecha = nodoActual.izquierda;
      }
      alert("Nodo eliminado del árbol.");
    }    else {
      const nodoReemplazo = this.encontrarNodoReemplazo(nodoActual);
      if (nodoPadre === null) {
        this.raiz = nodoReemplazo;
      } else if (nodoActual === nodoPadre.izquierda) {
        nodoPadre.izquierda = nodoReemplazo;
      } else {
        nodoPadre.derecha = nodoReemplazo;
      }
      nodoReemplazo.izquierda = nodoActual.izquierda;
      alert("Nodo eliminado del árbol.");
    }
  }
  
  encontrarNodoReemplazo(nodo) {
    let nodoPadreReemplazo = nodo;
    let nodoReemplazo = nodo;
    let nodoActual = nodo.derecha;
  
    while (nodoActual !== null) {
      nodoPadreReemplazo = nodoReemplazo;
      nodoReemplazo = nodoActual;
      nodoActual = nodoActual.izquierda;
    }
  
    if (nodoReemplazo !== nodo.derecha) {
      nodoPadreReemplazo.izquierda = nodoReemplazo.derecha;
      nodoReemplazo.derecha = nodo.derecha;
    }
  
    return nodoReemplazo;
  }
  
   // Función para mostrar el árbol
   mostrarArbolPreOrden() {
    if (this.raiz === null) {
      alert("El árbol está vacío.");
      return;
    }
  
    this.mostrarNodoPreOrden(this.raiz, "", "");
  }
  
  // Función para mostrar el árbol PreOrden
  mostrarNodoPreOrden(nodo, prefijo, descripcion) {
    if (nodo === null) {
      return;
    }
  
    alert(prefijo + descripcion + nodo.valor);
  
    const prefijoIzquierdo = prefijo + "├─ (I) "
    const prefijoDerecho = prefijo + "└─ (D) "
  
    this.mostrarNodoPreOrden(nodo.izquierda, prefijoIzquierdo, "Nodo izquierdo: ");
    this.mostrarNodoPreOrden(nodo.derecha, prefijoDerecho, "Nodo derecho: ");
  }
  
  // Función para mostrar el árbol posOrden
  mostrarArbolPosOrden() {
    if (this.raiz === null) {
      alert("El Arbol esta vacio.");
      return;
    }
    this.mostrarNodoPosOrden(this.raiz, "", "");
  }
  
  mostrarNodoPosOrden(nodo, prefijo, descripcion) {
    if (nodo === null) {
      return;
    }
  
    const prefijoIzquierdo = prefijo + "├─ (I)";
    const prefijoDerecho = prefijo + "└─ (D)";
  
    this.mostrarNodoPosOrden(nodo.izquierda, prefijoIzquierdo, "Nodo izquierdo: ");
    this.mostrarNodoPosOrden(nodo.derecha, prefijoDerecho, "Nodo derecho: ");
  
    alert(prefijo + descripcion + nodo.valor);
  }
  
  // Función para mostrar el árbol inOrden
  mostrarArbolInOrden() {
    if (this.raiz === null) {
      alert("El Arbol esta vacio.");
      return;
    }
    this.mostrarNodoInOrden(this.raiz, "", "");
  }
  
  mostrarNodoInOrden(nodo, prefijo, descripcion) {
    if (nodo === null) {
      return;
    }
  
    const prefijoIzquierdo = prefijo + "├─ (I)";
    const prefijoDerecho = prefijo + "└─ (D)";
  
    this.mostrarNodoInOrden(nodo.izquierda, prefijoIzquierdo, "Nodo izquierdo: ");
    alert(prefijo + descripcion + nodo.valor);
    this.mostrarNodoInOrden(nodo.derecha, prefijoDerecho, "Nodo derecho: ");
  }
  }
  // Crear un objeto Árbol
  const arbol = new Arbol();
  
  // Función para mostrar el menú
  function mostrarMenu() {
  const opcion = prompt(
    `Seleccione una opción:       
  1. Agregar nodo       
  2. Buscar nodo       
  3. Eliminar nodo       
  4. Mostrar árbol PreOrden       
  5. Mostrar árbol InOrden       
  6. Mostrar árbol PosOrden       
  7. Salir       
  Ingrese el número de la opción seleccionada:`
  );
  
  switch (opcion) {
    case "1":
      const valorAgregar = prompt("Ingrese el valor del nodo a agregar:");
      arbol.agregarDato(parseInt(valorAgregar));
      mostrarMenu();
      break;
    case "2":
      const valorBuscar = prompt("Ingrese el valor del nodo a buscar:");
      arbol.buscarDato(parseInt(valorBuscar));
      mostrarMenu();
      break;
    case "3":
      const valorEliminar = prompt("Ingrese el valor del nodo a eliminar:");
      arbol.eliminarDatoNodo(parseInt(valorEliminar));
      mostrarMenu();
      break;
    case "4":
      arbol.mostrarArbolPreOrden();
      mostrarMenu();
      break;
    case "5":
      arbol.mostrarArbolInOrden();
      mostrarMenu();
      break;
    case "6":
      arbol.mostrarArbolPosOrden();
      mostrarMenu();
      break;
    case "7":
      alert("¡Hasta luego!");
      break;
    default:
      alert("Opción inválida. Por favor, seleccione una opción válida.");
      mostrarMenu();
      break;
  }
  }
  
  // Iniciar el programa mostrando el menú
  mostrarMenu();