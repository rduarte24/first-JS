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

//Lets use Template literals

const producto1 ='Pizza',
      precio1=30,
      producto2 = 'Hamburguesa',
      precio2 = 40;

//This is the old way to use many things in a inner html

/*
let html;
html='<ul>'+
     '<li>Orden: '+ producto1 + '</li>'+
     '<li> Producto: '+ precio1 + '</li>'+
     '<li>Orden: '+ producto2 + '</li>'+
     '<li> Producto: '+ precio2 + '</li>'+
     '</ul>';

*/
//Until here


//From here is the Template literals method
let html;

html = `
        <ul>
            <li>Orden: ${producto1} </li>
            <li>Precio: ${precio1}</li>
            <li>Orden: ${producto2} </li>
            <li>Precio: ${precio2}</li>
        </ul>
        `;
//until here is the Template Literals method

//This sentence search an element in the main html document and wirtes html code inside.
document.getElementById('app').innerHTML=html;

//This is how to def an Array

//This a number array
const numeros = [10,20,30,40,50,60];

//This is a string array
const meses=['Enero','Febrero','Marzo'];

//This is a mixed array
const mezclado=['Una cadena',10,true];

//another way to declare an array
let arreglo= new Array('Item1', 'Item2','Item3');

//This is how to check if an object is an array
console.log(Array.isArray(arreglo));

//This is how to add an element to an array in the last place

arreglo.push('Otra cosa');

console.log(arreglo);

//This is how to add an element to an array in the first place

arreglo.unshift('de primeras');
console.log(arreglo);

//This is how to delete the last element

arreglo.pop();
console.log(arreglo);

//This is how to delete the first element

arreglo.shift();
console.log(arreglo);

//This is how to remove a range of elements in an array, this method uses two parameters, the first one is the start index and the second one is the length of the range.

arreglo.splice(1,1);
console.log(arreglo);

//This is how to join two arrays

let arreglo2=[1,2,3,4,5];
console.log(arreglo.concat(arreglo2));



