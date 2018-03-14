/*Variable using Var Statement.
the sintax:

    var varname = value;
*/

var primerNombre = 'Juan';      //A variable name using camelcase.
var primer_nombre = 'Juan';     //A variable name using underscore.
var PrimerNombre = 'Juan';      //A variable name using Pascal Case.

/*Variable using let and cons Statement.

Using Let you cant re-declare the same Variable
you should use let if you're going to change the variable value on the run. Using Let you can declare a variable without initialize it. 
*/

//Let example

//Let sintax: let varname = value;
let name;
name = "Pepe";
console.log(name);

/*Use of const

As the name say, const come from constant, when you're using const, you must initialize the variable on the declare statement and you should use const when you have a final value.
*/

//Const example

//const sintax: const varname = value; remember to intialize the var using const.

const name2 = "Alexa";
console.log(name2);