// console.log (10)

//FUNCTIONS
//function, identificador, (parámetros) <-- firma de la función
//Definition
function foo () {
console.log('foo')
}

//Call (invoke) a function:
// Invoke: name, (arguments)
foo();

//function with paremeters and arguments
function sum(a,b){
    let c =a*b;
    console.log (a)
    console.log ((a+b)*c);
}

sum(10,3);
sum(-1,4);
sum(6,3);

// receiving data or values from a function

function mult(a,b){
    console.log(a*b); //hacemos la operación y se guarda en consola
    let c =a*b; // asignamos una variable donde está la operaciǿn
    return c; //devolvemos fuera de la función el valor de C como resultado de la operación y se usa fuera
}

let result = mult(3,8);
console.log (result);
mult(5,5);

//function that counts the amount of characters on a string
function charCount(str){
    return str.length;
}
console.log(charCount('Josemiguel'))


//function to return first and last character of a string

function FirstLastChar (str){
    return str[0] + str[str.length-1]
    return str.charAt(0) + str.charAt(str.length-1)
}

console.log (FirstLastChar('Josemiguel'));
console.log (FirstLastChar('Hola'));
console.log (FirstLastChar('Diego'));

function odd(){
return arguments;
}
console.log(odd('A','B','C','D'))

/*
R: Read
E; Evaluate
P: Print
L: Loop
*/
//console.log(42)
//