/**
 * Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.
 */

function getRandomNumber(numMax, numMin){
    const randomNumber = (Math.floor(Math.random() * (numMax - numMin + 1) + numMin));

    return randomNumber;
}

const randomNumber = getRandomNumber(2,1);
console.log(randomNumber);