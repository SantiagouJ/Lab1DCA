// Load the full build.
import _ from "lodash";
//Desafios faciles
//1
const numeros = [1, 2, 3, 4, 5];

_.reverse(numeros)

console.log(`Desafio 1 `, numeros)

//2
const valores = [0, "Hola", false, 42, "", null, "Mundo", undefined, NaN, true];

const valoresFalsey = _.compact(valores)

console.log(`Desafio 2`, valoresFalsey)

//3
const array1 = [1, 2, 3]; const array2 = [3, 4, 5];

const uniondeArrays = _.union(array1, array2)

console.log(`Desafio 3`, uniondeArrays)

//Desafios medianos
//4
console.log("--------------------")
const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];

const repetidos = _.countBy(palabras)

console.log("Desafio 4",repetidos)

//5
const arr1 = [1, 2, 3, 4, 5];  const arr2 = [3, 4, 5, 6, 7];

const dif = _.difference(arr1,arr2)

console.log("Desafio 5",dif)

//6
const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 22 },
    { nombre: "Juan", edad: 30 }
    ];

const ordenar = _.orderBy(personas,["edad", "nombre"],["asc", "desc"])

console.log("Desafio 6",ordenar)

//7
const numerosRepetidos = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

const sinRepetir = _.uniq(numerosRepetidos)

console.log("Desafio 7",sinRepetir)

//8
const n = 3; const elementos = ["a", "b", "c", "d", "e", "f", "g", "h"];

const dividirArreglo = _.chunk(elementos, n)

console.log("Desafio 8",dividirArreglo)

//9
const persona = { nombre: "Carlos", apellido: "Pérez", edad: 28 };

const mayusN = _.toUpper(persona.nombre)
persona.nombre=mayusN

const mayusA = _.toUpper(persona.apellido)
persona.apellido=mayusA


console.log("Desafio 9",persona)

//Desafios dificiles
//10
console.log("--------------------")
const anidado = [1, [2, [3, [4, 5]]], 6];

const plano = _.flatMapDeep(anidado)

console.log("Desafio 10", plano)

//11
const lista1 = [1, 2, 3, 4, 5];const lista2 = [3, 4, 5, 6, 7];const lista3 = [5, 6, 7, 8, 9];

const comunes = _.intersection(lista1, lista2,lista3)

console.log("Desafio 11", comunes)

//12
const clave = "curso";
const estudiantes = [
  { nombre: "Mario", curso: "Matemáticas" },
  { nombre: "Lucía", curso: "Historia" },
  { nombre: "Juan", curso: "Matemáticas" },
  { nombre: "Elena", curso: "Historia" }
];

const agrupar = _.groupBy(estudiantes, clave)

console.log("Desafio 12",agrupar)