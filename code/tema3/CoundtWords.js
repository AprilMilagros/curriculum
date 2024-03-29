/**
Función para solicitar al usuario que ingrese un texto
* @param  mapaPalabras - El mapa de palabras donde se almacenará la frecuencia de cada palabra.
* @param  texto - El texto ingresado por el usuario.
*/
function agregarTexto(mapaPalabras) {
  const texto = prompt('Ingresa un texto:')
  alert('Texto agregado correctamente.')

  return texto
}

/**
Función para recibir el mapa de palabras y el texto ingresado y procesarlo.
* @param  mapaPalabras - El mapa de palabras donde se almacenará la frecuencia de cada palabra.
* @param  texto - El texto ingresado por el usuario.
* @returns - Regresa el texto ingresado por el usuario.
*/
function procesarTexto(mapaPalabras, texto) {
  if (texto === '') {
    alert('No has ingresado ningún texto. Por favor, agrega un texto antes de procesar.')
    return
  }

  const palabras = texto.toLowerCase().split(' ')

  palabras.forEach(palabra => {
    /**
    * Eliminar puntos y comas de la palabra
    * @param  palabra - La palabra a la que se le eliminarán los puntos y comas.
    * @returns - Regresa las palabra sin puntos y comas.
    */
    const palabraSinPuntuacion = palabra.replace(/[.,]/g, '')
    
    if (mapaPalabras.has(palabraSinPuntuacion)) {
      mapaPalabras.set(palabraSinPuntuacion, mapaPalabras.get(palabraSinPuntuacion) + 1)
    } else {
      mapaPalabras.set(palabraSinPuntuacion, 1)
    } 
  })

  let resultado = 'Palabras y su frecuencia:\n'
  mapaPalabras.forEach((frecuencia, palabra) => {
    resultado += `${palabra}: ${frecuencia}\n`
  });

  alert(resultado)
}

// Función para mostrar el menú y procesar las opciones
function mostrarMenu() {
  const mapaPalabras = new Map()
  let texto = ''

  while (true) {
    const opcion = prompt(`Menu:
      1. Agregar texto
      2. Procesar texto
      3. Salir`)

    switch (opcion) {
      case '1':
        texto = agregarTexto(mapaPalabras)
        break
      case '2':
        procesarTexto(mapaPalabras, texto)
        break
      case '3':
        alert('Saliendo del programa...')
        window.close()
        return
      default:
        alert('Opción inválida. Por favor, elige una opción válida.')
        break
    }
  }
}

mostrarMenu()