var historia = "\
Los paréntesis son llamados paréntesis no capturadores, \
y permiten definir subexpresiones para manipular con los operadores \
 de las expresiones regulares.Para mayor información, mira Usando \
  paréntesis mas abajo en este artículo. ";

/*
var cadena = /[a-z]({5,})/g;
var result = historia.match(cadena);
console.log(result);
*/


var expresion = /[A-Z][^aeiou][a-z]+/g;
result = historia.match(expresion);
console.log(result);


/*
expresion regular para encontrar palabras en una cadena
con delimitador de palabras \b
*/
var expresion2 = /[a-zA-Z]+[aeiou]\b/gm;
result2 = historia.match(expresion2);
console.log(result2);