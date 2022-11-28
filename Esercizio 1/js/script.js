// Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando l'utente non inserisce il valore corretto



let number = 0;

do {
    const numberInput = parseInt(prompt("inserisci un numero da 1 a 10"));
    number = numberInput;
} while (number < 1 || number > 10);