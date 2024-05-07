let persona1 = prompt("escribe un número")
console.log(persona1)
let persona2 = prompt("escribe un número")
console.log(persona2)
let persona3 = prompt("escribe un número")
console.log(persona3)


 const numeros = [persona1, persona2, persona3];
   numeros.sort(function(a, b){
    return b - a;
})
    console.log("El orden de mayor a menor es: " + numeros)

    const numeros2 = [persona1, persona2, persona3];
   numeros.sort(function(a, b){
    return a - b;
})
    console.log("El orden de menor a mayor es: " + numeros)


if (persona1 === persona2 && persona1 === persona3){
    console.log("los números son iguales.");
}