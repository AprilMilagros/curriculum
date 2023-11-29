class Grafo {
  constructor() {
    this.vertices = new Set() // Conjunto de vértices del grafo
    this.aristas = {} // Diccionario de aristas del grafo
  }

  agregarVertice(vertice) {
    this.vertices.add(vertice) // Agrega un vértice al conjunto de vértices
    this.aristas[vertice] = {} // Inicializa el diccionario de aristas para el vértice
  }

  agregarArista(origen, destino, peso) {
    this.aristas[origen][destino] = peso // Agrega una arista entre el vértice de origen y el vértice de destino con el peso especificado
    this.aristas[destino][origen] = peso // Agrega una arista entre el vértice de destino y el vértice de origen con el mismo peso
  }

  dijkstra(origen) {
    const distancias = {} // Diccionario que almacena las distancias más cortas desde el origen a cada vértice
    const visitados = new Set() // Conjunto que almacena los vértices visitados
    const previos = {} // Diccionario que almacena los vértices previos en la ruta más corta desde el origen a cada vértice

    for (const vertice of this.vertices) {
      distancias[vertice] = Infinity // Inicializa todas las distancias como infinito
    }
    distancias[origen] = 0 // La distancia desde el origen hasta sí mismo es 0

    while (visitados.size < this.vertices.size) { // Mientras no se hayan visitado todos los vértices
      let verticeActual = null // Almacena el vértice no visitado con la distancia mínima
      let distanciaMinima = Infinity // Almacena la distancia mínima encontrada

      // Encuentra el vértice no visitado con la distancia mínima
      for (const vertice in distancias) {
        if (!visitados.has(vertice) && distancias[vertice] < distanciaMinima) {
          verticeActual = vertice;
          distanciaMinima = distancias[vertice];
        }
      }

      if (verticeActual === null) {
        break; // No se encontró un vértice no visitado con distancia mínima, se detiene el bucle
      }

      visitados.add(verticeActual); // Marca el vértice actual como visitado

      // Actualiza las distancias de los vértices adyacentes al vértice actual
      for (const vecino in this.aristas[verticeActual]) {
        const peso = this.aristas[verticeActual][vecino];
        const distancia = distancias[verticeActual] + peso;

        if (distancia < distancias[vecino]) {
          distancias[vecino] = distancia; // Actualiza la distancia si se encuentra una ruta más corta
          previos[vecino] = verticeActual; // Actualiza el vértice previo en la ruta más corta
        }
      }
    }

    return { distancias, previos }; // Devuelve los diccionarios de distancias y previos
  }

  obtenerRutaMasCorta(origen, destino) {
    const { distancias, previos } = this.dijkstra(origen); // Aplica el algoritmo de Dijkstra para encontrar la ruta más corta desde el origen

    if (distancias[destino] === Infinity) {
      return null; // No se encontró una ruta desde el origen hasta el destino
    }

    const ruta = [destino]; // Almacena la ruta más corta desde el origen hasta el destino
    let vertice = destino;

    while (vertice !== origen) {
      vertice = previos[vertice]; // Obtiene el vértice previo en la ruta más corta
      ruta.unshift(vertice); // Agrega el vértice a la ruta
    }

    return { distancia: distancias[destino], ruta }; // Devuelve la distancia más corta y la ruta
  }
}

// Función para mostrar el menú y realizar las operaciones
function mostrarMenu() {
  const opcion = prompt(
    `Seleccione una opción:
    1. Agregar nodo
    2. Agregar arista
    3. Encontrar la ruta mas corta
    4. Salir
    Ingrese el número de la opción seleccionada:`
  )
  switch (opcion) {
    case '1':
      let vertice = prompt('Ingrese el nombre del vértice:')
      grafo.agregarVertice(vertice); // Llama al método agregarVertice del grafo para agregar el vértice ingresado
      alert(`El vértice ${vertice} se agregó correctamente.`) // Muestra una alerta con un mensaje de éxito
      mostrarMenu(); // Llama a la función mostrarMenu para mostrar el menú nuevamente
      break;
    case '2':
      let origen = prompt('Ingrese el vértice de origen:')
      let destino = prompt('Ingrese el vértice de destino:'); // Solicita al usuario ingresar el vértice de destino
      let peso = parseInt(prompt('Ingrese el peso de la arista:')); // Solicita al usuario ingresar el peso de la arista
      grafo.agregarArista(origen, destino, peso); // Llama al método agregarArista del grafo para agregar la arista con los vértices y peso ingresados
      alert(`La arista entre ${origen} y ${destino} se agregó correctamente.`); // Muestra una alerta con un mensaje de éxito
      mostrarMenu(); // Llama a la función mostrarMenu para mostrar el menú nuevamente
      break;
    case '3':
      let origenRuta = prompt('Ingrese el vértice de origen:')
      let destinoRuta = prompt('Ingrese el vértice de destino:'); // Solicita al usuario ingresar el vértice de destino
      let rutaMasCorta = grafo.obtenerRutaMasCorta(origenRuta, destinoRuta); // Llama al método obtenerRutaMasCorta del grafo para encontrar la ruta más corta entre los vértices ingresados
      if (rutaMasCorta) {
        alert(`La distancia más corta entre ${origenRuta} y ${destinoRuta} es ${rutaMasCorta.distancia}.\nRuta: ${rutaMasCorta.ruta.join(' -> ')}`); // Muestra una alerta con la distancia más corta y la ruta encontrada
      } else {
        alert('No se encontró una ruta entre los vértices especificados.'); // Muestra una alerta indicando que no se encontró una ruta
      }
      mostrarMenu(); // Llama a la función mostrarMenu para mostrar el menú nuevamente
      break;
    case '4':
      alert('Saliendo del programa...'); // Muestra una alerta indicando que el programa está saliendo
      break;
    default:
      alert('Opción inválida. Intente nuevamente.'); // Muestra una alerta indicando que la opción ingresada es inválida
      mostrarMenu(); // Llama a la función mostrarMenu para mostrar el menú nuevamente
      break;
  }
}

// Crear instancia del grafo
const grafo = new Grafo();

// Mostrar el menú
mostrarMenu(); // Llama a la función mostrarMenu para comenzar a mostrar el menú y permitir que el usuario interactúe con el grafo