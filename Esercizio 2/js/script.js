
/*
<input type="text" id="number">
    <button>inserisci</button>
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