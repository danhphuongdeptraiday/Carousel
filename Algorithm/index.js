
// Câu 1
let sumMatched = window.prompt("Enter positive number: ");
const array = [3, 4, 7, 1, 7];

//const findPairOfIndex = (array, sumMatched);

function findPairOfIndex(array, sumMatched){
    for(let i = 0; i < array.length; i++){
        for(let j = 1; j < array.length; j++){
            if(array[i] + array[j] == sumMatched){
                return [i, j];
            }
        }
    }
}
console.log(findPairOfIndex(array, sumMatched));

// Câu 2 
let inputNumber = window.prompt("Enter a positive number: ");
function checkSumOfDigitIsEven(num){
    let arr = new Array();
    let newArray = new Array();
    for(let i = 0; i < num; i++){
        arr.push(i+1);
    }
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        let remain = 0;
        let n = arr[i];
        while(arr[i] > 0){
            remain = arr[i] % 10;
            sum = sum + remain;
            arr[i] = Math.floor(arr[i] / 10);
        }
        if(sum % 2 == 0){
            count++;
        }  
    }
    return count;
}
console.log(checkSumOfDigitIsEven(inputNumber));
