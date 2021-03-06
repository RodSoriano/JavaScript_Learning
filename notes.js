//  VARIABLES

// Declaring a variable
//we use let, const, var

let a;
console.log(a);

// Assign values we declare it first and then we give its value to it 

a = 3.14;
console.log(a);

//  Declaring a constant

const aa = 3.14; // The value of a cannot be modified
aa = 6.28;       // Impossible!

// Increment a number variable

let b = 0;      // b contains 0
b += 1;         // b contains 1
b++;            // b contains 2
console.log(b); // Shows 2

//  When we use const and let this variables will be blocked-scoped their visibility will be limited to the block they are declared in

let num1 = 0;
{
  num1 = 1; // OK : num1 is declared in the parent block
  const num2 = 0;
}
console.log(num1); // OK : num1 is declared in the current block
console.log(num2); // Error! num2 is not visible here


//  EXPRESSIONS 
// An expression is an algorithm that produces a value

// 3 is an expression whose value is 3
const c = 3;
// c is an expression whose value is the value of c (3 here)
let d = c;
// (d + 1) is an expression whose value is d's + 1 (4 here)
d = d + 1; // d now contains the value 4
console.log(d); // Show 4


// It is possible to include expressions in a string by using backticks (`) to delimit the string. 
// Such a string is called a template literal. Inside a template literal, expressions are identified by the ${expression} syntax.
// This is often used to create strings containing the values of some variables.

