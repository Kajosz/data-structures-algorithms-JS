// arr = [3,7,8,5,2,1,9,5,4]
// const arr = randomArray()
const arr = [
    76, 99,  4, 27, 88, 24,
    32, 74, 42, 54, 41, 39,
    21
  ]
// console.log(arr)
// process.exit()
let co = 0

console.log('START: ')
console.log(arr);
// process.exit()
console.log('\n')

partialSort(arr, 0, arr.length - 1, 'start');

console.log('\n')
console.log('KONIEC: ')
console.log(arr);

function quickSort(oldArray){
    const newArray = [...oldArray];
}


function partialSort(workingArray, startIndex, stopIndex, comment){
    // console.log(comment, startIndex, stopIndex)
    // co++
    // if (co == 18) process.exit()
    if (stopIndex == 0 || startIndex + 1 >= stopIndex || stopIndex < startIndex) return;

    let left = startIndex;
    let right = stopIndex - 1;
    const pivot = workingArray[stopIndex];
    console.log(workingArray, 'pivot:', pivot, '\n')

    // console.log('pivot: ', pivot)

    while (left < right){
        while (workingArray[left] < pivot && left < right){
            left++;
        }
        if (left > right) break;

        if (workingArray[left] > pivot){
            const oldLeft = workingArray[left];
            workingArray[left] = workingArray[right];
            workingArray[right] = pivot;
            workingArray[right + 1] = oldLeft;
            right--;
        }
     

    }
    // console.log(workingArray, right + 1, stopIndex);
    // console.log('\n')
    partialSort(workingArray, startIndex, right, 'left');
    partialSort(workingArray, right + 1, stopIndex, 'right');
}

function randomArray(maximum = 15, min = 4){
    let size = Math.floor(Math.random() * maximum)
    if (size < min) size = min;
    ar = [];
    console.log(size)
    for (let i = 0; i < size; i++){
        ar.push(Math.round(Math.random() * 100));
    }
    return ar;
}