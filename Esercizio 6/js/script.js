/**
 *
 * Crea una funzione che dato un array, calcoli la somma dei suoi elementi.
 *
 */

const list = [1, 2, 3, 4, 20, "ciao" , 5 , 6, 10 , "dispari"]

function getSumOfArrayElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] / array[i] == 1){
            sum = sum + array[i];
        }
    }
    return sum;
}


console.log(getSumOfArrayElements(list));