const country = "France";
console.log(`I live in ${country}`); // Show "I live in France"
const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`); // Show "3 + 7 = 10"

// Sometimes conversions dont go as espected due to stdin being a non numeric character it gives the error NaN (Not a number)

//  CONVERSION

//JS it means that the output will change because there was an operation intended without the programmer has to do anything like when we use the + operator into a string

const f = 100;
// Show "Variable f contains the value 100"
console.log("Variable f contains the value " + f);

//  CONDITIONS

//if its a condition that evaluates something as true,if false skips if block
const number0 = Number(prompt("Enter a number:"));
if (number0 > 0) {
  console.log(`${number0} is positive`);
}
else {
  console.log(`${number0} is negative or zero`);
}

//  SWITCH
//When a program should trigger a block from several operations depending on the value of an expression, 
//you can write it using the JavaScript statement switch to do the same thing.

switch (expression) {
  case value1:
    // Code to run when the expression matches value1
    break;
  case value2:
    // Code to run when the expression matches value2
    break;
  // ...
  default:
  // Code to run when neither case matches
}

//  COMPARISON OPERATORS

//its better to use === in js like !== instead of == and !=

// === | > | < | >= | <=


//  LOGICAL OPERATORS

// AND = &&         checks that both conditions are cumplidas to be true
//OR = ||           cheks that at least one of the conditions are meet to be true
//NOT = !           this is when we dont want something to be true
//logical nullish assignment ??= 
//                  In the below expression, y assigns to x only if x is null or undefined.


console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

console.log(!true);  // false
console.log(!false); // true

x ??= y;





// COMPLEXITY 

//Space complexity ys how much memory do we use?
//time complexity is how many operations are executed?










//  METHODS
//not sure if correct that all functions over here are methods but
// I will keep them here until I learn more and know exactly what they are


Number("string");         //this will convert the string into a number

const h = "5";
console.log(h + 1); // Concatenation: show the string "51"
const i = Number("5");
console.log(i + 1); // Numerical addition: show the number 6










Boolean(string);          //It can convert both Number and String into boolean and vice versa. 
                          //Lets run the below code to see how it works.

const string = 'string';
let boolstring=Boolean(string); // true
console.log(boolstring);

const number = 100;
let boolnumber=Boolean(number); // true
console.log(boolnumber);










prompt(text,defaultText);       //text una cadena que se muestra al usuario, OOP Window soli a user que ingrese soemthing, this will always return a string so it must be converted with number() if needed
                                //aqui intercambiamos info con el user asking them to enter a value that will be saved into the variable that has prompt in it

const name = prompt("Enter your first name:");
alert(`Hello, ${name}`);        //alert nos muestra una ventana emergente de alerta pop up


sentence.toLowerCase();         //converts string to lower case only
sentence.toUpperCase();
sentence.substr();

Math.floor();
Math.random();

Array.lenght    //count($var)
Array.join(',') //une el array y adentro va un delimitador entre cada elemento
Array.push({})  //lleva llaves si son varios valores con  esto pone al final
Array.unshift()//es para poner cosas adelante


Array.forEach(function(parametroDelArray)
    {
       console.log(parametroDelArray); 
    });
        //en el foreach se pasa una funcion con un parametro de lo que este en array




//DOM

var main = document;              //document nos sirve como primer objeto para acceder al dom
document.getElementById('id');    //nos permite obtener un elemento en contreto por medio de su 'id'

document.querySelectorAll('css selector') //aqui le pasamos un selector de css
selector.divThatContains.thingOfCss = "left" //aqui interactuamos con el por medio de js

boton.addEventListener('click', function(){}) //en la var ya tiene que estar almacenado parte del dom a interactuar interactua al clcik 
    //"keyup" es cuando levantas el dedo de una tecla
    //"change" es cuando estoy enfocado en un elemento y salgo de el eso es focus and blurred out



//event delegation
//event bubbling??

document.querySelector('.button-container').addEventListener('click', function(event)
    {
        if(event.target.tagName === 'button') //aqui pasamos verificacion de que no este haciendo clic en algo fuera de un boton sino seria tambien un evento y mostraria el mensaje sin tocar el boton necesariamente
            {
                alert(`you clicked on button ${event.target.innerText}`);
            }
    });

//aqui obtenemos un selector que es un contenedor de varios botones, al anhadir el listener pasamos la funcion
//al hacer clic con un parametro event (??dudas?? nos sirve como para ver que evento fue hecho?? y para acceder a el se hace event.target->algo que querramos de ahi)

//STATES?


//OOP AND OBJECTS

//anything that has an dot is an object

//create new objetc

function showFullName()
    {
        return "ryan ray";
    }


const USER1 = {
    name: "rod",
    last: "rec",
    age: 25,
    showName: showFullName,     //hace referencia a la funcion en la linea 3.
    //otra forma de definir metodo
    showName1: function showFullName()
        {
            return this.name + this.last;
        },
    //otra forma
    showName2()
        {
            return this.name + " " +  this.last;
        }
};

// console.log(user.showName());


// sabemos que un metodo es un metodo por que lleva parentesis
// a diferencia de una propiedad que solo se llama por su nombre despues del punto



//constructor

//objeto literal
//object literal

const USER2 = {
    name: "max",
    last: "ric",
    age: 25,
    showName1: function showFullName()
        {
            return this.name + this.last;
        },

};

//constructor

function Persona0() {
    this.name = "";
    this.last = "";
    this.age = 0;
    this.showName = function() {
        return `${this.name} ${this.last}`;
    }
}

//nuevoa instancia

const USER3 = new Persona0();

USER3.name = "Alex";
USER3.last = "rein";
USER3.age = 30;

// console.log(user3);
// console.log(user3.showName());

//////////////////////////////////////////////////////////////////////////////




const ACCOUNT = {
    number: "1234",
    amount: 100,

    deposit(quantity)
        {
            this.amount += quantity;
        },
    withdraw(quantity)
        {
            this.amount -= quantity;
        }
}

// account.deposit(125);
// account.withdraw(50);

// console.log(account);

// const persson = new Object();

//console.log(Object.keys(objeto))
//Object.values = nos muestra valores


function Persona00()
    {
        this.name = "";
        this.lastName = "";
    }

const persona = new Persona00();

function Person() {
    "use strict";
    this.name = "";
    this.lastName = "";
}

//con use strict nos aseguramos de que cada vez que se cree un nuevo objeto
//de este objeto se utilice el new para no generar errores
//es importante usar "new" porque sino el oibjeto asigna sus propiedades al objeto que lo contiene
//y eso nos puede generar problemas


//objeto window
//window.document.body -> nos deja acceder al body del documento DOM??


//prototype

//nos sirve para extender nuevas funcionalidades tipo
Person.prototype.greet = function (name)
    {
        return `Hello my name is ${name}`;
    }

//e=prototype nos permite crear ese nuevo metodo greet dentro del constructor y 
//estara disponible para todos los objetos person solo seria de llamarlo

/////////////////////////////////////////////////////////////////////////////////////////////////////

//OOP
// crear codigo que sea modular y reutilizable
//modularidad es la forma en la que podemos dividir en pequenas partes que se puede reutilizaer

//capacidad de modelar problemas a traves de objetos
//describe realty using objects and its relationship

//1. association, capabiluty to refer anbother
//2. aggregation, capability to refer one or more independent object
//3. conposition, capability to refer one or more dependent objects

//grant modularity and code reuse

//1. encapsulation, capability to concentrate into a single entity data with hidden internal detalis
//2. inheritance, mechanismn by which object acquires some or all feature of one or more objects
//3. polymorphism, capable to process different types of objects but still give a response in return
//4. abstraction, we dont need to know or give an object all its functions for it to work on determine circumnstances

//model through objects


//asociacion
class Persona1
    {
        constructor(name, lastname)
            {
                this.name = name;
                this.lastname = lastname;
            }
    }

const JOHN = new Persona1('John', 'Ray');
const MARIA = new Persona1('Maria', 'Perez');

MARIA.parent = JOHN; //relacion a traves de una propiedad
// ahi le agregamos a maria el atributo parent y este es igual a john

//agregacion
//una forma de asociacion en el que relaciona dos o mas objetos, existe un obj mayor
//es el que contiene los otros objetos son Aggregate, los que estan dentro son components

const COMPANY =
    {
        name: 'fazt-tech',
        employees: []
    }

//podemos anhadir objetos a otro objeto se hace con .push

COMPANY.employees.push(JOHN);
COMPANY.employees.push(MARIA);

//composition
//muchos obj pueden pertenecer a un obj mayor pero estos no pueden vivir sin el obj mayor
//aqui se puede ver como address no puede existir sin su contenedor

const PERSON =
    {
        name: 'ryan',
        last: 'ray',
        address: 
            {
                street: 'street',
                city: 'city',
                country: 'country'
            }
    }

//encapsulamiento
//por medio de metodos se accede a las propiedades

function Company(name)
    {
        let employees = [];
        this.name = name;

        this.getEmployees = function ()
            {
                return employees;
            }

        this.addEmployee = function(employee)
            {
                employees.push(employee);
            }
    }

const COMPANY1 = new Company('Coca');
const COMPANY2 = new Company('pepsi');

// COMPANY2.addEmployee({name: 'Rosa'}); // aqui alteramos una propiedad por medio de un metodo
//  console.log(COMPANY2.getEmployees());  //aqui vemos como acceder a una propiedad desde un metodo esto encapsula dicha propiedad a no ser accesible

 //herencias

 function Persson()
    {
        this.name = '';
        this.lastName = '';
    }

function Progammer()
    {
        this.lenguage = '';
    }

Progammer.prototype = new Persson();

console.log(Progammer);
console.log(Persson);

const PROGRAMMER = new Progammer();
PROGRAMMER.name = 'ryan';
PROGRAMMER.lastName = 'reynolds';

console.log(PROGRAMMER);

//tambien se puede hacer por medio de clases en el que se hereda se pone el extends from
//en el constructor va un metodo llamado super(parametros o variables)->esta ayuda a instanciar el constrtuctor del padre







//objects

//can use dot when its a string only
//we use brackets for string, numbers, variables, expressions
// object.freeze??







//FIFO first in first out
//LIFO lastin in first out

//PILAS son LIFO, estructura de datos
//push y pop son por lo general lo que usa stack
//push ingresar datos al final del array
//pop eliminar dato al final del array
//unshift para ingresar cosas al principio del array
//shift para eliminar cosas al inicio del array

let stack = [];

stack.push(1); //[1]
stack.push(2); // [1,2]

stack.pop(); // [1]

console.log(stack);




//COLAS FIFO

var queu = [];

queu.push(1); // [1]
queu.push(10); // [1,10]
queu.shift() // remueve el elemento 1 del arreglo [10]

console.log(queu); // [10]

//metodo tradicional

function queu()
    {
        let cola = [];

        this.prototype.enqueu = element => cola.push(element);

        this.prototype.dequeu = () => cola.shift();

        this.prototype.size = () => cola.length();
    }







//LISTAS
//un array, un listado de cosas

let arr = [];

arr.push(1);
arr.push(2);
arr.push(3);

console.log(arr); //[1,2,3]


//property name can be called also a key


//LISTAS ENLAZADAS
//nodos enlazados que contienen informacion

let array = [4,8,5,3,2];

//esto quiere decir que el 4 tiene referencia que el que le sigue
//es el 8, el ultimo elemento tiene referencia nula porque no existe

//necesitamos el primer dato o nodo y su referencia

function nodo(datos)
    {
        this.data = datos;
        this.next = null;
    }

//en la lista necesitamos dos cosas
//puntero
//
function list()
    {
        this.head = null;
        this._length = 0;
    }

list.prototype.add = function(datos)
    {
        let node    = new nodo(datos);
        let current  = this.head;

        //si esta vacia
        if(!current)
            {
                this.head = node;
                this._lenght++;

                return node;
            }

        //si nuestra lista NO esta vacia
        while(current.next) //mientras de true
            {
                current = current.next; //se para cuando next quede vacio
            }

        current.next = node;
        this._lenght++;

        return node;
    }

list.prototype.getAll = function()
    {
        current = this.head; // empezamos con la cabeza

        if(!current)
            {
                console.log("vacio");
                return;
            }

        while(current)
            {
                console.log(current.data);
                current.next;
            }

        return;
    }






//ARBOLES
// arboles binarios 
//estructuras de nodos
//cada nodo se va separando en si mismo de izquierda a derecha 
// y asi cada nodo se va separando y va bajando y sub dividiendose mas

//nodo raiz que es nodo superior
//nodo padre un nodo que tiene hijos
//nodo hijo que es descendiente de otro nodo
//nodos hermanos comparten el mismo padre
//hojas que son nodos sin hijos

//las lineas que recorren los nodos son caminos

//un nodo binario solo puede tener 2 hijos
//los arboles se recorren de derecha a izquierda

//los nodos padre tienen 10 siempre tiene dos ijos el izquierdo va a ser 5 el derecho 12
//uno es menor y el otro es mayor que el padre

function binarySearchTree(value)
    {
        this.value  = value;
        this.right  = null;
        this.left   = null;
    }

binarySearchTree.prototype.insert = function(value)
    {
        //compara si hay algun valor a la derecha
        //si hay valor hace recursion recorriendo
        //si no hay nada crea el nodo
        if(value > this.value)
            {
                if(this.right !== null)
                    {
                        this.right.insert(value);
                    }
                else
                    {
                        this.right = new binarySearchTree(value);
                    }
            }
    }
//its unfinished...

//ARRAYS

array[i].id; //we can acces a property of arr on its [i] position with the dot id because we are searching for id

//bracket notation, one way arround is something["name"] = "ryan";


//PROMISES'

const makeServerRequest = new Promise((resolve, reject) => {});

let input = Number(prompt('cuantos anos tienes?'));

const test = new Promise((resolve, reject) => {
        if(input > 18) {
                resolve('eres mayor de edad');
            }
        else {
                reject('no eres mayor de edad');
            }
    });

test.then(response => console.log(response))
.catch(error => console.log(error));




//REGEX

//test regex

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);










//  MATH

let math = Math.PI //-> this shows the pi number












//FUNCTIONA PROGRAMMING
//breaking code into verbs using functions 
//oop is about the nouns is about where we live in the physical world

//making core functions that dont have side effects, input, output
//its easier to test



// ES6 destructuring
// a way of defining variables and take them outside of an object or an array

let {first, second} = {first: 0, second: 1} //here we have the target or var declaration on the left
//                      and here we have the values


//swap variables easy without temp
var one = 1; var two = 2;
[two, one] = [one, two];
console.log(one,two);