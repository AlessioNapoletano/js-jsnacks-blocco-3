// Prendere due array della stessa lunghezza e generarne un terzo, prendendo alternativamente gli elementi da uno e dall'altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const arrayListNumber = [1,2,3,4];
const arrayListChar = ["a", "b" , "c" , "d"];

const arrayList = [];

for(let i = 0; i<arrayListNumber.length; i++){
    arrayList.push(arrayListNumber[i]);
    arrayList.push(arrayListChar[i]);
}

console.log(arrayList);