// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length ;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var attt = [];
  for (var I = 0; I < array.length; I++)
  { attt.push(array[I] + 1) }
  return attt;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array[array.length] = elemento;
  return array;

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
    

}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');
  
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
    for (var H = 0; H < array.length; H++){
    if (array[H] === elemento)
    { return true; }
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var acumulador = 0;
  for (var J = 0; J < numeros.length; J++){     
    acumulador = numeros[J] + acumulador;
  } return acumulador;

}  


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var prom = 0;
  for (F = 0; F < resultadosTest.length; F++){
    prom = prom + resultadosTest[F];    
  } return prom / resultadosTest.length;

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var tec = 0;
  for (R = 0; R < numeros.length; R++){
    if (numeros[R] > tec) {
      tec = numeros[R];
    }
  } return tec;
    
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
    if (arguments.length === 0) { return 0; }
    if (arguments.length === 1) { return 1; }
    var multiplica = 1;
    for (var M = 0; M < arguments.length; M++)
    { multiplica = multiplica * arguments[M] }
    return multiplica;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var G = 0;
  for (var F = 0; F < arreglo.length; F++)
  {
    if (arreglo[F] > 18)
    { G = G + 1; }
  }
  return G;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
    if (numeroDeDia > 1 && numeroDeDia < 7) {
      return "Es dia Laboral";
      
    } else {
      if (numeroDeDia === 1 || numeroDeDia === 7) {
        return "Es fin de semana";    
      }   
      
    } 
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var H = n.toString();
  if (H[0] === "9") {
    return true;    
  } else {
    return false;
  }
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (var Y = 0; Y < arreglo.length - 1; Y++)
  {
    if (arreglo[0] === arreglo[0 + 1]) { return true; }
  } return false;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var array1 = [];
  for (var A = 0; A < array.length; A++){
    if (array[A] === "Enero" || array[A] === "Marzo" || array[A] === "Noviembre")
    { array1.push(array[A]); }
    
  } if (array1.includes("Enero") && array1.includes("Marzo") && array1.includes("Noviembre")) {
    return array1;
  } else { return "No se encontraron los meses pedidos"; }
  
   

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
    var arraynuevo = [];
    for (var D = 0; D < array.length; D++)
    {if (array[D] > 100) { arraynuevo.push(array[D]);
      } 
  } return arraynuevo;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var P = numero;
  var cont = 1;
  for (var D = 0; D < 10; D++) {
    P = P + 2;
    cont = cont + 1;
    array.push(P);
    if (P === cont) { break; }
         
  } if (P !== cont) {  
    return array;    
  } else {
    return "Se interrumpió la ejecución";    
  }
     
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var Q = numero;

  for (var G = 0; G < 10; G++){
    if (G === 4) {
      continue;
      
    } else {
      Q = Q + 2;
      array.push(Q);
      
    }
  }
  return array;
  
    
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
