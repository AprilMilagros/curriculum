var lenguajes = ['Python', 'java', 'c#','JavaScrip']


function imprimeForbasico(_lenguajes){
    let salida= ''
    for( i=0; i<_lenguajes.length; i++){
        salida += _lenguajes[i] + '\n'
    }
    alert(salida)
}

function imprimeFor(_lenguajes){
    let salida= ''
    for( i=0; i<_lenguajes.length; i++){
        salida += _lenguajes[i] + ' se encuentra en el indice ' + i + '\n'
    }
    alert(salida)
 }

function imprimeForechbasico(_lenguajes){
    let salida=''
    lenguajes.forEach(element => 
        salida += element + '\n'
    )
    alert(salida)
}

function imprimeForech(_lenguajes){
    let salida=''
    lenguajes.forEach(function (valor, indice){
        salida += valor + ' se encuentra en el indice ' + indice + '\n'
        })

    alert(salida)
}
function imprimeTamaño(_lenguajes){
  let salida ='El tamaño del arreglo es: ' + _lenguajes.length;
  alert(salida);
}

function imprimeElemento(){
    let posicion= prompt('Ingresa la posicion que quieres imprimir')
    let salida=''
      if( posicion < lenguajes.length){ //o posicion es menor a 0
        salida = "El elemento en la posición " + posicion + " es: " + lenguajes[posicion] 
      } else{
        salida = "El elemento en la posición que ingresaste no existe, el arreglo tiene " + lenguajes.length + " elementos"
      }
     alert(salida)
  }

  function ingreseElemento(){
    salida = ''
    let elemento = prompt("Ingrese un nuevo lenguaje de programación: ")
    lenguajes.push(elemento)
    salida = 'El lenguaje de programación' + elemento + ' a sido agregado al arreglo!'

    alert(salida)
  }

  function eliminaElemeto(){
    let salida = ''
    let elemennto = prompt("Cual es el lenguaje de porgramacion que deseas eliminar")
    if ( indice !== -1){
      lenguajes.splice(indice,1)
      salida= 'Lenguaje eliminado'
    }else sakida = 'El lenguaje no se ha encontrado'
    alert(salida)
  }

function mostrarMenu(){
    let opcion = prompt('Seleccione una opción:' + 
                       '\n1. Imprimir lenguajes con "for" básico.'+
                       '\n2. Imprimir lenguajes con "for" y su índice.' + 
                       '\n3. Imprimir lenguajes con "forEach" básico.'+
                       '\n4. Imprimir lenguajes con "forEach" y su índice.' + 
                       '\n5. Imprimir tamaño del arreglo' +
                       '\n6. Recuperar del elemento del arreglo '+
                       '\nIngrese el número de la opción:');
  switch (opcion) {
    case '1':
      imprimeForbasico(lenguajes);
      break;
    case '2':
      imprimeFor(lenguajes);
      break;
    case '3':
      imprimeForechbasico(lenguajes);
      break;
    case '4':
      imprimeForech(lenguajes);
      break;
    case '5':
      imprimeTamaño(lenguajes);
      break;
    case '6':
      imprimeElemento(lenguajes);
      break;
    default:
      alert('Opción inválida. Seleccione otra opción.');
      break;
  }
}

mostrarMenu()