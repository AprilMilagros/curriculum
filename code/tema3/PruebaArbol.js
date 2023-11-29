// Definición de la clase Nodo
class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.izquierda = null;
      this.derecha = null;
    }
  }
  
  // Definición de la clase Árbol
  class Arbol {
    constructor() {
      this.raiz = null;
    }
  
    // Función para agregar un dato al árbol
    agregarDato(valor) {
      const nodo = new Nodo(valor);
  
      if (this.raiz === null) {
        this.raiz = nodo;
        console.log("Nodo agregado como raíz del árbol.");
      } else {
        this.agregarNodo(this.raiz, nodo);
      }
    }
  
    //Función para agregar un nodo (Izquierda <-- raiza --> Derecha) al árbol
    agregarNodo(nodoPadre, nodoNuevo) {
      if (nodoNuevo.valor < nodoPadre.valor) {
        if (nodoPadre.izquierda === null) {
          nodoPadre.izquierda = nodoNuevo;
          console.log("Nodo agregado a la izquierda.");
        } else {
          this.agregarNodo(nodoPadre.izquierda, nodoNuevo);
        }
      } else {
        if (nodoPadre.derecha === null) {
          nodoPadre.derecha = nodoNuevo;
          console.log("Nodo agregado a la derecha.");
        } else {
          this.agregarNodo(nodoPadre.derecha, nodoNuevo);
        }
      }
    }
  
    // Función para buscar un dato en el árbol
    buscarDato(valor) {
      const encontrado = this.buscarNodo(this.raiz, valor);
      if (encontrado) {
        console.log("Nodo encontrado en el árbol.");
      } else {
        console.log("Nodo no encontrado en el árbol.");
      }
    }
  
    //Función para buscar nodo en el árbol
    buscarNodo(nodo, valor) {
      if (nodo === null) {
        return false;
      }
  
      if (valor === nodo.valor) {
        return true;
      } else if (valor < nodo.valor) {
        return this.buscarNodo(nodo.izquierda, valor);
      } else {
        return this.buscarNodo(nodo.derecha, valor);
      }
    }
  
    // Función para eliminar un dato y nodo del árbol
    eliminarDatoNodo(valor) {
      if (this.raiz === null) {
        console.log("El árbol está vacío.");
        return;
      }
  
      let encontrado = false;
      let nodoPadre = null;
      let nodoActual = this.raiz;
  
      while (nodoActual !== null) {
        if (valor === nodoActual.valor) {
          encontrado = true;
          break;
        } else if (valor < nodoActual.valor) {
          nodoPadre = nodoActual;
          nodoActual = nodoActual.izquierda;
        } else {
          nodoPadre = nodoActual;
          nodoActual = nodoActual.derecha;
        }
      }
  
      if (!encontrado) {
        console.log("Nodo no encontrado en el árbol.");
        return;
      }
  
      if (nodoActual.izquierda === null && nodoActual.derecha === null) {
        if (nodoPadre === null) {
          this.raiz = null;
        } else if (nodoActual === nodoPadre.izquierda) {
          nodoPadre.izquierda = null;
        } else {
          nodoPadre.derecha = null;
        }
        console.log("Nodo eliminado del árbol.");
      } else if (nodoActual.izquierda === null) {
        if (nodoPadre === null) {
          this.raiz = nodoActual.derecha;
        } else if (nodoActual === nodoPadre.izquierda) {
          nodoPadre.izquierda = nodoActual.derecha;
        } else {
          nodoPadre.derecha = nodoActual.derecha;
        }
        console.log("Nodo eliminado del árbol.");
      } else if (nodoActual.derecha === null) {
        if (nodoPadre === null) {
          this.raiz = nodoActual.izquierda;
        } else if (nodoActual === nodoPadre.izquierda) {
          nodoPadre.izquierda = nodoActual.izquierda;
        } else {
          nodoPadre.derecha = nodoActual.izquierda;
             console.log("Nodo eliminado del árbol.");
      } else {
        const sucesor = this.encontrarSucesor(nodoActual);
        if (nodoPadre === null) {
          this.raiz = sucesor;
        } else if (nodoActual === nodoPadre.izquierda) {
          nodoPadre.izquierda = sucesor;
        } else {
          nodoPadre.derecha = sucesor;
        }
        sucesor.izquierda = nodoActual.izquierda;
        console.log("Nodo eliminado del árbol.");
      }
    }
  
    // Función auxiliar para encontrar el sucesor de un nodo
    encontrarSucesor(nodo) {
      let sucesorPadre = nodo;
      let sucesor = nodo;
      let nodoActual = nodo.derecha;
  
      while (nodoActual !== null) {
        sucesorPadre = sucesor;
        sucesor = nodoActual;
        nodoActual = nodoActual.izquierda;
      }
  
      if (sucesor !== nodo.derecha) {
        sucesorPadre.izquierda = sucesor.derecha;
        sucesor.derecha = nodo.derecha;
      }
  
      return sucesor;
    }
  
    // Función para mostrar el árbol en orden
    mostrarArbolInOrden() {
      this.mostrarInOrden(this.raiz);
    }
  
    // Función auxiliar para mostrar el árbol en orden
    mostrarInOrden(nodo) {
      if (nodo !== null) {
        this.mostrarInOrden(nodo.izquierda);
        console.log(nodo.valor);
        this.mostrarInOrden(nodo.derecha);
      }
    }
  
    // Función para mostrar el árbol en postorden
    mostrarArbolPosOrden() {
      this.mostrarPosOrden(this.raiz);
    }
  
    // Función auxiliar para mostrar el árbol en postorden
    mostrarPosOrden(nodo) {
      if (nodo !== null) {
        this.mostrarPosOrden(nodo.izquierda);
        this.mostrarPosOrden(nodo.derecha);
        console.log(nodo.valor);
      }
    }
  
    // Función para eliminar el árbol
    eliminarArbol() {
      this.raiz = null;
      console.log("Árbol eliminado.");
    }
  }
  
  // Ejemplo de uso
  const arbol = new Arbol();
  arbol.agregarDato(50);
  arbol.agregarDato(30);
  arbol.agregarDato(20);
  arbol.agregarDato(40);
  arbol.agregarDato(70);
  arbol.agregarDato(60);
  arbol.agregarDato(80);
  
  console.log("Árbol en orden:");
  arbol.mostrarArbolInOrden();
  
  console.log("Árbol en postorden:");
  arbol.mostrarArbolPosOrden();
  
  arbol.eliminarArbol();