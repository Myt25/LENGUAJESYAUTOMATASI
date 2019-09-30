let re1 = new RegExp("abc");//primera forma regular
let re2 = /[0-9]/;//segunda forma regular

result = re1.test("abc");
console.log(result);
result = re2.test("aniversario en 1985");
console.log(result);

let re3 = /\d+[-|/]\d+[-|/]\d+/;
console.log(re3.test("13-7-1999"));
console.log(re3.test("18/06/1999"));

let re4 = /\d\d[-|/]\d\d[-|/]\d\d\d\d/;
let re5 = /(\d{1,2})[-|/](\d{1,2})[-|/](\d{4})/;

let re6 = /[aeiou]/;// lo interpreta como individuales, si no tuviera los corchetes lo contaria como una cadena completa 
console.log(re6.test("start"));

//var trabalenguas = "Si el caracol tuviera cara como tiene el caracol, fuera cara, fuera col,fuera caracol con cara";
//console.log(/caracol/.exec(trabalenguas));

//remplazo todas las vocales en la palabra correcaminos
let mensaje = "correcaminos";
let newMensaje = mensaje.replace(/[^aeiou]$/g,"*"); // ^ <-- este simbolo indica negacion, de lo que estamos pidiendo, se haga lo contrario
console.log(newMensaje); // $ <-- al final de la cadena, en este caso si al final es vocal, no muestra el asterisco, de caso contrario no hay vocal
						//nos muestra el asterisco

let mensaje2 = "el 20 de enero de 2019 se dio inicio a la 3 semana nacional";
let newMensaje2 = mensaje2.replace(/[a-z]{5,}/g,"*"); // {} <-- es longitud y se cambia a 0
console.log(newMensaje2);
// g <-- remplazo
