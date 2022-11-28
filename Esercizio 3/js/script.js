// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.


/*
    CREA DUE ARRAY CON NUMERI DIVERSI DI ELEMENTI
    AGGIUNGI ALL'ARRAY CHE HA MENO ELEMENTI TANTI ELEMENTI FINO A CHE NON ARRIVA ALLA STESSA LUNGHZZA DELL'ALTRO

*/

const numberList1 = [1, 2, 3, 4, 5, 6, 7, 8];
const numberList2 = [1, 2, 3, 4];




while (numberList1.length != numberList2.length) {
    if (numberList1.length > numberList2.length) {
        numberList2.push(Math.floor(Math.random() * 10));
    } else {
        numberList1.push(Math.floor(Math.random() * 10));
    }
}
console.log(numberList1);
console.log(numberList2);