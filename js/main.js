// Tipos de datos JS

// Tipos de datos primitivos

// String o cadena de caracteres
// Sintaxis usan comillas (simples o dobles)
// En JS se usan secuencias de escape dentro
// de las cadenas (\)

let ciudad = 'Villa de \nMadrid'; // salto de línea \n

console.log(ciudad);

// Para escapar las comillas (simples o dobles)

let calle = 'Avenida de O\'Donell';

console.log(calle);

// Tipos number (todos los tipos numericos)
// Sintaxis de número con . para los decimales

let resultado = 8.6;

// Tipos boolean (expresiones condicionales)
// Solo tienen dos posibles valores true y false

let esMayorEdad = false;

// Tipo-valor null
// null es asignado cuando queremos que una variable
// tenga un valor pero no sabemos cual es

let localidad = null;

// Tipo-valor undefined
// Es un valor asignado por el intérprete cuando la
// variable aún no tiene ningún valor asignado

let marca;
console.log(marca);

// Tipos de datos compuestos

// Arrays o arreglos colecciones de variables que
// tiene algo en común
// Sintaxis []

let categorias = ['hombre','mujer','niño','niña'];

// Objetos (representación de conjuntos de datos en
// en programa)
// Sintaxis { propiedad: valor }

let jugador = {
    nombre: 'Cristiano Ronaldo',
    apellidos: 'Do Santos Aveiro',
    edad: 34,
    equipos: ['Real Madrid','Juventus Turin','Manchester United'],
}

// Disponemos de un operador typeof que
// retorna el tipo de dato de una variable

let email = 'pedro@pedro.com';

console.log(typeof email);

// Recordamos que JavaScript es un lenguaje de tipado
// débil y flexible (no se declara el tipo de dato y
// puede cambiar durante el programa)

email = 12; // Aunque no sirve para nada no retorna error
