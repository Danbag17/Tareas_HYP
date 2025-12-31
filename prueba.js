/*

*/


let ordenador = null;

console.log(ordenador);//null
let direccion; // undefined
console.log(direccion);//undefined

const dni = 12345678;//const no puede cambiar su valor
dni = 87654321;//error



let a=12;
let b =5;
let suma = a + b;
console.log(suma);

let resta = a - b;
console.log(resta); 
let multiplicacion = a * b;
console.log(multiplicacion); 
let division = a / b;
console.log(division);



//metodos del array

let cajon = [8, "hola", true, 45.6];

cajon.push(false);//agrega un elemento al final
cajon.pop();//elimina el ultimo elemento
cajon.shift();//elimina el primer elemento
cajon.unshift("primero");//agrega un elemento al inicio
cajon.length;//tamaño del array

//objetos

let gente = {pepe:7 , juan:10, ana:5};

nombre = "pablo";
gente.nombre //undefined
gente[nombre] = 8;//agrega la propiedad pablo con valor 8


//valor vs referencia 

let e3=["juan ", "ana"];
let e4=e3;
e4.push("pepe");//agrega pepe a e4 y e3

e4.splice(1,1);//elimina ana de e4 y e3

//spread operator

let arr=["manzana", "banana"];
let arr2=[...arr, "cereza"];//crea una copia de arr y agrega cereza


//map

const cua =(n)=> n ** 2;
let x = [1,2,3,4];
let y = x.map(cua);//y=[1,4,9,16]   y es una nueva referencia


//filter

//es comoo el map hata la operacion a los elemenetos del array 

const esPar = (n) =>  n % 2 === 0;
let numeros = [1,2,3,4,5,6];
let pares = numeros.filter(esPar);//pares=[2,4,6]

let x2esPar= x.map(cua).filter(esPar);//x2.even=[4,16] 
//primero eleva al cuadrado y luego filtra los pares
let x2EsEven = x.map(n=> n ** 2).filter(n => n % 2 === 0);


//DOM 
//todos los elemeneot sde html son nodos con relaciones padre-hijo

document.getElementById("miId");//selecciona un elemento por su id
document.querySelector("#miClase");//selecciona el primer elemento con la clase miClase
//querySelectorAll devuelve todos los elementos que coinciden con el selector
//por etiqueta
document.querySelector("div");//selecciona el primer div

document.querySelectorAll("div");//selecciona todos los divs

//por clase
document.querySelector(".miClase");//selecciona el primer elemento con la clase miClase
document.querySelectorAll(".miClase");//selecciona todos los elementos con la clase miClase 
//por id
document.querySelector("#miId");//selecciona el elemento con id miId
document.querySelectorAll("#miId");//selecciona todos los elementos con id miId (solo uno por id)   



<h1 id="titulo">

<script>

let elemento = document.getElementById("titulo");
elemento.textContent = "Nuevo Titulo";//cambia el texto del h1

<script>
</h1>   



