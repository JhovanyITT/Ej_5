// 5.	Suma de elementos de un arreglo: Crea un 
// arreglo de números y calcula la suma de todos sus elementos.

const arregloNumeros = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
var sumaNumeros = 0;

for(var i = 0; i < arregloNumeros.length; i++) {
    sumaNumeros += arregloNumeros[i];
}

console.log("La suma de los números es: " + sumaNumeros);