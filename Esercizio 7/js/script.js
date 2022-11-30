/**
 * Crea due tag div con due id diversi.
 * Un div avrà il testo colorato di rosso mentre l'altro di verde.
 * Partendo da un array di numeri,
 * creiamo un nuovo elemento p e lo stampiamo nell'div rosso  se è un numero dispari
 * e nel div verde se è un numero pari.
 *
 *
 */

const array = [1, 33, 55, 64, 33, 22, 10, 44];

newPElement(array);

function newPElement(array){
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0){
            const divElement = document.getElementById("odd");
            const newPElement = document.createElement("p");
            divElement.classList = "d-flex";
            newPElement.classList.add("font-green", "padding");
            newPElement.innerHTML = array[i];
            divElement.append(newPElement);
        } else {
            const divElement = document.getElementById("even");
            const newPElement = document.createElement("p");
            divElement.classList = "d-flex";
            newPElement.classList.add("font-red", "padding");
            newPElement.innerHTML = array[i];
            divElement.append(newPElement);
        }
    }
}

