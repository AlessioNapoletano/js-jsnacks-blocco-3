/**
 * Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.
 */

function getRandomNumber(numMax, numMin){
    if(numMax < numMin){
        return "Devi inserire prima il numero maggiore";
    }
    const randomNumber = (Math.floor(Math.random() * (numMax - numMin + 1) + numMin));

    return randomNumber;
}
const maxNumberInput = parseInt(prompt("inserisci il numero maggiore dell'intervallo"));
const minNumberInput = parseInt(prompt("inserisci il numero minore dell'intervallo"));
const randomNumber = getRandomNumber(maxNumberInput,minNumberInput);
console.log(randomNumber);