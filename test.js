const LinkedList = require('./linkedList.js');

function it(description, fn){
    try{
        fn();
        console.log(`\x1b[32m ${description} \x1b[0m` );
    }
    catch (error){
        console.log(`\x1b[31m ${description} \x1b[0m` );
    }
}

function assert(isTrue){
    if (!isTrue){
        throw new Error();
    }
}

function creationWithValue(value){
    const list =  new LinkedList(value);
    assert(list.toArray().toString() === [value].toString())
}

function creationAndInsertion(values){
    const list = new LinkedList();
    values.forEach(val => {
        list.push(val);
    })
    assert(list.toArray().reverse().toString() === values.toString());
}

// it('with value 2', () => {creationWithValue(2)})
// it('with value 1', () => {creationWithValue(1)})
// it('with value 3', () => {creationWithValue(3)})

it('inserting [2,1,3,7]', () => {creationWithValue([2,1,3,7])});
it('inserting [4,2,0]', () => {creationWithValue([4,2,0])});
it('inserting [6,9]', () => {creationWithValue([6,9])});

