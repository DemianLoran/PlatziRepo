// Caso1
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
  }
// es6
function newFunction2(name = 'oscar', age = 32, country = "MX") {
    console.log(name, age, country);
};
console.log('newFunction\n-----------');  
newFunction();
console.log('newFunction2\n-----------'); 
newFunction2();
newFunction2('Ricardo', '23', 'CO');
  
// Caso2
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// Caso3
let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
+ "otra frase epica que necesitamos."  
// es6
let lorem2 = `Esta es otra frase epica que necesitamos 
ahora es otra frase epica`;  
console.log(lorem);
console.log(lorem2);

// Caso4
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}
console.log(person.name, person.age);
// es6  
let { name, age, country } = person;
console.log(age, country);

// Caso5
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];
// es6
let education = ['David', ...team1, ...team2];
console.log(education);  

// Caso6
{
    var globalVar = "Global Var";
}
  
{
    let globalLet = 'Global Let';
// solo es accesible desde el bloque donde está declarada    
    console.log(globalLet);
}
console.log(globalVar);

// Caso7
const a = 'b';
// desclarado como const no me permite modificarle el valor 
//y da errorS
a = 'a';
console.log(a);

// Caso8
let name8 = 'Demian';
let age = 36;

obj = { name: name8, age: age};
console.log(obj);
// es6 se puede pasar la variable declarada directamente al objeto
obj2 = { name8, age };
console.log(obj2);

// Caso9
const names = [
    { name: 'Demian', age: 36 },
    { name: 'Melody', age: 36 }
]

let listOfNames = names.map(function (item) {
    console.log(item.name, item.age);
})
console.log('\nEn es6:');
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age) => {
    
    console.log('\nOtro ejemplo');
    console.log(name, age);
}
listOfNames3('Joaco', 12);

const listOfNames4 = name => {
    //...
}

const square = num => num * num;
console.log(square(3));

// Caso10
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey');
        } else {
            reject('Ups!!');
        }
    });
}
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));

// caso11
    class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
    mult(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA * this.valueB;
    }
}

const calc = new calculator();
// Con estas lineas podría pedir que ingresen el valor por 
// pantalla, sino debería hacerse desde HTML
//let numA = prompt("Ingrese el valor a sumar: ", "");
//console.log(numA);
console.log('A + B: ' + calc.sum(2,2));
console.log('A x B: ' + calc.mult(4,2));

// caso11
import {hello} from "./module";
hello();

// caso12
function* helloWorld() {
    if (true) {
        yield 'Hello ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log( generatorHello.next().value ); 
console.log( generatorHello.next().value );