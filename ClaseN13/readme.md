// Ej como se escribe reasinando valores a las variables, tengo que tener declaro el valor

var num = 17;
numero +=10; // 27
numero -=10; // 7
numero *=10; // 170
numero /=10; // 1.7
numero %=10; // 7
numero **=10; // 2015993900449 elevar a la potencia

// valida solo valor
var resultado = '10' == 10; // Igualdad simple
var distinto = 20 != '20'; // Desigualdad simple

// valida valor y tipo de dato
var resultado = 10 === 10; // Igualdad estricta
var distinto = 20 !== 'Hola' // Igualdad estricta

var numero = 10
numero++; // primero lee la variable (10) y luego la incrementa en (11)
++numero; // primero incrementa la variable (11) y luego la lee (11)
 lo mismo para resta -

/// 
//let entrada = prompt ('Ingresa tu nombre: ');

//alert(entrada);  // ventana de alerta de mi 

variable
let a= '23'; //es un string 
ac = 'abc';
const al= 'tercer';
console.log(ac);
console.log(al);
let b= '50';
//console.log(entrada);

let cadenas= 'Hola Mundo';  // String de texto 
let palabras = 'Estudiamos los metodos'; //22 letras con length
let numero=23;     //numerico Num
let booleano =true;  
let nulo =null;
let indefinido = undefined; // no definido
let symbol = Symbol();  
let objeto = {
    propiedad: 'valor 5',
    propie:'valor 3'
}

alert(cadenas);
console.log(numero);
console.log(booleano);
console.log(nulo);
console.log(indefinido);
console.log(symbol);
console.log(objeto);

console.log( cadenas.toUpperCase());
console.log(cadenas.toLowerCase());
console.log(palabras.length + ' contar mis caracteres');
console.log(palabras.repeat(3));
console.log(cadenas.replace(cadenas,palabras));
document.write(cadenas.toUpperCase());


parseInt(a);
console.log(a);

parseFloat(b); //se queda el numero  1  + 2 + 3 
console.log(b);

let suma= a + b;
console.log(suma);

let lolo= 5;    //el dato es de tipo numerico 
let num= '20';  //dato de tipo string 
let num2= '8'; //valor string  -- a el numero con ParseInt 
let blu = false  || true ; 
var numer = 23;

var resultado = num + num2;
console.log(parseInt(num) + parseInt(num2));  //va a cambiar su variable
var resultado= num - num2;
console.log(resultado);
var resultado= num / num2;
console.log(resultado);
var resultado= num * num2;
console.log(resultado);
var resultado= num % num2;
console.log(resultado);

console.log(numer +=10); 
console.log(numer-= 1);
console.log(numer);
numer **=10;
console.log(numer);
numer *=2;
console.log(numer);
numer /=2;
console.log(numer);
numer %=2;
console.log(numer);


// if
const edad = 18;
if(edad >=18){
    console.log('Es mayor de edad');
}else if{
    console.log('Es menos de edad');
}

//if else   - 

const edades = 18;
if(edad <18){
    console.log('Es menor de edad');
}else if (edades >=18 && edades <=21){
    console.log('Tiene entre 18 y 21 años');
}else {
    console.log('Tiene mas de 21 años');
}

//switch 




//Funciones :Cuando queremos utilizar nuestras funciones debemos invocarlas a través de su nombre seguidas de un par de paréntesis.

function saludar(){
    console.log('Hola Mundo!')
}

saludar();  // 

//Return
 Nuestras funciones se pueden resolver de 2 maneras diferentes. 
La primera es ejecutar una serie de instrucciones que no presenten un resultado específico, como podría ser eliminar una etiqueta de nuestro HTML.
La segunda y más común es devolver o retornar el resultado de lo que suceda dentro de la función, como por ejemplo la suma de 2 valores, con el fin de utilizarlo para algo más.
Para ello utilizamos la palabra reservada return, que elevará lo que devuelva la función para poder ser capturado desde un scope superior.

Por ejemplo: 
    function sumar(){
    let resultado = 33 + 15;
    return resultado;
}
//Guarda el valor 48 de la variable suma

let suma =sumar();
console.log(suma + 1)  //49


//ciclos  for 
for (let i=0; i< 10; i++){
 console.log('El valor de i es: ${i}' );
}
//Ciclos al reves
for (let i=9; i >=1; i--){
    console.log('iteracion ${i}')
}
console.log('Fin del ciclo');


//Ciclos Anidados    * Son menos eficientes 
//Si sabes la candidad de veces que se repita el ciclo
for(let i=1; i<=4; i++){
    console.log('Empieza iteracion ${i}');
    for(let j=0; j<4; j++){
    console.log(j);
    }
    
}
console.log('Fin del ciclo');

//While  - Cuando no sabes cuando se cumpla la condicion
En este caso, el ciclo depende de una condición que pueda ser o no numérica. Una vez cumplida la condición el ciclo dejará de funcionar o puede que nunca comience si la condición se encuentra cumplida antes de ser evaluada por la estructura.

Por Ejemplo:
    
let x = 1;
while (x <= 4){
    console.log('iteracion ${x}');  
    x++;  //importante indrementar el contador, sino van a tener un ciclo infinito
}
console.log('Fin del ciclo');
    

///Do While 
Es similar a la estructura WHILE, solo que en este caso el ciclo se ejecutará al menos una vez aunque la condición no se cumpla.
//"Has mientras la condicion se continua"
Por ejemplo:

let y= 1;
do{ //El codigo se ejecuta al menos 1 veces
    console.log('Iteracion ${y}')
    y++;   //importante incrementar, sino queda un bucle infinito }  while(y <= 4);