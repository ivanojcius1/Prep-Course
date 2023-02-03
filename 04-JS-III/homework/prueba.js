
let array = []
for (i = 0; i < 201; i++) {
    array[i] = i;
    console.log(array[i]);
}
console.log(array);

function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
    let nuevoArray = [];
    var j = 0;
    for (let i = 0; i < 300; i++) {
        if (array[i] > 100) {
            nuevoArray[j] = array[i];
            j = j + 1;
            console.log(i, j);
        }
    }
    return nuevoArray;
}
let arreglo1 = [];
arreglo1 = mayorACien(array);
console.log(arreglo1);