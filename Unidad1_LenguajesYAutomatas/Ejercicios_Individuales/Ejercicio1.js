/*

NOH NOH MARCO ANTONIO
5"B"
*/

//1.- todas las palabras que tengan una longitud de 7 o mas letras
console.log("Ejercicio 1");
let texto = /([A-Za-z]{7,})/;
console.log(texto.test("personalizacion de herramientas para el uso cotidiano"));

//2.- expresiones que no finalicen con una vocal
console.log("Ejercicio 2");
let sinvocal = /[^aeiou]$/;
console.log(sinvocal.test("los libros son la puerta a la imaginacion"));

//3.- las palabras que inicien con "M"
//donde la segunda letra no sea vocal
console.log("Ejercicio 3");
let inicio = /(M|m)[^aeiou+](\w{0,})/;
console.log(inicio.test("ksdhjvbds mgkelnujto"));

//4.- Expresiones encerradas entre comillas
console.log("Ejercicio 4");
let comillas = /['"']/; 
console.log(comillas.test("esto es un ejemplo de: uso de 'comillas'"));

//5.- Ip´s
console.log("Ejercicio 5");
let entradaIP = /([0-9](\d{1,3})[.](\d{1,3})[.](\d{1})[.](\d{1,}))/;
console.log(entradaIP.test("La direccion ip es 193.168.1.3"));


//6.- Horas
console.log("Ejercicio 6");
let entradaHora = /([0-9](\d{1,2})[:](\d{1,2})(pm|am))/;
console.log(entradaHora.test("La hora del dia es: 12:56pm"));

//7.- Telefonos
console.log("Ejercicio 7");
let entradaTel = /([0-9]{10})/;
console.log(entradaTel.test("Mi numero es 9861275685"));
//8.- Correos electronicos
console.log("Ejercicio 8");
let entradaCorreo = /(\W{0,}|\w{0,})(@)(gmail|outlook|hotmail)(.com|.es|.mx)/;
console.log(entradaCorreo.test("Mi correo es: m4rc0_20dcjh@outlook.mx"));

//9.- Url´s
console.log("Ejercicio 9");
let entradaURL = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
console.log(entradaURL.test("http://blog.algunlugar.com/libros/donquijote.html"));
//10.- Codigo postal

console.log("Ejercicio 10");
let entradaCP = /(\s{1})(\d{5,5})(\s{1})/; // /s da un espacio antres de los digitos
console.log(entradaCP.test("El codigo postal que mas se usa es el 977565 "));






