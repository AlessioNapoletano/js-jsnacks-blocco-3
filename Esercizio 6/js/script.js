
const list = [1, 2, 3, 4, 20, "ciao", 5, 6, 10, "dispari" , "ciao3"];

function getSumOfArrayElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const castedElement = parseInt(array[i], 10);

        if (!Number.isNaN(castedElement)) {
            sum = sum + castedElement;
        }
    }
    return sum;
}

console.log(getSumOfArrayElements(list));