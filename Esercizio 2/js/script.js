// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

/*
    CREARE UN ARRAY
    CHIEDERE ALL'UTENTE UN NUMERO
    CHIEDI NUMERI FINO A QUANDO LA SOMMA DEI NUMERI INSERITI NON è UGUALE O MAGGIORE DI 50
*/


const numberList = [];

let sum = 0;

while (sum < 50) {
    const numberInput = parseInt(prompt("Inserisci un numero"));
    if (isNaN(numberInput) == true) {
        console.log("inserisci un numero!")
    } else {
        numberList.push(numberInput);
        console.log(numberList);
        sum += numberInput;
    }

}

console.log("la somma dei numeri inseriti nell'array è: " + sum);
console.log("il numero dei numeri inseriti nell'array è: " + numberList.length);