const unitTest = require('./unitTest.js');
const randomArrays = require('./generateRandomArrays.js')

// arr = [ 75, 21, 22, 98 ]
// const arr = randomArray()

function testSortingAlghoritm(arrayToSort){
    const result = JSON.stringify(quickSort(arrayToSort));
    // console.log(`My result: ${result}`);
    unitTest.assert(result === JSON.stringify([...arrayToSort].sort((a,b) => a-b)));
}



const testCases = randomArrays.getArraysToSort()
testCases.forEach(test => {
    unitTest.test(`${test} => ${[...test].sort((a,b) => a-b)}`, () => {testSortingAlghoritm(test)});
})


function quickSort(oldArray){
    const newArray = [...oldArray];
    partialSort(newArray, 0, newArray.length - 1, 'start');

    return newArray;
}


function partialSort(workingArray, startIndex, stopIndex){
  if (startIndex >= stopIndex) return;
  let left = startIndex;
  let pivotIndex = stopIndex;
  const pivot = workingArray[stopIndex];

  while (left < pivotIndex){
    if (workingArray[left] > pivot && pivotIndex > left + 1){
        changeItems(workingArray, pivotIndex, pivotIndex - 1);
        pivotIndex--;
        changeItems(workingArray, left, pivotIndex + 1);

    }
    else if (workingArray[left] > pivot && pivotIndex === left + 1){
        changeItems(workingArray, pivotIndex, left);
        pivotIndex--;
    }

    if (workingArray[left] <= pivot) left++;
  }

  partialSort(workingArray, startIndex, pivotIndex - 1);
  partialSort(workingArray, pivotIndex + 1, stopIndex);  

}

function randomArray(maximum = 15, min = 4){
    let size = Math.floor(Math.random() * maximum)
    if (size < min) size = min;
    ar = [];
    for (let i = 0; i < size; i++){
        ar.push(Math.round(Math.random() * 100));
    }
    return ar;
}

function changeItems(currentArray, index1, index2){
    const temporary = currentArray[index1];
    currentArray[index1] = currentArray[index2];
    currentArray[index2] = temporary;
}