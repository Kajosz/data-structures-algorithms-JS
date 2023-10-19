const myArray = randomArray();
const visuBox = document.getElementById('visu-box');

visuBox.appendChild(arrayComponent(myArray));

function arrayComponent(arr){
    const container = document.createElement('div');
    container.classList.add('array-container');
    let index = 0;
    arr.forEach(item => {
        const itemComponent = document.createElement('div');
        itemComponent.innerText = item;
        itemComponent.id = `array[${index}]`;
        itemComponent.classList.add('array-node');
        index++;
        container.appendChild(itemComponent);
    });
    return container;
}

console.log(quickSort(myArray));