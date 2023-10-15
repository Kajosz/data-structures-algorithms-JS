const LinkedList = require('../linkedList.js');
const unitTest = require('../unitTest.js');


function testRomantToArabic(romanValue, arabicValue){
    unitTest.assert(romanToArabic(romanValue) == arabicValue)
}

const testCases = [
    ['II', 2],
    ['III', 3], 
    ['IV', 4], 
    ['V', 5], 
    ['XXIII', 23], 
    ['XXXV', 35],
    ['LXXXVII', 87],
    ['MMCXXXVII', 2137],
    ['LXIX', 69],
    ['CDXX', 420],
    ['XIV', 14]


]

testCases.forEach(test => {
    unitTest.test(`${test[0]} = ${test[1]}`, () => {testRomantToArabic(test[0], test[1])});
})

// romanToArabic('LXIX'); 

function getRomanMap(){
    romanMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    return romanMap;
}

function romanToArabic(value){

    if (!typeof value === 'string') return 0;
    if (value === '') return 0;

    const romanMap = getRomanMap();
    let index = 0;
    let result = 0;

    while (index < value.length){
      const current = romanMap.get(value.charAt(index));

      if ((index === 0 && value.length === 1) || index === value.length - 1){
        result += current;
        index++;
        continue;
      }

      if (decrement(index)){
        const increase = romanMap.get(value.charAt(index + 1)) - current;

        result += increase;
        index += 2;
        continue;
      }
      result += current;
      index++;
    }

    // console.log(`Obrabiam: ${value}, otrzymalem: ${result}`);
    return result;

    function decrement(index){
        if (value.charAt(index) === 'I' && value.charAt(index + 1) === 'X') return true; //special case
        const keys = Array.from(romanMap.keys());
        firstRomanIndex = keys.indexOf(value.charAt(index));
        secondRomanIndex = keys.indexOf(value.charAt(index + 1));
        return secondRomanIndex === firstRomanIndex + 1;

    }


}